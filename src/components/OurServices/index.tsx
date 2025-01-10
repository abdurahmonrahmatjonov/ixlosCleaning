import React from "react";
import gilam from "../../assets/images/gilam.jpeg";
import stulYuvish from "../../assets/images/stulYuvish2.jpeg";
import divanYuvish from "../../assets/images/divanYuvish-2.jpeg";
import matrasYuvish from "../../assets/images/matrasYuvish.jpeg";
import adyolYuvish from "../../assets/images/adyolYuvish2.jpeg";
import korpachaYuvish from "../../assets/images/korpachaYuvish2.jpeg";
import pardaYuvish from "../../assets/images/pardaYuvish.jpeg";
interface Source {
	id: number;
	title: string;
	price: string;
	image: string;
	comment?: string;
}
const OurServices: React.FC = () => {
	const src = [
		{
			id: 1,
			title: "Gilam yuvish",
			price: "13 000 so'm/m² ",
			comment: "Eng kam buyurtma (15 m²) hisoblanadi.",
			image: gilam,
		},
		{
			id: 2,
			title: "Stul (joyida tozalash)",
			price: "25 000-35 000 so'm / dona",
			image: stulYuvish,
		},
		{
			id: 3,
			title: "Divan (joyida tozalash)",
			price: "80 000 so'm / 1 o'rindiq uchun",
			image: divanYuvish,
		},
		{
			id: 4,
			title: "Matras  (joyida tozalash)",
			price: "200 000 so'm / dona",
			image: matrasYuvish,
		},
		{
			id: 5,
			title: "Adyol yuvish",
			price: "80 000 - 120 000 so'm",
			image: adyolYuvish,
		},
		{
			id: 6,
			title: "Kopracha yuvish",
			price: "60 000 - 120 000 so'm / dona",
			image: korpachaYuvish,
		},

		{
			id: 7,
			title: "Parda yuvish",
			price: "25 000 so'm / m",
			image: pardaYuvish,
		},
	];

	const [source] = React.useState<Source[]>(src);

	return (
		<div>
			<h1 className="mt-20 mb-10 text-center text-5xl font-bold text-blue-700 hover:text-blue-500 ">
				Xizmatlarimiz
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 px-10 flex-wrap justify-center gap-10 ">
				{source.map((item) => {
					return (
						<div
							key={item.id}
							className="w-full  flex flex-col items-center gap-3 text-center transform hover:scale-105  p-2 rounded-lg border-blue-300 border-2 cursor-pointer"
						>
							<img
								src={item.image}
								alt="work1"
								className="w-full h-64   rounded-lg  object-cover origin-center"
							/>
							<h2 className=" text-xl font-bold hover:text-blue-700">{item.title}</h2>
							<div className="flex flex-col gap-2 items-center">
								<p className=" text-lg hover:text-blue-500">{item.price}</p>
								<p className=" text-sm  hover:text-blue-500">{item.comment}</p>
								<button
									className=" bg-blue-500 w-[200px] py-2 px-5 text-lg rounded-lg hover:bg-blue-600 text-white"
									onClick={() => window.open("https://t.me/euro_stirka", "_blank")}
								>
									Buyurtma berish
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OurServices;
