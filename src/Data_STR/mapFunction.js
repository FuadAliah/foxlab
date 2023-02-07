import { names, taglines } from "./Collections/Branding";

const Data = () => {
  const data = names.map((name, i) => ({
    id: i + 1,
    name,
    tagline: taglines[i],
    // slug: taglines[i].replace(/[,+]/g, "").split(" ").join("-"),
    // thumb: thumbs[i],
    // tags: "Prototyping",
    // website_url: links[i],
    // marketing_url: "url",
    // ref_url: "?ref=pocket.design",
  }));

  return <div>{JSON.stringify(data)}</div>;
};

export default Data;
