import React from "react";
import { AiFillStar } from "react-icons/ai";

import "../styles/components/adventures-card.css";

interface adventureCard {
  path: string;
  title: string;
  description: string;
  price: string;
  rate: string;
}

const AdventuresCard = ({
  path,
  title,
  description,
  price,
  rate,
}: adventureCard) => {
  return (
    <div className="adventures-card-container">
      <img src={path} alt="" />
      <h4>{title}</h4>
      <h3>{description}</h3>
      <span>{price}</span>
      <div className="rate-notation">
        <h5>{rate}</h5>
        <AiFillStar className="rate-notation-icon" size={13} />
      </div>
    </div>
  );
};

export default AdventuresCard;
