import clientPromise from '@/lib/mongodb'
import { UserId } from '@/types/userId'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise
  const database = client.db('borrow')
  const collection = database.collection('users')
  try {
    switch (req.method) {
      case 'DELETE': {
        const { userId } = req.query as UserId
        const objectId = new ObjectId(userId)
        const result = await collection.findOneAndDelete({ _id: objectId })
        res.json(result)
        break
      }
    }
  } catch {}
}
