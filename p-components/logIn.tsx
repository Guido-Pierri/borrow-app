import Link from 'next/link'
import { useState } from 'react'

import { LogIn } from '@/types/logIns'

export default function Login() {
  const [formData, setFormData] = useState<LogIn>({
    email: '',
    password: '',
  })

  console.log(formData)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('in i handlesubmit')

    const apiData: LogIn = {
      email: formData.email,
      password: formData.password,
    }

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    })

    const data = await response.json()

    console.log('response from api', response)
    console.log('data:', data)

    if (response.ok) {
      window.location.href = `/ads/${data}`
    } else {
      alert('Inloggning mysslyckades')
    }
    console.log(response)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }

  return (
    <div className="w-full flex items-start justify-center text-center bg-[#FFFFFF] h-screen font-sans">
      <div>
        <div className="py-8">
          <h1 className="text-xl font-[500] text-black">
            Välkommen till Borrow!
          </h1>
          <p className="text-xl text-black">
            Börja med att logga in
            {/* <Link href={"/register-site"}>
              <span className="text-[#46649D]">registrera dig</span>
            </Link> */}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="rounded py-4 px-7 mt-8 border w-[265px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              placeholder="E-post..."
              type="email"
              name="email"
              pattern="^[A-Za-z0-9+_.-]+@(.+)$"
              required
              minLength={10}
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
              className="rounded py-4 px-7 mt-8 border w-[265px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              placeholder="Lösenord..."
              type="password"
              name="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
              minLength={8}
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>

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
      </div>
    </div>
  )
}
