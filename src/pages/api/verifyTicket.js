import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { ticketId } = req.body;

    const result = await prisma.participant.findUnique({
      where: {
        id: ticketId,
      },
      select: {
        id: true,
        name: true,
        department: true,
        institution: true,
      },
    });
    if (!result) {
      return res.status(400).json({ message: "Invalid Ticket ID" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
