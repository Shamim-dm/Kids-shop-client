import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ToyCollections = ({ toy }) => {
  const { _Id, toy_name, price, image, rating } = toy;
//   console.log(toy);

  return (
    <div data-aos="fade-right" className="  mx-auto my-8 space-y-3">
      <div>
        <img className="w-48 h-52" src={image} alt="" />
      </div>
      <div className="space-y-2">
        <h2>
          <span className="font-bold text-xl ">Toy Name:</span>{" "}
          <span className="text-slate-500">{toy_name}</span>
        </h2>
        <p>
          <span className="font-bold text-xl">Price: $</span>{" "}
          <span className="text-slate-500">{price}</span>
        </p>

        <p className="text-sky-500 font-bold">
          Rating <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
          {rating}
        </p>

       <Link to='ToyDetails' > <button className="btn ">View Details</button></Link>
      </div>

      <hr />
    </div>
  );
};

export default ToyCollections;
