import { UserButton } from "@clerk/nextjs";
import React, { FC, ReactNode } from "react";

interface DashboardlayoutProps {
	children: ReactNode;
}
const Dashboardlayout = ({ children }: DashboardlayoutProps) => {
	return <div>{children}</div>;
};

export default Dashboardlayout;
