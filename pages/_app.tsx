import '@/styles/globals.css'
import '@/styles/burger.css'
import '@/styles/overlay.css'
import '@/styles/button.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import MyContextProvider, { MyContext } from '@/contexts/my-context-provider'
import { SessionProvider } from 'next-auth/react'
// const righteous = Righteous({
//   subsets: ["latin"],
//   weight: "400",
// })

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [_id, set_id] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const [firstAndLastName, setFirstAndLastName] = useState<string>('')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [postCode, setPostCode] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [profileImage, setProfileImage] = useState<string>('')

  return (
    <SessionProvider session={session}>
      <MyContextProvider>
        <MyContext.Provider
          value={{
            _id,
            userId,
            firstAndLastName,
            isLoggedIn,
            postCode,
            email,
            password,
            profileImage,
            set_id,
            setUserId,
            setFirstAndLastName,
            setIsLoggedIn,
            setPostCode,
            setEmail,
            setPassword,
            setProfileImage,
          }}
        >
          <Component {...pageProps} />
        </MyContext.Provider>
      </MyContextProvider>
    </SessionProvider>
  )
}
