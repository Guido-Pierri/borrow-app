import clientPromise from "../../lib/mongodb"

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise
    const db = client.db("borrow")

    const users = await db.collection("users").find({}).toArray()

    res.json(users)
  } catch (e) {
    console.error(e)
  }
}
