import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { name, catchPhrase, duration, description, startTime, endTime, venue } = req.body;

    const result = await prisma.event.create({
      data: {
        name: name,
        catchPhrase : catchPhrase,
        duration: duration,
        description: description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        venue: venue,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
