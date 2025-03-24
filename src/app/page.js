"use client"
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-3xl text-center text-white bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20"
      >
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Transform Your Learning Journey
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Join our platform to access high-quality courses, expert instructors, and a
          supportive learning community. Start your educational journey today.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link href="/auth/signup">
            <button className="flex items-center gap-2 text-lg bg-[#48BEF7] hover:bg-[#2a9df4] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300">
              Get Started
              <GraduationCap className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/courses">
            <button className="text-lg border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Browse Courses
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
