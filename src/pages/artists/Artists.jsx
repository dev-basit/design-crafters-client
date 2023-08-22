import React from "react";

import "./Artist.scss";
import { artists } from "../../data";

function Artists() {
  return (
    <div className="artists">
      {artists.length === 0 && <h1>No artists available.</h1>}

      {artists.length > 0 && <h1>Top artists available.</h1>}
      {artists.length > 0 &&
        artists.map((card, index) => (
          <div className="artistsCardContainer" key={index}>
            <div className="info">
              <img src={card.pp} alt="" />
              <div>
                <h3>{card.username}</h3>
                <span>{card.cat}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Artists;
