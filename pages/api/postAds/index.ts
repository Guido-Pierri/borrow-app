import clientPromise from '@/lib/mongodb'
import { Collection } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
interface FormValues {
  title: string
  description: string
  fullName: string
  email: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  const { id, title, description, fullName, email } = req.body
  const client = await clientPromise
  const database = client.db('borrow')
  const collection = database.collection('ads')
  try {
    if (req.method === 'PATCH') {
      console.log(req.body)
      console.log(id)
      // const name = req.body.name
      // const email = req.body.email
      const result = await collection.updateOne(
        { id: id },
        {
          $set: {
            title: title,
            description: description,
            fullName: fullName,
            email: email,
          },
        }
      )

      // res.json(result)
      res.status(201).json({ message: 'Update was successfull.' })
    }
    if (req.method === 'POST') {
      console.log(req.body)
      // const name = req.body.name
      // const email = req.body.email
      const result = await collection.insertOne(req.body)

      res.json(result)

      res.status(201).json({ message: 'Ad created successfully.', result })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error occurred.' })
  }
}
