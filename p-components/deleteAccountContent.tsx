import { NextPage, GetStaticPaths } from 'next'
import Image from 'next/image'
import { FC } from 'react'

interface DeleteAccountContentProps {
  onClose: () => void
}
const DeleteAccountContent: FC<DeleteAccountContentProps> = ({ onClose }) => {
  return (
    <>
      <div className="font-sans bg-[#FFFFFF] flex flex-col h-[24%] w-[full] rounded-lg ml-[5.7%] mr-[5.7%] ">
        <div>
          <div className="mt-[15%] mx-[40%]">
            <Image src={'/Sad.svg'} width={48} height={48} alt={'sad'}></Image>
          </div>
          <p className="text-base text-center font-semibold mt-[5%] mx-[10%]">
            Är du säker på att du vill avsluta ditt konto?
          </p>
          <div className="flex justify-evenly">
            <button className="border rounded-md border-[#9EBB9D] w-[34%] h-[26px] mt-[4%] mb-[15%] text-center">
              <p className="text-[10px] font-medium">Avbryt</p>
            </button>
            <button className="bg-[#9EBB9D] rounded-md w-[34%] h-[26px] text-center mt-[4%] mb-[15%]">
              <p className="text-[10px] font-medium">Avsluta</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteAccountContent
