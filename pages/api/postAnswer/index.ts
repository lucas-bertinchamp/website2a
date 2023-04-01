import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { text, user, question } = req.body;

  let authorId = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (!authorId) {
    const result = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });
    authorId = await prisma.user.findUnique({
      where: { email: user.email },
    });
  }

  const result = await prisma.answer.create({
    data: {
      questionId: question.id,
      content: text,
      authorId: authorId.id,
    },
  });
  res.json(result);
}
