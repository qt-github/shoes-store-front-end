'use client';
import React from 'react';
import ButtonNormal from "@/common/components/button/normal/ButtonNormal";
import CChart from '../../chart/SaleChart';

type TypeDataset = {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension?: number
}[];


const SaleGraph = () => {
    const arrData = [
        {
            label: "Total money contract Complete",
            data: [5000, 10000, 1000, 20000, 25000, 30000],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.4,
        },
        {
            label: "Total money contract Complete",
            data: [5000, 100, 1000, 20000, 200, 1],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.4,
        },
        {
            label: "Total money contract Complete",
            data: [5000, 100, 1000, 9000, 25000, 30000],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.4,
        }
    ]
    const arrLabel= [
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ]
    const [dataset, setDataset] = React.useState<TypeDataset>([arrData[0]]);
    const arrPrice = [
        {text:"WEEKLY", onClick:()=>{
                setDataset([arrData[0]]);
        }
        },
        {text:"MONTHLY", onClick:()=>{
                setDataset([arrData[1]]);
            }
            },
        {text:"YEARLY", onClick:()=>{
                setDataset([arrData[2]]);
            }}
    ]


    return (
        <div className={"sale-graph-item-container"}>
            <div className={"sale-graph-item-header"}>
                <div className={"sale-graph-item-header-left"}>
                    <span className={"title-sale-graph-item"}>Sale Graph</span>
                </div>
                <div className={"sale-graph-item-header-right"}>
                    {
                        arrPrice.map((item,index)=>{
                            return <ButtonNormal
                                key={index}
                                text={item.text}
                                onClick={item.onClick}
                            />
                        })
                    }
                </div>
            </div>
            <hr/>
            <div className={"sale-graph-item-body"}>
                <CChart datasets={dataset}
                        labels={arrLabel} />
            </div>
        </div>
    );
};

export default SaleGraph;