"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/Firebase/useAuth";
import { Eye, EyeOff } from "lucide-react"; // 👈 Import eye icons

export default function SignUp() {
  const router = useRouter();
  const { createUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // 👈 Password toggle state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await createUser(
        formData.fullName,
        formData.email,
        formData.password,
        formData.role
      );
      alert("Account created successfully!");
      router.push("/");
    } catch (err) {
      setError(err.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-lg w-full text-center text-white bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20"
      >
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <p className="mt-2 text-gray-300">Choose your role to continue</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
          />

          {/* Password with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 pr-12 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Role Dropdown */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7] appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-white/20 text-black">
              Select Role
            </option>
            <option value="student" className="text-black">
              Student
            </option>
            <option value="teacher" className="text-black">
              Teacher
            </option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-[#48BEF7] hover:bg-[#2a9df4] text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {/* Error Message */}
          {error && <p className="text-red-400 mt-2">{error}</p>}
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
