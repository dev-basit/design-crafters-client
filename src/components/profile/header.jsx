import React from "react";
import "./profile.scss"; // Import the SCSS file

const ProfileHeader = ({ name, profilePic, gigs }) => {
  return (
    <div className="profile-header">
      <div className="profile-pic-container">
        <img className="profile-pic" src={profilePic} alt="Profile" />
      </div>
      <div className="profile-info">
        <div className="name">{name}</div>
        <div className="gigs">{gigs} Gigs</div>
      </div>
      <div className="hire-button">
        <button>Hire Me</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
