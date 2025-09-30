import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { auth, AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  // handle manual login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        Swal.fire({
          title: "Congratulations ",
          text: "Login Successful !!!",
          icon: "success",
          button: "OK",
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          title: "Failure ",
          text: "Login Failed !!!",
          icon: "error",
          button: "OK",
        });
      });
  };

  // handle google login
  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      // Optional: Sign out first to clear any saved Firebase session
      await signOut(auth);

      // Create Google provider and force account chooser
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account", // Always ask which account to use
      });

      // Sign in with Google popup
      const result = await signInWithPopup(auth, provider);

      Swal.fire({
        title: "Congratulations ",
        text: "Login Successful !!!",
        icon: "success",
        button: "OK",
      });

      navigate(`${location.state ? location.state : "/"}`);
    } catch (error) {
      // console.error("Google login error:", error);
      Swal.fire({
        title: "Failure ",
        text: "Login Failed !!!",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className="card  mt-10 -mb-20 px-2 mx-auto bg-base-100 sm:mx-auto w-full rounded-xs max-w-sm shrink-0 shadow-2xl">
      <Helmet>
        <title>Dailypress Authentication | Login</title>
      </Helmet>
      <h2 className="text-center poppins font-semibold py-5 mx-7 border-gray-300 border-dashed border-b text-blue-600 text-xl">
        Login your account
      </h2>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="card-body mx-2 sm:mx-5"
      >
        <fieldset className="fieldset inter">
          <label className="font-semibold text-md -mt-1 mb-2">
            Email address
          </label>
          {/* email */}
          <ToastContainer />

          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
            className="input w-full rounded-xs bg-base-100 border"
            placeholder="Enter your email address"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}

          <label className="font-semibold text-md my-2">Password</label>

          {/* password */}

          {/* <input
             {...register("password", { required: true, minLength : 6 })}
            name="password"
            type="password"
            className="input w-full rounded-xs border bg-base-100 mb-3"
            placeholder="Enter your password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">
              password must be at least 6 characters
            </p>
          )} */}
          <input
            {...register("password", {
              required: "Password is required",
              validate: {
                minLength: (value) =>
                  value.length >= 6 || "Password must be at least 6 characters",
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
            name="password"
            type="password"
            className="input w-full rounded-xs border bg-base-100 mb-3"
            placeholder="Enter your password"
          />

          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <button type="submit" className="btn -mb-1 btn-primary my-4 ">
            Login
          </button>
          <button
            onClick={handleGoogleLogin}
            type="submit"
            className="btn flex  items-center mt-2 gap-5"
          >
            <FcGoogle size={25} />
            Login with google
          </button>
        </fieldset>
      </form>
      <p className="text-center inter font-semibold text-xs mb-5 text-accent">
        Don't Have An Account ?{" "}
        <Link className="font-bold text-secondary" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
