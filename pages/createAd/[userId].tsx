import React, { useState } from 'react'
import Upload from '@/p-components/upload'
import CreateAd from '@/p-components/createAd'
import Header from '@/p-components/header'
import { useRouter } from 'next/router'
import CloseIcon from '@/p-components/closeIcon'

const App = () => {
  const [imageUrl, setImageUrl] = useState('')

  const router = useRouter()

  const { userId } = router.query

  // const handleSetImageUrl = (url: React.SetStateAction<string>) => {
  //   setImageUrl(url)
  // }

  return (
    <div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
        <div className="flex">
          <Header></Header>
          <div className="mt-16 ml-8">
            <CloseIcon adress={'/ads/' + `${userId}`}></CloseIcon>
          </div>
        </div>
        <CreateAd userId={userId} imageUrl={imageUrl} />
      </div>
    </div>
  )
}

export default App
