import hashning from '@/lib/functions/hashning'
import clientPromise from '@/lib/mongodb'
import { LogIn } from '@/types/logIns'
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
      case 'GET': {
        const { _id, userId, firstAndLastName, postCode, email, password } =
          req.body
        const objectId = new ObjectId(userId)
        const result = await collection.findOne({ _id: _id })
        res.status(200).json(result)

        // updateOne(
        //   { _id: _id },
        //   {
        //     $set: {
        //       // image: image,
        //       firstAndLastName: firstAndLastName,
        //       email: email,
        //       postCode: postCode,
        //       password: hashning(password),
        //     },
        //   }
        // )

        // res.json(result)
        // res.status(201).json({ message: 'Update was successfull.', result })
        break
      }
      default: {
        // Return a 405 Method Not Allowed error for all other HTTP methods
        res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'PUT'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        break
      }
    }
  } catch (error) {
    throw new Error('Something went wrong ' + error)
  }
}
