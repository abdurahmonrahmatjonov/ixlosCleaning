import Header from "./components/Header";
import Body from "./components/Body";
import HowWeWork from "./components/HowWeWork";
import washing2 from "./assets/images/washing-2.mp4";
import OurServices from "./components/OurServices";
import ImageComparison from "./components/ImageComprasion";
import callCenter from "./assets/images/call-center.jpg";
import car from "./assets/images/car.jpg";
function App() {
	return (
		<div className="bg-white">
			<Header />
			<Body />
			<HowWeWork />
			<OurServices />
			{/* <ImageComparison
				beforeImage={callCenter}
				afterImage={car}
				beforeText="Old"
				afterText="Cleaned"
			/> */}

			<div className="mt-10">
				<video autoPlay muted loop controls className="w-full h-[500px] select-none">
					<source src={washing2} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export default App;
