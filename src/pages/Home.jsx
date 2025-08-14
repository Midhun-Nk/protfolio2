import React from "react";
import { Link } from "react-router-dom";
import TextType from "../components/TextType";
import CurvedLoop from "../components/CurvedLoop";
import FallingText from "../components/FallingText";
import SplitText from "../components/TextType";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Python",
    "Django",
    "MongoDB",
    "Node.js",
    "Express.js",
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <SplitText
          text="Midhun Mike!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Full-stack developer in the making 🚀 — building projects in React,
          MERN, and Django while documenting my dev journey.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg font-medium shadow-lg transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-pink-500 hover:bg-pink-500 hover:text-white rounded-lg font-medium transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-500">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-pink-500/40 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
      {/* Content Creator Section */}
      <section className="bg-gray-800 py-12 px-6 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-500">Content Creator</h2>
        <p className="mt-4 text-gray-300">
          I run two Instagram pages:
          <strong> Mike | Dev Journey</strong> — documenting my coding challenge
          journey, and <strong>@edumikestudio</strong> — teaching coding to
          beginners.
        </p>
        <p className="mt-2 text-gray-400">
          In just 21 days, I created 30,000+ views and gained 300+ followers 📈
        </p>
      </section>
    </div>
  );
}
