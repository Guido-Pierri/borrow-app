import React from 'react'

const UserContext = React.createContext({
  _id: null,
  username: '',
  isLoggedIn: false,
  set_id: () => {},
  setUsername: () => {},
  setIsLoggedIn: () => {},
})

export default UserContext
