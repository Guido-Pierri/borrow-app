import { ObjectId } from 'mongoose'

export type User = {
  _id: ObjectId
  userId: string
  firstAndLastName: string
  postCode: string
  email: string
  password: string
}
