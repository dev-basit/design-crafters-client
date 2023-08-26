import React from "react";
import "./Card.scss";

function Card({ card }) {
  return (
    <div className="Card" onClick={() => (window.location = `/profile/${card.user._id}`)}>
      <img src={card.image} alt="" />
      <div className="info">
        <img src={card.user.profilePicture} alt="" />
        <div className="texts">
          <h3>{card.user.name.toUpperCase()}</h3>
          {/* <span>{card.user.name}</span> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
