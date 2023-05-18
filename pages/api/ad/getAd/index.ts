import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)

  if (req.method === 'POST') {
    const client = await clientPromise
    const db = client.db('borrow')
    const { _id } = req.body
    const ad = await db
      .collection('ads')
      .find({ _id: new ObjectId(req.body) })
      .toArray()
    if (ad) {
      res.status(200).json({ message: 'Update was successful.', ad }) // Return the ad object
    } else {
      res.status(404).json({ message: 'Ad not found.' }) // Return a 404 response if ad is not found
    }
  }
}
