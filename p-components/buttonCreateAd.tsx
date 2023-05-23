import { useState } from 'react'
import OverlayButtonCreateAd from './overlayButtonCreateAd'
import ImageCreateButton from './imageCreateButton'
interface Props {
  userId: any
}

const ButtonCreateAd = ({ userId }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const toggleOverlay = () => {
    setShowOverlay(true)
  }
  const handleCloseOverlay = () => {
    setShowOverlay(false)
  }
  return (
    <div>
      <div>
        <button
          className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] buttonCreate"
          onClick={toggleOverlay}
        >
          <ImageCreateButton />
        </button>
      </div>
      {showOverlay && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <OverlayButtonCreateAd onClose={handleCloseOverlay} userId={userId} />
        </div>
      )}
    </div>
  )
}

export default ButtonCreateAd
