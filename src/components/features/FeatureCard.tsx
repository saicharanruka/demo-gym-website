import React from "react";

interface FeatureCardProps {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	title: string;
	description: string;
	gradientBorder?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon: Icon,
	title,
	description,
	gradientBorder = false,
}) => {
	return (
		<div
			className={`flex flex-col items-center gap-4 p-6 rounded-2xl relative ${
				gradientBorder
					? "md:border-r-4 md:border-transparent md:pr-[calc(1.5rem-1px)]"
					: ""
			}`}
			style={
				gradientBorder
					? {
							borderImage:
								"linear-gradient(to bottom,#FFFFFF, #3058A6, #FFFFFF) 1",
							borderImageSlice: 1,
					  }
					: undefined
			}
		>
			<div className="">
				<Icon className="text-indigo-500" />
			</div>
			<div className="flex flex-col items-center">
				<h3 className="text-xl font-semibold">{title}</h3>
				<p className="text-gray-600 text-center">{description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
