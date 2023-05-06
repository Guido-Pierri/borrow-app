export default function hashning(password: string) {
  //   const crypto = require('crypto')
  //   const salt = crypto.randomBytes(16).toString('hex')
  //   const hash = crypto
  //     .createHash('sha256')
  //     .update(salt + password)
  //     .digest('hex')

  const bcrypt = require('bcryptjs')
  const saltRounds = 10
  const plainTextPassword = password
  bcrypt
    .hash(plainTextPassword, saltRounds)
    .then((hash: any) => {
      console.log(`Hash: ${hash}`)
      return hash
    })
    .catch((err: { message: any }) => console.log(err.message))
}
