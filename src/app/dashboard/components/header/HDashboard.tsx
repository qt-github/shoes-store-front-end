import React from 'react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
const HDashboard = () => {
    return (
        <div className={"dashboard-header-container"}>
            <div className={"direction-text-dashboard-header"}>
                <span className={"text-dashboard-header"}>Dashboard</span>
                <span className={"direction-dashboard-header"}>Home {'>'} Dashboard</span>
            </div>
            <div className={"icon-date-dashboard-header"}>
                <div className={"icon-dashboard-header"}>
                    <CalendarMonthOutlinedIcon/>
                </div>
                <span className={"date-dashboard-header"}>
                    Feb 16,2022 - Feb 20,2022
                </span>
            </div>
        </div>
    );
};

export default HDashboard;