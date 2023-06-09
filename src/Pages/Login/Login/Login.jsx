import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { AuthContext } from "../../../provider/AuthProviders";
import useTitle from "../../../hooks/useTitle";


const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext) || "";
  const [error, setError] = useState("");
  
  useTitle("login")

  const navigate = useNavigate();
  const location = useLocation();
  // console.log('login page location', location)
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Please type Atlest 6 charecter");
    }
    // console.log(email, password)

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        toast.success("Login successful!");
        setError("");
      })
      .catch((error) => {
        setError("No Match Email or Password");
        toast.error("Please type valid Email and Password !!");
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin();
   
   
  };
  const handleGithubSignIn = () => {
    githubLogin();
    
   
  };

  return (
    <div>
      <div className="form-containers bg-cyan-950">
        <div className="w-10/12 md:w-4/12 grid items-center rounded-lg align-middle mx-auto min-h-screen ">
          <div className="">
            <div className=" rounded-lg shadow-2xl bg-slate-900">
              <div className="card-body text-white ">
                <h2 className="text-center font-bold text-sky-400 text-4xl">
                  Please Login
                </h2>
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered text-black"
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
                      className="input input-bordered text-black"
                    />
                    <label className="label">
                      <p href="#" className="text-white ">
                        Forgot password?
                      </p>
                    </label>
                  </div>

                  <p className="text-red-500"> {error}</p>

                  <div className="form-control mt-2">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>

                {/* social login start from her */}
                <div className="text-center mt-4 ">
                  <p>Or log in using</p>
                </div>

                <div className="divider text-white">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-circle"
                  >
                    <img
                      className="btn-circle h-6 w-6"
                      src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png"
                      alt=""
                    />
                  </button>

                  <button
                    onClick={handleGithubSignIn}
                    className="btn btn-circle"
                  >
                    <img
                      className="btn-circle h-6 w-6"
                      src="https://w7.pngwing.com/pngs/670/396/png-transparent-computer-icons-github-icon-design-logo-github-cat-like-mammal-carnivoran-logo-thumbnail.png"
                      alt=""
                    />
                  </button>
                </div>
                <div className="text-center mt-2">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      className="text-red-500 font-bold text-xl"
                      to="/register"
                    >
                      <button>Sign up</button>
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

export default Login;
