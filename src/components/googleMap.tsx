import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your Google Maps API key

function GoogleMapComponent() {
	const [mapCenter, setMapCenter] = useState<{
		lat: number;
		lng: number;
	} | null>(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			setMapCenter({ lat: latitude, lng: longitude });
		});
	}, []);

	if (!mapCenter) {
		return <div>Loading map...</div>;
	}

	return (
		<LoadScript googleMapsApiKey={googleMapsApiKey}>
			<GoogleMap
				center={mapCenter}
				zoom={12}
				mapContainerStyle={{ height: "400px", width: "100%" }}>
				<Marker position={mapCenter} />
			</GoogleMap>
		</LoadScript>
	);
}

export default GoogleMapComponent;
