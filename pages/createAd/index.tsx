import React, { useState } from 'react'
import Head from 'next/head'
import Upload from '@/p-components/upload'
import CreateAd from '@/p-components/createAd'
import Header from '@/p-components/header'

const App = () => {
  const [imageUrl, setImageUrl] = useState('')

  const handleSetImageUrl = (url: React.SetStateAction<string>) => {
    setImageUrl(url)
  }

  return (
    
    <div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
        <Header></Header>
        <CreateAd imageUrl={imageUrl} />
      </div>
    </div>
  )
}

export default App
