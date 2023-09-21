import Image from "next/image";

interface IProps {
    title: string;
    menuBtn: any;
    icon: any;
    total: string;
    arrow: any;
    percent: string;
    text: string;
}

import React from 'react';

const StatisticItem = ({icon, menuBtn, text, percent, total, arrow, title}:IProps) => {
    return (
        <div className={"statistic-item-container"}>
            <div className={"statistic-title-menu"}>
                <h6 className={"tile-statistic-item"}>{title}</h6>
                <button className={"menuBtn-statistic-item"}>
                    <Image className={"menuBtnImage-statistic-item"} src={menuBtn} alt="menuBtn"
                                                                    width={3}
                                                                    height={15}/>
                </button>

            </div>
            <div className={"statistic-content"}>
                <div className={"statistic-content-body"}>
                    <div className={"statistic-content-body-left"}>
                        <Image className={"icon-statistic-item"} src={icon} alt="icon"
                               width={40}
                               height={40}/>
                        <span className={"total-statistic-item"}>{total}</span>
                    </div>
                    <div className={"statistic-content-body-right"}>
                        <Image className={"arrow-statistic-item"} src={arrow} alt="arrow"
                               width={24}
                               height={24}/>
                        <span className={"percent-statistic-item"}>{percent}</span>
                    </div>
                </div>
                <div className={"statistic-content-footer"}>
                    {text}
                </div>

            </div>

        </div>
    );
};

export default StatisticItem;