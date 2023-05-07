import { FC } from 'react'
import NotificationsContent from './notificationsContent'

interface OverlayProps {
  onClose: () => void
}

const notificationsOverlay: FC<OverlayProps> = ({ onClose }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <NotificationsContent onClose={onClose} />
      </div>
    </div>
  )
}

export default notificationsOverlay
