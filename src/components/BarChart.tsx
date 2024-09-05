"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const BarChart = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current) {
			if (chartRef.current.chart) {
				chartRef.current.chart.destroy();
			}

			const context = chartRef.current.getContext("2d");

			const newChart = new Chart(context, {
				type: "bar",
				data: {
					labels: ["John", "Jane", "Doe"],
					datasets: [
						{
							label: "Info",
							data: [34, 64, 23], // Fixed the typo here
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(255, 159, 64, 0.2)",
								"rgba(255, 205, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(201, 203, 207, 0.2)",
							],
							borderColor: [
								"rgb(255, 99, 132)",
								"rgb(255, 159, 64)",
								"rgb(255, 205, 86)",
								"rgb(75, 192, 192)",
								"rgb(54, 162, 235)",
								"rgb(153, 102, 255)",
								"rgb(201, 203, 207)",
							],
							borderWidth: 1,
						},
					],
				},
				options: {
					responsive: true,
					scales: {
						x: {
							type: "category",
						},
						y: {
							beginAtZero: true,
						},
					},
				},
			});

			chartRef.current.chart = newChart; // Assign the chart instance to the ref
		}
	}, []);

	return (
		<div className='flex justify-between mx-20 mt-20'>
			<div
				style={{ position: "relative", width: "60vw", height: "70vh" }}
				className=' bg-transparent border p-20 rounded-3xl '>
				<canvas ref={chartRef} />
			</div>
			<div className='bg-blue-500  w-[24rem]  mt-7 rounded-xl border-black '>
				{" "}
				<div className='mt-10 '>
					<h1 className='text-center font-bold text-[2.5rem]'>Contacts</h1>
					<ul className='mt-10 p-1'>
						<li className='  outline outline-1 rounded-md p-7 outline-black '>
							<div className='flex flex-row'>
								<CgProfile size={40} />
								<h1 className='mx-4 ml-10'>Thebe</h1>
								<Link href='tel:+26659709707'>+266 5970 9707</Link>
							</div>
						</li>
						<li className='  outline outline-1 rounded-md p-7 outline-black '>
							<div className='flex flex-row'>
								<CgProfile size={40} />
								<h1 className='mx-4 ml-10'>Themba</h1>
								<Link href='tel:+26662659027'>+266 6265 9027</Link>
							</div>
						</li>
						<li className='  outline outline-1 rounded-md p-7 outline-black '>
							<div className='flex flex-row'>
								<CgProfile size={40} />
								<h1 className='mx-4 ml-10'>John</h1>
								<Link href='tel:+26656543210'>+266 5654 3210</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BarChart;
