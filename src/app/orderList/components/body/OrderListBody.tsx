import React from 'react';
import TableRecentPurchases from "@/common/components/orderListItems/tableRecentPurchases/TableRecentPurchases";
import delivered from "@/common/components/dashboardItems/assets/images/delivered.png";
import cancelled from "@/common/components/dashboardItems/assets/images/canceled.png";
import Image from "next/image";
import menuBtn from "@/assets/icon/menuBtn.png";


const OrderListBody = () => {
    const avt = "https://picsum.photos/200/300";
    const arr = [
        {
            products: "Adidas Ultra Boost",
            orderId: "#123456",
            date: "Jan 8th 2021",
            paymentMethod: "Paypal",
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
            paymentMethod: "Pioneer",
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
            paymentMethod: "Cash",
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
            paymentMethod: "Paypal",
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
            paymentMethod: "Cash",
            customerName: "John Doe",
            customerAvatar: avt,
            status: "Cancelled",
            statusIcon:cancelled,
            amount: "$ 120.00"
        },

    ]
    return (
        <div className={"order-list-body-container"}>
            <div className={"order-list-recent-purchases-header"}>
                <span className={"title-order-list-recent-purchases-header"}>
                    Recent Orders
                </span>
                <button type={"button"} className={"menuBtn-order-list-recent-purchases-header"}>
                    <Image src={menuBtn}
                           width={3}
                           height={15} alt={'menuBtn'}
                    />
                </button>
            </div>
            <div className={"table-order-list-recent-purchases"}>
                <TableRecentPurchases arr={arr}/>
            </div>

        </div>
    );
};

export default OrderListBody;