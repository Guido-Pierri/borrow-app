import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props {} //add link and other functionalities when needed

const Categories = ({}) => {
  return (
    <div className="bg-[#FFFFFF]">
      <h1 className="font-sans text-black text-[14px] font-bold text-left pt-6 pl-8 ">
        Kategorier
      </h1>
      <div className="flex flex-row py-8 justify-between ">
        <div>
          <button>
            {/* <Link href={"/"}> */}
            <div className="pl-5 pt-2  border-[#9EBB9D] border-2 w-[74px] h-[76px] rounded-full flex justify-between">
              <Image
                src={'/vaccum2.png'}
                alt={'#'}
                width={'25'}
                height={'54'}
                style={{ alignSelf: 'center' }}
              ></Image>
            </div>
            {/* </Link> */}
          </button>

          <p className="font-sans text-[14px] font-bold text-black pt-[19px]">
            Städ
          </p>
        </div>
        <div>
          <button>
            {/* <Link href={"/"}> */}
            <div className="pl-3 pt-5 border-2  border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
              <Image
                src={'/pickaxe.svg'}
                alt={'#'}
                width={'47'}
                height={'38'}
                style={{
                  alignSelf: 'center',
                }}
              ></Image>
            </div>
            {/* </Link> */}
          </button>
          <p className=" font-sans text-[14px] font-bold text-black pt-[12px]">
            Verktyg
          </p>
        </div>
        <div>
          <button>
            {/* <Link href={"/"}> */}
            <div className=" pl-2 pt-6 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
              <Image
                src={'/bike.svg'}
                alt={'#'}
                width={'54'}
                height={'32'}
                style={{ alignSelf: 'center' }}
              ></Image>
            </div>
            {/* </Link> */}
          </button>
          <p className=" font-sans text-[14px] font-bold text-black pt-[12px]">
            Cyklar
          </p>
        </div>

        <div>
          <button>
            {/* <Link href={"/"}> */}
            <div className=" pl-2 pt-4 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
              <Image
                src={'/tv.svg'}
                alt={'#'}
                width={'47'}
                height={'37'}
                style={{ alignSelf: 'center' }}
              ></Image>
            </div>
            {/* </Link> */}
          </button>
          <p className="font-sans text-[14px] font-bold text-black pt-[13px]">
            Elektronik
          </p>
        </div>
        <div>
          <button>
            {/* <Link href={"/"}> */}
            <div className="pl-3 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full flex justify-between">
              <Image
                src={'/grill2.png'}
                alt={'#'}
                width={'37'}
                height={'74'}
                style={{ alignSelf: 'center' }}
              ></Image>
            </div>
            {/* </Link> */}
          </button>
          <p className="font-sans text-[14px] font-bold text-black pt-[19px]">
            Grill
          </p>
        </div>
      </div>
    </div>
  )
}

export default Categories
