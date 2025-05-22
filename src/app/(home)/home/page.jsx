"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  ShieldCheck,
  Globe,
  PlayCircle,
  MessageCircleHeart,
} from "lucide-react";
import useAuth from "@/Firebase/useAuth";
import hero from "@/assets/lms-hero.png";
import trusted from "@/assets/trusted.png";
import howItWorks from "@/assets/how-it-works.png";

export default function Home() {
  const router = useRouter();
  const { user, isAuthLoading } = useAuth();

  const handleGetStarted = () => {
    if (!isAuthLoading) {
      router.push(user ? "/dashboard" : "/auth/signup");
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto"
        >
          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Learn. Grow. <br className="hidden sm:block" />
              Succeed with Our Platform
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Access top-quality courses and expert guidance from anywhere. Earn
              certifications, upskill, and connect with a vibrant learning
              community.
            </p>
            <div className="mt-8 flex gap-4">
              <button
                onClick={handleGetStarted}
                className="bg-[#48BEF7] hover:bg-[#2a9df4] text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Get Started
              </button>
              <Link href="/course">
                <button className="border border-gray-400 text-gray-800 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all">
                  Browse Courses
                </button>
              </Link>
            </div>
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              <Feature
                icon={<BookOpen size={20} />}
                label="Extensive Course Library"
              />
              <Feature icon={<Users size={20} />} label="Industry Experts" />
              <Feature
                icon={<ShieldCheck size={20} />}
                label="Verified Certifications"
              />
              <Feature
                icon={<GraduationCap size={20} />}
                label="Career Support"
              />
            </div>
          </div>

          {/* Image Side */}
          <div className="flex items-center justify-center">
            <Image
              src={hero}
              alt="Online Learning"
              width={500}
              height={400}
              className="rounded-xl h-auto object-cover shadow-xl"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Trusted by Thousands of Learners & Institutions
          </h2>
          <p className="mt-4 text-gray-600">
            From students to professionals — across universities, startups, and
            enterprises.
          </p>
          <div className="mt-10">
            <Image
              src={trusted}
              alt="Trusted logos"
              width={900}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-gray-600">
              Getting started is easy. Create your free account, explore
              courses, and begin your journey to success.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="text-[#48BEF7]" />
                <span>Create an account in minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <PlayCircle className="text-[#48BEF7]" />
                <span>Enroll in courses that match your goals</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircleHeart className="text-[#48BEF7]" />
                <span>Engage with mentors and peers</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src={howItWorks}
              alt="How it works"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            See how our students have transformed their careers with the help of
            our platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] rounded-lg p-6 shadow hover:shadow-md transition">
              <p className="text-sm text-gray-700 mb-4">
                “This platform helped me land my dream job. The mentorship and
                real-world projects made all the difference!”
              </p>
              <div className="text-left mt-4">
                <p className="font-semibold text-gray-800">Amit Sharma</p>
                <p className="text-sm text-gray-500">Full-Stack Developer</p>
              </div>
            </div>
            <div className="bg-[#f9f9f9] rounded-lg p-6 shadow hover:shadow-md transition">
              <p className="text-sm text-gray-700 mb-4">
                “I went from having zero coding experience to building apps
                professionally. Highly recommend it!”
              </p>
              <div className="text-left mt-4">
                <p className="font-semibold text-gray-800">Priya Verma</p>
                <p className="text-sm text-gray-500">Frontend Engineer</p>
              </div>
            </div>
            <div className="bg-[#f9f9f9] rounded-lg p-6 shadow hover:shadow-md transition">
              <p className="text-sm text-gray-700 mb-4">
                “The certification helped me stand out during interviews.
                It&apos;s a great investment in yourself.”
              </p>
              <div className="text-left mt-4">
                <p className="font-semibold text-gray-800">Rahul Joshi</p>
                <p className="text-sm text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#48BEF7] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Ready to level up your skills?</h2>
          <p className="mt-4 text-lg">
            Join thousands of learners on their journey to personal and
            professional growth.
          </p>
          <button
            onClick={handleGetStarted}
            className="mt-6 bg-white text-[#48BEF7] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-[#e6f7fd] rounded-full text-[#2a9df4]">{icon}</div>
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}
