import clientPromise from "@/lib/mongodb"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)

  try {
    if (req.method === "PATCH") {
      const {
        image,
        id,
        title,
        description,
        fullName,
        email,
        publisher,
        publisherProfileImage,
      } = req.body
      const client = await clientPromise
      const database = client.db("borrow")
      const collection = database.collection("ads")
      console.log(req.body)
      console.log(id)
      const result = await collection.updateOne(
        { id: id },
        {
          $set: {
            image: image,
            title: title,
            description: description,
            fullName: fullName,
            email: email,
            publisher: publisher,
            publisherProfileImage: publisherProfileImage,
          },
        }
      )

      res.status(201).json({ message: "Update was successfull.", result })
    }
    if (req.method === "POST") {
      console.log(req.body)
      const {
        image,
        id,
        title,
        description,
        fullName,
        email,
        publisher,
        publisherProfileImage,
        category,
      } = req.body

      const client = await clientPromise
      const database = client.db("borrow")
      const collection = database.collection("ads")

      const result = await collection.insertOne({
        id: id,
        title: title,
        description: description,
        fullName: fullName,
        email: email,
        image: image,
        publisher: publisher,
        publisherProfileImage: publisherProfileImage,
        category: category,
      })

      res.status(201).json({ message: "Ad created successfully.", result })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "An error occurred." })
  }
}
