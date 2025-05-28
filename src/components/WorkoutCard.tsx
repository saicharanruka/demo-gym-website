import Image, { StaticImageData } from "next/image";
import React from "react";

interface WorkoutCardProps {
	image: StaticImageData;
	title: string;
	tag: string;
	description: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
	image,
	title,
	tag,
	description,
}) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="relative">
				<Image
					src={image}
					alt="WorkoutCard"
					className="w-full object-cover rounded-3xl"
				/>

				{/* Black overlay */}
				{/* <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl" /> */}

				{/* Tag on top of overlay */}
				<p className="absolute top-3 right-3 z-10 border border-gray-800/80 bg-black/40 text-white rounded-full p-2 text-sm font-semibold">
					{tag}
				</p>
			</div>
			<div className="flex flex-col items-center max-w-xs mx-auto">
				<h3 className="text-lg font-semibold tracking-tighter ">{title}</h3>
				<p className="text-base font-medium opacity-60 tracking-tighter">
					{description}
				</p>
			</div>
		</div>
	);
};

export default WorkoutCard;
