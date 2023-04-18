import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../system/systemSlice";

export const PopUp = ({ children, title }) => {
  const dispatch = useDispatch();

  const { showModal } = useSelector((state) => state.system);

  return (
    <>
      <Modal show={showModal} onHide={() => dispatch(setModal(false))}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
