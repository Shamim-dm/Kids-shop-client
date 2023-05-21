import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useTitle from '../../../../hooks/useTitle';

const ToyDetails = () => {
    const data = useLoaderData()
   
    const toy = useParams()
    console.log(data._id)
    useTitle("toyDetails")
    
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
      } = data;
    return (
        <div className='my-11'>
              <div className="grid md:grid-cols-2 items-center gap-6">
           <div data-aos="fade-right">
           <img className="w-48 md:w-96 mx-auto" src={image} alt="" />
           <h3 className='font-bold text-3xl text-center text-sky-800'>{toy_name}</h3>
           </div>
            <div data-aos="fade-left" className="space-y-2">
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
                Rating :{" "}
                {rating} star
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
        </div>
    );
};

export default ToyDetails;