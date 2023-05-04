import { ObjectId } from 'mongoose'

export type User = {
  firstName: string
  _id: ObjectId
  userId: string
  lastName: string
  adress: string
  email: string
  mobileNumber: string
  password: string
}
