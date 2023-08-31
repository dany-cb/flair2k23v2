import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { formDetails } = req.body;

    const result = await prisma.participants.createMany();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
