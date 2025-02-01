
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { navLinks } from "@/data/navLinlks";
import Image from "next/image";

interface  NavigationProps{
    logoUrl : string,
}

export default function Navigation({logoUrl}:NavigationProps) {
    const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [brandOutput, setBrandOutput] = useState({});
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    
    if (id) {
      fetch(`http://13.202.181.37:9006/wuelev8/api/v1/aibuilder/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBrandOutput(data?.result);
          setBrandName(data?.result?.brandName);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md  z-50 h-16">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <Link href="#page-top" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
          {logoUrl && <Image
            height={50}
            width={60}
            src={logoUrl}
            alt="logo"
          />}
           </Link>
        </div>
        <div>
          <ul className="flex space-x-6">
            {navLinks.map((link:any) => (
              <li key={link.href}>
                <Link className="hover:text-blue-600" href={link.href}>
                    {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
