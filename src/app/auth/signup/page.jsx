"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "", // Default role
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Form submitted successfully!");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center px-6">
      {/* Sign-Up Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-lg w-full text-center text-white bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20"
      >
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <p className="mt-2 text-gray-300">Choose your role to continue</p>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
          />

          {/* Role Selection Dropdown */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7] appearance-none cursor-pointer"
          >
            <option
              value=""
              disabled
              className="bg-white/20 text-black"
            >
              Select Role
            </option>
            <option value="student" className=" text-black">
              Student
            </option>
            <option value="teacher" className="text-black">
              Teacher
            </option>
          </select>

          <button
            type="submit"
            className="mt-4 w-full bg-[#48BEF7] hover:bg-[#2a9df4] text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            {/* as {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)} */}
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-4 text-gray-300">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#48BEF7] hover:underline">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
