import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getBurrowsAction,
  returnBookAction,
} from "../../pages/burrow-history/burrowAction";
import { Button } from "react-bootstrap";

export const BurrowHistoryTable = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { burrow } = useSelector((state) => state.burrow);

  useEffect(() => {
    dispatch(getBurrowsAction(user.uid));
  }, [dispatch, user.uid]);

  const handleOnreturn = (obj) => {
    dispatch(returnBookAction(obj));
    // console.log(obj);
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Burrowed Date</th>
          <th>Returned Date</th>
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
                  <Button>Review Now</Button>
                ) : (
                  <Button onClick={() => handleOnreturn({ bookId, id })}>
                    Return
                  </Button>
                )}
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};
