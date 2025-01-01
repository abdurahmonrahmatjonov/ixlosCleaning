import React from "react";
import image1 from "../../assets/images/image-1.jpg";
import callCenter from "../../assets/images/call-center.jpg";
import car from "../../assets/images/car.jpg";
import wash from "../../assets/images/wash.jpg";
import centrafuga from "../../assets/images/centrafuga.jpg";
import sushilka from "../../assets/images/sushilka.jpg";
import image3 from "../../assets/images/image-3.jpg";
interface Source {
	id: number;
	title: string;
	description: string;
	image: string;
}
const HowWeWork: React.FC = () => {
	const source: Source[] = [
		{
			id: 1,
			title: "Buyurtma qabul qilinadi",
			description:
				"Siz buyurtma qoldirasiz va operatorlarimiz siz bilan boglanib buyurtma qabul qilib olishadi",
			image: callCenter,
		},
		{
			id: 2,
			title: "Olib ketish",
			description:
				"Buyurtma qabul qilingandan song kuryerlarimiz sizdan gilamingizni olib ketishadi",
			image: car,
		},
		{
			id: 3,
			title: "Gilam yuvish  (1-jarayon)",
			description: "Mahsus Turkiyadan keltirilgan kimyoviy vositalar bilan gilam yuviladi",
			image: wash,
		},
		{
			id: 4,
			title: "Quritish  (2-jarayon)",
			description:
				"Quritish jarayoni 3 ga bo'linadi.Birinchi jarayon : Gilamni quritish uchun maxsus quritgichga joylashtiriladi  va yuvilgan gilam suvi 90% siqiladi",
			image: centrafuga,
		},
		{
			id: 5,
			title: "Quritish (3-jarayon)",
			description: "Ikkinchi jarayon: Birinchi kuni gilam quritish uchun ochiq havoga osiladi.",
			image: image1,
		},
		{
			id: 6,
			title: "Quritish (4-jarayon)",
			description: "Uchinchi jarayon: Gilam  issiqxonada  100% quritiladi.",
			image: sushilka,
		},
		{
			id: 7,
			title: "Pardozlash  (5-jarayon)",
			description:
				"Qurigan gilamni pardozlash va maxsus hushboylantirish vositalari bilan qadoqlash.",
			image: image3,
		},
	];
	return (
		<div>
			<h1 className="mt-20 mb-10 text-center text-5xl font-bold text-blue-700 hover:text-blue-500 ">
				Biz qanday ishlaymiz
			</h1>
			<div className="flex flex-wrap justify-center gap-10 p-5">
				{source.map((item) => {
					return (
						<div
							key={item.id}
							className="w-full md:w-1/4 text-center border-blue-600 border-2 p-2 transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
						>
							<img src={item.image} alt="work1" className="w-full h-64 object-cover  rounded-lg " />
							<h2 className="mt-5 text-3xl font-bold hover:text-blue-700">{item.title}</h2>
							<p className="mt-3 text-lg hover:text-blue-500">{item.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HowWeWork;
