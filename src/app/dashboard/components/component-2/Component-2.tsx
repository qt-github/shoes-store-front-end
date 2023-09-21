'use client'
import React from 'react';
import SaleGraph from "@/common/components/dashboardItems/saleGraphItem/SaleGraph";
import BestSeller from '@/common/components/dashboardItems/bestSellerItem/BestSeller';

const DashDoardComponent2 = () => {
    return (
        <div className={"dashboard-component-2"}>
            <div className={"dashboard-component-2-left"}>
                <SaleGraph/>
            </div>
            <div className={"dashboard-component-2-right"}>
                <BestSeller/>
            </div>
        </div>
    );
};

export default DashDoardComponent2;