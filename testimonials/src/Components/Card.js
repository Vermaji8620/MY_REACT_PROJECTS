import React from "react";
import { reviews } from "../data";

const Card = ({ index }) => {
  return (
    <div key={reviews[index + 1]}>
      <div className="text-center font-bold text-3xl p-4">
        {reviews[index].name}
      </div>
      <div className="text-center p-4">{reviews[index].job}</div>
      <div>{reviews[index].text}</div>
    </div>
  );
};

export default Card;
