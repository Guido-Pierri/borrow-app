import { FC } from 'react'
import ImageCamera from './imageCamera'
import ImagePencil from './imagePencil'
import router from 'next/router'

interface OverlayProps {
  onClose: () => void
  userId: any
}

const overlayButtonCreateAd: FC<OverlayProps> = ({ onClose, userId }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }
  const handleCreateAdClick = (event: any) => {
    if (event === 'ad') {
      router.push(`/createAd/${userId}`)
    } else {
      router.push(`/createAdBoard/${userId}`)
    }
  }
  return (
    <div className="overlay w-[35%]" onClick={onClose}>
      <div onClick={handleContentClick}>
        <div className="flex flex-col buttonCreateOverlay ">
          <div
            className="flex  items-center  clickable "
            onClick={() => handleCreateAdClick('board')}
          >
            <button className="border-[3px] rounded-sm border-[#9EBB9D]  px-[5%] py-[2%] mr-[4%]  bg-white text-xs font-bold">
              Skapa ett inlägg
            </button>
            <button className="imageButton w-[80%]">
              <ImagePencil />
            </button>
          </div>
          <div
            className="flex items-center mt-[7.5%] clickable"
            onClick={() => handleCreateAdClick('ad')}
          >
            <button className="border-[3px] border-[#9EBB9D] rounded-sm px-[5%] py-[2%] mr-[4%]  bg-white text-xs font-bold">
              Skapa en annons
            </button>
            <button className="imageButton  w-[80%]">
              <ImageCamera />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default overlayButtonCreateAd
