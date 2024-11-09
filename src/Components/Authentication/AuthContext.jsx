import React from 'react'
import {getAuth, OnAuthStateChanged} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { Children } from 'react'
export const AuthContext = createContext()
export const AuthProvider = ({Children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = OnAuthStateChanged(auth,(user) => {
            setUser(user)
            setLoading(false)
        });

        return () => unsubscribe()
    }, [])


    return(
        <AuthContext.Provider value={{user,loading}}>
            {Children}
        </AuthContext.Provider>
    )
}