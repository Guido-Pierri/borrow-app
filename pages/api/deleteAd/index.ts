import clientPromise from '@/lib/mongodb'
import { Collection } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
// interface FormValues {
//   title: string
//   description: string
//   fullName: string
//   email: string
// }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  const { id } = req.body
  const client = await clientPromise
  const database = client.db('borrow')
  const collection = database.collection('ads')
  try {
    console.log(req.body)
    // const name = req.body.name
    // const email = req.body.email
    const result = await collection.deleteOne(req.body)

    // res.json(result)
    res.status(201).json({ message: 'Ad deleted successfully.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error occurred.' })
  }
}
