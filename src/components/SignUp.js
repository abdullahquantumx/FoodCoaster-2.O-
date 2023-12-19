import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email.trim(),
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  const handleNameChange = (e) => {
    setCredentials({ ...credentials, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setCredentials({ ...credentials, email: e.target.value.trim() });
  };

  const handlePasswordChange = (e) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setCredentials({ ...credentials, cpassword: e.target.value });
  };

  return (
    <div className="min-h-screen flex bg-blue-500 w-screen">
      <motion.div
        variants={{
          hidden: { y: 30, opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
        className="p-8 rounded shadow-md md:w-2/3 sm:w-full mx-auto my-24 mt-12 md:ml-64 bg-none shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-black text-sm font-medium mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              onChange={handleNameChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black text-sm font-medium mb-2"
            >
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              onChange={handleEmailChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handlePasswordChange}
              minLength={5}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label
              htmlFor="cpassword"
              className="block text-black text-sm font-medium mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleConfirmPasswordChange}
              minLength={5}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mx-auto block"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
