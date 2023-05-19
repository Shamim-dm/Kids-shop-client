import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MyToyuUdate from "./MyToyuUdate";


const MyToys = () => {
  const toysData = useLoaderData()



  const updateHandler = id =>{
    console.log(id)

  }








  console.log(toysData)
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                
              </th>
              <th>TOYS INFO</th>
              <th>SELLER INFO</th>
              <th>CATEGORY</th>
              <th></th>
            </tr>
          </thead>
          {
            toysData.map(toy => <MyToyuUdate 
              toy={toy} 
              key={toy._id}
              updateHandler={updateHandler}
              

               ></MyToyuUdate> )
          }
          
        </table>
      </div>





      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;

