import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../lib/mongodb"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // what to do here?
  console.log(req.body)
  const data = req.body
  res.json({
    status: "success",
    userCreateAd: data,
  })
}
