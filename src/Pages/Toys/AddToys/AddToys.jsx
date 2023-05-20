/* eslint-disable no-unused-vars */

import React, { createContext, useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AddToys = () => {
  const checkOuts = useLoaderData()
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  useTitle("AddToys");

  
  console.log(checkOuts);

  const addProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const category = form.category.value;
    const toy_name = form.toy_name.value;
    const quantity = form.quantity.valuee;
    const discription = form.discription.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const formData = {
      name,
      email,
      date,
      price,
      category,
      toy_name,
      discription,
      quantity,
      rating,
    };
    console.log(formData);

    // const booking ={
    //     costumerName: name,
    //     email,
    //     date,

    //     // img: checkOuts.img,
    //     service: checkOuts.title,
    //     price: checkOuts.price,
    //     services_id: checkOuts._id,

    // }
    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        

        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Toys information is added! ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-11/12 mb-6 mx-auto">
      <h2 className="text-4xl text-red-800 font-bold text-center  pt-5">
        Add Your Toys Products <br />
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
               defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>

          {
            user &&
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
               value={user?.email}
              className="input input-bordered"
            />
          </div>
          }

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

          {/* <div
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
          </div> */}

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="form-control"
          >
            <select name="category" className="select select-bordered w-full ">
              <option disabled selected>
                Category
              </option>
              <option value="cars">Cars</option>
              <option value="bus">Bus</option>
              <option value="helicopter">Helicopter</option>
              <option value="trucks">Trucks</option>
            </select>
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
            value="Add Toys"
            className="btn btn-block bg-sky-700"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;

// import { useForm } from "react-hook-form";
// import React, { useState } from "react";
// import Select from "react-select";

// const options = [
//   { value: "JavaScript", label: "JavaScript" },
//   { value: "C++", label: "C++" },
//   { value: "HTML", label: "HTML" },
//   { value: "CSS", label: "CSS" },
//   { value: "React", label: "React" },
//   { value: "Node", label: "Node" },
//   { value: "MongoDB", label: "MongoDB" },
//   { value: "Redux", label: "Redux" },
// ];

// const AddToys = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   //   console.log(user);
//   return (
//     <div className="bg-cyan-950  pb-5 pt-5 min-h-screen">
//       <h2 className="text-sky-500 font-bold text-4xl text-center  ">Add Your Jobs</h2>
//       <div className="w-8/12 mx-auto  pt-11">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="grid md:grid-cols-3 gap-6  ">
//             <div>
//               <h5 className="font-bold text-xl text-white ">Your email:</h5>
//               <input
//                 className="input input-bordered w-full"
//                 {...register("email")}
//                 placeholder="Your email"
//                 type="email"
//               />
//             </div>

//             <div>
//               <h5 className="font-bold text-xl text-white ">Title:</h5>
//               <input
//                 className="input input-bordered w-full"
//                 {...register("title")}
//                 placeholder="title"
//                 defaultValue="Web developer"
//               />
//             </div>

//             <div>
//               <h5 className="font-bold text-xl text-white ">Salary:</h5>
//               <input
//                 className="input input-bordered w-full"
//                 {...register("salary", { required: true })}
//                 placeholder="salary"
//                 defaultValue="30k"
//               />
//             </div>

//             <div>
//               <h5 className="font-bold text-xl text-white ">Vacancy:</h5>
//               <input
//                 className="input input-bordered w-full"
//                 {...register("vacancy", { required: true })}
//                 placeholder="Vacancy"
//                 type="number"
//               />
//             </div>

//             <div>
//               <h5 className="font-bold text-xl text-white ">Category:</h5>
//               <select
//                 className="input input-bordered w-full"
//                 {...register("category")}
//               >
//                 <option value="Engineering">Engineering</option>
//                 <option value="Editor">Editor</option>
//                 <option value="writer">Writer</option>
//                 <option value="Developer">Developer</option>
//               </select>
//             </div>

//             <div>
//               <h5 className="font-bold text-xl text-white ">Job status:</h5>
//               <select
//                 className="input input-bordered w-full"
//                 {...register("status")}
//               >
//                 <option value="remote">Remote</option>
//                 <option value="offline">Offline</option>
//               </select>
//             </div>

//             <div>
//               <h5 className="font-bold text-xl text-white ">Dead Line:</h5>
//               <input
//                 className="input input-bordered w-full"
//                 {...register("deadline")}
//                 placeholder="deadline"
//                 type="date"
//               />
//             </div>
//           </div>
//           <div>
//             <h5 className="font-bold text-xl mt-2 text-white ">Search Jobs:</h5>
//             <Select
//               className="  w-full "
//               defaultValue={selectedOption}
//               onChange={setSelectedOption}
//               options={options}
//               isMulti
//             />
//           </div>

//           <input type="submit" className="btn btn-block bg-orange-600 mt-5" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddToys;
