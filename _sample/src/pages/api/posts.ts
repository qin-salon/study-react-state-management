import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "src/types";
import { sleep } from "src/utils/sleep";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  await sleep(1500);
  res.status(200).json([
    { id: 1, title: "テスト記事タイトル1" },
    { id: 2, title: "テスト記事タイトル2" },
    { id: 3, title: "テスト記事タイトル3" },
  ]);
}
