import React from "react";
import logo from "../../assets/images/logo.ico";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Header: React.FC = () => {
	const handleCall = () => {
		window.location.href = "tel:+998987173030";
	};

	return (
		<div className="flex items-center justify-around gap-10 mx-5 sm:mx-24 mt-5 flex-wrap">
			<div className="">
				<img src={logo} alt="Euro stirka gilam yuvish" className="h-28 rounded-lg" />
			</div>
			<div
				// onClick={() =>
				// 	window.open(
				// 		"https://yandex.uz/maps/10335/tashkent/?azimuth=6.2646761175075785&ll=69.314517%2C41.385805&mode=whatshere&tilt=0.02826095821914182&whatshere%5Bpoint%5D=69.313099%2C41.386394&whatshere%5Bzoom%5D=17&z=17.53",
				// 		"_blank"
				// 	)
				// }
				role="button"
				aria-label="location"
				className="flex items-start"
			>
				<FaLocationDot className="text-blue-600 text-2xl" />
				<div className="flex flex-col gap-1 ">
					<span className="text-lg text-blue-500">Address :</span>
					<span className="text-sm text-gray-400 text-opacity-80">
						Toshkent shahar Yunusobod tumani 
					</span>
				</div>
			</div>
			<div
				className="flex items-start gap-1 cursor-pointer"
				onClick={handleCall}
				role="button"
				aria-label="Call us"
			>
				<IoCall className="text-blue-600 text-2xl" />
				<div className="flex flex-col gap-1">
					<span className="text-lg text-blue-500">Murojaat uchun :</span>
					<span className="text-sm text-gray-400 text-opacity-80">+998(98)717-30-30</span>
				</div>
			</div>
			<button
				onClick={() => window.open("https://t.me/euro_stirka", "_blank")}
				className="bg-blue-800 text-white w-auto p-3 rounded-xl hover:bg-blue-700"
			>
				Buyurtma berish
			</button>
		</div>
	);
};

export default Header;
