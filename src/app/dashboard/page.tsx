'use client'
import React from 'react';
import HDashboard from "@/app/dashboard/components/header/HDashboard";
import DashBoardComponent1 from "@/app/dashboard/components/component-1/Component-1";
import DashDoardComponent2 from "@/app/dashboard/components/component-2/Component-2";
import DashDoardComponent3 from "@/app/dashboard/components/component-3/Component-3";

const Dashboard = () => {

    return (
        <div className={"dashboard-container"}>
            <HDashboard/>
            <div className={"dashboard-component-1"}>
                <DashBoardComponent1/>
            </div>
            <div className={"dashboard-component-2"}>
                <DashDoardComponent2/>
            </div>
            <div className={"dashboard-component-3"}>
                <DashDoardComponent3/>
            </div>
        </div>
    );
};

export default Dashboard;