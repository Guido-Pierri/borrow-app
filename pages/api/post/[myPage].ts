// import { NextApiRequest, NextApiResponse } from "next"
import { title } from "process"
import clientPromise from "../../../lib/mongodb"
// import MyPage from "@/p-components/createAd"
/*import Formdata from "../myPage"
import MyPage from "../myPage"*/
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   // what to do here?
//   console.log(req.body)
//   const data = req.body
//   res.json({
//     status: "success",
//     userCreateAd: data,
//   })
// }

type Formdata = {
  title: string
  description: string
  fullName: string
  email: string
}

export default async (req: any, res: any) => {
  const {
    query: { myPage },
  } = req

  /*myPage.title
  myPage.description
  myPage.fullName
  myPage.email*/
  /*const { title } = req.body.title
  const { description } = req.body.description
  const { fullName } = req.body.fullName
  const { email } = req.body.email*/
  try {
    console.log(req.body)
    const client = await clientPromise
    const db = client.db("borrow")

    const users = await db.collection("users").insertMany([
      {
        title: myPage.title,
        description: myPage.description,
        fullName: myPage.fullName,
        email: myPage.email,
      },
    ])

    console.log(myPage.title)

    res.json(users)
  } catch (e) {
    console.error(e)
  }
}
