import React,{useState} from "react";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import "./App.css";

import {LoginContext} from "./Context"



function App()

{
  const [loggedIn, setLoggedIn] = useState(false);


  return
  (
    <LoginContext.Provider value={{loggedIn,setLoggedIn}}>

    <Home/>
    <Login/>
    <Profile/>
    </LoginContext.Provider>
  )
}

export default App;