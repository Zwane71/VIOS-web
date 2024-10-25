import { UserButton } from "@clerk/nextjs";
import React, { FC, ReactNode } from "react";

<<<<<<< HEAD
const Dashboardlayout = ({ children }) => {
=======
interface DashboardlayoutProps {
	children: ReactNode;
}
const Dashboardlayout = ({ children }: DashboardlayoutProps) => {
>>>>>>> abd2f0baa1c75e678de640bf75affde95b7043ba
	return <div>{children}</div>;
};

export default Dashboardlayout;
