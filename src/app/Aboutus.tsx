"use client";

import React from "react";

interface AboutUsProps{
    Tagline:string,
    description:string
}
function trimBetweenAsterisks(str: string): string {
  const parts = str.split("*").filter((part) => part.trim() !== "");
  return parts.join("");
}

const  AboutUs = ({Tagline , description}:AboutUsProps) => {
  const loremTagline = "Your Vision, Our Innovation";
  const loremDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";
  const imageSrc = "https://res.cloudinary.com/drcoe5pnl/image/upload/v1738307581/nextjs_uploads/ztzwj0yrouwiywelulov.webp";

  return (
    <div id="about" className="h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src={imageSrc} className="w-full rounded-xl shadow-md" alt="About Image" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <h3 className="text-2xl text-indigo-600 mb-2">{Tagline}</h3>
            <h4 className="text-lg text-gray-700">
              {description}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
