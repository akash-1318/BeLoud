import {Navigate, useLocation} from "react-router-dom"
import { useSelector } from "react-redux";

function RequireAuth ({children}) {
    const location = useLocation();
    const {authToken, authStatus} = useSelector((store) => store.reduxStore);
    return authToken ? children : <Navigate to="/login" state={{from : location}} replace/>
}

export {RequireAuth}   