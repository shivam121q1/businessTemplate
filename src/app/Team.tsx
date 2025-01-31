// components/Team.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";

interface TeamProps {
  data?: {
    name: string;
    img: StaticImageData;
    job: string;
  }[];
}

const TeamMemberCard: React.FC<{ img: StaticImageData; name: string; job: string }> = ({ img, name, job }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <Image
      src={img}
      alt={name}
      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-100"
    />
    <h4 className="text-lg font-bold text-gray-800">{name}</h4>
    <p className="text-sm text-gray-500">{job}</p>
  </div>
);

export const Team: React.FC<TeamProps> = ({ data }) => {
  return (
    <div id="team" className="text-center py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">The workforce behind the scenes</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data ? (
            data.map((member, index) => (
              <TeamMemberCard
                key={`${member.name}-${index}`}
                img={member.img}
                name={member.name}
                job={member.job}
              />
            ))
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
