// app/components/Footer.tsx or components/Footer.tsx
"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* LMS Name or Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SkillNest</h2>
          <p className="text-sm leading-relaxed">
            Empowering educators and learners with modern tools for online
            education.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:underline transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:underline transition duration-200"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:support@skillnest.com"
              className="hover:underline"
              aria-label="Email"
            >
              support@skillnest.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <Phone className="w-4 h-4" />
            <a
              href="tel:+1234567890"
              className="hover:underline"
              aria-label="Phone number"
            >
              +1 234 567 890
            </a>
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 hover:text-blue-400 transition duration-200" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-pink-400 transition duration-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-300 transition duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-10 border-t border-blue-700 pt-6">
        &copy; {new Date().getFullYear()} SkillNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
