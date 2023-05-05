import HeaderProfile from './HeaderProfile'
import CloseIcon from './closeIcon'
import Header from './header'

export default function HeaderWithCloseIconProfile({ userId }: any) {
  return (
    <div className="relative">
      <HeaderProfile userId={userId} anotherUserId={userId} />
      <div className="absolute right-5 top-12">
        <CloseIcon />
      </div>
    </div>
  )
}
