import "./friend.css"


export default function Friend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={PF+user.profilePicture} alt=""/>
                <span className="sidebarFriendName">{user.username+"@"+user.hostel}</span>
    </li>
  )
}
