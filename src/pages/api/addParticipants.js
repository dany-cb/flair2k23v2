import prisma from "@/lib/prisma";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  try {
    const formDetails = req.body;

    const team = await prisma.team.create({
      data: {
        name: formDetails.teamName,
      },
    });

    if (!team) {
      return res
        .status(400)
        .json({ message: "Something went wrong while creating team." });
    }

    const participants = await prisma.participant.createMany({
      data: formDetails.members.map((member) => ({
        name: member.name,
        email: member.email,
        phoneNo: member.phoneNo,
        institution: member.institution,
        year: member.year,
        department: member.department,
        regNo: member.regNo,
        teamId: team.id,
        eventName: formDetails.eventName,
      })),
    });

    if (!participants) {
      return res
        .status(400)
        .json({ message: "Something went wrong while adding participants." });
    }

    const serviceAccountAuth = new JWT({
      email: process.env.SERVICE_ACC,
      key: process.env.API_KEY,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });
    const doc = new GoogleSpreadsheet(
      process.env[formDetails.eventName.toUpperCase().replace(/ /g, "_")],
      serviceAccountAuth
    );

    await doc.loadInfo(); // loads document properties and worksheets
    await doc.updateProperties({ title: `${req.body.eventName} - Responses` });

    const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`

    sheet.setHeaderRow([
      "Team Name",
      "Name",
      "Email",
      "Phone No",
      "Institution",
      "Year",
      "Department",
      "Reg No",
      "Timestamp",
    ]);

    for (let index = 0; index < participants.count; index++) {
      try {
        const sheetResult = await sheet.addRow({
          "Team Name": formDetails.teamName,
          Name: formDetails.members[index].name,
          Email: formDetails.members[index].email,
          "Phone No": formDetails.members[index].phoneNo,
          Institution: formDetails.members[index].institution,
          Year: formDetails.members[index].year,
          Department: formDetails.members[index].department,
          "Reg No": formDetails.members[index].regNo,
          Timestamp: new Date().toLocaleString(),
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }

    const result = {
      teamId: team.id,
      teamName: team.name,
      members: participants,
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
