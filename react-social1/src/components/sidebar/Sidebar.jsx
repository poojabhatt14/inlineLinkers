import "./sidebar.css"
import {Feed,Bookmark,Groups} from "@mui/icons-material"



export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Feed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                    <Groups className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                    </li>

                    <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmark</span>
                    </li>

                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                
            </div>
        </div>
    )
}