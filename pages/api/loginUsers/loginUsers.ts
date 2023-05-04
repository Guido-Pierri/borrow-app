import clientPromise from '@/lib/mongodb'
import { Collection } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { useState } from 'react'

interface FormValues {
  email: string
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  const { email, password } = req.body as FormValues
  const client = await clientPromise
  const database = client.db('borrow')
  const collection = database.collection('userLogin')
  try {
    console.log(req.body)

    const userId = uuidv4()
    const haschedPassword = await bcrypt.hash(password, 10)
    const result = await collection.insertOne({
      userId,
      email,
      haschedPassword,
    })

    // res.json(haschedPassword)
    // res.json(result)
    res.status(201).json({ message: 'User at login was created successfully.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error occurred.' })
  }
}
