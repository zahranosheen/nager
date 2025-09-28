"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">About Our School</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        At Ayesha School, we focus on academic excellence, extracurricular activities,
        and character development to help students succeed in all aspects of life.
      </p>
      <img
        src="desktop.jpg"
        alt="About School"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default About;
