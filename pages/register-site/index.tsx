import CloseIcon from '@/p-components/closeIcon'
import { User } from '@/types/user'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import hashning from '@/lib/functions/hashning'
import UploadImageAddProfileImage from '@/p-components/uploadImageAddProfileImage'

export default function MyPage() {
  const [imgUrl, setImgUrl] = useState('')

  const [confirmPassword, setConfirmedPassword] = useState<string>('')
  const [formData, setFormData] = useState<User>({
    userId: uuidv4(),
    firstAndLastName: '',
    postCode: '',
    email: '',
    password: '',
    profileImage: '',
  })

  console.log(hashning(formData.password))

  console.log(formData)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const apiData: User = {
      userId: formData.userId,
      firstAndLastName: formData.firstAndLastName,
      postCode: formData.postCode,
      email: formData.email,
      password: formData.password,
      profileImage: imgUrl,
    }

    const response = await fetch(`/api/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    })

    const data = await response.json()

    if (confirmYourPassword() && data === 'New User') {
      window.location.href = '/login'
    } else {
      console.log(JSON.parse(JSON.stringify(data)))
      alert('Det finns redan en användare med samma epost!')
      return false
    }
  }

  function confirmYourPassword() {
    if (formData.password !== confirmPassword) {
      alert('Lösenordet matchar inte!')
      return false
    } else {
      return true
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }
  return (
    <>
      <div className="bg-[#FFFFFF] text-center max-w-sm h-screen ">
        <form className="font-sans bg-[#FFFFFF]" onSubmit={handleSubmit}>
          <div className="mt-8  mr-12 flex flex-row-reverse justify-between ">
            <CloseIcon></CloseIcon>

            <h1
              className="text-xl pl-10 font-[700] text-black flex justify-start"
              style={{ marginBottom: '1rem' }}
            >
              Registrera
            </h1>
          </div>
          <div>
            <legend className="mb-[-32px]">
              <div>
                <UploadImageAddProfileImage setImageUrl={setImgUrl} />
              </div>
            </legend>
          </div>
          <label>
            <legend className="mb-[-2px] mt-5 ml-11 text-left">
              För - och efternamn
            </legend>
            <input
              className="rounded py-4 px-2 mt-800 border w-[298px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              type="text"
              name="firstAndLastName"
              value={formData.firstAndLastName}
              required
              onChange={handleInputChange}
              style={{ color: '#000000' }}
            />
          </label>

          <label>
            <legend className="mb-[-32px] mt-5 text-left ml-11">
              Postnummer
            </legend>
            <input
              className="rounded py-4 px-2 mt-8 border w-[298px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleInputChange}
              style={{ color: '#000000' }}
              required
            />
          </label>
          <label>
            <legend className="mb-[-32px] mt-5 text-left ml-11">E-post</legend>
            <input
              className="rounded py-4 px-2 mt-8 border w-[298px]  outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              style={{ color: '#000000' }}
            />
          </label>
          <label>
            <legend className="mb-[-32px] mt-5 text-left ml-11">
              Lösenord
            </legend>
            <input
              className="rounded py-4 px-2 mt-8 border w-[298px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              type="password"
              name="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
              minLength={8}
              value={formData.password}
              onChange={handleInputChange}
              style={{ color: '#000000' }}
            />
          </label>
          <label>
            <legend className="mb-[-32px] mt-5 text-left ml-11">
              Bekräfta lösenord
            </legend>
            <input
              className="rounded py-4 px-2 mt-8 border w-[298px] outline-[#9EBB9D] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
              minLength={8}
              onChange={(event) => {
                handleInputChange(event)
                setConfirmedPassword(event.target.value)
              }}
              style={{ color: '#000000' }}
            />
          </label>

          <br />
          <label className="flex flex-row-reverse justify-end ml-9 ">
            <legend className=" text-sm mt-7 ml-1 text-black">
              Jag godkänner alla...
            </legend>
            <input
              className="mt-8 border ml-2 mb-2 rounded  accent-[#9EBB9D]"
              type="checkbox"
              required
              title="Du måste godkänna vilkoren!"
              name=""
            />
          </label>

          <div className="bg-[#ffffff] ">
            <button
              className="
           rounded-sm text-[17px] text-black border-[#9EBB9D]  bg-[#9EBB9D] border w-[298px]  py-3
    "
              type="submit"
            >
              Registrera
            </button>
            <p className="mt-2 text-left ml-11 text-sm text-black">
              Har du redan ett konto?{' '}
              <Link href={'/login'}>
                <span className="text-black font-medium underline text-md">
                  Logga in
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}
