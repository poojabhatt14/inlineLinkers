import React from 'react'
import { Link } from "react-router-dom";
import {useRef} from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./passwordform.css";


export default function Passwordform() {
    const email = useRef();
    const otp = useRef();
    const password = useRef();
    const cpassword = useRef();
    const history = useHistory();

    const changepassword = async (e) =>{
        e.preventDefault();
        if (cpassword.current.value !== password.current.value) {
            cpassword.current.setCustomValidity("Passwords don't match!");
          }
          else {
            const user = {
                email: email.current.value,
                code: otp.current.value,
              password: password.current.value,
            };
            console.log(user.code)
            console.log(user.email)
        try{
            await axios.post("/auth/change-password", user);
        history.push("/login");
        }catch(err){
            console.log("Something Went Wrong");
        }
    }
};

  return (
    <div className="password">
      <div className="passwordWrapper">
        <div className="passwordLeft">
          <h3 className="passwordLogo">Inline Linkers</h3>
          <span className="passwordDesc">
            Inline Linkers Making your Life Easier.
          </span>
        </div>
        <div className="passwordRight">
        <form className="passwordBox" >
           <h3 className="passwordtext">Reset your password</h3>
            <input
              placeholder="OTP Code"
              required
              className="passwordInput"
              ref={otp}
            />
            <input
              placeholder="Confirm Email"
              required
              className="passwordInput"
              type = "email"
              ref={email}
            />
            <input
              placeholder="Enter New Password"
              required
              type="password"
              className="passwordInput"
              ref={password}
            />
            <input
              placeholder="Confirm New Password"
              required
              type="password"
              className="passwordInput"
              ref={cpassword}
            />
            <button className="passwordButton" type="submit" onClick={changepassword} >
               Change Password
            </button> 
            <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="backButton">
            Back
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
