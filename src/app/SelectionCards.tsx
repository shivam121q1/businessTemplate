import NetworkCard from "@/components/NetworkCard/NetworkCard";
import img from './4bd845e6e0a5362ca1524e3f32cfe9e3.jpg'
import img1 from "./B1.jpg"


const SectionNetworkCards = () => (
    <div className="flex flex-col gap-10">
      <NetworkCard
        title="Bring your own phone"
        description="Bring your compatible phone to our network for seamless connectivity. Save money, keep your number, and activate your service in just a few simple steps."
        buttonText="Get Started"
        imageSrc={img}
      />
      <NetworkCard
        title="America’s best network"
        description="Experience unmatched coverage and lightning-fast speeds on America’s best network. Stay connected anywhere with reliable service you can trust."
        buttonText="Check Coverage"
        imageSrc={img1}
        classs="flex flex-col md:flex-row-reverse ml-20"
      />
    </div>
);
export default SectionNetworkCards