import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const UpdateToys = () => {
    const updateDate = useLoaderData()
    useTitle("Update_Toys")
    const datass = useParams()
    console.log(datass.id)

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
    
        fetch(`http://localhost:5000/addProducts/${datass.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Your coffe is added!!',
                    icon: 'success',
                    confirmButtonText: 'okk'
                  })
            }

          });
    
      
      };

    return (
       
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
    );
};

export default UpdateToys;