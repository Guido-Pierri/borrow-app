import type { AppProps } from "next/app"
import CloseIcon from "./closeIcon"
import CloseIconStatic from "./closeIconStatic"
import { User } from "@/types/user"
export default function ProfileInfo({
  user,
  setShowInfo,
  setShowHeader,
  setShowProfile,
}: any) {
  return (
    <>
      {/* <HeaderWithCloseIcon /> */}

      <form
        className="font-sans bg-[#FFFFFF] ml-[6.7%] mr-[6.9%] flex flex-col h-[640px]"
        //  onSubmit={handleSubmit}
      >
        <div className="mt-[6.9%] mr-[5.8%] flex flex-row-reverse justify-between ">
          <CloseIconStatic
            setShowInfo={setShowInfo}
            setShowHeader={setShowHeader}
            setShowProfile={setShowProfile}
          />

          <p className="text-xl font-[700] text-black flex justify-start">
            Mina uppgifter
          </p>
        </div>
        <label className="text-left">
          <p className="mt-[3.6%]">Ditt namn</p>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[55px]"
            type="text"
            name="firstName"
            //   value={formData.firstName}
            required
            //   onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <p className="mt-[0.56%]">E-post</p>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[55px]"
            type="email"
            name="email"
            required
            //   value={formData.email}
            //   onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <p className="mt-[0.56%]">Adress</p>

          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[55px]"
            type="text"
            name="adress"
            //   value={formData.adress}
            //   onChange={handleInputChange}
            style={{ color: "#000000" }}
            required
          />
        </label>

        <label>
          <p className="mt-[0.56%]">Ändra lösenord</p>

          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[55px]"
            type="text"
            name="mobileNumber"
            //   value={formData.mobileNumber}
            //   onChange={handleInputChange}
            style={{ color: "#000000" }}
            required
          />
        </label>
        <p className="mt-[0.56%]">Bekräfta nytt lösenord</p>

        <label>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[55px]"
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            //   value={formData.password}
            //   onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <button className="mt-[1.56%]  rounded-[2px] bg-[#9EBB9D] placeholder-[#000000] w-full h-[55px] flex items-center justify-center">
          <div className=" ">
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
                  <use xlinkHref="#image0_2042_4955" transform="scale(0.02)" />
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
        {/*
         <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Bekräfta lösenord..."
            type="password"
            name="samePassword"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            // value={formData.samePassword}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label> */}
        <br />
        <br />
      </form>
    </>
  )
}
