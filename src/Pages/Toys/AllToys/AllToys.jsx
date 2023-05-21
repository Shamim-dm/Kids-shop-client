import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import SingleToy from "./SingleToy";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  const data = useLoaderData();
  const [allToys, setAllToys] = useState(data);
  const [products, setProducts] = useState([]);
  useTitle("AllToys");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  // const from = location.state?.from?.pathname || "/allToys";
  const {
    _id,
    title,
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
    discriptions,
    name,
    quantity,
  } = products;

  // console.log(discriptions)

  const toydetails = (_id) => {
    const toyProduct = allToys.filter((toyess) => toyess._id === _id);
    for (const product of toyProduct) {
      console.log(product);
      setProducts(product);
    }
    navigate(from, { replace: true });
  };

  // const handleSearch = () => {
  //   fetch(
  //     `https://toy-vehicles-server-shamim-dm.vercel.app/getJobsByText/${searchText}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setJobs(data);
  //     });
  // };

  console.log(allToys);
  const searchhandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.text.value;
    console.log(searchValue);
    const toyname = allToys.filter((pd) => pd.category == searchValue);

    for (const pd of toyname) {
      console.log(pd);
    }
    setAllToys(toyname);
    console.log(toyname);
  };



  // const handleSearch = () => {
  //   fetch(`https://toy-vehicles-server-shamim-dm.vercel.app/getJobsByText/${searchText}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAllToys(data);
  //     });
  // };








  return (
    <div>





      <h4 className="text-center text-2xl md:text-5xl text-red-800 font-bold my-11 ">
        Total Toys items is:{" "}
        <span className="text-sky-800">{allToys.length}</span>{" "}
      </h4>

      <form onSubmit={searchhandler}>
        <div className="flex items-center gap-2">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="form-control"
          >
            <input
              type="text"
              name="text"
              placeholder="toy name"
              className="input input-bordered"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="form-control "
          >
            <input type="submit" value="search" className="btn btn-warning " />
          </div>
        </div>
      </form>

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
            {/* <img className="w-48 md:w-96 mx-auto" src={image}/>
            <img className="w-48 md:w-96 mx-auto" src=" https://www.kpbn.co.id/images/berita/no-image-found.jpg "/> */}

            {image ? (
              <img className="w-48 md:w-96 mx-auto" src={image} />
            ) : (
              <img
                className="w-48 md:w-96 mx-auto"
                src=" https://www.kpbn.co.id/images/berita/no-image-found.jpg "
              />
            )}

            <div className="space-y-2">
              <h3>
                <span className="font-bold text-lg"> Toy-Name: </span>
                <span className="">{title}</span>
              </h3>
              <p className="py-4">
                <span className="font-semibold">Seller Name: </span>
                <span>{name}</span>
              </p>
              <p>
                <span className="font-semibold">Price : $ </span>
                <span>{price} only</span>
              </p>

              <p>
                <span className="font-semibold"> Category: </span>
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
                <span></span>
              </p>
              <p>
                <span className="font-semibold"> Company: </span>
                <span></span>
              </p>

              <p className="text-sky-500 font-bold">
                Rating {rating}
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              </p>

              <h4 className="text-xl font-bold mt-3">Desctiption:</h4>
              <hr />

              {/* {
              discriptions.map(dis => console.log(dis))
            } */}

              <li>
                <span> </span> <span>{discriptions}</span>
              </li>
              {/* <li>
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
              </li> */}
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
