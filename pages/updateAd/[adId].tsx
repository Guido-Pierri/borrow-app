import clientPromise from '@/lib/mongodb'
import { useRouter } from 'next/router'
import { Ad } from '@/types/ads'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  ads: Ad
}

export default function Post({ ads }: Props) {
  const router = useRouter()
  const { adId } = router.query
  console.log(adId)

  interface FormData {
    id: string
    title: string
    description: string
    fullName: string
    email: string
  }
  interface ApiData {
    id: string
    title: string
    description: string
    fullName: string
    email: string
  }

  /*Defining a function (pass to other files), that has 
  a object formData that contains following properties*/

  const [formData, setFormData] = useState<FormData>({
    id: ads?.id || '',
    title: ads?.title || '',
    description: ads?.description || '',
    fullName: ads?.fullName || '',
    email: ads?.email || '',
  })
  console.log('ads?.id', ads?.id)
  console.log('adId', adId)

  console.log(formData)

  /*Creating apiData object that contains the formData
    to be submitted to server.This is sent through POST
    to the server*/
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // if (!formData) {
    //   return
    //   ;<div></div>
    // }
    event.preventDefault()

    const apiData: ApiData = {
      id: ads?.id,
      title: formData.title,
      description: formData.description,
      fullName: formData.fullName,
      email: formData.email,
    }
    console.log('apiData:', apiData)

    const response = await fetch('/api/postAds', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    })

    const data = await response.json()

    console.log(data)
    console.log(apiData)

    window.location.href = '/ads'
  }

  /*Is called when user types something in the form
    and it updates formData with the new values passed in
    through setFormData*/
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }

  console.log(ads?.id)
  return (
    <div className="bg-[#F5F5F5] text-center max-w-sm h-screen ">
      <div className=" font-sans">
        <div className="px-4">
          <div className="flex-column">
            <div className="text-left">
              <form onSubmit={handleSubmit}>
                <div className="mt-6 rounded-sm border-[#46649D] border-2">
                  <p className="bold text-[#0f0e0e] mt-2">
                    <b>
                      Ändra titeln:
                      <input
                        className="bg-[#F5F5F5] placeholder-black"
                        // placeholder={`${ads.title}`}
                        name="title"
                        onChange={handleInputChange}
                        value={formData.title}
                      ></input>
                    </b>
                  </p>
                  <p className="text-[#0f0e0e] mt-2 placeholder-black">
                    Ändra Beskrivning:
                    <input
                      className="bg-[#F5F5F5] mt-2 placeholder-black"
                      // placeholder={`${ads.description}`}
                      name="description"
                      onChange={handleInputChange}
                      value={formData.description}
                    ></input>
                  </p>
                  <p className="text-[#0f0e0e] mt-2 placeholder-black">
                    Ändra Annonsör:
                    <input
                      className="bg-[#F5F5F5] mt-2 placeholder-black"
                      // placeholder={`${ads.fullName}`}
                      onChange={handleInputChange}
                      value={formData.fullName}
                      name="fullName"
                    ></input>
                  </p>

                  <button>
                    <p style={{ color: 'blue' }}>
                      <b className="text-[#0f0e0e] ">Kontakt: </b>
                      <input
                        className="bg-[#F5F5F5] mt-2 placeholder-blue-950"
                        // placeholder={`${ads.email}`}
                        onChange={handleInputChange}
                        value={formData.email}
                        name="email"
                      ></input>
                    </p>
                  </button>

                  <div className="flex mt-4">
                    <div className="">
                      <button
                        className="bg-[#9EBB9D] rounded-sm bg- mb-1 mx-1 px-2"
                        value={ads._id}
                        type="submit"
                        //   onClick={() => updateAd(ad.id)}
                      >
                        Bekräfta ändring
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  try {
    const { adId } = context.query
    const client = await clientPromise
    const db = client.db('borrow')

    const ads = await db.collection('ads').findOne({ id: adId })
    console.log(ads)

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { ads: {} },
    }
  }
}
