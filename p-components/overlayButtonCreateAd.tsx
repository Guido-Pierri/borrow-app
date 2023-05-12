import { FC } from 'react'
import NotificationsContent from './notificationsContent'
import ImageCamera from './imageCamera'
import ImagePencil from './imagePencil'
import notificationsOverlay from './notificationsOverlay'
import router from 'next/router'
import e from 'express'

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
        <div
          className="flex flex-col bottom-[15%] right-[7.7%]"
          style={{ position: 'fixed' }}
        >
          <div
            className="flex items-center clickable "
            onClick={() => handleCreateAdClick('board')}
          >
            <button className="border-[3px] border-[#9EBB9D]  px-[5%] py-[2%] mr-[4%] bg-white text-xs font-bold">
              Skapa ett inlägg
            </button>
            <ImagePencil />
          </div>
          <div
            className="flex items-center mt-[7.5%] clickable"
            onClick={() => handleCreateAdClick('ad')}
          >
            <button className="border-[3px] border-[#9EBB9D]  px-[5%] py-[2%] mr-[4%] bg-white text-xs font-bold">
              Skapa en annons
            </button>
            <button>
              <ImageCamera />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default overlayButtonCreateAd
