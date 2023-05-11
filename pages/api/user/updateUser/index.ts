import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
const bcrypt = require('bcryptjs')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise
  const database = client.db('borrow')
  const collection = database.collection('users')
  const { _id, userId, firstAndLastName, postCode, email, password } = req.body
  const objectId = new ObjectId(_id)

  const saltRounds = 10
  const plainTextPassword = password
  bcrypt.hash(plainTextPassword, saltRounds).then(async (hash: any) => {
    console.log(`Hash: ${hash}`)
    const result = await collection
      .updateOne(
        { _id: objectId },
        {
          $set: {
            // image: image,
            firstAndLastName: firstAndLastName,
            email: email,
            postCode: postCode,
            password: hash,
          },
        }
      )
      .catch((err: { message: any }) => console.log(err.message))

    res.status(200).json(result)
  })
}
