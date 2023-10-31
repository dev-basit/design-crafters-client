import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { projectService } from "../../services/projectService";
import { auth } from "../../services/authService";

const Orders = () => {
  const [projects, setProjects] = useState([]);

  const currentUser = auth.getCurrentUserDetails();

  useEffect(() => {
    // console.log("projects auth ", auth.getCurrentUserDetails());
    getProjects(
      currentUser.userType === "seller" ? `seller=${currentUser._id}` : `buyer=${currentUser._id}`
    );
  }, []);

  const getProjects = async (queryParams) => {
    try {
      const response = await projectService.getAllprojects(queryParams);
      console.log("projects ", response.data);
      setProjects(response.data);
    } catch (error) {}
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.userType === "seller" ? "Buyer" : "Seller"}</th>
          </tr>
          {projects.map((item) => (
            <tr key={item._id}>
              <td>{item?.gig?.image && <img className="image" src={item?.gig?.image} alt="gig" />}</td>
              <td>{item.gig.title}</td>
              <td>{item.gig.price}</td>
              <td>{currentUser.userType === "seller" ? item.buyer.name : item.seller.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
