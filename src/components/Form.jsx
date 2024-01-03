import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [formSubmit, setFormSubmit] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = validate(formData);

    if (Object.keys(errors).length === 0) {
      setFormSubmit(true);
      toast.success("Registration Successful!");
      navigate("/");
    } else {
      Object.values(errors).forEach((errorMsg) => {
        toast.error(errorMsg);
      });
      setFormSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};

    if (data.name.length < 3 || data.name.length > 30) {
      error.name = "Name should be between 3 and 30 characters.";
    }

    if (!data.email.includes("@")) {
      error.email = "Please enter a valid email address.";
    }

    if (
      data.password.length < 10 ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(data.password)
    ) {
      error.password =
        "Password should be at least 10 characters long with at least one special character.";
    }

    if (data.confirmPassword !== data.password) {
      error.confirmPassword = "Passwords do not match.";
    }

    return error;
  };

  return (
    <div>
      <fieldset className="border border-solid border-gray-300 p-3">
        <legend className="text-md bg-black text-white">Fill This Form</legend>

        <form
          onSubmit={handleSubmit}
          className="flex bg-slate-300 p-4 flex-col justify-center space-y-5 px-20 font-bold text-1xl"
        >
          {formSubmit && (
            <div className="text-white px-3 py-2 bg-blue-700">
              <p className="text-2xl font-bold">Registration Successful</p>
            </div>
          )}

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

          <label>Name: </label>
          <input
            onChange={handInputChange}
            type="text"
            name="name"
            className="bg-slate-100"
          />

          <label>Email: </label>
          <input
            onChange={handInputChange}
            type="email"
            name="email"
            className="bg-slate-100"
          />

          <label>Password: </label>
          <input
            onChange={handInputChange}
            type="password"
            name="password"
            className="bg-slate-100"
          />

          <label>Confirm Password: </label>
          <input
            onChange={handInputChange}
            type="password"
            name="confirmPassword"
            className="bg-slate-100"
          />

          <input
            type="submit"
            className="cursor-pointer text-2xl m-2 bg-green-400 p-3 rounded-md hover:bg-green-500 hover:text-white"
            value={"Register"}
          />
        </form>
      </fieldset>
    </div>
  );
}

export default Form;
