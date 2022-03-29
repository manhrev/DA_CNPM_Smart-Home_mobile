import Navigator from './routes/drawer'
import React from 'react'
import { AuthContext } from './AuthContext'
import axios from 'axios';
import { AsyncStorage } from 'react-native'



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
  // const Context = React.useContext(AuthContext)
  // React.useEffect(() => {
  //   checkLogin() 
  // }, [])
  // 

  const [login, dispatch] = React.useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{loginState: login, loginDispatch: dispatch}}>
      <Navigator />
    </AuthContext.Provider>
        
  );
}

// async function checkLogin() {
//     try {
//       const res = await axios.get('http://192.168.2.6:80/api/checkLogin')
//       if (res.data.loggedIn) {
//         return 1
//       } else {
//         return 0
//       }

//     } catch {
//       console.log("not changed")
//       return 1
//     }

//   }