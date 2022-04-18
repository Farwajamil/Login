import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [userna, setuserna] = useState("");
  const [userem, setuserem] = useState("");
  const [userpass, setuserpass] = useState("");
  const [userage, setuserage] = useState("");
  const [subform, setsubform] = useState([]);
  const Namehandler = (event) => {
    setuserna(event.target.value);
  };
  const Emailhandler = (event) => {
    setuserem(event.target.value);
  };
  const Passwordhandler = (event) => {
    setuserpass(event.target.value);
  };
  const Agehandler = (event) => {
    setuserage(event.target.value);
  };

  async function Formhandler(event) {
    event.preventDefault();
    const obj = {
      name: userna,
      email: userem,
      password: userpass,
      age: userage,
    };
    setsubform(obj);
    console.log(obj);
    setuserna("");
    setuserem("");
    setuserpass("");
    setuserage("");

    let result = await fetch(
      "https://api-nodejs-todolist.herokuapp.com/user/register",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }
    );
    result = await result.json();
    console.log("result", result);
    if (result) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/");
    }
  }
  return (
    <div>
      <form className="styleform" onSubmit={Formhandler}>
        <h1>Registration form</h1>
        <label>Enter Name</label>
        <input type="text" name="name" value={userna} onChange={Namehandler} />
        <label>Enter userEmail</label>
        <input
          type="email"
          name="email"
          value={userem}
          onChange={Emailhandler}
        />
        <label>Enter Password</label>
        <input
          type="password"
          name="password"
          value={userpass}
          onChange={Passwordhandler}
        />
        <label>Enter Age</label>
        <input type="number" name="age" value={userage} onChange={Agehandler} />
        <button className="action">Submit</button>
        <br />
        <div>
          Already registered <Link to="/"> Login </Link>
        </div>
      </form>
    </div>
  );
}
export default Signup;
