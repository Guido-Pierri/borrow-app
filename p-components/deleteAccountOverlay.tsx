import { FC } from 'react'
import NotificationsContent from './notificationsContent'
import DeleteAccountContent from './deleteAccountContent'

interface OverlayProps {
  onClose: () => void
}

const DeleteAccountOverlay: FC<OverlayProps> = ({ onClose }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <DeleteAccountContent onClose={onClose} />
      </div>
    </div>
  )
}

export default DeleteAccountOverlay
