import { User } from '@/types/user'
import { ObjectId } from 'mongodb'
import mongoose, { Schema } from 'mongoose'
const userSchema = new Schema<User>(
  {
    // _id: {
    //   type: Schema.Types.ObjectId,
    // },
    userId: {
      type: String,
      required: true,
    },
    firstAndLastName: {
      type: String,
      required: true,
    },

    postCode: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    profileImage: {
      type: String,
      required: true,
    },
    username: {
      // NEW
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)
// userSchema.methods.fullName = function () {
//   return `${this.name.first} ${this.name.last}`
// }
export const UserModel =
  mongoose.models.UserModel ||
  mongoose.model<User>('UserModel', userSchema, 'users')
