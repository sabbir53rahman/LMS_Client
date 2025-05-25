"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white pt-[75px] text-gray-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">About Our LMS</h1>
          <p className="text-xl opacity-90">
            Revolutionizing the way people learn with technology-driven, accessible education for all.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-left">
          <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="animate-slide-right">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
          <p className="mb-8 text-gray-700 text-lg">
            To make high-quality education accessible, interactive, and personalized for every learner worldwide.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            To become the most trusted and engaging platform for modern digital education, empowering students and educators to achieve their goals.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 text-blue-900">Why Choose Our LMS?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Interactive Courses",
                desc: "Engage with quizzes, videos, and assignments tailored for better understanding.",
              },
              {
                title: "Expert Instructors",
                desc: "Learn from industry professionals and top educators worldwide.",
              },
              {
                title: "Flexible Learning",
                desc: "Access content anytime, anywhere – learn at your own pace.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 text-blue-900">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation",
                desc: "We constantly evolve to bring the best learning experience.",
              },
              {
                title: "Accessibility",
                desc: "We believe education should be available to everyone.",
              },
              {
                title: "Community",
                desc: "We foster a vibrant learning community for collaboration.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 text-blue-900">What Our Learners Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Jane Doe",
                feedback:
                  "This LMS helped me transition my career. The flexibility and support are unmatched.",
              },
              {
                name: "John Smith",
                feedback:
                  "The courses are comprehensive and the community is amazing. Highly recommended!",
              },
            ].map((testimony, i) => (
              <div
                key={i}
                className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-md text-left"
              >
                <p className="italic mb-4 text-gray-700 text-lg">“{testimony.feedback}”</p>
                <h4 className="font-semibold text-blue-700 text-lg">— {testimony.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-blue-900">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-6xl mx-auto text-center">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src={`/images/team-${id}.jpg`}
                alt={`Team Member ${id}`}
                width={96}
                height={96}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-lg text-blue-700">Member {id}</h4>
              <p className="text-gray-500 text-sm">Role / Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-blue-600 text-white text-center py-24 px-4">
        <h2 className="text-4xl font-bold mb-4">Join Us on Our Mission</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg">
          Whether you&apos;re a student looking to grow or an educator ready to share knowledge, our platform is built for you.
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
