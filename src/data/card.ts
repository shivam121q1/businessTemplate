import { Fingerprint, Phone, Wifi ,HandHeart} from "lucide-react";
import { Database, Play,  PhoneCall } from "lucide-react";
import {  Gauge } from "lucide-react";
import team1 from "./team/01.jpg"
import team2 from "./team/02.jpg"
import team3 from "./team/03.jpg"
import team4 from "./team/04.jpg"
export const cardData = [
    {icon:Fingerprint,heading:"Select plan",text:"Choose individual plans for up to 6 lines in your account."},
    {icon:Phone,heading:"Check phone & coverage ",text:"Verify your phone's compatibility and network coverage."},
    {icon:Wifi,heading:"Sign up",text:"Set up your Reach Mobile account to manage mobile service."},
    {icon:HandHeart,heading:"Activate & save",text:"Set up service and start saving right away. ."}
]



export const planData = [
  {
    title: "Starter",
    price: "$20.00",
    duration: "/mo",
    description: "(Plus taxes and fees)",
    features: [
      { icon: Database, text: "1GB data" },
      { icon: Play, text: "HD video streaming" },
    ],
  },
  {
    title: "Growth",
    price: "$35.00",
    duration: "/mo",
    description: "(Plus taxes and fees)",
    features: [
      { icon: Database, text: "10GB data" },
      { icon: Play, text: "HD video streaming" },
    ],
  },
  {
    title: "Pro",
    price: "$45.00",
    duration: "/mo",
    description: "(Plus taxes and fees)",
    features: [
      { icon: Database, text: "20GB data" },
      { icon: Play, text: "SD video streaming" },
      { icon: Wifi, text: "5GB hotspot data" },
      { icon: Gauge, text: "256 Kbps throttle speed" },
    ],
  },
  {
    title: "Elite",
    price: "$50.00",
    duration: "/mo",
    description: "(Plus taxes and fees)",
    features: [
      { icon: Database, text: "30GB data" },
      { icon: Play, text: "SD video streaming" },
      { icon: Wifi, text: "5GB hotspot data" },
      { icon: Gauge, text: "256 Kbps throttle speed" },
    ],
  },
]

export const team = [
    { img: team1, name: "John Doe", job: "Director" },
    { img: team2, name: "Mike Doe", job: "Senior Designer" },
    { img: team3, name: "Jane Doe", job: "Senior Designer" },
    { img: team4, name: "Karen Doe", job: "Project Manager" }
  ];
  