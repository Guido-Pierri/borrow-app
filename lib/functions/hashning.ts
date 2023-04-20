export default function hashning(password: string) {
  const crypto = require('crypto')
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .createHash('sha256')
    .update(salt + password)
    .digest('hex')
}
