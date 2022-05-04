import "./post.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useContext,useState,useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  //deleting post 
  const deletePostOnClick = () => {
    try {
       axios.delete("/posts/delete/" + post._id);
    } catch (err) {}
  };
  

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg" 
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <Link to={`/profile/${user.username}` }style= {{ textDecoration: "none" }}>
            <span className="postUsername">{user.username+"@"+user.hostel}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
          {post.userId === currentUser._id 
            ? <DeleteOutlineOutlinedIcon className="delete" onClick={deletePostOnClick}/>
            : <MoreVertOutlinedIcon className="delete"/>
           }
          </div>
          
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <br></br>
          <br></br>
          <span className="categoryText">{"#"+post?.category}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomRight">
            <input
            placeholder="add a comment"
            type="text"
            className="commentInput"
          />
          </div>
        </div>
      </div>
    </div>
  );
}