import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
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
      process.env.SPREADSHEET_ID,
      serviceAccountAuth
    );

    await doc.loadInfo(); // loads document properties and worksheets
    await doc.updateProperties({ title: "Symposium" });

    const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
    sheet.setHeaderRow([
      "Name",
      "Email",
      "Phone",
      "College",
      "Year",
      "Branch",
      "City",
      "State",
      "Timestamp",
    ]);

    const result = await sheet.addRow({
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      College: req.body.college,
      Year: req.body.year,
      Branch: req.body.branch,
      City: req.body.city,
      State: req.body.state,
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
