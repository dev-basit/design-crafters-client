import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import "./Artist.scss";
import { userService } from "../../services/userService";
// import { Link } from "react-router-dom";

function Artists() {
  const [artists, setArtists] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = async () => {
    try {
      const response = await userService.getAllArtists();
      console.log("resposne data artist ", response);
      if (response.status === 200) setArtists(response.data.artists);
    } catch (error) {}
  };

  return (
    <div className="artists">
      {artists?.length === 0 && <h1>No artists available.</h1>}

      {artists?.length > 0 && <h1>Top artists available.</h1>}
      {artists?.length > 0 &&
        artists?.map((artist, index) => (
          <div
            className="artistsCardContainer"
            key={index}
            onClick={
              () => (window.location = `/profile/${artist._id}`)
              // history.push(`/profile/${artists._id}`)
            }
          >
            <div className="info">
              <img src={artist.profilePicture} alt="" />
              <div>
                <h3>{artist.name.toUpperCase()}</h3>
                {/* <span>{card.cat}</span> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Artists;
