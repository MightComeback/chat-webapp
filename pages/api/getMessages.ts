import client from "../../lib/prismadb";
import { Message } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

type Data = {
  messages: Message[];
};

type ErrorData = {
  body: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ body: "You must be logged in." });
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ body: 'Method Not Allowed'});
    return;
  }

  const messageList = await client.message.findMany();
  const messages: Message[] = messageList.map((msg) => msg);

  console.log(messages);

  res.status(200).json({ messages })
}
