import React from 'react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
const HDashboard = () => {
    return (
        <div className={"container-header"}>
            <div className={"info"}>
                <h2>Dashboard</h2>
                <p>Home {'>'} Dashboard</p>
            </div>
            <span/>
            <div className={"date"}>
                <CalendarMonthOutlinedIcon/>
                <span>Feb 16,2022 - Feb 20,2022</span>
            </div>
        </div>
    );
};

export default HDashboard;