import hashning from '@/lib/functions/hashning'
import clientPromise from '@/lib/mongodb'
import { LogIn } from '@/types/logIns'
import { User } from '@/types/user'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { Result } from 'postcss'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'

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
        console.log(req.body)
        const { email, password } = req.body as LogIn
        const user = await collection.findOne(
          { email: email },
          { projection: { password: 1 } }
        )
        const storedHash = user?.password

        const bcrypt = require('bcryptjs')
        const plainTextPassword = password
        const hash = storedHash
        bcrypt
          .compare(plainTextPassword, hash)
          .then((result: any) => {
            console.log(result)
            if (result) {
              res.status(200).json(user?._id)
            } else res.status(500).json(user)
          })
          .catch((err: { message: any }) => console.error(err.message))

        break
      }
      case 'DELETE': {
        const { ObjectId } = require('mongodb')
        const { _id } = req.body

        const objectId = new ObjectId(_id)
        const result = await collection.deleteOne({ _id: objectId })
        res.json({ deletedCount: result.deletedCount })

        break
      }
    }
  } catch (error) {
    throw new Error('Something went wrong ' + error)
  }
}
