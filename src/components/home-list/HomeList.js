import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CustomeCard } from "../custom-card/CustomeCard";

export const HomeList = ({ display }) => {
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {display?.map((item) => (
        <CustomeCard key={item.id} {...item} />
      ))}
    </div>
  );
};
