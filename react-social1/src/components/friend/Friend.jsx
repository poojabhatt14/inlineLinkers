import "./friend.css"
import { Users } from "../../dummyData";

export default function Friend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={PF+user.profilePicture} alt=""/>
                <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
