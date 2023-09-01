import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.SERVICE_ACC,
      key: process.env.API_KEY,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });
    const doc = new GoogleSpreadsheet(
      process.env[req.body.eventName.toUpperCase().replace(/ /g, "_")],
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

    const result = await sheet.addRow({
      "Team Name": req.body.teamName,
      Name: req.body.name,
      Email: req.body.email,
      "Phone No": req.body.phoneNo,
      Institution: req.body.institution,
      Year: req.body.year,
      Department: req.body.department,
      "Reg No": req.body.regNo,
      Timestamp: new Date().toLocaleString(),
    });

    if (result) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(500).json({ error: "Failed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
