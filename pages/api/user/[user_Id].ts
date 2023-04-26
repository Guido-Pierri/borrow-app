import clientPromise from "@/lib/mongodb"
import { User } from "@/types/user"
import { ObjectId } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"
import { useRouter } from "next/router"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = (await clientPromise).db
    // interface ObjectId {
    //   _id:
    // }
    switch (req.method) {
      case "POST": {
        const { id } = req.body
        console.log(req.body)
        const client = await clientPromise
        const database = client.db("borrow")
        const collection = database.collection("users")

        try {
          console.log(req.body)

          const result = await collection.findOne({
            _id: new ObjectId(req.body),
          })

          if (result) {
            res.status(200).json({ message: "user", result })
          } else res.status(500).json({ message: "Error", result })
        } catch (error) {
          console.error(error)
          res.status(500).json({ message: "An error occurred." })
        }
        break
      }

      default: {
        // Return a 405 Method Not Allowed error for all other HTTP methods
        res.setHeader("Allow", ["GET", "POST"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        break
      }
    }
  } catch (error) {
    throw new Error("Something went wrong " + error)
  }
}
