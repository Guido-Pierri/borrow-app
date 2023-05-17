import clientPromise from '@/lib/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)

  if (req.method === 'POST') {
    const client = await clientPromise
    const db = client.db('borrow')
    const { id } = req.body
    const ads = await db.collection('ads').findOne({ id: id })
    res.status(200).json({ message: 'Update was successfull.', ads })
  }
}
