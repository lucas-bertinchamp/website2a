import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { question, user } = req.body;

  let userDB = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!userDB) {
    userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });
  }

  let result = await prisma.userLikesQuestion.findUnique({
    where: {
      userId_questionId: {
        userId: userDB.id,
        questionId: question.id,
      },
    },
  });

  if (result) {
    await prisma.userLikesQuestion.delete({
      where: {
        userId_questionId: {
          userId: userDB.id,
          questionId: question.id,
        },
      },
    });
  } else {
    await prisma.userLikesQuestion.create({
      data: {
        questionId: question.id,
        userId: userDB.id,
      },
    });
  }

  res.json();
}
