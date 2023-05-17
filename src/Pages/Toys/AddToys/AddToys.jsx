/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "C++", label: "C++" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "React", label: "React" },
  { value: "Node", label: "Node" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "Redux", label: "Redux" },
];

const AddToys = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //   console.log(user);
  return (
    <div className="bg-cyan-950  pb-5 pt-5 min-h-screen">
      <h2 className="text-sky-500 font-bold text-4xl text-center  ">Add Your Jobs</h2>
      <div className="w-8/12 mx-auto  pt-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-3 gap-6  ">
            <div>
              <h5 className="font-bold text-xl text-white ">Your email:</h5>
              <input
                className="input input-bordered w-full"
                {...register("email")}
                placeholder="Your email"
                type="email"
              />
            </div>

            <div>
              <h5 className="font-bold text-xl text-white ">Title:</h5>
              <input
                className="input input-bordered w-full"
                {...register("title")}
                placeholder="title"
                defaultValue="Web developer"
              />
            </div>

            <div>
              <h5 className="font-bold text-xl text-white ">Salary:</h5>
              <input
                className="input input-bordered w-full"
                {...register("salary", { required: true })}
                placeholder="salary"
                defaultValue="30k"
              />
            </div>

            <div>
              <h5 className="font-bold text-xl text-white ">Vacancy:</h5>
              <input
                className="input input-bordered w-full"
                {...register("vacancy", { required: true })}
                placeholder="Vacancy"
                type="number"
              />
            </div>

            <div>
              <h5 className="font-bold text-xl text-white ">Category:</h5>
              <select
                className="input input-bordered w-full"
                {...register("category")}
              >
                <option value="Engineering">Engineering</option>
                <option value="Editor">Editor</option>
                <option value="writer">Writer</option>
                <option value="Developer">Developer</option>
              </select>
            </div>

            <div>
              <h5 className="font-bold text-xl text-white ">Job status:</h5>
              <select
                className="input input-bordered w-full"
                {...register("status")}
              >
                <option value="remote">Remote</option>
                <option value="offline">Offline</option>
              </select>
            </div>

            <div>
              <h5 className="font-bold text-xl text-white ">Dead Line:</h5>
              <input
                className="input input-bordered w-full"
                {...register("deadline")}
                placeholder="deadline"
                type="date"
              />
            </div>
          </div>
          <div>
            <h5 className="font-bold text-xl mt-2 text-white ">Search Jobs:</h5>
            <Select
              className="  w-full "
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>

          <input type="submit" className="btn btn-block bg-orange-600 mt-5" />
        </form>
      </div>
    </div>
  );
};

export default AddToys;
