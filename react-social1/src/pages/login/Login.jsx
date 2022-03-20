import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls.js"
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
//import {CircularProgress} from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext); //diff

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email:email.current.value, password:password.current.value },
      dispatch
    ); 
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Inline Linkers</h3>
          <span className="loginDesc">
            Inline Linkers Making your Life Easier.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              //rspattern=".+@banasthali\.in"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ?"Loading": "Log In"}
            </button> 
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/" style={{ textDecoration: "none" }}>
            <button className="loginRegisterButton">
            {isFetching ?"Loading": "Create A New account"}
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}