import React from "react";

import Marquee from "react-fast-marquee";

const ToyGallery = ({ toy }) => {
  console.log(toy);
  return (
    
     <div>
  <img className="w-96" src={toy.image} alt="" />
     </div>
        
   
  
   

    
     
    
  );
};

export default ToyGallery;
