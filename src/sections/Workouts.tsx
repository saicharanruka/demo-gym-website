"use client";

import WorkoutCard from "@/components/WorkoutCard";
import WorkoutImg from "@/assets/workout.jpg";
import SectionHeader from "@/components/SectionHeader";

const Workouts = () => {
	return (
		<section className="pt-28">
			<SectionHeader
				heading="Find your perfect workout plan"
				body="We believe that convenience, expert guidance, top-tier resources, and
					a supportive environment are the pillars of a successful fitness
					journey. That's why we offer:"
			/>
			<div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-10">
				<WorkoutCard
					image={WorkoutImg}
					tag="Insights"
					title="Mastering your form : How technique transforms results"
					description="Proper form isn’t just about avoiding injuries - it is key to faster progress.Learn how to move with purpose, improve performance and unlock strength. "
				/>
				<WorkoutCard
					image={WorkoutImg}
					tag="Insights"
					title="Mastering your form : How technique transforms results"
					description="Proper form isn’t just about avoiding injuries - it is key to faster progress.Learn how to move with purpose, improve performance and unlock strength. "
				/>
				<WorkoutCard
					image={WorkoutImg}
					tag="Insights"
					title="Mastering your form : How technique transforms results"
					description="Proper form isn’t just about avoiding injuries - it is key to faster progress.Learn how to move with purpose, improve performance and unlock strength. "
				/>
			</div>
			<div className="pt-8 flex justify-center items-center">
				<a
					href="/contact"
					className="font-medium rounded-full p-3 px-4 bg-gray-300/30 border-gray-300 border-2"
				>
					See More
				</a>
			</div>
		</section>
	);
};

export default Workouts;
