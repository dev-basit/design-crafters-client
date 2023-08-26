import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProfileHeader from "./header";
import { auth } from "../../services/authService";
import { userService } from "../../services/userService";
import { gigService } from "../../services/gigService";

function Profile() {
  const [userDetails, setUserDetails] = useState({});
  const [gigs, setGigs] = useState([]);
  const [showHireButton, setShowHireButton] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchGigs(id);
    fetchUserData(id);
  }, [id]);

  const fetchGigs = async (id) => {
    try {
      const response = await gigService.getMyGigs(id);
      setGigs(response.data);
    } catch (error) {}
  };

  const fetchUserData = async (id) => {
    try {
      const response = await userService.userDetails(id);
      const userData = response.data;
      setShowHireButton(userData._id !== auth.getCurrentUserDetails()._id ? true : false);
      setUserDetails({ ...userData });
    } catch (error) {}
  };

  return (
    <div className="profilePage">
      <ProfileHeader
        name={userDetails?.name?.toUpperCase()}
        profilePic={userDetails.profilePicture}
        gigs={gigs.length}
        showHireMe={showHireButton}
      />

      <div className="cards">
        {gigs.map((gig) => (
          <div className="profile-work">
            <img src={gig.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
