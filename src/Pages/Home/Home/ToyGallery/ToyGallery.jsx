import React from "react";

const ToyGallery = ({ toy }) => {
  //   console.log(toy);
  return (
    <div>
      <img className="w-96 h-52." src={toy.image} alt="" />
    </div>
  );
};

export default ToyGallery;