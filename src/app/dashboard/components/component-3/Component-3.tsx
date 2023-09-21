import React from 'react';
import Image from "next/image";
import menuBtn from "@/assets/icon/menuBtn.png";
import delivered from "@/common/components/dashboardItems/assets/images/delivered.png";
import cancelled from "@/common/components/dashboardItems/assets/images/canceled.png";
import TableRecentOrders from "@/common/components/dashboardItems/tableRecentOrders/TableRecentOrders";


const DashDoardComponent3 = () => {
    const avt = "https://picsum.photos/200/300";
    const arr = [
        {
            products: "Adidas Ultra Boost",
            orderId: "#123456",
            date: "Jan 8th 2021",
            customerName: "John Doe",
            customerAvatar: avt,
            status: "Delivered",
            statusIcon:delivered,
            amount: "$ 120.00"
        },
        {
            products: "Adidas Ultra Boost",
            orderId: "#123456",
            date: "Jan 8th 2021",
            customerName: "John Doe",
            customerAvatar: avt,
            status: "Cancelled",
            statusIcon:cancelled,
            amount: "$ 120.00"
        },
        {
            products: "Adidas Ultra Boost",
            orderId: "#123456",
            date: "Jan 8th 2021",
            customerName: "John Doe",
            customerAvatar: avt,
            status: "Delivered",
            statusIcon:delivered,
            amount: "$ 120.00"
        },
        {
            products: "Adidas Ultra Boost",
            orderId: "#123456",
            date: "Jan 8th 2021",
            customerName: "John Doe",
            customerAvatar: avt,
            status: "Delivered",
            statusIcon:delivered,
            amount: "$ 120.00"
        },
        {
            products: "Adidas Ultra Boost",
            orderId: "#123456",
            date: "Jan 8th 2021",
            customerName: "John Doe",
            customerAvatar: avt,
            status: "Cancelled",
            statusIcon:cancelled,
            amount: "$ 120.00"
        },

    ]
    return (
        <div className={"dashboard-component-3-container"}>
            <div className={"dashboard-component-3-header"}>
                <span className={"title-recent-orders-item-header"}>
                    Recent Orders
                </span>
                <button type={"button"} className={"menuBtn-recent-orders-item-header"}>
                    <Image src={menuBtn}
                           width={3}
                           height={15} alt={'menuBtn'}
                    />
                </button>
            </div>
            <div className={"dashboard-component-3-table"}>
                <TableRecentOrders
                   arr={arr}/>
            </div>
        </div>
    );
};

export default DashDoardComponent3;