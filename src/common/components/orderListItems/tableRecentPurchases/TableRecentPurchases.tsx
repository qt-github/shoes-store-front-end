import React from 'react';
import Image from "next/image";

interface TableRecentPurchasesProps {
    arr:any[];
}

const TableRecentPurchases = ({arr}:TableRecentPurchasesProps) => {
    return (
        <div className={"table-recent-purchases-container"}>
            <table className={"table-recent-purchases-content "}>
                <thead>
                <tr>
                    <th></th>
                    <th>Products</th>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Payment Method</th>
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
                                <td>{item.paymentMethod}</td>
                                <td className={"customer-table-recent-purchases"}>
                                    <div >
                                        <img className={"customer-avatar-table-recent-purchases"}
                                             src={item.customerAvatar}
                                             width={24}
                                             height={24} alt={'avatar'}
                                        />
                                    </div>
                                    <div className={"customer-name-table-recent-purchases"}>
                                        {item.customerName}
                                    </div>
                                </td>
                                <td className={"status-table-recent-purchases"}>
                                    <div className={"status-icon-table-recent-purchases"}>
                                        <Image src={item.statusIcon}
                                               width={9}
                                               height={9}
                                               alt={'statusIcon'}
                                        />
                                        <span className={"status-table-recent-purchases"}>
                                            {item.status}
                                        </span>
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

export default TableRecentPurchases;