import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();

const SingleToy = ({ toy, toydetails }) => {
  // console.log(toy)
  const { _id, image , title , name, toy_name, category, price, quantity, seller_name } =
    toy;

  return (
    <div data-aos="fade-up" data-aos-duration="3000" className=" mt-6">
      <div className="md:flex  items-center gap-4">
        <div>
          {image ? (
            <img className="h-36 w-44" src={image} />
          ) : (
            <img
              className="h-36 w-44"
              src=" https://www.kpbn.co.id/images/berita/no-image-found.jpg "
            />
          )}
        </div>

        <div className="space-y-1">
          <h2 className="text-red-800 font-bold">
            <span className="text-xl">Toy name:</span> <span className=" text-xl text-sky-800"> {title}</span>
          </h2>
          <h3 className="text-red-800 font-bold">
            Seller: <span>{name}</span>
          </h3>
          <p className="text-red-800 font-bold">
            Price: $ <span> {price} </span>
          </p>
          <p className="text-red-800 font-bold">
            Category: <span className="text-3xl text-primary"> {category} </span>
          </p>
          
          <label
            onClick={() => toydetails(_id)}
            htmlFor="my-modal-5"
            className="btn btn-primary"
          >
            Views Details
          </label>
          {/* <Link to={`/allToysDetails/${_id}`}>   <button className="btn btn-primary">Views Details</button></Link> */}
          {/* <button lassName="btn bg-primary">View Deatils</button> */}
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
};

export default SingleToy;
