import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import router from 'next/router'
import { useState } from 'react'

interface Props {}

const SignIn: NextPage<Props> = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      username,
      password,
      callbackUrl: '/ads/',
      redirect: false, // Prevents automatic redirection on success
    })
    if (result === undefined) {
      return
    }

    if (result.error) {
      setError('Wrong credentials')
    } else {
      router.push(`/ads`)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
      <div>
        <button
          className=" border-2 border-[#9EBB9D] rounded"
          onClick={() => signIn('google')}
        >
          <div className="flex">
            <img src="/Google__G__Logo 1.svg" />
            Sign in with Google
          </div>
        </button>
      </div>
    </>
  )
}

export default SignIn
