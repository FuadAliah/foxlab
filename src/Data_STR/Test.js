import { prototyping } from "./Collections/Prototyping";

const Test = () => {
  return (
    <div>
      {prototyping.map(item => (
        <div>{JSON.stringify(item.thumb) + ","}</div>
      ))}
    </div>
  );
};

export default Test;
