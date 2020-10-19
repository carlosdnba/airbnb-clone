import React from "react";
import { AiFillStar } from "react-icons/ai";

import "../styles/components/around-world-card.css";

import Img from "../images/around-world-1.png";

interface aroundWorldCard {
  path: string;
  location: string;
  rate: string;
  price: string;
}

const AroundWorldCard = ({ path, location, rate, price }: aroundWorldCard) => {
  return (
    <div className="around-world-card-container">
      <img src={path} alt="" />
      <div className="around-world-card-row">
        <div>
          <button>Superhost</button>
          <span>{location}</span>
        </div>
        <div className="rate-row">
          <AiFillStar size={14} color="#FF5A5F" />
          <h6>{rate}</h6>
        </div>
      </div>
      <span>{price}</span>
    </div>
  );
};

export default AroundWorldCard;
