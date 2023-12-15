'use client';
import React from 'react';
import OrderListHeader from "@/app/orderList/components/header/OrderListHeader";
import OrderListBody from "@/app/orderList/components/body/OrderListBody";
import ChangeStatus from "@/app/orderList/components/changeStatus/ChangeStatus";
import CPagination from "@/common/components/pagination/Pagination";

const OrderList = () => {
    return (
        <div className={"order-list-container"}>
            <div className={"order-list-header"}><OrderListHeader/></div>
            <div className={"order-list-change-status"}>
                <span/>
                <ChangeStatus/>
            </div>
            <div className={"order-list-body"}><OrderListBody/></div>
            <div className={"order-list-pagination"}>
                <CPagination/>
            </div>
        </div>
    );
};

export default OrderList;