import type { Group } from "@/types";
import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

const collectionName: string = "groups";

/**
 * Возвращает все документы "групп", что записаны в Firebase.
 */
export const getGroups = async (): Promise<Group[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  // Объявляем переменную, куда будем собирать прочитанные данные.
  const groups: Group[] = [];
  querySnapshot.forEach((doc) => {
    // По очереди добавляем данные в переменную
    groups.push({ id: doc.id, ...doc.data() } as Group);
  });
  return groups;
};
