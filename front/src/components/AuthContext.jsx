import { createContext, useContext, useEffect, useState } from "react";

const AuthContext= createContext();



const AuthProvider = (props)=>{
    const {children}= props;

    const [user, setuser]= useState(null);

    useEffect(()=>{
        const connected_user=localStorage.getItem('user');
        if (connected_user) {
            setuser(connected_user);
        }


    }, []);
    
    return <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider> ;
}

export default AuthProvider;
export {AuthContext};