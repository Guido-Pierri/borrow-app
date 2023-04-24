import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'

//function that generates random id:s
uuidv4()

/*Defining two interfaces,
that describes shape of the data*/
interface FormData {
  image: string
  id: string
  title: string
  description: string
  fullName: string
  email: string
}
interface ApiData {
  image: string
  id: string
  title: string
  description: string
  fullName: string
  email: string
}

/*Defining a function (pass to other files), that has 
a object formData that contains following properties*/
export default function CreateAd() {
  const [info, updateInfo] = useState<Object>()
  const [error, updateError] = useState<Error>()
  const [formData, setFormData] = useState<FormData>({
    image: '',
    id: '',
    title: '',
    description: '',
    fullName: '',
    email: '',
  })

  console.log(formData)
  const router = useRouter()

  function handleClick() {
    console.log('handleClick')

    router.push('/ads')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // if (!file) {
    //   return
    // }

    // const imageData = new FormData()
    // imageData.append('file', file)

    // const imageResponse = await fetch('/api/upload', {
    //   method: 'POST',
    //   body: imageData,
    // })

    // if (imageResponse.ok) {
    //   const data = await imageResponse.json()
    //   console.log(data)
    // } else {
    //   console.error(imageResponse.statusText)
    // }

    const apiData: ApiData = {
      image: formData.image,
      id: uuidv4(),
      title: formData.title,
      description: formData.description,
      fullName: formData.fullName,
      email: formData.email,
    }

    const response = await fetch('/api/ad', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    })
    const data = await response.json()
    console.log(data)
    if (data) {
    }
    handleClick()
  }

  /*Is called when user types something in the form
  and it updates formData with the new values passed in
  through setFormData*/
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }
  // function handleOnUpload(info){
  //   updateInfo(info)
  // }
  return (
    <div className=" flex items-start justify-center text-center bg-[#F5F5F5] h-screen font-sans">
      <form className="font-sans" onSubmit={handleSubmit}>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Titel..."
            type="text"
            name="title"
            value={formData.title}
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Beskrivning..."
            type="text"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Ditt fulla namn..."
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Email..."
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        {/* <CldUploadWidget uploadPreset="ml_default" onUpload={handleOnUpload}>
          {({ open }) => {
            function handleOnClick(e: { preventDefault: () => void }) {
              e.preventDefault()
              
              open()
              
            }
            return (
              <button
                className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
                onClick={handleOnClick}
              >
                Ladda upp en bild
              </button>
            )
          }}
        </CldUploadWidget>
        {info && (
          <div>
            {info.resource_type === 'image' && (
              <p>
                <CldImage
                  width={info?.width}
                  height={info?.height}
                  src={info?.secure_url}
                  alt="Uploaded image"
                />
              </p>
            )}

            <p>{info?.secure_url}</p>
          </div>
        )} */}

        {/* <div>
          <CldImage
            className="mt-4"
            alt={''}
            src={
              'https://res.cloudinary.com/dqrn5bc0b/image/upload/v1682251834/20210224_125945_opi6tq.jpg'
            }
            width="85"
            height="75"
          />
        </div> */}
        <br />
        <br />
        <button
          className="
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
    "
          type="submit"
        >
          Skapa annons
        </button>
      </form>
    </div>
  )
}

// import { useState } from "react"

// interface FormData {
//   name: string
//   email: string
// }

// interface ApiData {
//   name: string
//   email: string
// }

// export default function MyPage() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//   })

//   console.log(formData)

//   /*const [title, setTitle] = useState<string>("")
//   const [description, setdescription] = useState<string>("")
//   const [fullName, setFullName] = useState<string>("")
//   const [email, setEmail] = useState<string>("")*/

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     const apiData: ApiData = { name: formData.name, email: formData.email }
//     const response = await fetch("http://localhost:3000/api/users/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(apiData),
//     })

//     const data = await response.json()

//     console.log(data)
//   }

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
//     console.log(event.target.value)
//   }

//   return (
//     <div className=" flex items-start justify-center text-center bg-[#F5F5F5] h-screen font-sans">
//       <form className="font-sans" onSubmit={handleSubmit}>
//         <label>
//           <input
//             className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
//             placeholder="Ditt fulla namn..."
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           <input
//             className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
//             placeholder="Email..."
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <br />
//         <button
//           className="
//            rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
//     "
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   )
// }

// import { IoIosArrowDown } from "react-icons/io"
// import RegEx, { useEffect } from "react"
// import Link from "next/link"

// import { SyntheticEvent, useState } from "react"
// import ReactDOM from "react-dom/client"
// import Products from "./products"

// interface Annons {
//   //Kajsaaa countinue, with this database
//   title: string
//   description: string
//   username: string
//   email: string
// }
// const CreateAd = ({}) => {
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [fullName, setFullName] = useState("")
//   const [email, setEmail] = useState("")

//   const [validMessageEmail, setValidMessagEmail] = useState("")
//   const handleSubmit = (e: SyntheticEvent) => {
//     e.preventDefault()
//     // console.log(email)
//   }
//   return (
//     <div className=" flex items-center justify-center text-center bg-[#F5F5F5] font-sans">
//       <div>
//         <h1 className="text-xl font-[500] text-black">Skapa en annons</h1>

//         {
//           <form className=" my-12 border-[#7BAEAB]" onSubmit={handleSubmit}>
//             <label>
//               <input
//                 className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
//                 placeholder="Rubrik..."
//                 type="text"
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </label>

//             <br />

//             <label>
//               <br />
//               <input
//                 className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
//                 placeholder="Beskrivning..."
//                 type="text"
//                 required
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </label>
//             <br />
//             <label>
//               <br />
//               <input
//                 className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
//                 placeholder="Ditt fulla namn..."
//                 type="text"
//                 required
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </label>
//             <br />
//             <label>
//               <br />
//               <input
//                 className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
//                 placeholder="Din epost..."
//                 type="email"
//                 required
//                 /*pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"*/
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </label>
//             <div className="flex items-top justify-center my-12 ">
//               <Link href={"/ads"}>
//                 <div
//                   className=" text-xl mb-2
//         rounded bg-[#9EBB9D] py-3 border w-[265px] "
//                 >
//                   <button
//                     type="submit"
//                     className="
//           rounded-sm text-[17px] text-black
//          "
//                     onClick={function addData() {
//                       return {
//                         title: { title },
//                         description: { description },
//                         fullName: { fullName },
//                         email: { email },
//                       }
//                     }}
//                   >
//                     Spara annonsen
//                   </button>
//                 </div>
//               </Link>
//             </div>
//           </form>
//         }
//       </div>
//     </div>
//   )
// }

// export default CreateAd
