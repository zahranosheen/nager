"use client";
import React from "react";

const Admissions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Admissions</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        We are currently accepting applications for classes from Kindergarten to Grade 10. 
        Admissions are based on merit and availability of seats.
      </p>

      <ul className="space-y-4 text-left bg-white p-6 rounded-lg shadow-md max-w-md">
        <li>✅ Kindergarten – Age 4+</li>
        <li>✅ Primary (Grade 1 to 5)</li>
        <li>✅ Secondary (Grade 6 to 10)</li>
        <li>✅ Co-curricular activities included</li>
      </ul>
    </div>
  );
};

export default Admissions;
