import { useContext, useState } from "react";
import loginImage from "../assets/images/login.jpg";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {
  const [loginError, setLoginError] = useState("");

  const { signInUser, provider } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
        toast(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" min-h-screen mb-10 md:mx-10 lg:mx-20  mt-20">
      <div className=" md:flex gap-4">
        <div className="flex-1">
          <img src={loginImage} alt="" />
        </div>

        <div className=" flex-1 ">
          <h1 className="text-center text-4xl font-bold mb-6 pt-4 ">
            Login now!
          </h1>

          <div className="card  w-full  card-body">
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute top-2/3 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-900 text-white">Login</button>
              </div>
            </form>
            <button
              className="bg-gray-200 p-2 rounded-lg mt-4 font-bold"
              onClick={handleGoogleSignIn}
            >
              Sign In With <span className="text-cyan-600">Google!</span>
            </button>
            <p className="font-bold">
              New here ? Please
              <Link to="/register">
                <button className="btn btn-link text-sky-900">Register</button>
              </Link>
            </p>
            {loginError && <p>{loginError}</p>}
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Login;
