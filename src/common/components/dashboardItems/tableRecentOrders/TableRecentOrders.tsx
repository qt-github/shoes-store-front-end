import React from 'react';
import Image from "next/image";
import delivered from "@/common/components/dashboardItems/assets/images/delivered.png";

interface TableRecentOrdersProps {
  arr:any[];
}
const TableRecentOrders = ({arr}:TableRecentOrdersProps) => {
    return (
        <div className={"table-recent-orders-container"}>
            <table className={"table-recent-orders-content"}>
                <thead>
                <tr>
                    <th></th>
                    <th>Products</th>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Status</th>
                    <th>Amount</th>
                </tr>
                </thead>
                {
                    arr.map((item, index) => {
                        return(
                            <tbody key={index}>
                            <tr>
                                <td>
                                    <input type={"checkbox"}/>
                                </td>
                                <td>{item.products}</td>
                                <td>{item.orderId}</td>
                                <td>{item.date}</td>
                                <td className={"customer-table-recent-orders"}>
                                    <div >
                                        <img className={"customer-avatar-table-recent-orders"}
                                             src={item.customerAvatar}
                                               width={24}
                                               height={24} alt={'avatar'}
                                        />
                                    </div>
                                    <div className={"customer-name-table-recent-orders"}>
                                        {item.customerName}
                                    </div>
                                </td>
                                <td className={"status-table-recent-orders"}>
                                    <div className={"status-icon-table-recent-orders"}>
                                        <Image src={item.statusIcon}
                                                width={9}
                                                height={9}
                                               alt={'statusIcon'}
                                        />

                                    </div>
                                    <div className={"status-table-recent-orders"}>
                                        {item.status}
                                    </div>
                                </td>
                                <td>{item.amount}</td>
                            </tr>
                            </tbody>
                        )
                    })
                }

            </table>
        </div>
    );
};

export default TableRecentOrders;