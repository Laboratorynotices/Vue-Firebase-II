import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

/**
 * Возвращает все документы "крупп", что записаны в Firebase.
 * Пока не возвращает, но будет.
 */
export const getGroups = async (): Promise<void> => {
  const querySnapshot = await getDocs(collection(db, "groups"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};
