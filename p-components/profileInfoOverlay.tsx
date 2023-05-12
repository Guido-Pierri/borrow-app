import { FC } from 'react'
import { User } from '@/types/user'
import ProfileInfoContent from './profileInfoContent'

interface OverlayProps {
  onClose: () => void
  user: User
  userId: any
}

const profileInfoOverlay: FC<OverlayProps> = ({ onClose, user, userId }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <ProfileInfoContent onClose={onClose} user={user} userId={userId} />
      </div>
    </div>
  )
}

export default profileInfoOverlay
