import React from "react";

import "./Skelton.scss";

const Skelton = ({ type, element }) => {
  const classNames = `skelton ${type}`;

  return (
    <div className={classNames}>
      <div className="motion"></div>
      <div className={`${element}-skelton`}>
        <div className="head-skelton"></div>
        <div className="body-skelton">
          <div className="title-skelton"></div>
          <div className="text-skelton"></div>
          <div className="text-skelton"></div>
        </div>
      </div>
    </div>
  );
};

export default Skelton;
