import clientPromise from '@/lib/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  try {
    //Kod som ska användas senare
    // if (req.method === 'PATCH') {
    //   const { id, title, description, email, publisher } = req.body
    //   const client = await clientPromise
    //   const database = client.db('borrow')
    //   const collection = database.collection('board')
    //   console.log(req.body)
    //   console.log(id)
    //   const result = await collection.updateOne(
    //     { id: id },
    //     {
    //       $set: {
    //         title: title,
    //         description: description,
    //         email: email,
    //         publisher: publisher,
    //       },
    //     }
    //   )

    //   res.status(201).json({ message: 'Update was successfull.', result })
    // }
    if (req.method === 'POST') {
      console.log(req.body)
      const {
        id,
        title,
        description,
        email,
        publisher,
        publisherProfileImage,
        publisherName,
      } = req.body
      const client = await clientPromise
      const database = client.db('borrow')
      const collection = database.collection('board')

      const result = await collection.insertOne({
        id: id,
        title: title,
        description: description,
        email: email,
        publisher: publisher,
        publisherProfileImage: publisherProfileImage,
        publisherName: publisherName,
      })

      res.status(201).json({ message: 'BoardAd created successfully.', result })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error occurred.' })
  }
}
