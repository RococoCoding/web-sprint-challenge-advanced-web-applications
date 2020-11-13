import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, useHistory} from "react-router-dom";

import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token")
  console.log(token)
  return ( 
    <Route
      {...rest}
    	render={props => token ?
        <Component {...props} />   :  <Redirect to="/fail" />
      }
    />
  )
};

function App() {

  const {push} = useHistory();

  function logout() {
    localStorage.clear()
    push('/')
  } 

  return (
      <div className="App">
        <button onClick={logout}>Logout</button>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/protected' component={BubblePage} />
      </div>
  );
}

export default App;
