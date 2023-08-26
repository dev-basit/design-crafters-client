import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MyGigs.scss";
import { auth } from "../../services/authService";
import { gigService } from "../../services/gigService";

function MyGigs() {
  const [userDetails, setUserDetails] = useState({});
  const [myGigs, setMyGigs] = useState([]);

  useEffect(() => {
    const user = auth.getCurrentUserDetails();
    setUserDetails(user);
    fetchMyGigs(user._id);
  }, []);

  useEffect(() => {}, [myGigs]);

  const fetchMyGigs = async (id) => {
    try {
      const response = await gigService.getMyGigs(id);
      setMyGigs(response.data);
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    try {
      await gigService.deleteGig(id);
      setMyGigs((prev) => prev.filter((gig) => gig._id !== id));
    } catch (error) {}
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          {userDetails.userType === "seller" && (
            <Link to="/gig/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Deliverd In</th>
            <th>Action</th>
          </tr>
          {myGigs.map((gig) => {
            return (
              <tr style={{ textAlign: "center" }}>
                <td>
                  <img className="image" src={gig.image} alt="" />
                </td>
                <td>{gig.title}</td>
                <td>PKR {gig.price}</td>
                <td>{gig.deliveredIn} days</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig._id)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
