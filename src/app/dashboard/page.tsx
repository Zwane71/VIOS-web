import React, { Suspense } from "react";

import BarChart from "@/components/BarChart";
import Map from "@/components/Map";
import Video from "@/components/video/Video";

const Dashboard = () => {
	return (
		<div className='min-h-screen mt-20'>
			{/* <BarChart /> */}
			<div className=' flex  mt-10 justify-center items-center'>
				<Suspense fallback={<p>Loading feed...</p>}>
					<Video />
				</Suspense>
				{/* <Map /> */}
			</div>
		</div>
	);
};

export default Dashboard;
