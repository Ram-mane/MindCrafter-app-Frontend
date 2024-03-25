import React, { useEffect, useState } from 'react'
import userContext from './userContext';
import { doLogout, getCurrentUserDetails, isLoggedIn } from '../authFunc';
function UserProvider({children}) {

    const [user, setUser] =useState({
        name: getCurrentUserDetails()?.name,
        id: getCurrentUserDetails()?.id
    })

    
  return (
<userContext.Provider value={user}>
    {children}
</userContext.Provider>
  )
}

export default UserProvider;