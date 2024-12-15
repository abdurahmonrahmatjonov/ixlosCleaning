import * as React from "react";

type LocationIconProps = React.SVGProps<SVGSVGElement>;

const LocationIcon: React.FC<LocationIconProps> = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
		<path stroke="#2367bb" strokeWidth={1.5} d="M12 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
		<path
			stroke="#2367bb"
			strokeWidth={1.5}
			d="M17 7.857c0 2.285-1.698 5.14-3.558 7.046C12.22 16.157 10.926 17 10 17c-.926 0-2.22-.843-3.442-2.097C4.698 12.997 3 10.142 3 7.857 3 4.07 6.134 1 10 1s7 3.07 7 6.857Z"
		/>
		<path
			stroke="#2367bb"
			strokeLinecap="round"
			strokeWidth={1.5}
			d="M13.154 15.19C16.57 15.615 19 16.713 19 18c0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.287 2.431-2.385 5.846-2.81"
		/>
	</svg>
);

export default LocationIcon;
