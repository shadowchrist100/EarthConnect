import { createContext,  useEffect, useState } from "react";

const AuthContext= createContext();

export const AuthProvider = (props)=>{
    const {children}= props;

    const [user, setuser]= useState(null);

    useEffect(()=>{
        const connected_user=localStorage.getItem('user');
        if (connected_user) {
            setuser(connected_user);
            
        }
    }, []);

    const login = (user_data, jwt_token) =>{
        setuser(user_data);
        localStorage.setItem('jwt_token', jwt_token);
    }
    
    const logout = ()=>{
        setuser(null);
        localStorage.removeItem('jwt_token');
    }

    return <AuthContext.Provider value= {{user, login, logout}} >
        { children}
    </AuthContext.Provider> ;
}

export {AuthContext};