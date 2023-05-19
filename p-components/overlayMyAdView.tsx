import { FC } from 'react'
import OverlayMyAdViewContent from './overlayMyAdViewContent'

interface OverlayProps {
  onClose: () => void
  //   user: User
  userId: any
  _id: string
  adId: string
  adImage: string
  title: string
  publisher: string
  fullName: string
  publisherProfileImage: string
  adEmail: string
  description: string
}

const OverlayMyAdView: FC<OverlayProps> = ({
  onClose,
  userId,
  _id,
  adId,
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
  console.log('ID:', adId)

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={handleContentClick}>
        <OverlayMyAdViewContent
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
          adId={adId}
        />
      </div>
    </div>
  )
}

export default OverlayMyAdView
