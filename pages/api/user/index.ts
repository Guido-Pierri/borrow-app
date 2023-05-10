import clientPromise from '@/lib/mongodb'
import { LogIn } from '@/types/logIns'
import { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'POST': {
        console.log(req.body)
        const { email, password } = req.body as LogIn
        const client = await clientPromise
        const database = client.db('borrow')
        const collection = database.collection('users')
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
            } else res.status(500)
          })
          .catch((err: { message: any }) => console.error(err.message))
        if (user) {
          res.status(200).json(user._id)
        } else {
          res.status(404).json({ message: 'user not found' })
        }

        break
      }

      default: {
        // Return a 405 Method Not Allowed error for all other HTTP methods
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        break
      }
    }
  } catch (error) {
    throw new Error('Something went wrong ' + error)
  }
}
