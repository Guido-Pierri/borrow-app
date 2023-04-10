import clientPromise from "../../lib/mongodb"

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise
    const db = client.db("borrow")

    const ads = await db.collection("products").find({}).toArray()

    res.json(ads)
  } catch (e) {
    console.error(e)
  }
}
