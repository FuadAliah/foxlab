import React, { useEffect } from "react";
import useStorage from "../../Firebase/useStorage";

import "./ProgressBar.scss";

const ProgressBar = ({ thumb, setThumb }) => {
  const { url, progress } = useStorage(thumb);
  const bar = document.querySelector(".progress-load");

  useEffect(() => {
    if (progress === 100) bar.style.opacity = 0;
    // eslint-disable-next-line
  }, [url, setThumb]);

  return <div className="progress-load" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
