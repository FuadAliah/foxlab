import React from "react";
import { useParams } from "react-router";
import { useFirestore } from "../../Firebase/useFirestore";

const DetailedPage = () => {
  const { id } = useParams();
  const PATHNAME = window.location.pathname;

  const Pathname = path => {
    const numOfChar = window.location.pathname.lastIndexOf("/");
    const pathname = window.location.pathname.slice(1, numOfChar);
    return pathname;
  };

  const { items: data } = useFirestore(Pathname(PATHNAME + `/${id}`));
  let Detailed = data.filter(param => param.id === id);

  return (
    <div>
      {Detailed.map(b => (
        <div key={b.id}>
          <div>{b.name}</div>
          <div>{b.tagline}</div>
        </div>
      ))}
    </div>
  );
};

export default DetailedPage;
