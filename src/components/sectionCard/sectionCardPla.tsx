import CrazyForYouPlanCard from "../cardPlan/cardPlan";
import { planData } from "@/data/card";

const SectionPricingPlans = () => (
    <div className="flex flex-col gap-10 mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        One simple price. Many great benefits.
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {planData.map((plan, index) => (
          <CrazyForYouPlanCard key={index} title={plan.title} price={plan.price} duration={plan.duration} description={plan.description} features={plan.features} />
        ))}
      </div>
    </div>
  );
  
  export default SectionPricingPlans