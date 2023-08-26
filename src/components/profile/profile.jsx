import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProfileHeader from "./header";
import { auth } from "../../services/authService";
import { userService } from "../../services/userService";
import { gigService } from "../../services/gigService";

function Profile() {
  const [userDetails, setUserDetails] = useState({});
  const [myGigs, setMyGigs] = useState([]);
  const [showHireButton, setShowHireButton] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const user = auth.getCurrentUserDetails();
    setUserDetails(user);
    fetchMyGigs(user._id);
    fetchUserData(user._id);
  }, []);

  useEffect(() => {}, []);

  const fetchMyGigs = async (id) => {
    try {
      const response = await gigService.getMyGigs(id);
      setMyGigs(response.data);
    } catch (error) {}
  };

  const fetchUserData = async (id) => {
    try {
      const response = await userService.getMyDetails(id);
      const { profilePicture, _id } = response.data;
      setShowHireButton(_id === id ? false : true);
      setUserDetails((prev) => ({ ...prev, profilePicture }));
    } catch (error) {}
  };

  return (
    <div className="profilePage">
      <ProfileHeader
        name={userDetails?.name?.toUpperCase()}
        profilePic={userDetails.profilePicture}
        gigs={myGigs.length}
        showHireMe={showHireButton}
      />

      <div className="cards">
        {myGigs.map((gig) => (
          <div className="profile-work">
            <img src={gig.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
