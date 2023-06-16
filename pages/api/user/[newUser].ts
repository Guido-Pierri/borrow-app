import { UserModel } from '@/schemas/userSchema'
import { User } from '@/types/user'
import { connectToDatabase } from '@/utils/db'
import { Document, ObjectId, Types } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { parse } from 'path'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | object | string>
) {
  const newUser = req.body

  if (!newUser) {
    res.status(400).json({ 'message:': 'New user is not defined' })
    return
  }

  if (req.method === 'POST') {
    try {
      const user: User = newUser as User

      if (
        Object.entries(user).some(([key, value]) => key !== '_id' && !value)
      ) {
        res.status(400).json({ message: 'Invalid user data' })
        return
      }

      await connectToDatabase()
      const userDoc: Document = new UserModel(user)
      await userDoc.save()

      res.status(200).json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).send({ message: `Method ${req.method} Not Allowed` })
  }
}
