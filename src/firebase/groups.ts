import type { Group } from "@/types";
import { db } from "./config";
import {
  addDoc,
  collection,
  DocumentReference,
  getDocs,
  onSnapshot,
  query
} from "firebase/firestore";
import type { Ref } from "vue";

/**
 * Название коллекций,
 * поскольку оно будет использоваться несколько раз.
 */
const COLLECTION_NAME: string = "groups";

/**
 * Возвращает все документы "групп", что записаны в Firebase.
 * Поскольку данные запрашиваются не один раз, а постоянно,
 * то "асинхронность" функции можно убрать.
 *
 * @param groups: Ref<Group[]> - нужно не для того,
 * чтобы передавать значения внутрь функции, а для того,
 * чтобы "зацепиться" "слушателем".
 */
export const getGroups = (groups: Ref<Group[]>): void => {
  /*
   * Переменная querySnapshot используется,
   * но ни VS Code, ни Eslint этого не видят.
   * А последний даже предупреждение выдаёт.
   * Вот и отключаю вручную уведомление
   * об не использовании этой переменной.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const querySnapshot = getDocs(collection(db, COLLECTION_NAME));

  onSnapshot(query(collection(db, COLLECTION_NAME)), (querySnapshot) => {
    // Объявляем временную переменную, куда будем собирать прочитанные данные.
    const groupsTemp: Group[] = [];
    querySnapshot.forEach((doc) => {
      // По очереди добавляем данные в переменную
      groupsTemp.push({ id: doc.id, ...doc.data() } as Group);
    });
    groups.value = groupsTemp;
  });
};

/**
 * Добавляем новую запись в коллекцию Groups
 *
 * @param group объект, который надо сохранить в Firebase
 * @returns ссылку на только что добавленный документ
 */
export const addGroup = async (group: Group): Promise<DocumentReference> => {
  return await addDoc(collection(db, COLLECTION_NAME), group);
};
