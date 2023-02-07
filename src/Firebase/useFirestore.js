import { useEffect, useState } from "react";
import { db } from "./config";

export const useFirestore = data => {
  const [items, setItems] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const unsubscribe = db
      .collection(data)
      .orderBy("id")
      .onSnapshot(snap => {
        let fetched = snap.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        setItems(fetched);
        setIsLoad(true);
      });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  return { items, isLoad };
};
