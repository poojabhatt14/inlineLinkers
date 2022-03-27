import React from 'react';
import {useRef} from "react";
import axios from "axios";
import "./verify.css";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function Otpform() {
    const email = useRef();
    const sendotp = async () =>{
        try{
            let url = "auth/email-send"
            let options = {
                method : "POST",
                url : url,
                data : {email:email.current.value}
            }
            let response = await axios(options)
            let record = response.data;
            if(record.statusText === "Success"){
                toast.success(record.message);
            }
            else
            toast.error(record.message);    
        }catch(err){
            console.log("Something Went Wrong");
        }
    }

  return (
    <div className="verify">
      <div className="verifyWrapper">
        <div className="verifyLeft">
          <h3 className="verifyLogo">Inline Linkers</h3>
          <span className="verifyDesc">
            Inline Linkers Making your Life Easier.
          </span>
        </div>
        <div className="verifyRight">
        <ToastContainer />
            <form className="verifyBox" >
           <h3 className="verifytext">Verify Your Email Id</h3>
            <input
              placeholder="Email"
              type="email"
              required
              className="verifyInput"
              ref={email}
            />
            <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="verifyButton" type="submit" onClick={sendotp} >
               Send OTP
            </button> 
            </Link>
            <span className="account" >Already have an account?</span>
            <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="accountButton">
            Login
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
