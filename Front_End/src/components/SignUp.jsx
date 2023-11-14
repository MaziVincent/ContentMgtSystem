import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../shared/baseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [terms, setTerms] = useState(false);
  const url = `${baseUrl}register`;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const submit = async (data) => {
    const student = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    console.log(student);

    try {
      const response = await axios.post(url, student);

      console.log(response);

      if (response.status === 201) {
        toast.success("Registered Successfully", {
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error("Request Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const password = watch("password");

  return (
    <div className=" bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ToastContainer />
      <div className="contaoner mx-auto max-w-7xl py-14 px-4">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" mt-6 text-center text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
            Sign up for free
          </h2>
          <p className=" mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            <span>Or </span>
            <Link
              to="/login"
              className=" font-medium underline hover:no-underline text-gray-700 dark:text-gray-300 hover:text-gray-800"
            >
              sign in to your existing accound
            </Link>
          </p>
        </div>
        <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" bg-white dark:bg-gray-800 shadow rounded-lg">
            <div className=" p-8">
              <form
                onSubmit={handleSubmit(submit)}
                className=""
              >
                <div className=" space-y-6">
                  <div>
                    <label
                      className=" block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <div className="input mt-2 relative rounded-md shadow-sm">
                      <input
                        placeholder="Henry"
                        className=" dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600"
                        required="required"
                        type="text"
                        {...register("firstname", { required: true })}
                      />
                    </div>
                    {errors.firstname && (
                      <p className="text-sm text-red-500">
                        {" "}
                        First Name is required{" "}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className=" block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <div className="input mt-2 relative rounded-md shadow-sm">
                      <input
                        placeholder="Ford"
                        className=" dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600"
                        required="required"
                        type="text"
                        {...register("lastname", { required: true })}
                      />
                    </div>
                    {errors.lastname && (
                      <p className="text-sm text-red-500">
                        {" "}
                        Last Name is required{" "}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className=" block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email address
                    </label>
                    <div className="input mt-2 relative rounded-md shadow-sm">
                      <input
                        className=" dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600"
                        required="required"
                        type="email"
                        {...register("email", { required: true })}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {" "}
                        Email is required{" "}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <label
                      className=" block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="input mt-2 relative rounded-md shadow-sm">
                      <input
                        className=" dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600"
                        required="required"
                        type="password"
                        {...register("password", { required: true })}
                      />
                    </div>

                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {" "}
                        Password is required{" "}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <label
                      className=" block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="password"
                    >
                      Password confirmation
                    </label>
                    <div className="input  mt-2 relative rounded-md shadow-sm">
                      <input
                        className=" dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600"
                        required="required"
                        type="password"
                        {...register("confirmPassword", {
                          required: true,
                          validate: (value) =>
                            value === password || "passwords do not match",
                        })}
                      />
                    </div>

                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500">
                        {" "}
                        Confirm password is required{" "}
                      </p>
                    )}
                  </div>

                  <div className=" text-center">
                    <Link className=" font-medium text-gray-500 dark:text-gray-300 hover:underline text-sm">
                      By signing up, you agree to our terms of use.
                    </Link>
                  </div>

                  <div className="">
                    <input
                      className=" border rounded-md border-gray-300 bg-teal-800 text-white w-full py-2 px-2 text-sm"
                      type="submit"
                      value="Sign in"
                    />
                  </div>
                </div>
              </form>

              <div className=" mt-6">
                <div className=" relative">
                  <div className=" absolute inset-0 flex items-center">
                    <div className=" w-full border-t border-gray-300"></div>
                  </div>
                  <div className=" relative flex justify-center text-sm">
                    <p className=" bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-300">
                      {" "}
                      Or continue with
                    </p>
                  </div>
                </div>
              </div>

              <div className=" mt-6 grid grid-cols-2 gap-3">
                <div className="">
                  <form action="">
                    <button className=" border rounded-md border-gray-300 w-full py-2 px-4 text-sm font-medium text-gray-500 dark:text-gray-300 focus:ring-0">
                      <span className=" sr-only">Sign in with Github</span>
                      <GitHubIcon />
                    </button>
                    
                  </form>
                </div>

                <div className="">
                  <form action="">
                    <button className=" border rounded-md border-gray-300 w-full py-2 px-4 text-sm font-medium text-gray-500 dark:text-gray-300 focus:ring-0">
                      <span className=" sr-only">SIgn in with Google</span>
                      <GoogleIcon />
                    </button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
