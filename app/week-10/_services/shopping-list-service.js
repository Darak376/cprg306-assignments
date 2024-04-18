import { db } from "../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  const itemsCollection = collection(db, `users/${userId}/items`);
  console.log("items collection is run");
  const querySnapshot = await getDocs(itemsCollection);
  console.log("query snapshot is run");
  querySnapshot.forEach((doc) => {
    items.push( doc.data());
  });
  return items;
};

export const addItem = async (userId, item) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
};
