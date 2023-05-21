import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const MyToyuUdate = ({ toy, toys, setToys }) => {
  const {
    _id,
    rating,
    address,
    image,
    toy_name,
    price,
    name,
    quantity,
    seller_name,
    email,
    category,
    details,
    url,
    date,
    title
  } = toy;

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "Your Toys products has been deleted.",
          "success"
        );

        fetch(`https://toy-vehicles-server-shamim-dm.vercel.app/addProducts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              const remaing = toys.filter((cof) => cof._id !== _id);
              setToys(remaing);
            }
          });
        console.log(id);
      }
    });
  };

  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avater grid grid-cols-2 gap-3 items-center">
            <div className="">
              {/* <img className="w-24 h-24 border-2" src={image} alt="img" /> */}

              {image ? (
                <img className="w-24 h-24 border-2" src={image} />
              ) : (
                <img
                  className="w-24 h-24 border-2"
                  src=" https://www.kpbn.co.id/images/berita/no-image-found.jpg "
                />
              )}
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-80">Price: ${price}</div>
              <div className="text-sm opacity-80">Quantity: {quantity}</div>

              <p className="text-sky-500 font-bold">
                Rating: {rating}
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  readOnly
                />{" "}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <h4>Name: {name}</h4>

        <span className="badge badge-ghost badge-sm">Email: {email}</span>
        <br />
        <span className="badge badge-ghost badge-sm">Date: {date}</span>
      </td>
      <td>{category} </td>
      <th className="flex items-center gap-2">
        {/* <label
          onClick={() => updateHandler(_id)}
          htmlFor="my-modal-5"
          className="btn  bg-sky-600 btn-xs"
        >
          Edit
        </label> */}
        {/* 
          <button  className="btn  bg-sky-600 btn-xs">
            Edit
          </button> */}

        <Link to={`/updateToys/${_id}`}>
          <button className="btn  bg-sky-600 btn-xs">Edit</button>
        </Link>

        <TrashIcon
          onClick={() => handledelete(_id)}
          className="h-6 w-6 text-red-500"
        />
      </th>
    </tr>
  );
};

export default MyToyuUdate;
