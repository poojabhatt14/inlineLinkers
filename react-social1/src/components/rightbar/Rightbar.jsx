import  "./rightbar.css";

export default function Rightbar({ user }) {
    const HomeRightbar = () => {
    return (
      <>
      </>
    );
  };

        const ProfileRightbar = () => {
            return (
              <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                  <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Hostel:</span>
                    <span className="rightbarInfoValue">{user.hostel}</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                  </div>
                </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}