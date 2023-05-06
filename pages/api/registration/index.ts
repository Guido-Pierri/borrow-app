import hashning from '@/lib/functions/hashning'
import clientPromise from '@/lib/mongodb'
import { User } from '@/types/user'
import { hash } from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise
    const database = client.db('borrow')
    const collection = database.collection('users')
    switch (req.method) {
      case 'POST': {
        console.log(req.body)
        const { userId, firstAndLastName, postCode, email, password } =
          req.body as User

        try {
          console.log(req.body)
          // const name = req.body.name
          // const email = req.body.email
          const user = await collection.findOne({ email: email })
          if (user) {
            res
              .status(409)
              .json({ message: 'User already exists, use another email' })
          } else {
            const bcrypt = require('bcryptjs')
            const saltRounds = 10
            const plainTextPassword = password
            bcrypt
              .hash(plainTextPassword, saltRounds)
              .then(async (hash: any) => {
                console.log(`Hash: ${hash}`)
                const result = await collection.insertOne({
                  userId: userId,
                  firstAndLastName: firstAndLastName,
                  postCode: postCode,
                  email: email,
                  password: hash,
                })
                if (result) {
                  res.status(200).json('New User')
                } else
                  res
                    .status(500)
                    .json({ message: 'Wrong password.', result, hash })
              })

              .catch((err: { message: any }) => console.log(err.message))
          }
        } catch (error) {
          console.error(error)
          res.status(500).json({ message: 'An error occurred.' })
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
