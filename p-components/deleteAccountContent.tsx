import Image from "next/image"
import { FC } from "react"
import router from "next/router"

interface DeleteAccountContentProps {
  onClose: () => void
  userId: string
}
const DeleteAccountContent: FC<DeleteAccountContentProps> = ({
  onClose,
  userId,
}: DeleteAccountContentProps) => {
  function onClickHandler() {
    deleteAccount(userId)
  }
  const deleteAccount = async (userId: string) => {
    console.log("inside deleteAccount function")

    console.log("userId:", userId)
    const apiData = userId

    try {
      console.log("apiData:", apiData)

      const response = await fetch(`/api/user/deleteUser/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error(`Failed to delete account with userId ${userId}`)
      }
      const data = await response.json()
      console.log(data)
      if (data) {
      }
      alert("Konto avslutat")
      router.push("/login")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className="font-sans bg-[#FFFFFF] flex flex-col h-[24%] w-[full] rounded-lg ml-[5.7%] mr-[5.7%] ">
        <div>
          <div className="mt-[15%] mx-[40%]">
            <Image src={"/Sad.svg"} width={48} height={48} alt={"sad"}></Image>
          </div>
          <p className="text-base text-center font-semibold mt-[5%] mx-[10%]">
            Är du säker på att du vill avsluta ditt konto?
          </p>
          <div className="flex justify-evenly">
            <button className="border rounded-md border-[#9EBB9D] w-[34%] h-[26px] mt-[4%] mb-[15%] text-center">
              <p className="text-[10px] font-medium">Avbryt</p>
            </button>
            <button
              className="bg-[#9EBB9D] rounded-md w-[34%] h-[26px] text-center mt-[4%] mb-[15%]"
              onClick={onClickHandler}
            >
              <p className="text-[10px] font-medium">Avsluta</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteAccountContent
