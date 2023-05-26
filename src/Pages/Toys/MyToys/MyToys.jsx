import React from "react";
import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import MyToyuUdate from "./MyToyuUdate";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProviders";
import { useEffect } from "react";
AOS.init();

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useNavigate();
  const toysData = useLoaderData();
  console.log(toysData);
  const [toys, setToys] = useState([]);
  const [acc, setAcc] = useState([]);
  const [dcc, setDcc] = useState([]);
  console.log(toys);
  useTitle("myToys");

  const url = `https://toy-vehicles-server-shamim-dm.vercel.app/toys/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user?.email]);

  const sortEmail = toysData.filter((pd) => pd.email == user.email);
  console.log(sortEmail);





  const accaccurl = `https://toy-vehicles-server-shamim-dm.vercel.app/mytoysacc/${user?.email}`;

  useEffect(() => {
    fetch(accaccurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAcc(data)
        // setToys(data);
      });
  }, [user?.email]);


  const dccurl = `https://toy-vehicles-server-shamim-dm.vercel.app/mytoysdcc/${user?.email}`;

  useEffect(() => {
    fetch(dccurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDcc(data)
        // setToys(data);
      });
  }, [user?.email]);


  const accending =()=>{
    setToys(acc)
   }
   
   const deccending = ()=>{
     setToys(dcc)
   }






  return (
    <div>
      <h4 className="text-center text-2xl md:text-5xl text-red-800 font-bold my-11 ">
        Your total Toys items is:{" "}
        <span className="text-sky-800">{toys.length}</span>{" "}
      </h4>

      
      <div className=" mb-2 text-right">
        <h4 className="text-2xl mr-5 font-bold mb-1">sort by price</h4>
        <button onClick={accending} className="btn btn-sm mr-1 ">Accending</button>
        <button onClick={deccending} className="btn btn-sm">Deccending</button>
      </div>

    

      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>TOYS INFO</th>
              <th>SELLER INFO</th>
              <th>CATEGORY</th>
              <th></th>
            </tr>
          </thead>

          <tbody data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            {toys.map((toy) => (
              <MyToyuUdate
                toy={toy}
                key={toy._id}
                setToys={setToys}
                toys={toys}
              ></MyToyuUdate>
            ))}
          </tbody>
        </table>
      </div>

      {/* Put this part before </body> tag */}
      {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">



          <div className="w-11/12 mb-6 mx-auto">
            <h2 className="text-4xl text-red-800 font-bold text-center  pt-5">
              Update Your Toys Products <br />
              <span className="text-sky-800"></span>
            </h2>
            <hr className="mb-8 mt-2" />
            <form onSubmit={addProducts}>
              <div
                className="grid 
      md:grid-cols-2 gap-7"
              >
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    //  defaultValue={user?.displayName}
                    className="input input-bordered"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    //  defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="date"
                    className="input input-bordered"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Toys Name</span>
                  </label>
                  <input
                    type="text"
                    name="toy_name"
                    required
                    //  defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    // defaultValue={'$' + checkOuts.price}
                    className="input input-bordered"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    //  defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    //  defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value="4.5"
                    //  defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Discription</span>
                </label>
                <input
                  type="text"
                  name="discription"
                  //  defaultValue={user?.email}
                  className="input input-bordered py-11"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="form-control mt-6"
              >
                <input
                  type="submit"
                  value="Update products"
                  className="btn btn-block bg-sky-700"
                />
              </div>
            </form>
          </div>



          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MyToys;
