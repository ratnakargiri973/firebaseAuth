import React from "react";
import { auth } from "../firebaseAuth";
import {Navigate} from "react-router-dom"

export default function ProtectedRoute({children}){
    return auth.currentUser ? children : <Navigate to="/"/>;
}