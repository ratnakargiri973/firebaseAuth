import React, { useContext } from "react";
import { useState } from "react";
import { authContext } from "./Context";
import './AuthForm.css'

function AuthForm(){
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const {handleSignin,handleSignup} = useContext(authContext);

    function handleSubmit(e){
        e.preventDefault();
        if(isSignUp){
                handleSignup(email,pass);
        }
        else{
            if(email===""){
                alert("Enter your email");
              }
              else{
                handleSignin(email,pass);
              }   
        }

    };


    return(
        <>
        <div className="form">
            <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>

            <form onSubmit={handleSubmit} className="input">
            <span><label htmlFor="">Email: </label>
            <input type="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)} /></span>

            <span><label htmlFor="">Password: </label>
            <input type="password"
                   placeholder="Password"
                   onChange={(e)=>setPassword(e.target.value)} /></span>

             <div className="Btn">
            <button type="submit">{isSignUp?"Sign Up" : "Sign In"}</button>
            <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
            </div>

            </form>
            
        </div>
        </>
    )
}

export default AuthForm;