import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Assignment 2/Login";
import Signup from "./Assignment 2/Signup";
import Logout from "./Assignment 2/Logout";
function App() {
  return (
    <div>
      <Router>
       
        <Routes>
          <Route path="/" exact  element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
