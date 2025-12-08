import {useContext} from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const AuthComponent = (props)=>{
    const { children }= props;

    const user=useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" replace />
    }
    
    return children;
}

export default AuthComponent;