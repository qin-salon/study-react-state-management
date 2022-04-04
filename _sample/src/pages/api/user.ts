import { NextApiRequest, NextApiResponse } from "next";
import { User } from "src/types";
import { sleep } from "src/utils/sleep";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User>
) {
  await sleep(500);
  res.status(200).json({
    name: "しまぶー",
    imageId: "shimabu",
  });
}
