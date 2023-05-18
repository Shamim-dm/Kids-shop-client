import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";
import toast, { Toaster } from "react-hot-toast";







const Register = () => {
  const { createUser } = useContext(AuthContext) || "";
  const [errors, setErrors] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.img.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Please type Atlest 6 charecter");
    }

    // console.log(name, password, email, photo)

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate(from, { replace: true });
        event.target.reset();
        toast.success("Register account successful!");
        setErrors("");
      })
      .catch((error) => {
        setErrors("Already Register this Email");
        toast.error("Already Register this Email");
      });
  };


  const handleGoogleSignUp = () => {
    googleLogin();
  };
  const handleGithubSignUp = () => {
    githubLogin();
  };

  return (
    <div>
      <div className="form-containers bg-cyan-950 ">
        <div className="w-10/12 md:w-4/12 grid items-center rounded-lg align-middle mx-auto min-h-screen ">
          <div className="">
            <div className=" rounded-lg shadow-2xl bg-slate-900">
              <div className="card-body text-white ">
                <h2 className="text-center font-bold text-sky-400 text-4xl">
                  Please Register
                </h2>
                <form onSubmit={handleRegister}>
                  <div className="form-control">
                    <label className="label">
                      <span className="">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="User name"
                      className="input input-bordered text-black"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Add Image</span>
                    </label>
                    <input
                      type="text"
                      name="img"
                      placeholder="Add image Link"
                      className="input input-bordered  text-black"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered  text-black"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered  text-black"
                    />
                  </div>

                  <p className="text-red-500">{errors}</p>

                  <div className="form-control mt-2">
                    <button className="btn btn-primary">Sign up</button>
                  </div>
                </form>

                {/* social login start from her */}
                <div className="text-center mt-4 ">
                  <p>Or sign up using</p>
                </div>

                <div className="divider text-white">
                  <button onClick={handleGoogleSignUp} className="btn btn-circle">
                    <img
                      className="btn-circle h-6 w-6"
                      src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png"
                      alt=""
                    />
                  </button>

                  <button onClick={handleGithubSignUp} className="btn btn-circle">
                    <img
                      className="btn-circle h-6 w-6"
                      src="https://w7.pngwing.com/pngs/670/396/png-transparent-computer-icons-github-icon-design-logo-github-cat-like-mammal-carnivoran-logo-thumbnail.png"
                      alt=""
                    />
                  </button>
                </div>
                <div className="text-center mt-2">
                  <p>
                    Already have an account?{" "}
                    <Link
                      className="text-red-500 font-bold text-xl"
                      to="/login"
                    >
                      <button>Log in</button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
