import React from "react";
import LogOut from "./LogOut";
import { Route,Routes } from "react-router-dom";
import './Home.css'

function Home(){
    return(
    <div className="home">
    <h1>Hi, Learning Firebase</h1>
    <LogOut/>
    {/* <Routes>
      <Route path="/LogOut" element={ <LogOut/>}/>
    </Routes> */}
   
    </div>
    )
}
export default Home;