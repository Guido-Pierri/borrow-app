import '@/styles/globals.css'
import '@/styles/burger.css'
import '@/styles/overlay.css'

import type { AppProps } from 'next/app'
import { useState } from 'react'
import MyContextProvider, { MyContext } from '@/contexts/my-context-provider'

// const righteous = Righteous({
//   subsets: ["latin"],
//   weight: "400",
// })

export default function App({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState('')
  const [_id, set_id] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <MyContextProvider>
      <MyContext.Provider
        value={{
          _id,
          username,
          isLoggedIn,
          set_id,
          setUsername,
          setIsLoggedIn,
        }}
      >
        <Component {...pageProps} />
      </MyContext.Provider>
    </MyContextProvider>
  )
}
