import React from "react";


const AllToys = () => {
  return (
    <div>
     

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
              <label htmlFor="my-modal-5" className="btn btn-primary">
                Views Details
              </label>
              {/* <button className="btn bg-primary">View Deatils</button> */}
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
              <label htmlFor="my-modal-5" className="btn btn-primary">
                Views Details
              </label>
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
              <label htmlFor="my-modal-5" className="btn btn-primary">
                Views Details
              </label>
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
              <label htmlFor="my-modal-5" className="btn btn-primary">
                Views Details
              </label>
            </div>
          </div>
          <hr className="mt-3" />
        </div>
      </div>

      {/* Put this part before </body> tag */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img
            className="mx-auto w-48 md:w-96"
            src="https://m.media-amazon.com/images/I/51PSTLPvIxL._AC_SX425_.jpg"
            alt=""
          />
          <h3 className="font-bold text-sky-600 text-lg">
            Toy Name: <span></span>
          </h3>
          <div className="py-4">
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
