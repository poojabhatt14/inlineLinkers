import "./share.css";
import {Room} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const category = useRef();
  const [file, setFile] = useState(null);
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      category: category.current.value,
      hostel: user.hostel,
    };
    try {
      await axios.post("/posts", newPost);
      
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" 
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""/>
          <input placeholder= {"What's on your mind " + user.username + "?"} 
          className="shareInput"
          ref = {desc}
          />
          <input placeholder="Enter category name" className="chip" ref = {category} />
        </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
          <button className="shareButton" type="submit">Share</button>
        </form>
    </div>
    </div>
  )
}
