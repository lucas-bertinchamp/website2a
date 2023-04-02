import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { answer } = req.body;

  const deleteAnswer = await prisma.answer.delete({
    where: {
      id: answer.id,
    },
  });

  res.json(deleteAnswer);
}
