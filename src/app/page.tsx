import FAQs from "@/sections/FAQs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Workouts from "@/sections/Workouts";

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Workouts />
			<Pricing />
			<FAQs />
		</>
	);
}
