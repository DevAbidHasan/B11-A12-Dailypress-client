import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();
  const [profilePic, setProfilePic] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const link = location.state ? location.state : "/";

   const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key
    }`;
    const res = await axios.post(imageUploadUrl, formData);
    setProfilePic(res.data.data.url);
    console.log(profilePic);
  };

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    // create user here
    createUser(email, password)
    .then(async(res) =>{
        const userInfo = {
            name : data.name,
            email : email,
            role : "user",
            created_at : new Date().toISOString()
        }

        const userRes = await axios.post("https://b11-a12-dailypress-server.vercel.app/users", userInfo);
        // console.log(userRes);
        const UserProfile = {
            displayName : data.name,
            photoURL : profilePic
        }

        // update profile
        updateUser(UserProfile)
        .then(res=>{
            alert("profile updated");
        })
        .catch(error =>{
            alert("profile update failed");
        })

        Swal.fire({
            title : "congratulations",
            text :"User created successfully",
            timer : 1000,
            icon: "success"
        })
    })
    .catch(error =>{
        console.log(error);
        Swal.fire({
            title : "Error",
            text :"User creation failed",
            timer : 1000,
            icon :"error"
        })
    })
  };

 

  return (
    <div className="flex mt-6 items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className=" text-center lg:text-2xl text-xl font-bold">
              Create Account
            </h2>
            <fieldset className="fieldset">
              {/* name field */}
              <label className="label">Your Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Your Name"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}
              {/* image field */}
              <label className="label">Your Profile</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="input"
                placeholder="Your Profile picture"
              />

              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
              {/* password field*/}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    minLength: (value) =>
                      value.length >= 6 ||
                      "Password must be at least 6 characters",
                    hasLower: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must contain at least one lowercase letter",
                    hasUpper: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain at least one uppercase letter",
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      "Password must contain at least one number",
                    hasSpecial: (value) =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                      "Password must contain at least one special character",
                  },
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <span>
                <Link className="link link-primary" to="/login">
                  Login
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
