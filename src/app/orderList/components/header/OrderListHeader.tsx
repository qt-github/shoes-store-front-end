import React from 'react';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const OrderListHeader = () => {
    return (
        <div className={"order-list-header-container"}>
            <div className={"direction-text-order-list-header"}>
                <span className={"text-order-list-header"}>Order List</span>
                <span className={"direction-order-list-header"}>Home {'>'} Order List</span>
            </div>
            <div className={"icon-date-order-list-header"}>
                <div className={"icon-order-list-header"}>
                    <CalendarMonthOutlinedIcon/>
                </div>
                <span className={"date-order-list-header"}>
                    Feb 16,2022 - Feb 20,2022
                </span>
            </div>
        </div>
    );
};

export default OrderListHeader;