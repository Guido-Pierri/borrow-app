import { ObjectId } from 'mongodb'
import { createContext, ReactNode, useState } from 'react'

// Boilerplate
interface UserProviderProps {
  children: ReactNode
}

// Properties
interface UserContextProps {
  _id: string
  userId: string
  firstAndLastName: string
  isLoggedIn: boolean
  postCode: string
  email: string
  password: string
  profileImage: string
  set_id: (_id: string) => void
  setUserId: (userId: string) => void
  setFirstAndLastName: (firstAndLastName: string) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
  setPostCode: (postCode: string) => void
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setProfileImage: (profileImage: string) => void
}

// Default
const initialUserContext: UserContextProps = {
  _id: '',
  userId: '',
  firstAndLastName: '',
  isLoggedIn: false,
  postCode: '',
  email: '',
  password: '',
  profileImage: '',
  set_id: () => {},
  setUserId: () => {},
  setFirstAndLastName: () => {},
  setIsLoggedIn: () => {},
  setPostCode: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setProfileImage: () => {},
}

export const MyContext = createContext<UserContextProps>(initialUserContext)

// Finalize
const MyContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [_id, set_id] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const [firstAndLastName, setFirstAndLastName] = useState<string>('')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [postCode, setPostCode] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [profileImage, setProfileImage] = useState<string>('')

  // Connect
  const contextValue: UserContextProps = {
    _id,
    userId,
    firstAndLastName,
    isLoggedIn,
    postCode,
    email,
    password,
    profileImage,
    setUserId: (userId: string) => setUserId(userId),
    set_id: (_id: string) => set_id(_id),
    setFirstAndLastName: (firstAndLastName: string) =>
      setFirstAndLastName(firstAndLastName),
    setIsLoggedIn: (isLoggedIn: boolean) => setIsLoggedIn(isLoggedIn),
    setPostCode: (postCode: string) => setPostCode(postCode),
    setEmail: (email: string) => setEmail(email),
    setPassword: (password: string) => setPassword(password),
    setProfileImage: (profileImage: string) => setProfileImage(profileImage),
  }

  return <MyContext.Provider value={contextValue} children={children} />
}

export default MyContextProvider
