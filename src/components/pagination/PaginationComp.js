import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

export const PaginationComp = ({
  display = [],
  setActive,
  active,
  bookPerPage,
}) => {
  const handleOnPaginationClick = (page) => {
    setActive(page);
  };

  const pages = Math.ceil(display.length / bookPerPage);

  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleOnPaginationClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};
