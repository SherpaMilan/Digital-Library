import React from "react";

const topRating = 5;

export const Ratings = ({ rating }) => {
  const diff = topRating - +rating;

  const rtn = new Array(+rating).fill("");
  const dffRtn = new Array(diff).fill("");

  return (
    <div className="ratings">
      {rtn.map((itm, i) => (
        <i key={i} className="fa-solid fa-star text-warning"></i>
      ))}
      {dffRtn.map((itm, i) => (
        <i key={i} className="fa-solid fa-star"></i>
      ))}
    </div>
  );
};
