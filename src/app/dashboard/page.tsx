import React from "react";

import BarChart from "@/components/BarChart";
import Map from "@/components/Map";

const Dashboard = () => {
	return (
		<div className='min-h-screen mt-20'>
			<BarChart />
			<div className='mt-10 mx-10'>
				<Map />
			</div>
		</div>
	);
};

export default Dashboard;
