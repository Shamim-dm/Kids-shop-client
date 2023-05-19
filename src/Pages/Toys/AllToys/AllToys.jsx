import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";



const AllToys = () => {
  const allToys = useLoaderData();
  const [products, setProducts] = useState([]);

  const {
    _id,
    oparetor,
    metareal,
    battery_quantity,
    battery_type,
    seller_name,
    user_year,
    toy_size,
    image,
    toy_name,
    category,
    price,
    rating,
    phone,
    email,
    address,
    company,
  } = products;

  // console.log(discriptions)

  const toydetails = (_id) => {
    const toyProduct = allToys.filter((toyess) => toyess._id === _id);
    for (const product of toyProduct) {
      console.log(product);
      setProducts(product);


    }

    

  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 my-11">
        {allToys.map((toy) => (
          <SingleToy
            toy={toy}
            key={toy._id}
            toydetails={toydetails}
          ></SingleToy>
        ))}
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="grid md:grid-cols-2 items-center gap-6">
            <img className="w-48 md:w-96 mx-auto" src={image} alt="" />
            <div className="space-y-2">
              <h3>
                <span className="font-bold text-lg"> Toy-Name: </span>
                <span className="">{toy_name}</span>
              </h3>
              <p className="py-4">
                <span className="font-semibold">Seller Name: </span>
                <span>{seller_name}</span>
              </p>
              <p>
                <span className="font-semibold">Price : $ </span>
                <span>{price} only</span>
              </p>

              <p>
                <span className="font-semibold"> Category:</span>
                <span>{category}</span>
              </p>

              <p>
                <span className="font-semibold"> phone: </span>
                <span>{phone}</span>
              </p>
              <p>
                <span className="font-semibold"> Email: </span>
                <span>{email}</span>
              </p>
              <p>
                <span className="font-semibold"> Address: </span>
                <span>{address}</span>
              </p>
              <p>
                <span className="font-semibold"> Company: </span>
                <span>{company}</span>
              </p>
              

              <p className="text-sky-500 font-bold">
                Rating{" "}
                {rating}
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
               
              </p>

              <h4 className="text-xl font-bold mt-3">Desctiption:</h4>
              <hr />

            {/* {
              discriptions.map(dis => console.log(dis))
            } */}


              <li>
                <span> </span> <span>{metareal}</span>

              </li>
              <li>
                <span> </span> <span>{oparetor}</span>
                <li>
                <span> </span> <span>{  battery_type}</span>
              </li>
              </li>
              <li>
                <span> </span> <span>{battery_quantity}</span>
              </li>
              <li>
                <span> </span> <span>{toy_size}</span>
              </li>
              <li>
                <span> </span> <span>{user_year}</span>
              </li>
              
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
