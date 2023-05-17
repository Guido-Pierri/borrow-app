import { FC } from 'react'
import { User } from '@/types/user'
import AdviewOverlayContent from './adViewOverlayContent'

interface OverlayProps {
  onClose: () => void
  //   user: User
  userId: any
  adId: string
}

const AdviewOverlay: FC<OverlayProps> = ({ onClose, userId, adId }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <AdviewOverlayContent adId={adId} onClose={onClose} />
      </div>
    </div>
  )
}

export default AdviewOverlay
