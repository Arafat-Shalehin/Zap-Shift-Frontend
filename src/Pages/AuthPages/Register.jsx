import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, googleLogin, updateUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = (data) => {
    console.log("After register", data);
    const profileImage = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // Store the image in form data
        const formData = new FormData();
        formData.append("image", profileImage);

        // Send the photo to store and get the url
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=${
              import.meta.env.VITE_IMAGE_HOST
            }`,
            formData
          )
          .then((res) => {
            console.log("After img upload", res.data.data.url);

            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };

            // Update user profile in firebase.
            updateUser(userProfile)
              .then((result) => {
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
              });
          });

        toast.success("Registration Successful.");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.FirebaseError);
        if (error.code === "auth/email-already-in-use") {
          toast.warn("You already have an account. Try to Log-In.");
          return;
        }
        toast.error("Something went wrong, Please Try again later.");
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Registration Successful.");
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
        <h1 className="font-bold text-2xl text-black">Create an Account</h1>
        <p className="text-xs my-2 font-semibold">Register with ZapShift</p>
        <img
          className="border rounded-full w-9 h-9 mt-4 mb-3"
          src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
          alt="User Avater"
        />
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset">
            <label className=" font-semibold">Name</label>
            <input
              className="input w-full"
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
            />
            <label className=" font-semibold mt-2">Photo</label>
            <input
              className="file-input w-full"
              {...register("photo", { required: true })}
              type="file"
              placeholder="Name"
            />
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
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password Must have at least one uppercase, one lowercase, one
                number and one special character
              </p>
            )}
            <button type="submit" className="btn mt-3 bg-primary text-black">
              Register
            </button>
          </fieldset>
          <div className="mt-2">
            <span className="text-gray-400">
              Already have an account?{" "}
              <Link
                state={location.state}
                to="/login"
                className="text-primary link link-hover"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
        <div className="divider">Or</div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="bg-gray-300 lg:px-35 px-15 py-2 rounded 
          font-semibold flex items-center gap-2 
          cursor-pointer hover:bg-white transition-colors duration-300 shadow"
          >
            <FcGoogle size={30} />
            Register with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
