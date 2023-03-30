import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookList from "./pages/books/BookList";
import NewBooks from "./pages/books/NewBooks";
import BurrowHistory from "./pages/burrow-history/BurrowHistory";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import BookLanding from "./pages/landing/BookLanding";
import SignIn from "./pages/signup-signin/SignIn";
import SignUp from "./pages/signup-signin/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "./pages/signup-signin/userSlice";

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    const obj = {
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName,
    };
    dispatch(setUser(obj));
  });

  return (
    <div className="">
      <Routes>
        {/* public routers */}
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

        <Route path="book/:bookId" element={<BookLanding />} />

        {/* private routers */}
        {/* all loged in access */}
        <Route path="burrow-history" element={<BurrowHistory />} />

        {/* only admin access */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="admin/books"
          element={
            <PrivateRoute>
              <BookList />
            </PrivateRoute>
          }
        />
        <Route
          path="admin/new"
          element={
            <PrivateRoute>
              <NewBooks />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
