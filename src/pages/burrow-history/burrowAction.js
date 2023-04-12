import { async } from "@firebase/util";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/firebaseConfig";
import { setBurrow } from "./burrowSlice";

export const getBurrowsAction = (userId) => async (dispatch) => {
  try {
    const q = query(collection(db, "burrowing"), where("userId", "==", userId));

    const querySnapshot = await getDocs(q);
    let burrow = [];

    querySnapshot.forEach((doc) => {
      const { id } = doc;

      const data = { ...doc.data(), id };
      burrow.push(data);
    });

    dispatch(setBurrow(burrow));
  } catch (error) {
    toast.error(error.message);
  }
};

export const returnBookAction = (obj) => async (dispatch) => {
  try {
    // declarning the object from firebase burrowing table
    const updatingObj = {
      returned: true,
      retureAt: Date.now(),
    };
    //update borrowing table based on borrowing ID

    await updateDoc(doc(db, "burrowing", obj.id), updatingObj);

    toast.success("book updated successfully");
    //update book table based on book Id
    const bookUpdate = {
      available: true,
      availableFrom: Date.now(),
    };
    await updateDoc(doc(db, "books", obj.bookId), bookUpdate);
  } catch (error) {
    toast.error(error.message);
  }
};
