import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formdata, setformdata] = useState([]);
  const enteremail = (event) => {
    setemail(event.target.value);
  };
  const enterpassword = (event) => {
    setpassword(event.target.value);
  };
  async function enterform(event) {
    event.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    setformdata(obj);
    console.log(obj);
    setemail("");
    setpassword("");

    let result = await fetch(
      "https://api-nodejs-todolist.herokuapp.com/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    result = await result.json();
    console.log("result", result);
    if (result.token) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/logout");
    }
  }
  return (
    <React.Fragment>
      <div className="style-login">
        <h1>Login page</h1>
        <form onSubmit={enterform}>
          <label>Enter userEmail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={enteremail}
          />
          <label>Enter password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={enterpassword}
          />
          <button type="submit">Login</button>
          <br />
          <div>
            Have not registered <Link to="/register">Register </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Login;
