import React from "react";

const features = [
	"24/7 unlimited access to all gym facilities",
	"Access to all group fitness classes",
	"Discounts on personal training sessions",
	"Locker room access",
];

import CheckIcon from "@/assets/checkbox.svg";
import { twMerge } from "tailwind-merge";

const PricingCard = ({ dark = false }: { dark?: boolean }) => {
	return (
		<div className="flex flex-col justify-start items-start border rounded-3xl p-5 pb-5 px-3 gap-1">
			<p className="bg-primary rounded-full p-1 text-white text-xs font-semibold px-2">
				Re:Charge Membership
			</p>
			<p className="text-sm font-medium tracking-tight py-2">
				Those who want full, unrestricted access.
			</p>
			<div className="flex gap-1 items-center">
				<h3 className="text-2xl">₹1,999</h3>
				<p className="opacity-60">/month</p>
			</div>
			<div className="flex w-full px-3 py-2">
				<hr className="border-1 w-full" />
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-sm font-semibold">Features include:</p>
				<div className="px-3 py-1">
					{features.map((feature, idx) => (
						<div key={idx} className="flex gap-2 py-[2px]">
							<CheckIcon />
							<p className="font-medium text-sm">{feature}</p>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-start justify-center w-full">
				<a
					href="/contact"
					className={twMerge(
						"rounded-full w-full text-center text-sm p-2 font-medium",
						dark ? "bg-primary text-white" : "bg-gray-400/30 text-black"
					)}
				>
					Book This Package
				</a>
			</div>
		</div>
	);
};

export default PricingCard;
