import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import loginImage from "../assets/images/login.jpg";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      toast("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Password should have at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast("Password should have at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("update profile"))
          .catch();
        setSuccess("Welcome to Dobby's Hut!!!", result.user.displayName);
        toast("User Created Successfully !!");
        navigate("/");
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        toast(error.message);
      });
  };

  return (
    <div className=" min-h-screen mb-10 md:mx-10 lg:mx-20  mt-20">
      <div className=" md:flex gap-10">
        <div className="flex-1">
          <img src={loginImage} alt="" />
        </div>

        <div className="mt-5 flex-1 drop-shadow-lg">
          <h1 className="text-4xl text-center font-bold mb-6">Register now!</h1>

          <div className="card w-full ">
            <form onSubmit={handleRegister} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute top-2/3 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-900 text-white">Register</button>
              </div>
            </form>
            <p className="font-bold">
              Have an account ? Please
              <Link to="/login">
                <button className="btn btn-link text-cyan-900">Login</button>
              </Link>
            </p>
            {success && <p>{success}</p>}
            {registerError && <p>{registerError}</p>}
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
