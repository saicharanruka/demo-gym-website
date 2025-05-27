import Image from "next/image";

import heroImage from "@/assets/hero/hero-img.png";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="pb-16 md:pb-0 md:-mt-16 bg-gray-500/5 rounded-2xl relative ">
			<div className="absolute inset-0 -z-10  bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
			<div className="pt-24 md:pt-12 flex items-center justify-between gap-16 px-8">
				<div className="flex flex-col gap-4">
					<h1 className="text-5xl font-medium max-w-sm tracking-tight">
						Build Strength. Embrace{" "}
						<span className="text-primary">Greatness.</span>
					</h1>
					<p className="font-semibold opacity-60 text-base max-w-xl tracking-tight">
						Power your fitness journey with exprert training, personalized
						programs, and a community that pushes you beyong limts
					</p>
					<Link
						href="/contact"
						className="flex max-w-max rounded-full bg-primary text-white p-2 shadow-md px-3 font-medium text-sm"
					>
						Contact us
					</Link>
				</div>
				<Image
					src={heroImage}
					alt="Hero Image"
					className="hidden md:inline grayscale -z-10"
					width={415}
				/>
			</div>
		</section>
	);
};

export default Hero;
