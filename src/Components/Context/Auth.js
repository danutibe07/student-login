// import React, { useContext, useState , useEffect } from 'react'
// import {auth} from "../firebase"
// const AuthContext = React.createContext()

// export function useAuth(){
//     return useContext(AuthContext)
//   }
//  function Auth ({children}){
//     const [currentUser , setCurrentUser] = useState()

//     function signup (email,password){
//         return auth.createUserwithEmailAndPassword(email,password)
//     }
//     useEffect(() => {
//       const unsubscribe = auth.onAuthStateChanged(user => {
//         setCurrentUser(user)
//     })
//         return unsubscribe
//     }, [])
//     const value= {
//         currentUser,
//         signup
//     }
//   return (
//     <AuthContext.Provider >
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export default Auth