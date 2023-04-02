import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { user } = req.body;

  let userDB = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  return userDB;

  res.json();
}
