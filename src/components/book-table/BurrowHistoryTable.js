import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getBurrowsAction,
  returenBookAction,
} from "../../pages/burrow-history/burrowAction";
import { Button } from "react-bootstrap";
import { ReviewForm } from "../Review/ReviewForm";

import { PopUp } from "../popup/PopUp";
import { setModal } from "../../system/systemSlice";
export const BurrowHistoryTable = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { burrow } = useSelector((state) => state.burrow);
  const { reviews } = useSelector((state) => state.book);

  const [selectedId, setSelectedId] = useState({});

  useEffect(() => {
    dispatch(getBurrowsAction(user.uid));
  }, [dispatch, user.uid]);

  const handleOnReturn = (obj) => {
    console.log(obj);
    dispatch(returenBookAction(obj));
  };

  const handleOnReview = (obj) => {
    setSelectedId(obj);
    //show modal
    dispatch(setModal(true));
    //set selectd burrow histry item
  };

  const listOfReviedBooksBurrowIds = reviews.map((item) => item.burrowId);
  return (
    <>
      <PopUp title="Leave your Review">
        <ReviewForm selectedId={selectedId} />
      </PopUp>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Burrowed Date</th>
            <th>Return(ing/ed) Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrow?.map(
            ({ bookName, BurrowedAt, retureAt, returned, bookId, id }) => (
              <tr>
                <td>{bookName}</td>
                <td>{new Date(BurrowedAt).toLocaleDateString()}</td>
                <td>{new Date(retureAt).toLocaleDateString()}</td>

                <td>
                  {returned ? (
                    <Button
                      onClick={() => handleOnReview({ bookId, burrowId: id })}
                      disabled={listOfReviedBooksBurrowIds.includes(id)}
                    >
                      Review Now
                    </Button>
                  ) : (
                    <Button onClick={() => handleOnReturn({ bookId, id })}>
                      Return
                    </Button>
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
};
