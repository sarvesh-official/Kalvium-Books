import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);

    if (Object.keys(errors).length === 0) {
      localStorage.clear();
      localStorage.setItem("userName", formData.name);
      toast.success("Registration Successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      Object.values(errors).forEach((errorMsg) => {
        toast.error(errorMsg);
      });
    }
  };

  const validate = (data) => {
    const errors = {};

    if (data.name.length < 3 || data.name.length > 30) {
      errors.name = "Name should be between 3 and 30 characters.";
    }

    if (!data.email.includes("@")) {
      errors.email = "Please enter a valid email address.";
    }

    if (
      data.password.length < 10 ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(data.password)
    ) {
      errors.password =
        "Password should be at least 10 characters long with at least one special character.";
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
  };

  return (
    <div className="w-fit m-auto mt-20">
      <fieldset className="border border-solid border-gray-300 p-3">
        <legend className="text-md bg-black text-white">Fill This Form</legend>
        <form
          onSubmit={handleSubmit}
          className="flex bg-yellow-100 p-4 flex-col justify-center space-y-5 px-20 font-bold text-1xl"
        >
          <label>Name: </label>
          <input
            onChange={handInputChange}
            type="text"
            name="name"
            className="bg-slate-200"
          />

          <label>Email: </label>
          <input
            onChange={handInputChange}
            type="email"
            name="email"
            className="bg-slate-200"
          />

          <label>Password: </label>
          <input
            onChange={handInputChange}
            type="password"
            name="password"
            className="bg-slate-200"
          />

          <label>Confirm Password: </label>
          <input
            onChange={handInputChange}
            type="password"
            name="confirmPassword"
            className="bg-slate-200"
          />

          <input
            type="submit"
            className="cursor-pointer text-xl m-2 bg-orange-500 p-2 rounded-md hover:bg-black hover:text-white"
            value={"Register"}
          />
        </form>
      </fieldset>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Form;
