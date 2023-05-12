import type { AppProps } from 'next/app'
import CloseIconStatic from './closeIconStatic'
import CloseIcon from './closeIcon'
import { Switch } from '@headlessui/react'
import Toggle from './toggle'
import { FC } from 'react'
import CloseIconWOLink from './closeIconWOLink'
interface NotificationsContentProps {
  onClose: () => void
}

const NotificationsContent: FC<NotificationsContentProps> = ({ onClose }) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }

  return (
    <>
      <div className="font-sans bg-[#FFFFFF] flex flex-col h-[640px] w-[full] rounded-lg ml-[5.7%] mr-[5.7%] ">
        <div className="mt-[25px] ml-[10%] mr-[5.8%] flex flex-row justify-between ">
          <p className="text-xl font-[700] text-black flex justify-start">
            Notiser
          </p>
          <div>
            <button onClick={onClose}>
              <CloseIconWOLink />
            </button>
          </div>
        </div>
        <form
          className="ml-[10%] mr-[10%]
        "
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <label className="text-left">
            <p className="mt-[21px] font-semibold">Meddelanden</p>
            <div className="border-t rounded-[2px] border-[#9EBB9D]"></div>
            <div className="flex items-center justify-between mt-[16px]">
              {/* <input
                className=" border-t rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[55px]"
                type="button"
                name="messages"
                //   value={formData.firstName}
                required
                //   onChange={handleInputChange}
                style={{ color: '#000000' }}
              ></input> */}
              <p className="text-xs">Få notiser vid ett nytt meddelande</p>
              <div className="">
                <Toggle />
              </div>
            </div>
          </label>
          <label className="text-left">
            <p className="mt-[21px] font-semibold">Nya annonser</p>
            <div className="border-t rounded-[2px] border-[#9EBB9D]"></div>
            <div className="flex items-center justify-between mt-[16px]">
              <p className="text-xs">
                Få en notis när när en ny annons publiceras inom din förening
              </p>
              <div className="">
                <Toggle />
              </div>
            </div>
          </label>
          <div className="flex flex-col relative">
            <div>
              <label className="text-left">
                <p className="mt-[21px] font-semibold">Nya inlägg</p>
                <div className="border-t rounded-[2px] border-[#9EBB9D]"></div>
                <div className="flex items-center justify-between mt-[16px] ">
                  {/* <input
                className=" border-t rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[55px]"
                type="button"
                name="messages"
                //   value={formData.firstName}
                required
                //   onChange={handleInputChange}
                style={{ color: '#000000' }}
              ></input> */}
                  <p className="text-xs">
                    Få en notis vid nytt inlägg inom din förening
                  </p>
                  <div className="">
                    <Toggle />
                  </div>
                </div>
              </label>
            </div>

            <div className="mt-[225px] ">
              <button className="w-full h-[55px] mt-[] rounded-[2px] bg-[#9EBB9D]  flex items-center justify-center">
                <div className="">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="27" height="27" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_2042_4955"
                          transform="scale(0.02)"
                        />
                      </pattern>
                      <image
                        id="image0_2042_4955"
                        width="50"
                        height="50"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVR4nO2WsUoEMRCGP7a95tAHsLBRH0TFRnyDrXwBQVTUQtQr9xFELRSsPMXGQgQbLaw9Oxtf4kQlEHEIe3Amkp2F+WAgu2Qm8+fPkgXDMAzjl0ngFDgGJmgxu8CXjx1aTCWEuHFrqUyIMswRbZgj2jBHtGGOaMMc0YY5og1zRButc2QZeANugO4YQtyca+AdWEER96LhJyGmTkjXz/l5/4Ai1kRjUkwoJBThYh1l9IIGn4ET8XwEPAZz1H43VdDo54ixahGjnKmLrCKmgXNgDygSnUkRUQDb/phOEcGFWHwpIr/6JycWRf5ZRD53okDZ4IVYihqup0aEOBaA+YT8UouQVEoT4rkSO7FBc2yJPi5T74MXoEN+OsBA9HEQU2QO+BBFBt6Z1UyxCbyK9YfATOyOHI5xS+eKfRIovJ3Smdwx9CL++ndRy6x3pw/cZoq+38To42QYhoFavgF/GiSkHOBdGAAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </div>
                <p>Spara ändring</p>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <div className="flex w-[345px] h-[640px] ">
        <div className="  flex-row justify-between ">
          <div className=" font-sans bg-[#FFFFFF]   ">
            <p className="text-xl font-[700] text-black justify-start">
              Notiser
            </p>
            <CloseIcon />
          </div>
        </div>
        <form className=" ">
          <label>
            <input
              type="checkbox"
              role="switch"
              name=""
              id=""
              className="default:ring-2 indeterminate:bg-gray-300"
            />
          </label>
        </form>
      </div> */}
    </>
  )
}
export default NotificationsContent
