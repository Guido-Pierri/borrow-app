import React, { useState } from "react"
import Head from "next/head"
import TransformImage from "./image"
import ImageAddProfileImageIcon from "./imageAddProfileImageIcon"

const UploadImageAddProfileImage = ({ setImageUrl }) => {
  const [imagePublicId, setImagePublicId] = useState("")
  const [alt, setAlt] = useState("")
  const [crop, setCrop] = useState("scale")
  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)

  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dqrn5bc0b",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (
          result.event === "success" &&
          result.info.resource_type === "image"
        ) {
          console.log(result.info)
          setImagePublicId(result.info.public_id)
          setAlt(`A file of ${result.info.original_filename}`)
          setImageUrl(result.info.url)
          console.log(result.info.url)
        }
      }
    )
    widget.open() // open up the widget after creation
  }

  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        ></script>
      </Head>
      <div>
        <button
          className="rounded py-4 px-7 mt-8  w-[298px]  placeholder-[#000000] bg-[#fff]"
          onClick={openWidget}
        >
          <div className="flex justify-center ">
            <ImageAddProfileImageIcon />
          </div>
        </button>
        <div className="flex justify-center">
          <div className="w-40 mt-4 mx-4 mb-4 ">
            <TransformImage image={imagePublicId} />
          </div>
        </div>
      </div>
    </>
  )
}
export default UploadImageAddProfileImage
