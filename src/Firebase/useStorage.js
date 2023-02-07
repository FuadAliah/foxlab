import { useEffect, useState } from "react";
import { storage, db } from "./config";

const useStorage = image => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  useEffect(() => {
    const storageRef = storage.ref(image.name);
    const storeRef = db.collection("test");

    storageRef.put(image).on(
      "state_changed",
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      err => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        storeRef.add({
          thumb: url,
        });
        setUrl(url);
      }
    );
  }, [image]);

  return { progress, error, url };
};

export default useStorage;
