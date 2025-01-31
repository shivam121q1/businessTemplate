// components/Services.tsx
"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

import { cardData } from "@/data/card";

const ServiceCard: React.FC<{ icon: LucideIcon; title: string; text: string }> = ({ icon: Icon, title, text }) => (
  <div className="flex justify-center items-center text-white ">
    <Card className="w-64 p-4 rounded-2xl shadow-md h-56">
      <div className="flex justify-center">
        <div className="bg-gray-100 p-4 rounded-full">
          {Icon ? <Icon className="w-8 h-8 text-black" /> : null}
        </div>
      </div>
      <CardContent>
        <CardTitle className="text-center text-lg font-bold">{title}</CardTitle>
        <p className="text-center text-sm text-gray-600 mt-2">{text}</p>
      </CardContent>
    </Card>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div id="services" className="text-center py-16 bg-custom-gradient text0white">
      <div className="container mx-auto px-4">
        <div className="section-title mb-12">
          <h2 className="text-4xl text-white font-bold mb-4">Our Services</h2>
          <p className="text-white max-w-3xl mx-auto">
            We are committed to delivering innovative solutions that cater to your needs. Our services are designed to help businesses and individuals achieve their goals efficiently and effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cardData ? (
            cardData.map((service, index) => (
              <ServiceCard
                key={`${service.heading}-${index}`}
                icon={service.icon}
                title={service.heading}
                text={service.text}
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

export default Services;