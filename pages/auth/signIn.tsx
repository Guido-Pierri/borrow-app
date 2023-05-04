import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import router from 'next/router'
import { useState } from 'react'
interface Props {}
const SignIn: NextPage<Props> = ({}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      email,
      password,
      callbackUrl: '/ads',
      redirect: false, // Prevents automatic redirection on success
    })
    console.log(result)

    if (result === undefined) {
      return
    }
    if (result.error) {
      setError('Wrong credentials')
    } else {
      router.push('/ads')
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
export default SignIn
