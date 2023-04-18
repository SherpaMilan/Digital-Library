import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/firebaseConfig";
import { getBookSuccess, setSelectedBook, setReviews } from "./bookSlice";

// =========== books
export const getBooksAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, "books"));

    const querySnapshot = await getDocs(q);
    let books = [];

    querySnapshot.forEach((doc) => {
      const { id } = doc;

      const data = { ...doc.data(), id };
      books.push(data);
    });

    dispatch(getBookSuccess(books));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addBookAction = (formData) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "books"), formData);

    if (docRef?.id) {
      toast.success("New Book has been added in the database.");
      dispatch(getBooksAction());
      return;
    }
    toast.error("unable to add the book, try again later.");
  } catch (error) {
    toast.error(error.message);
  }
};

//update book table
export const updateBooksAction =
  ({ bookId, ...rest }) =>
  async (dispatch) => {
    try {
      const updatePending = setDoc(doc(db, "books", bookId), rest, {
        merge: true,
      });

      toast.promise(updatePending, {
        pending: "Please wait...",
      });

      await updatePending;

      toast.success(
        "Book has been burrowed. Check your burrow history to see the book"
      );
      await dispatch(getBooksAction());
      dispatch(setSelectedBook(bookId));
    } catch (error) {
      toast.error(error.message);
    }
  };

//burrow book
export const addBurrowBookAction = (data) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "burrowing"), data);

    if (docRef?.id) {
      // update books table
      const obj = {
        bookId: data.bookId,
        available: false,
        availableFrom: data.retureAt,
      };
      dispatch(updateBooksAction(obj));

      return;
    }
    toast.error("unable to burrow the book, try again later.");
  } catch (error) {
    toast.error(error.message);
  }
};

//burrow book
export const deleteBookActions = (id) => async (dispatch) => {
  try {
    const deletePending = deleteDoc(doc(db, "books", id));

    toast.promise(deletePending, {
      pending: "Please wait..",
    });

    await deletePending;

    toast.success("The book has been deleted successfully");
    dispatch(getBooksAction());
  } catch (error) {
    toast.error(error.message);
  }
};

// ============== reviews

//add reviews to db
export const addReviewsAction = (data) => async (dispatch) => {
  try {
    console.log(data);
    const result = await addDoc(collection(db, "reviews"), data);

    console.log(result);
    if (result?.id) {
      toast.success("your reviews has been added");
      dispatch(getReviewsAction());
      return;
    }

    toast.error("Unable to add revies, please try again later");
  } catch (error) {
    toast.error(error.message);
  }
};

//get reviews from db

export const getReviewsAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, "reviews"));

    const querySnapshot = await getDocs(q);
    let reviews = [];

    querySnapshot.forEach((doc) => {
      const { id } = doc;

      const data = { ...doc.data(), id };
      reviews.push(data);
    });

    console.log(reviews);
    dispatch(setReviews(reviews));
  } catch (error) {
    toast.error(error.message);
  }
};
