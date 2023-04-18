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

export const returenBookAction = (obj) => async (dispatch) => {
  try {
    const updatingObj = {
      returned: true,
      retureAt: Date.now(),
    };

    //update burrowing table basedon burrowing ID
    // await db.collection("burrowing").doc(obj.id).update(updatingObj);

    await updateDoc(doc(db, "burrowing", obj.id), updatingObj);

    // update book table based on book Id
    const bookUpdate = {
      available: true,
      availableFrom: Date.now(),
    };

    // await db.collection("books").doc(obj.bookId).update(bookUpdate);

    await updateDoc(doc(db, "books", obj.bookId), bookUpdate);

    toast.success("You have reurned the book successfully");
    // re fetch the data
  } catch (error) {
    toast.error(error.message);
  }
};
