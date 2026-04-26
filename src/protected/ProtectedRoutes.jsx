import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoutes = ({children}) => {
    const {user} = use(AuthContext);
    if(user){
        return children;
    }
    
};

export default ProtectedRoutes;