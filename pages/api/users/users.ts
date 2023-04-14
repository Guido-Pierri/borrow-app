import clientPromise from "@/lib/mongodb"
import { Collection } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"
interface FormValues {
  name: string
  email: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  const { name, email } = req.body as FormValues
  const client = await clientPromise
  const database = client.db("borrow")
  const collection = database.collection("users")
  try {
    console.log(req.body)
    // const name = req.body.name
    // const email = req.body.email
    const result = await collection.insertOne(req.body)

    // res.json(result)
    res.status(201).json({ message: "User created successfully." })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "An error occurred." })
  }
}
