import React from "react";

import airbnbLogo58 from "../images/airbnb-logo-58.png";

import "../styles/components/destinations-card.css";

interface destinationsCardParams {
  path: string;
  title: string;
  price: string;
}

const DestinationsCard = ({ path, title, price }: destinationsCardParams) => {
  return (
    <div className="destination-card-container">
      <div
        className="destination-card-hero"
        style={{
          background: `url(${path}) no-repeat center`,
          backgroundSize: `cover`,
        }}
      >
        <img src={airbnbLogo58} alt="" />
      </div>
      <h5>{title}</h5>
      <span>{price}</span>
    </div>
  );
};

export default DestinationsCard;
