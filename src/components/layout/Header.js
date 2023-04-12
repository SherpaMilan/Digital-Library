import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase-config/firebaseConfig";
import { setUser } from "../../pages/signup-signin/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
        toast.success("logout successfully");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <Navbar bg="none" expand="md border">
      <Container>
        <Navbar.Brand>
          <Link to="/">DL</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-4">
            {user?.uid && <div className="">Welcome {user.name}</div>}

            <Link to="/" title="Home">
              <i className="fa-solid fa-house"></i>
            </Link>
            <Link to="/dashboard" title="Home">
              <i className="fa-solid fa-gauge"></i>
            </Link>

            {user?.uid ? (
              <>
                {user?.role === "admin" && (
                  <Link to="/admin/books">
                    <i className="fa-solid fa-book"></i>
                  </Link>
                )}

                <Link to="#" onClick={handleOnLogout}>
                  <i className="fa-solid fa-person-walking-arrow-right"></i>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link to="/signup" title="Sing Up">
                  <i className="fa-solid fa-user-pen"></i>
                </Link>
                <Link to="/signin">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
