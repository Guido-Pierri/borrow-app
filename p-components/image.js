import { CloudinaryContext, Image } from 'cloudinary-react'

const TransformImage = ({ image }) => {
  return (
    <CloudinaryContext cloudName="dqrn5bc0b">
      <Image publicId={image} alt=""></Image>
    </CloudinaryContext>
  )
}

export default TransformImage
