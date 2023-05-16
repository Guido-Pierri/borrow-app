import React, { useState } from "react"
import CreateAd from "@/p-components/createAd"
import { useRouter } from "next/router"
import CloseIcon from "@/p-components/closeIcon"

const App = () => {
  const [imageUrl, setImageUrl] = useState("")

  const router = useRouter()

  const { userId } = router.query

  return (
    <div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
        <div className="">
          <div className="mt-6 mr-4 flex justify-end ">
            <CloseIcon />
          </div>
        </div>
        <CreateAd userId={userId} imageUrl={imageUrl} />
      </div>
    </div>
  )
}

export default App
