import clientPromise from "@/lib/mongodb"
import e from "express"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise
  const database = client.db('borrow')
  const collection = database.collection('users')
  try {
    switch (req.method) {}
}catch{}