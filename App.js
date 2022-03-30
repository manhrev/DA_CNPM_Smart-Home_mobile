import Navigator from './routes/drawer'
import React from 'react'
import { AuthContext } from './AuthContext'
import axios from 'axios';
import {SERVER_URL} from '@env'



const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'login':
      return 1
    case 'logout':
      return 0
    case 'adminLogin':
      return 2
  }
}

export default function App() {
  const Context = React.useContext(AuthContext)
  React.useEffect(() => {
    checkLogin() 
   
  }, [])
  
  const checkLogin = async () => {
    try {
      const res = await axios.get(SERVER_URL+'/api/checkLogin')
      if (res.data.loggedIn) {
        dispatch('login')
        console.log("logged in")
        
      } else {
        dispatch('logout')
        console.log("Not logged in")
       
      }

    } catch(error) {
      console.log(error)
    }

  }

  const [login, dispatch] = React.useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{loginState: login, loginDispatch: dispatch}}>
      <Navigator />
    </AuthContext.Provider>
        
  );
}
