import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

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
        <Component {...props} />   :  <Redirect to="/" />
      }
    />
  )
};

function App() {

  function logout() {
    localStorage.clear()
  }

  return (
    <Router>
      <div className="App">
        <button onClick={logout}>Logout</button>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/protected' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
