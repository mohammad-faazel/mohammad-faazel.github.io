// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch(
        "https://dev.to/api/articles?tag=wordpress&per_page=100"
    );
    const articles = await response.json();
    res.status(200).json(articles.length || 0);
}
