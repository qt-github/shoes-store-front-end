import React from 'react';
import cartIcon from "@/assets/icon/cartIcon.png";
import arrowUp from "@/assets/icon/arrow_up.png";
import menuBtn from "@/assets/icon/menuBtn.png";
import arrowDown from "@/assets/icon/arrow_down.png";
import StatisticItem from "@/common/components/dashboardItems/statisticItem/StatisticItem";

const DashBoardComponent1 = () => {
    const arr = [
        {title:"Total Orders",percent:"34.7%", icon:cartIcon, arrow:arrowUp, menuBtn:menuBtn, text:"Compared to Jan 2022", total:"$126.500"},
        {title:"Active Orders",percent:"34.7%", icon:cartIcon, arrow:arrowUp, menuBtn:menuBtn, text:"Compared to Jan 2022", total:"$126.500"},
        {title:"Shipped Orders",percent:"34.7%", icon:cartIcon, arrow:arrowDown, menuBtn:menuBtn, text:"Compared to Jan 2022", total:"$126.500"}
    ]
    return (
        <div className={"dashboard-component-1"}>
            {
                arr.map((item,index)=>{
                    return <StatisticItem key={index}
                                          icon={item.icon}
                                          arrow={item.arrow}
                                          title={item.title}
                                          menuBtn={item.menuBtn}
                                          percent={item.percent}
                                          text={item.text}
                                          total={item.total}/>
                })
            }
        </div>
    );
};

export default DashBoardComponent1;