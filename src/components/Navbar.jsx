"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import useAuth from "@/Firebase/useAuth";
import logo from "@/assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/userSlice/userSlice";

export default function Navbar() {
  const {  logOut } = useAuth();
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
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={60} height={60} />
            <span className="font-bold text-xl text-[#2D2E32]">SkillNest</span>
          </Link>
        </div>

        {/* Nav Links - Centered */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link
            href="/"
            className="text-[#2D2E32] hover:text-[#48BEF7] font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-[#2D2E32] hover:text-[#48BEF7] font-medium transition-colors"
          >
            Courses
          </Link>
          {user && (
            <Link
              href="/dashboard"
              className="text-[#2D2E32] hover:text-[#48BEF7] font-medium transition-colors"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Auth Buttons - Right */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="border border-[#48BEF7] text-[#48BEF7] px-4 py-2 rounded-lg font-semibold hover:bg-[#48BEF7] hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-[#48BEF7] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#36a5dc] transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-6 shadow-md">
          <nav className="flex flex-col items-center gap-4">
            <Link
              href="/"
              className="text-[#2D2E32] hover:text-[#48BEF7] font-medium"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-[#2D2E32] hover:text-[#48BEF7] font-medium"
            >
              Courses
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="text-[#2D2E32] hover:text-[#48BEF7] font-medium"
              >
                Dashboard
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-center bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="w-full text-center border border-[#48BEF7] text-[#48BEF7] px-4 py-2 rounded-lg font-semibold hover:bg-[#48BEF7] hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="w-full text-center bg-[#48BEF7] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#36a5dc] transition-colors"
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
