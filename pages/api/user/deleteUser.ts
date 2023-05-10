import clientPromise from '@/lib/mongodb'
import { UserId } from '@/types/userId'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise
  const database = client.db('borrow')
  const collection = database.collection('users')
  try {
    switch (req.method) {
      case 'POST': {
        const { userId } = req.body as UserId
        const objectId = new ObjectId(userId)
        const result = await collection.findOne(objectId)
        res.json({ result: [{ result }, { req: objectId }] })
        break
      }
    }
  } catch {}
}
