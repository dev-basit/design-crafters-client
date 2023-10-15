import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.image} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.user?.profilePicture} alt="" />
            <h3>{item.user?.name.toUpperCase()}</h3>
          </div>
          {/* <p>{item.desc}</p> */}
          {/* <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div> */}
        </div>
        <hr />
        <div className="detail">
          <span>{item.title}</span>
          {/* <img src="./img/heart.png" alt="" /> */}
          {/* <div className="price"> */}
          <p>Price: PKR {item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
