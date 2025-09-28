"use client";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Ayesha School</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        Ayesha School is committed to providing quality education and a bright future for every student.
      </p>
      <img
        src="school.jpg"
        alt="School Image"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Home;
