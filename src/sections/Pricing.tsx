import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const Pricing = () => {
	return (
		<section className="pt-24">
			<SectionHeader
				heading="Choose the plan that re:fits your lifestyle"
				body="Explore our membership tiers designed to offer the best value and access to our state-of-the-art facility, experienced trainers, and supportive community."
			/>
			<div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-7">
				<PricingCard />
				<PricingCard dark />
				<PricingCard dark />
			</div>
		</section>
	);
};

export default Pricing;
