import { useContext, useRef,useState} from "react";
import "./searchResult.css";
import axios from "axios";
import { Search} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Post from "../../components/post/Post";


export default function SearchResult({ username }) {
  const searchText = useRef();
  const [posts,setPosts] = useState([]);
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
    const searchPosts = async () => {
        const res = await axios.get("/posts/search/" + searchText.current.value)
        setPosts(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
    };

  
const handleKeyPress = (e) =>{
    if(e.keyCode===13){
      searchPosts();
    }
  };


  return (
      <>
    <div className="searchbarContainer">
      <div className="searchbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Inline Linkers</span>
        </Link>
      </div>
      <div className="searchbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            onKeyPress = {handleKeyPress}
            ref={searchText}
          />
          <button onClick = {searchPosts} className="searchButton">Search </button>
        </div>
      </div>
      <Link to={`/profile/${user.username}`}>
          <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
      <div className="feed">
      <div className="searchedPosts">
      {(!username || username === user.username)}
      {posts.map((p) => (
        <Post key={p._id} 
        post={p} />
      ))}
    </div>
    </div>
    </>
  );
  
}