"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import Link from "next/link";

interface HeaderProps {
  brandName:string,
  Tagline:string
}

export const Header = ({brandName,Tagline}:HeaderProps) => {
 
 
  return (
    <header id="header" className="bg-cover bg-blend-overlay bg-center relative" style={{
        backgroundImage:
          'url(https://res.cloudinary.com/drcoe5pnl/image/upload/v1738307581/nextjs_uploads/ztzwj0yrouwiywelulov.webp)',
      }}>
      <div className="intro relative z-10 text-white" >
        <div className="overla  py-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="text-center flex flex-col">
                <h2 className="text-4xl text-black font-bold mb-4">{brandName}</h2>
                <h4 className="text-2xl text-black font-semibold mb-4">
                             {Tagline}
                  <span className="block mt-2 text-indigo-500"></span>
                </h4>
                <Link
                  href="#features"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full transition-all text-md font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
