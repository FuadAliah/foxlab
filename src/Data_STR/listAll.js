import { storageRef } from "../Firebase/config";

var i = 0;
const DisplayImages = (row, images) => {
  images.getDownloadURL().then(url => {
    // console.log(JSON.stringify(url))
  });
};

storageRef
  .child("prototyping/")
  .listAll()
  .then(result => {
    result.items.forEach(image => {
      i++;
      DisplayImages(i, image);
    });
  });

export default storageRef;
