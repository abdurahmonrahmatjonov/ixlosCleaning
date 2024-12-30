import React from "react";

interface ImageComparisonProps {
	beforeImage: string;
	afterImage: string;
	beforeText?: string;
	afterText?: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({
	beforeImage,
	afterImage,
	beforeText = "Before",
	afterText = "After",
}) => {
	const [sliderPosition, setSliderPosition] = React.useState(50);

	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSliderPosition(Number(event.target.value));
	};

	return (
		<div className="relative w-full max-w-lg h-80 overflow-hidden">
			{/* Wrapper for the 'after' image */}
			<div
				className="absolute top-0 left-0 h-full overflow-hidden"
				style={{ width: `${sliderPosition}%` }}
			>
				<img
					src={afterImage}
					alt={afterText}
					className="absolute top-0 left-0 w-full h-full object-cover"
				/>
				<div className="absolute top-2 left-2 bg-black/50 text-white text-sm px-3 py-1 rounded">
					{afterText}
				</div>
			</div>

			{/* The 'before' image */}
			<img
				src={beforeImage}
				alt={beforeText}
				className="absolute top-0 left-0 w-full h-full object-cover"
			/>
			<div className="absolute top-2 right-2 bg-black/50 text-white text-sm px-3 py-1 rounded">
				{beforeText}
			</div>

			{/* Slider */}
			<input
				type="range"
				min="0"
				max="100"
				value={sliderPosition}
				onChange={handleSliderChange}
				className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-transparent"
			/>
		</div>
	);
};

export default ImageComparison;
