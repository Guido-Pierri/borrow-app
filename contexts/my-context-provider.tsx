import { ObjectId } from 'mongodb'
import { createContext, ReactNode, useState } from 'react'

// Boilerplate
interface UserProviderProps {
  children: ReactNode
}

// Properties
interface UserContextProps {
  username: string
  isLoggedIn: boolean
  _id: string
  setUsername: (username: string) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
  set_id: (_id: string) => void
}

// Default
const initialUserContext: UserContextProps = {
  username: '',
  isLoggedIn: false,
  _id: '',
  setUsername: () => {},
  setIsLoggedIn: () => {},
  set_id: () => {},
}

export const MyContext = createContext<UserContextProps>(initialUserContext)

// Finalize
const MyContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>('')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [_id, set_id] = useState<string>('')

  // Connect
  const contextValue: UserContextProps = {
    username,
    isLoggedIn,
    _id,
    setUsername: (username: string) => setUsername(username),
    setIsLoggedIn: (isLoggedIn: boolean) => setIsLoggedIn(isLoggedIn),
    set_id: (_id: string) => set_id(_id),
  }

  return <MyContext.Provider value={contextValue} children={children} />
}

export default MyContextProvider
