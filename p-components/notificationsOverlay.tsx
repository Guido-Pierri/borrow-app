import { FC } from 'react'
import NotificationsContent from './notificationsContent'

interface OverlayProps {
  onClose: () => void
}

const notificationsOverlay: FC<OverlayProps> = ({ onClose }) => {
  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }
  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <NotificationsContent />
      </div>
    </div>
  )
}

export default notificationsOverlay
