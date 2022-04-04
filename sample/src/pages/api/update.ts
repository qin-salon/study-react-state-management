import { NextApiRequest, NextApiResponse } from "next";

export type User = {
  name: string;
  image: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(req.body);
}
