import prisma from "@/lib/prisma";

export default async function (req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { name, email, phoneNo, eventId } = req.body;

    const result = await prisma.organizer.create({
      data: {
        name: name,
        email: email,
        phoneNo: phoneNo,
        eventId: eventId,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
