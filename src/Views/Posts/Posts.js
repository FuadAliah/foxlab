import Post from "../../Components/Post/Post";
import Skelton from "../../Components/Skelton/Skelton";
import { useFirestore } from "../../Firebase/useFirestore";

import "./Posts.scss";

const Posts = props => {
  const { items, isLoad } = useFirestore("items");
  const { items: experience } = useFirestore("user-experience");
  const { items: prototyping } = useFirestore("prototyping");
  const { items: branding } = useFirestore("branding");
  const { items: freelance } = useFirestore("freelance");
  const { items: advertising } = useFirestore("advertising");
  const { items: sketch } = useFirestore("sketch");
  const { items: designBooks } = useFirestore("design-books");
  const { items: typography } = useFirestore("typography");
  const { items: art } = useFirestore("art");
  // const { items: icons } = useFirestore("icons");
  // const { items: threeDPrinting } = useFirestore("3d-printing");
  // const { items: photoshop } = useFirestore("photoshop");
  // const { items: squarespace } = useFirestore("squarespace");
  // const { items: artBooks } = useFirestore("art-books");
  // const { items: threeDs } = useFirestore("3ds");

  let path = props.match.path;

  return (
    <div className="posts">
      {isLoad && (
        <Post
          Items={
            path === "/items"
              ? items
              : path === "/user-experience"
              ? experience
              : path === "/prototyping"
              ? prototyping
              : path === "/branding"
              ? branding
              : path === "/freelance"
              ? freelance
              : path === "/advertising"
              ? advertising
              : path === "/sketch"
              ? sketch
              : path === "/design-books"
              ? designBooks
              : path === "/typography"
              ? typography
              : path === "/art"
              ? art
              : null
          }
        />
      )}
      {!isLoad && Array.from("x".repeat(15)).map((post, idx) => <Skelton type="posts" element="card" key={idx} />)}
    </div>
  );
};

export default Posts;
