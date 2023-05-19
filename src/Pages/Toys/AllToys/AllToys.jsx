import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";



const AllToys = () => {
  const allToys = useLoaderData();
  const [products, setProducts] = useState([]);

  const { _id, image, toy_name, category, price } = products;

  const toydetails = (_id) => {
    const toyProduct = allToys.filter((toyess) => toyess._id === _id);
    for (const product of toyProduct) {
      console.log(product);
      setProducts(product);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2  justify-center gap-2 my-11">
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


          <div className="grid grid-cols-2 items-center gap-6">
            <img className="w-96 mx-auto" src={image} alt="" />
            <div className="">
              <h3 className="font-bold text-lg">Toy-Name: {toy_name}</h3>
              <p className="py-4"><span>Seller Name: </span><span>{}</span></p>
              <p><span>Price : $ </span><span>{price} only</span></p>
              <p><span></span> Category: <span>{category}</span></p>
              <p><span>Desctiption: </span> <span></span></p>
              <hr />
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
