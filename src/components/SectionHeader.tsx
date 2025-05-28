import React from "react";

const SectionHeader = ({
	heading,
	body,
}: {
	heading: string;
	body: string;
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<h1 className="text-4xl font-medium text-center tracking-tight">
				{heading}
			</h1>
			<p className="opacity-50 text-center max-w-2xl font-semibold tracking-tighter">
				{body}
			</p>
		</div>
	);
};

export default SectionHeader;
