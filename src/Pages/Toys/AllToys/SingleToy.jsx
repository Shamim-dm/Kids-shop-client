import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


const SingleToy = ({ toy, toydetails }) => {
  // console.log(toy)
  const { _id, image, toy_name, category, price, quantity, seller_name} = toy;



  return (
    <div   data-aos="fade-up"
    data-aos-duration="3000" className=" mt-6">
      <div className="md:flex  items-center gap-4">
        <div>
          <img className="h-36 w-44" src={image} alt="" />
        </div>

        <div className="space-y-1">
          <h2 className="text-red-800 font-bold">
            Toy: <span className="text-sky-800"> {toy_name}</span>
          </h2>
          <h3 className="text-red-800 font-bold">
            Seller: <span>{seller_name}</span>
          </h3>
          <p className="text-red-800 font-bold">
            Price: $ <span> {price} </span>
          </p>
          <p className="text-red-800 font-bold">
            Category: <span> {category}</span>
          </p>
          <p className="text-red-800 font-bold">
            Available Quantity: <span className="">{quantity} items</span>
          </p>
          <label
            onClick={() => toydetails(_id)}
            htmlFor="my-modal-5"
            className="btn btn-primary"
          >
            Views Details
          </label>
          {/* <button className="btn bg-primary">View Deatils</button> */}
        </div>
      </div>
      <hr className="mt-3" />

    </div>
  );
};

export default SingleToy;
