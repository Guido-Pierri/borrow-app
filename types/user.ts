import { ObjectId } from 'mongodb'
import { Types } from 'mongoose'
export type User = {
  _id?: Types.ObjectId | string
  userId: string
  firstAndLastName: string
  postCode: string
  email: string
  profileImage?: string
  username: string
  password: string
}
