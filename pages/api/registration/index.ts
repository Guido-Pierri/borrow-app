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

          // const result = await collection.insertOne({
          //   userId: userId,
          //   firstAndLastName: firstAndLastName,
          //   postCode: postCode,
          //   email: email,
          //   password: hash ,
          // })

          // res.json(result)
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
