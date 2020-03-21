import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom"
import Landing from "./pages/Landing";
import Subscribed from "./pages/Subscribed";
import SubscribedRoute from "./components/SubscribedRoute"
/* IMPORT HOVER.JS LIBRARY */
import "hover.css";

function App() {

  return (

    <div>
     <Switch>
       <Route exact path="/" component={Landing}/>
       <SubscribedRoute exact path="/subscribed" component={Subscribed} /> 
     </Switch>
    </div>
  
  );
}

export default App;
