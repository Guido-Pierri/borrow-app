import { FC } from 'react'
import { User } from '@/types/user'
import ProfileInfoContent from './profileInfoContent'

interface OverlayProps {
  onClose: () => void
  user: User
}

const profileInfoOverlay: FC<OverlayProps> = ({ onClose, user }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <ProfileInfoContent onClose={onClose} user={user} />
      </div>
    </div>
  )
}

export default profileInfoOverlay
