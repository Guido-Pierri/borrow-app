import { FC, useState } from "react"
import { User } from "@/types/user"
import CloseIconWOLink from "./closeIconWOLink"

interface ProfileInfoContentProps {
  onClose: () => void
  user: User
  userId: any
}
interface FormData {
  userId: string
  firstAndLastName: string
  postCode: string
  email: string
  password: string
}
const ProfileInfoContent: FC<ProfileInfoContentProps> = ({
  onClose,
  user,
  userId,
}) => {
  const [formData, setFormData] = useState<FormData>({
    userId: user.userId,
    firstAndLastName: user?.firstAndLastName || "",
    postCode: user.postCode || "",
    email: user?.email || "",
    password: undefined || "",
  })
  const [confirmPassword, setConfirmedPassword] = useState<string>("")
  const [confirmPassword2, setConfirmedPassword2] = useState<string>("")

  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }))
  }
  console.log(formData)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    function handleClick() {
      console.log("handleClick")
    }
    const apiData = {
      _id: userId,
      firstAndLastName: formData.firstAndLastName,
      userId: user.userId,
      postCode: formData.postCode,
      email: formData.email,
      password: formData.password,
    }

    const response = await fetch("/api/user/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })

    const data = await response.json()
    console.log("Response:", response)

    console.log(data)

    if (confirmYourPassword()) {
      alert("Lösenord ändrat")
    } else {
      console.log(data)
      return false
    }
  }
  function confirmYourPassword() {
    if (formData.password !== confirmPassword) {
      alert("Lösenordet matchar inte!")
      return false
    } else {
      return true
    }
  }
  console.log("userId:", user.userId)
  console.log("user._id", userId)

  return (
    <form
      className="font-sans bg-[#FFFFFF] flex flex-col overlay-content rounded-lg mb-[7.9%]"
      onSubmit={handleSubmit}
    >
      <div className="mt-[8.5%] ml-[7.9%] mr-[5.8%] flex flex-row justify-between ">
        <p className="text-xl font-[700] text-black flex justify-start">
          Mina uppgifter
        </p>
        <div>
          <button onClick={onClose}>
            <CloseIconWOLink />
          </button>
        </div>
      </div>
      <div
        className="ml-[7.9%] mr-[7.9%] mt-[7.9%] h-[100%]
        "
      >
        <label className="text-left">
          <p className="">Ditt namn</p>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[9.8%]"
            type="text"
            name="firstAndLastName"
            placeholder={user.firstAndLastName}
            value={formData.firstAndLastName}
            required
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <p className="">E-post</p>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[9.8%]"
            type="email"
            name="email"
            placeholder={user.email}
            required
            value={formData.email}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <p className="">Postkod</p>

          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[9.8%]"
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleInputChange}
            placeholder={user.postCode}
            style={{ color: "#000000" }}
            required
          />
        </label>
        <label>
          <legend className="">Ändra Lösenord</legend>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[9.8%]"
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            value={formData.password}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <legend className="">Bekräfta lösenord</legend>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[9.8%]"
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            onChange={(event) => {
              handleInputChange(event)
              setConfirmedPassword(event.target.value)
            }}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <legend className="">Bekräfta lösenord</legend>
          <input
            className=" border rounded-[2px] border-[#9EBB9D] outline-[#9EBB9D] placeholder-[#000000] bg-[#ffffff] w-full h-[9.8%]"
            type="password"
            name="confirmPassword2"
            required
            value={confirmPassword2}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            onChange={(event) => {
              handleInputChange(event)
              setConfirmedPassword2(event.target.value)
            }}
            style={{ color: "#000000" }}
          />
        </label>
        <button className="mt-[4.1%]  rounded-[2px] bg-[#9EBB9D] placeholder-[#000000] w-full h-[9.8%] flex items-center justify-center">
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
      </div>
    </form>
  )
}

export default ProfileInfoContent
