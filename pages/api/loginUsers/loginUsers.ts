import clientPromise from "@/lib/mongodb"
import { Collection } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

interface FormValues {
  email: string
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  const { email, password } = req.body as FormValues
  const client = await clientPromise
  const database = client.db("borrow")
  const collection = database.collection("userLogin")
  try {
    console.log(req.body)
    // const email = req.body.email
    // const password = req.body.password
    const result = await collection.insertOne(req.body)

    // res.json(result)
    res.status(201).json({ message: "User at login was created successfully." })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "An error occurred." })
  }
}
