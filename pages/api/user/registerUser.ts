import hashning from '@/lib/functions/hashning'
import clientPromise from '@/lib/mongodb'
import { User } from '@/types/user'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = (await clientPromise).db
    switch (req.method) {
      case 'POST': {
        console.log(req.body)
        const {
          userId,
          firstName,
          lastName,
          adress,
          email,
          mobileNumber,
          password,
        } = req.body as User
        const client = await clientPromise
        const database = client.db('borrow')
        const collection = database.collection('users')
        hashning(password)
        // const crypto = require("crypto")

        // // Generate a random salt
        // const salt = 1010

        // // The password to be hashed

        // // Create a hash using SHA-256 with the salt
        // const hash = crypto
        //   .createHash("sha256")
        //   .update(salt + password)
        //   .digest("hex")

        // console.log("Salt:", salt)
        // console.log("Hash:", hash)

        try {
          console.log(req.body)
          // const name = req.body.name
          // const email = req.body.email
          const result = await collection.insertOne(req.body)

          // res.json(result)
          if (result) {
            res.status(200).json('New User')
          } else
            res
              .status(500)
              .json({ message: 'Wrong password.', result, hashning })
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
