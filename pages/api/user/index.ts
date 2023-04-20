import clientPromise from '@/lib/mongodb'
import { User } from '@/types/user'
import { request } from 'http'
import { connect } from 'http2'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = (await clientPromise).db
    switch (req.method) {
      case 'GET': {
        // Get all users from the database

        const client = await clientPromise
        const database = client.db('borrow')
        const collection = database.collection('users')
        const users = await collection.find().toArray()
        const convertedUsers: User[] = users.map((userDoc) => {
          //what does this code do?
          return {
            name: userDoc.name as string,
            password: userDoc.password as string,
            email: userDoc.email as string,
            age: userDoc.age as number,
            userId: userDoc.userid as string,
          }
        })
        if (convertedUsers.length === 0) {
          console.log('PRETTY EMPTY DUDE')
          res.status(200).json('EMPTY')
        } else {
          res.status(200).json(convertedUsers)
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
