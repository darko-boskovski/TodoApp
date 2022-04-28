import React from "react";
import "./App.css";
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';





const App = () => {

  return  (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Home />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/user/:id" element={<UserInfo />} />
            
        </Routes>
      </Router>
    </>
  );

};

export default App;
