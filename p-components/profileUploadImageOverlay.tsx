import { FC } from 'react'
import { User } from '@/types/user'
import ProfileInfoContent from './profileInfoContent'
import ProfileUploadImageContent from './profileUploadImageContent'

interface OverlayProps {
  onClose: () => void
  user: User
  userId: any
}

const profileUploadImageOverlay: FC<OverlayProps> = ({
  onClose,
  user,
  userId,
}) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <ProfileUploadImageContent
          onClose={onClose}
          user={user}
          userId={userId}
        />
      </div>
    </div>
  )
}

export default profileUploadImageOverlay
