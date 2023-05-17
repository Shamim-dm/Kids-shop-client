import React from "react";
import Navbar from "../../Sheared/Navbar/Navbar";
import Footer from "../../Sheared/Footer/Footer";

const AllToys = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="grid md:grid-cols-2  justify-center gap-2 my-11">
        <div className=" mt-6">
          <div className="md:flex gap-4">
            <div>
              <img
                className="h-36"
                src="https://m.media-amazon.com/images/I/51PSTLPvIxL._AC_SX425_.jpg"
                alt=""
              />
            </div>

            <div className="space-y-1">
              <h2 className="text-red-800 font-bold">
                Toy: <span></span>
              </h2>
              <h3 className="text-red-800 font-bold">
                Seller: <span></span>
              </h3>
              <p className="text-red-800 font-bold">
                Price: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Sub Category: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Available Quantity: <span></span>
              </p>
              <button className="btn bg-primary">View Deatils</button>
            </div>
          </div>
          <hr className="mt-3" />
        </div>




        <div className="mt-6">
        <div className="md:flex gap-4">
            <div>
              <img
                className="h-36"
                src="https://m.media-amazon.com/images/I/51PSTLPvIxL._AC_SX425_.jpg"
                alt=""
              />
            </div>

            <div className="space-y-1">
              <h2 className="text-red-800 font-bold">
                Toy: <span></span>
              </h2>
              <h3 className="text-red-800 font-bold">
                Seller: <span></span>
              </h3>
              <p className="text-red-800 font-bold">
                Price: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Sub Category: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Available Quantity: <span></span>
              </p>
              <button className="btn bg-primary">View Deatils</button>
            </div>
          </div>
          <hr className="mt-3" />
        </div>





        <div className="mt-6">
        <div className="md:flex gap-4">
            <div>
              <img
                className="h-36"
                src="https://m.media-amazon.com/images/I/51PSTLPvIxL._AC_SX425_.jpg"
                alt=""
              />
            </div>

            <div className="space-y-1">
              <h2 className="text-red-800 font-bold">
                Toy: <span></span>
              </h2>
              <h3 className="text-red-800 font-bold">
                Seller: <span></span>
              </h3>
              <p className="text-red-800 font-bold">
                Price: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Sub Category: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Available Quantity: <span></span>
              </p>
              <button className="btn bg-primary">View Deatils</button>
            </div>
          </div>
          <hr className="mt-3" />
        </div>






        <div className="mt-6">
        <div className="md:flex gap-4">
            <div>
              <img
                className="h-36"
                src="https://m.media-amazon.com/images/I/51PSTLPvIxL._AC_SX425_.jpg"
                alt=""
              />
            </div>

            <div className="space-y-1">
              <h2 className="text-red-800 font-bold">
                Toy: <span></span>
              </h2>
              <h3 className="text-red-800 font-bold">
                Seller: <span></span>
              </h3>
              <p className="text-red-800 font-bold">
                Price: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Sub Category: <span></span>
              </p>
              <p className="text-red-800 font-bold">
                Available Quantity: <span></span>
              </p>
              <button className="btn bg-primary">View Deatils</button>
            </div>
          </div>
          <hr className="mt-3" />
        </div>







      </div>

      <Footer></Footer>
    </div>
  );
};

export default AllToys;
