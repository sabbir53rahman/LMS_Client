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
import LmsBanner from "@/components/pages/landingPage/banner";
import CourseCategories from "@/components/pages/landingPage/CourseCategories";
import FeaturedCourses from "@/components/pages/landingPage/FeaturedCourses";
import WhyChooseUs from "@/components/pages/landingPage/WhyChooseUs";
import InstructorShowcase from "@/components/pages/landingPage/InstructorShowcase";
import SuccessStories from "@/components/pages/landingPage/SuccessStories";
import Background from "@/components/background";

export default function Home() {
  const router = useRouter();
  const { user, isAuthLoading } = useAuth();

  const handleGetStarted = () => {
    if (!isAuthLoading) {
      router.push(user ? "/dashboard" : "/auth/signup");
    }
  };

  return (
    <div className="bg-white text-gray-900">
      <Background/>
      <LmsBanner />
      <CourseCategories />
      <WhyChooseUs />
      <InstructorShowcase />
      <SuccessStories />
    </div>
  );
}
