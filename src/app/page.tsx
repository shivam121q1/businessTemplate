"use client";
import Image from "next/image";
import Navigation from "./Navbar";
import { Header } from "./HeroSection";
import AboutUs from "./Aboutus";
import Services from "./Services";
import SectionPricingPlans from "@/components/sectionCard/sectionCardPla";
import Team from "./Team";
import JsonData from "./data.json";
import { team } from "@/data/card";
import SectionNetworkCards from "./SelectionCards";
import { Contact } from "./ContactUs";
import { useEffect, useState, Suspense } from "react";
import { getAIBrandOutput } from "@/utils/api";
import { useSearchParams } from "next/navigation";

function HomeComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [brandOutput, setBrandOutput] = useState<any>(null); // Holds entire response
  const [brandName, setBrandName] = useState<string>(""); // Holds brandName
  const [inputData, setInputData] = useState<any>(null); // Parsed input data
  const [outputData, setOutputData] = useState<any>(null); // Parsed output data

  useEffect(() => {
    if (!id) return; // Avoid running fetch when there is no ID
    const getBrandData = async () => {
      try {
        const data = await getAIBrandOutput(id);
        console.log("API Data:", data); // Log the API response

        setBrandOutput(data);
        setOutputData(data?.output ? JSON.parse(data?.output) : {});
      } catch (err) {
        console.error("Failed to fetch brand output:", err);
      }
    };
    getBrandData();
  }, [id]);

  return (
    <div className="flex flex-col">
      <Navigation logoUrl={outputData?.logoURL} />
      <Header brandName={brandOutput?.brandName} Tagline={outputData?.tagline} />
      <AboutUs Tagline={outputData?.tagline} description={outputData?.description} />
      <Services />
      <SectionPricingPlans />
      <SectionNetworkCards />
      <Team data={team} />
      <Contact  brandName={brandOutput?.brandName} />
      <div className="mt-10 flex space-x-6 justify-center items-center pb-4">
          <h2 className="text-xl md:text-xl font-bold text-center text-primary">{brandOutput?.brandName}</h2>
          {outputData?.contactInfoEmail && <div className="flex items-center space-x-4"><div className="w-1 h-5 border bg-primary"> </div> <h2 className="text-xl md:text-xl font-bold text-primary">{outputData?.contactInfoEmail}</h2></div>}
          {outputData?.contactInfoPhone && <div className="flex items-center space-x-4"><div className="w-1 h-5 border bg-primary" > </div> <h2 className="text-xl md:text-xl font-bold text-primary">{outputData?.contactInfoPhone}</h2></div>}
        </div>
  
    </div>
  );
}

// Wrap in Suspense Boundary
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeComponent />
    </Suspense>
  );
}
