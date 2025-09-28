"use client";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <ul className="flex space-x-6 text-white font-semibold justify-center">
        <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
        <li><Link href="/admissions" className="hover:text-yellow-300">Admissions</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
