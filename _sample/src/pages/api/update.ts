import { NextApiRequest, NextApiResponse } from "next";
import { User } from "src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(req.body);
}
