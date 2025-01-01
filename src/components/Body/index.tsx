import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/image-1.jpg";
import image3 from "../../assets/images/image-3.jpg";
import image4 from "../../assets/images/image-4.jpg";
import services from "../../assets/images/services.jpg";
import table from "../../assets/images/table.jpg";

interface SlideImage {
	url: string;
	caption: string;
	comment: string;
}

const Body: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const slideImages: SlideImage[] = [
		{
			url: "https://hellocleaners.co.uk/wp-content/uploads/2021/08/carpet-cleaning-services.jpg",
			caption: "Gilam yuvish",
			comment: "Качественная чистка ковров в Ташкенте",
		},
		{
			url: image1,
			caption: "Gilam yuvish",
			comment: "Качественная чистка ковров в Ташкенте",
		},
		{
			url: image3,
			caption: "Gilam yuvish",
			comment: "Качественная чистка ковров в Ташкенте",
		},
		{
			url: image4,
			caption: "Gilam yuvish",
			comment: "Качественная чистка ковров в Ташкенте",
		},
		{
			url: services,
			caption: "Gilam yuvish",
			comment: "Качественная чистка ковров в Ташкенте",
		},
	];

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + slideImages.length) % slideImages.length);
	};

	useEffect(() => {
		const interval = setInterval(handleNext, 10000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full mt-10 ">
			<div
				className="relative w-full h-[600px] bg-cover bg-center  transition-all duration-1000 	"
				style={{ backgroundImage: `url(${slideImages[currentIndex].url})` }}
			>
				<div className="absolute inset-0 flex items-center ml-20 mb-32 justify-start ">
					<div className="flex flex-col">
						<span className="text-white hover:text-blue-700 text-7xl font-sans font-semibold  p-3">
							{slideImages[currentIndex].caption}
						</span>
						<span className="text-gray-200	 hover:text-blue-500	 text-lg p-3">
							{slideImages[currentIndex].comment}
						</span>
					</div>
				</div>

				<button
					onClick={handlePrev}
					className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 "
				>
					&#10094;
				</button>

				<button
					onClick={handleNext}
					className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70"
				>
					&#10095;
				</button>

				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{slideImages.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full ${
								currentIndex === index ? "bg-blue-500" : "bg-gray-300"
							}`}
							onClick={() => setCurrentIndex(index)}
						></button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Body;
