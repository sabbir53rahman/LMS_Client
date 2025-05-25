"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Our LMS</h1>
          <p className="text-xl">
            Revolutionizing the way people learn with technology-driven,
            accessible education for all.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            To make high-quality education accessible, interactive, and
            personalized for every learner worldwide.
          </p>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p>
            To become the most trusted and engaging platform for modern digital
            education, empowering students and educators to achieve their goals.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Our LMS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Learners Say</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
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
                className="bg-white p-6 rounded-xl shadow text-left hover:shadow-md transition"
              >
                <p className="italic mb-4">“{testimony.feedback}”</p>
                <h4 className="font-semibold text-lg">— {testimony.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white p-4 rounded-xl shadow">
              <Image
                src={`/images/team-${id}.jpg`}
                alt={`Team Member ${id}`}
                width={96}
                height={96}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-lg">Member {id}</h4>
              <p className="text-gray-500 text-sm">Role / Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
        <p className="max-w-xl mx-auto mb-6">
          Whether you&apos;re a student looking to grow or an educator ready to
          share knowledge, our platform is built for you.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
