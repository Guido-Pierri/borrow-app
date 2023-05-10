import { NextPage } from 'next'
import { AiOutlinePlus } from 'react-icons/ai'

interface Props {}

const ButtonCreateAd = ({}) => {
  return (
    <div className="">
      <div className="">
        <button
          className=" rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]  w-[83px] h-[83px] bg-[#46649D] border-[#9EBB9D] border-2"
          style={{
            position: 'fixed',
            bottom: '3.5%',
            right: '7.7%',
            // left: '277px',
            // top: '731',
          }}
        >
          <div className="">
            <div className="text-4xl  text-white flex justify-center">
              <AiOutlinePlus />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ButtonCreateAd
