import React from "react";
import ProfileHeader from "./header";
import { gigs } from "../../data";
import GigCard from "../gigCard/GigCard";

function Profile() {
  return (
    <div className="profilePage">
      <ProfileHeader
        name="John Doe"
        profilePic="https://placekitten.com/200/200" // Replace with the actual profile picture URL
        gigs={15} // Replace with the actual number of gigs
      />

      <div className="cards">
        {gigs.map((gig) => (
          <div className="profile-work">
            <img src={gig.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
