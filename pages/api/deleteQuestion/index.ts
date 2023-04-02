import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { question } = req.body;

  const answers = await prisma.answer.findMany({
    where: {
      questionId: question.id,
    },
  });

  answers.forEach(async (answer) => {
    await prisma.answer.delete({
      where: {
        id: answer.id,
      },
    });
  });

  const likes = await prisma.userLikesQuestion.findMany({
    where: {
      questionId: question.id,
    },
  });

  likes.forEach(async (like) => {
    await prisma.userLikesQuestion.delete({
      where: {
        userId_questionId: {
          userId: like.userId,
          questionId: like.questionId,
        },
      },
    });
  });

  const deleteQuestion = await prisma.question.delete({
    where: {
      id: question.id,
    },
  });

  res.json(deleteQuestion);
}
