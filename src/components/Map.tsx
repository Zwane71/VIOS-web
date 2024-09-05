"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { layouts } from "chart.js";
import React from "react";
import { useEffect } from "react";

const Map = () => {
	const mapRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		const initMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
				version: "weekly",
			});

			const { Map } = await loader.importLibrary("maps");

			const { Marker } = (await loader.importLibrary(
				"marker"
			)) as google.maps.MarkerLibrary;

			const position = {
				lat: 27.516985,
				lng: -29.301914,
			};

			const mapOptions: google.maps.MapOptions = {
				center: position,
				zoom: 17,
				mapId: "MY_NEXTJS_MAPID",
			};

			const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

			const marker = new Marker({
				map: map,
				position: position,
			});
		};

		initMap();
	}, []);

	return <div style={{ height: "600px" }} ref={mapRef} />;
};

export default Map;
