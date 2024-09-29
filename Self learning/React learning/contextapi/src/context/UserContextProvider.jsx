import React from "react";
import UserContext from "./UserContext";

//children mean jo araha hai woh as it is dedo

const UserContextProvider = ({children}) => {
   
    const [user,setUser] = React.useState(null)

   return (
     <UserContext.Provider value = {{user,setUser}}>
     {children}
     </UserContext.Provider>
   )
}

export default UserContextProvider