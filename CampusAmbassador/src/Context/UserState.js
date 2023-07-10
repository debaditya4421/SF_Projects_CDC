import UserContext from './UserContext'
import { useState } from 'react'


const UserState = (props) => {
    const [user, setuser] = useState();
    const[userToken, setUserToken] = useState("");

  return (
    <UserContext.Provider value={{user,setuser,userToken, setUserToken}}>
                  {props.children}
    </UserContext.Provider>
  )
}

export default UserState