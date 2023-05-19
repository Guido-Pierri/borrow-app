import { FC } from 'react'
import { User } from '@/types/user'
import AdviewOverlayContent from './adViewOverlayContent'

interface OverlayProps {
  onClose: () => void
  //   user: User
  userId: any
  _id: string
  adImage: string
  title: string
  publisher: string
  fullName: string
  publisherProfileImage: string
  adEmail: string
  description: string
}

const AdviewOverlay: FC<OverlayProps> = ({
  onClose,
  userId,
  _id,
  adImage,
  title,
  publisher,
  fullName,
  publisherProfileImage,
  adEmail,
  description,
}) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }
  console.log('adImage in adViewOverlay:', adImage)

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <AdviewOverlayContent
          _id={_id}
          onClose={onClose}
          adImage={adImage}
          title={title}
          publisher={publisher}
          fullName={fullName}
          publisherProfileImage={publisherProfileImage}
          adEmail={adEmail}
          userId={userId}
          description={description}
        />
      </div>
    </div>
  )
}

export default AdviewOverlay
