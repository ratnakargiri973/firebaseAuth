import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { authContext } from './Components/Context'
import AuthForm from './Components/AuthForm'
import Home from './Components/Home'
import { auth } from './firebaseAuth'
import ProtectedRoute from './Components/ProtectedRoute'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut} from "firebase/auth";
import {Routes, Route, useNavigate } from 'react-router-dom'  

function App() {
  const navigate = useNavigate();
  
  function handleSignup(email,password){
    if(email === ""){
      alert("Enter your email");
      return;
    }
      createUserWithEmailAndPassword(auth,email,password)
      .then((data) => {
        return sendEmailVerification(data.user);
      })
      .then(()=>{
                alert("Your account is created!. Please verify it by the email sent to you!")
  })
      .catch((error)=>alert("This email is already exist !!!"))
  }


  function handleSignin(email,password){
    signInWithEmailAndPassword(auth,email,password)
    .then((data)=>{
      const userRes = data.user;

      if(userRes.emailVerified === false){
        alert("Please verify your email !!");
        signOut(auth)
        .then(()=> aconsole.log(auth.currentUser));
      }
      else{
        alert("Log in successful !!");
        navigate("/Home");
      }
    })
    .catch((err)=>alert("This email is not registered!!"));
  };

  function handleLogout(){
    signOut(auth)
    .then(()=>{
      alert('You have been logged out.');
    navigate('/');
  })
  .catch((err)=>alert(err.message));
  }

  return (
    <>
    <authContext.Provider value={{handleSignup, handleSignin, handleLogout}}>
    <Routes>
    <Route path='/' element={<AuthForm/>}/>
    <Route path='/Home' element={ 
               <ProtectedRoute>
                   <Home />
              </ProtectedRoute>}/>
    </Routes>
    </authContext.Provider>
    </>
  )
}

export default App
