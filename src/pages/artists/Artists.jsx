import React, { useState, useEffect } from "react";

import "./Artist.scss";
import { userService } from "../../services/userService";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = async () => {
    const response = await userService.getAllArtists();
    if (response.status === 200) setArtists(response.data.artists);
  };

  return (
    <div className="artists">
      {artists.length === 0 && <h1>No artists available.</h1>}

      {artists.length > 0 && <h1>Top artists available.</h1>}
      {artists.length > 0 &&
        artists.map((artist, index) => (
          <div className="artistsCardContainer" key={index}>
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
