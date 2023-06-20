import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { LogIn } from '@/types/logIns'
import { MyContext } from '@/contexts/my-context-provider'
import router from 'next/router'
import { signIn } from 'next-auth/react'

export default function Login() {
  const {
    firstAndLastName,
    isLoggedIn,
    _id,
    setFirstAndLastName,
    setIsLoggedIn,
    set_id,
  } = useContext(MyContext)
  const [formData, setFormData] = useState<LogIn>({
    email: '',
    password: '',
  })

  console.log(formData)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    //   event.preventDefault()
    //   console.log('in i handlesubmit')

    //   const apiData: LogIn = {
    //     email: formData.email,
    //     password: formData.password,
    //   }

    //   const response = await fetch('/api/user', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(apiData),
    //   })

    //   const data = await response.json()

    //   console.log('response from api', response)
    //   console.log('data:', data)
    //   set_id(data)
    //   console.log('_id', data)

    //   if (response.ok) {
    //     console.log('inside if-statement')
    //     console.log('_id', data)

    //     const userData = await fetch(`api/user/${data}`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(data),
    //     })

    //     const data2 = await userData.json()
    //     console.log('data2', data2)

    //     setFirstAndLastName(data2.result.firstAndLastName)
    //     console.log(
    //       'data2.result.firstAndLastName',
    //       data2.result.firstAndLastName
    //     )

    //     setIsLoggedIn(true)
    //     console.log(isLoggedIn)

    //     // window.location.href = `/ads/${data}`
    //     router.push(`/ads/${data}`)
    //   } else {
    //     alert('Inloggning misslyckades')
    //   }
    //   console.log(response)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }

  // useEffect(() => {
  console.log('Updated state variables:')
  console.log('username:', firstAndLastName)
  console.log('isLoggedIn:', isLoggedIn)
  console.log('_id:', _id)
  // }, [username, isLoggedIn, _id])

  useEffect(() => {
    console.log('Updated _id:', _id)
  }, [_id])

  useEffect(() => {
    console.log('Updated username:', firstAndLastName)
  }, [firstAndLastName])

  return (
    <div className="w-full flex items-start justify-center text-center bg-[#FFFFFF] h-screen font-sans">
      <div>
        <div className="py-8">
          <h1 className="text-xl font-[500] text-black">
            Välkommen till Borrow!
          </h1>
          <p className="text-xl text-black">Börja med att logga in</p>
        </div>
        <div>
          <button
            className="rounded py-2 px-6 border w-[265px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            onClick={() => signIn('google', { callbackUrl: '/ads' })}
          >
            <div className="flex justify-between items-center">
              <img src="/Google__G__Logo 1.svg" />
              <p> Fortsätt med Google </p>
            </div>
          </button>
          <button
            className="rounded py-2 px-6 border mt-8 w-[265px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            onClick={() => signIn('facebook', { callbackUrl: '/ads' })}
          >
            <div className="flex justify-between items-center">
              <img src="/facebook logo 1.svg" />
              <p> Fortsätt med Facebook </p>
            </div>
          </button>
        </div>
        <div className="mt-8">
          <p>eller fortsätt med</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Användarnamn"
            type="text"
            name="username"
            // pattern="^[A-Za-z0-9+_.-]+@(.+)$"
            required
            // minLength={10}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password"></label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Lösenord..."
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="py-12">
            <button
              className=" 
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
    "
              type="submit"
            >
              Logga in
            </button>
            <p className="mt-20 text-sm text-black">
              Har du inget konto än?{' '}
              <Link href={'/register-site'}>
                <span className="text-[#0074B6] font-medium underline text-md">
                  Registrera dig här
                </span>
              </Link>
            </p>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}
