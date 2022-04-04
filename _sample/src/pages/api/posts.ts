import { NextApiRequest, NextApiResponse } from "next";

export type Post = {
  id: number;
  title: string;
};

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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
