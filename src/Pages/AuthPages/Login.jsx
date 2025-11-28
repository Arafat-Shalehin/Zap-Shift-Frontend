import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser, googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("After Login", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/")
        toast.success("Log-In Successful.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong, Please Try again later.");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Log-In Successful.");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong, Please Try again later.");
      });
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 px-5 pt-10">
        <img src={logo} alt="Logo" />
        <a
          href="/"
          className=" mt-3 md:mr-2 -ms-4.5 text-xl font-semibold tracking-wide text-gray-900"
        >
          ZapShift
        </a>
      </div>
      <div className="p-20">
        <h1 className="font-bold text-2xl text-black">Welcome Back</h1>
        <p className="text-xs my-2 font-semibold">Login with ZapShift</p>
        <img
          className="border rounded-full w-9 h-9 mt-4 mb-3"
          src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
          alt="User Avater"
        />
        <form onSubmit={handleSubmit(handleLogin)} action="">
          <fieldset className="fieldset">
            <label className="label text-black mt-2 font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />

            <label className="label text-black mt-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
              })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 8 characters or longer
              </p>
            )}
            {errors.password?.types === "pattern" && (
              <p className="text-red-500">
                Password Must have at least one uppercase, one lowercase, one
                number and one special character
              </p>
            )}
            <div>
              <a className="text-gray-400 link link-hover">Forget Password?</a>
            </div>
            <button className="btn mt-3 bg-primary text-black">Login</button>
          </fieldset>
        </form>
        <span className="text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" state={location.state} className="link link-hover text-primary">
            Register
          </Link>
        </span>
        <div className="divider">Or</div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="bg-gray-300 lg:px-35 px-15 py-2 rounded 
              font-semibold flex items-center gap-2 
              cursor-pointer hover:bg-white transition-colors duration-300 shadow"
          >
            <FcGoogle size={30} />
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
