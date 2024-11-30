
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawData = new FormData(e.target);
    const formData = Object.fromEntries(rawData);
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      toast.error("All fields are required");
      return;
    }
    axios
      // .post("https://virtual-incubator-full-stack-project.onrender.com/api/users/register", { username, email, password })
      .post("https://ten-virtual-incubator.onrender.com/api/users/register", { username, email, password })
      .then((response) => {
        if (response.status === 201) {
          toast.success("User added successfully! Now you need to Login.");
          navigate("/");
        } else {
          toast.error("Failed to sign up.");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred during sign-up.");
      });
  };

  return (
    <div className="container h-screen w-screen flex justify-center items-center">
      <div className="login p-4 border-2 flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-semibold">SignUp</h1>
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username..."
            name="username"
            className="text-xl py-2 px-4 border-2 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Email..."
            name="email"
            className="text-xl py-2 px-4 border-2 rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Password..."
            name="password"
            className="text-xl py-2 px-4 border-2 rounded-md outline-none"
          />
          <button
            type="submit"
            className="text-xl w-full py-2 px-4 border-2 rounded-md outline-none bg-slate-600 text-slate-50"
          >
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
