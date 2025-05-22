"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import useAuth from "@/Firebase/useAuth";
import { Eye, EyeOff } from "lucide-react"; // 👈 Import icons

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // 👈 Toggle state
  const router = useRouter();
  const { signIn } = useAuth();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(formData.email, formData.password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-md w-full text-center text-white bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20"
      >
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="mt-2 text-gray-300">Enter your credentials to log in</p>

        {error && (
          <p className="mt-4 text-red-400 bg-red-100 text-sm p-2 rounded-md">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
          />

          {/* Password Input with Eye Icon */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-[#48BEF7] hover:bg-[#2a9df4] text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-4 text-gray-300">
          Do not have an account?{" "}
          <Link href="/auth/signup" className="text-[#48BEF7] hover:underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
