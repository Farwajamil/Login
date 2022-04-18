import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
function Logout() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user-info");

  function checkout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="stylelog">
      <h1>Welcome</h1>
      <h2>This is a home page</h2>
      <button>Creative</button>
      {auth ? <button onClick={checkout}>LogOut</button> : null}
    </div>
  );
}
export default Logout;
