import React from 'react';
import {useRef} from "react";
import axios from "axios";
import "./otpform.css";
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
    <div className="otp">
      <div className="otpWrapper">
        <div className="otpLeft">
          <h3 className="otpLogo">Inline Linkers</h3>
          <span className="otpDesc">
            Inline Linkers Making your Life Easier.
          </span>
        </div>
        <div className="otpRight">
        <ToastContainer />
            <form className="otpBox" >
           <h3 className="otptext">Reset your password</h3>
            <input
              placeholder="Email"
              type="email"
              required
              className="otpInput"
              ref={email}
            />
            <Link to="/password-change" style={{ textDecoration: "none" }}>
            <button className="otpButton" type="submit" onClick={sendotp} >
               Send OTP
            </button> 
            </Link>
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
