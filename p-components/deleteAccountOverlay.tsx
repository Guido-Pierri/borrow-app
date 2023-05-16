import { FC } from "react"
import DeleteAccountContent from "./deleteAccountContent"

interface OverlayProps {
  onClose: () => void
  userId: any
}

const DeleteAccountOverlay: FC<OverlayProps> = ({ onClose, userId }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <DeleteAccountContent onClose={onClose} userId={userId} />
      </div>
    </div>
  )
}

export default DeleteAccountOverlay
