import React from "react";
import "./Headercartmodal";
import thumbnail from "../../images/image-product-1-thumbnail.jpg";
export const Headercartmodal = () => {
  return (
    <div className="headermodal">
      <div className="header-modal-full">
        <h3>Cart</h3>
        <hr></hr>
        <div className="header-modal-content">
          <img src={thumbnail}></img>
          <p>Fall Limited Edition Sneakers</p>
        </div>
      </div>
    </div>
  );
};
