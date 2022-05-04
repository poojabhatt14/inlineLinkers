import "./topbar.css";
import { Search} from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Inline Linkers</span>
        </Link>
      </div>
      <div className="topbarCenter">
        
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
        <Link to="/search-text" style={{ textDecoration: "none" }}>
        <Search className="searchIcon" />
        <span className="searchText">Search</span>
      </Link>
        </div>
        <div className="topbarIcons">
        <Link to="/messenger" style={{ textDecoration: "none" }}>
        <ChatIcon className="searchIcon" />
        <span className="searchText"></span>
        </Link>
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
          
        <div className="logout" >
          Logout<LogoutIcon />
          </div>
          
      </div>
    </div>
  );
}