import React, { useContext } from "react";
import { authContext } from "./Context";

function LogOut(){
    const {handleLogout} = useContext(authContext)
    return(
        <>
        <button onClick={handleLogout} style={{border:"none", outline:"none",
                                               padding:"0.5rem",
                                               borderRadius:"5px",
                                               backgroundColor:"red",
                                               color:"white"
        }}>Log Out</button>
        </>
    )
}
export default LogOut;