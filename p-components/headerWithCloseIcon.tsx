import CloseIcon from './closeIcon'
import Header from './header'

export default function HeaderWithCloseIcon() {
  return (
    <div className="relative">
      <Header></Header>
      <div className="absolute right-5 top-12">
        <CloseIcon />
      </div>
    </div>
  )
}
