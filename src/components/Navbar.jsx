"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAuth from "@/Firebase/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/userSlice/userSlice";

export default function Navbar() {
  const { logOut } = useAuth();
  const user = useSelector((state) => state.user.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logOut();
      dispatch(logout());
      setMenuOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-gray-800 shadow-md transition-all duration-500">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Text */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <div>
            <span className="text-white font-bold text-2xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              SkillNest
            </span>
            <div className="text-xs text-orange-300">Master • Build • Succeed</div>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Courses", "About Us"].map((text, index) => (
            <Link
              key={index}
              href={`/${text.toLowerCase().replace(" ", "")}`}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
            >
              {text}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
          {user && (
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
            >
              Dashboard
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-white hover:text-white hover:bg-gray-800 border border-gray-700 backdrop-blur-sm"
            >
              Logout
            </Button>
          ) : (
            <>
              <Link href="/auth/login">
                <Button
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-gray-800 border border-gray-700 backdrop-blur-sm"
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-6 py-2 rounded-xl font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-gray-700 px-4 pb-6 shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4">
            {["Home", "Courses", "About Us"].map((text, index) => (
              <Link
                key={index}
                href={`/${text.toLowerCase().replace(" ", "")}`}
                className="text-gray-300 hover:text-white font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </Link>
            ))}
            {user && (
              <Link
                href="/dashboard"
                className="text-gray-300 hover:text-white font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="w-full text-center border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="w-full text-center bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
