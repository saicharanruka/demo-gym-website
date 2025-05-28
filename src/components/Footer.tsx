import Image from "next/image";
import mapImage from "@/assets/map.jpg";

const Footer = () => {
	return (
		<footer className="bg-[#1A1A1A] pb-32">
			<div className="flex justify-around items-start pt-24">
				<div className=" flex flex-col text-white/70 px-24">
					<h4 className="uppercase font-semibold">Contact</h4>
					<p className="max-w-sm">123 Street, New Delhi India </p>
					<p>+988888888</p>
				</div>
				<div className=" flex flex-col text-white/70 px-24">
					<h4 className="uppercase font-semibold">Legal</h4>
					<p>Terms & Conditions </p>
					<p>Privacy Policy</p>
				</div>
				<div className=" flex flex-col text-white/70 px-24">
					<h4 className="uppercase font-semibold">Social</h4>
					<p>Facebook </p>
					<p>Facebook </p>
					<p>Facebook </p>
					<p>Facebook </p>
				</div>
				<div className=" flex flex-col text-white/70 px-24">
					<h4 className="uppercase font-semibold">Locations</h4>
					<Image src={mapImage} alt="Map image" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
