import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../Utils/apis";
import toast from 'react-hot-toast';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    try {
      const response = await fetch(apis().signupUser, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result?.message)
      }
      if (result?.status) {
        toast.success(result?.message)
        console.log(result?.message)
        navigate("/login");
      }
      console.log('/login')
    } catch (error) {
      let errorMessage = error.message;

      // Customize error messages for specific cases
      if (error.message.includes("<!DOCTYPE")) {
        errorMessage = "User already exist";
      } else if (error.message === "Failed to fetch") {
        errorMessage = "Unable to connect to the server. Please check your internet connection.";
      }

      toast.error(errorMessage);
      console.error("Error:", error.message); // For debugging in console
    }
    // Signup data submission logic here

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              required
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Signup
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;


