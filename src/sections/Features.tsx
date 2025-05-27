import FeatureCard from "@/components/features/FeatureCard";
import React from "react";

import Svg24_7 from "@/assets/features/24-7.svg";

const Features = () => {
	return (
		<section className="pt-24">
			<div className="flex flex-col justify-center items-center gap-2">
				<h1 className="text-4xl font-medium">Why chose Re:Fit?</h1>
				<p className="opacity-50 text-center max-w-2xl font-semibold tracking-tighter">
					{" "}
					We believe that convenience, expert guidance, top-tier resources, and
					a supportive environment are the pillars of a successful fitness
					journey. That&apos;s why we offer:
				</p>
				<div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
					<FeatureCard
						icon={Svg24_7}
						title="24/7 Access"
						description="Whether you're an early bird or a night owl, your fitness journey doesn't have to wait"
						gradientBorder
					/>
					<FeatureCard
						icon={Svg24_7}
						title="24/7 Access"
						description="Whether you're an early bird or a night owl, your fitness journey doesn't have to wait"
						gradientBorder
					/>
					<FeatureCard
						icon={Svg24_7}
						title="24/7 Access"
						description="Whether you're an early bird or a night owl, your fitness journey doesn't have to wait"
						gradientBorder
					/>
					<FeatureCard
						icon={Svg24_7}
						title="24/7 Access"
						description="Whether you're an early bird or a night owl, your fitness journey doesn't have to wait"
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
