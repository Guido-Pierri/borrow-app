import React, { useState } from "react"
import Head from "next/head"
import TransformImage from "./image"
import { CldImage } from "next-cloudinary"
import Image from "next/image"

const Upload = ({ setImageUrl }) => {
  const [imagePublicId, setImagePublicId] = useState("")
  const [alt, setAlt] = useState("")
  const [crop, setCrop] = useState("scale")
  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)
  // const [imageUrl, setImageUrl] = useState('')

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
          style={{ borderStyle: "dashed" }}
          className="rounded py-4 px-7 mt-8 border w-[265px]  border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
          onClick={openWidget}
        >
          <div className="flex justify-center ">
            <Image alt={"#"} src={"/image.svg"} width={"45"} height={"45"} />
            {/* Ladda upp en bild */}
          </div>
        </button>
        <div className="flex justify-center">
          <div className="w-40 mt-4 mx-4 ">
            <TransformImage image={imagePublicId} width={10} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Upload
