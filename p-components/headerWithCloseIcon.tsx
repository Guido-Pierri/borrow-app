import CloseIcon from "./closeIcon"
import Header from "./header"
interface Props {
  userId: any
}
export default function HeaderWithCloseIcon({ userId }: Props) {
  return (
    <div className="relative">
      <Header userId={userId} anotherUserId={userId}></Header>
      <div className="absolute right-5 top-12">
        <CloseIcon />
      </div>
    </div>
  )
}
