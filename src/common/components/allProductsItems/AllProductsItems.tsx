import React from 'react';
import Image from "next/image";
import ProgressBarFuns from "@/common/components/progressBar/ProgressBar";

interface ALlProductsItemsProps {
    img:any;
    productName:string;
    type:string;
    price:string;
    btnMenu:any;
    summary:string;
    summaryContent:string;
    saleText:string;
    arrow:any;
    saleNumber:string;
    remainingText:string;
    remainingNumber:string;
    processBarPercentage:number;
}
const AllProductsItems = ({img,
                           arrow,
                          btnMenu,
                          productName,
                              processBarPercentage,
                          price,
                          remainingText,
                          saleNumber,
                          saleText,
                          summary,
                          type,
                          summaryContent,
                          remainingNumber}:ALlProductsItemsProps) => {
    return (
        <div className={"all-products-items-container"}>
            <div className={"all-products-items-top"}>
                <div className={"left-all-products-items-top"}>
                    <Image src={img}
                           alt={"img"}
                           width={84}
                           height={84}
                    />
                </div>
                <div className={"right-all-products-item-top"}>
                    <div className={"product-name-nemu-all-products-items-top"}>
                        <div className={"product-name-type-all-products-items-top"}>
                            <div className={"product-name-all-products-items-top"}>
                                {productName}
                            </div>
                            <div className={"type-all-products-items-top"}>
                                {type}
                            </div>
                        </div>
                        <button className={"btn-menu-all-products-items-top"}>
                            <Image src={btnMenu}
                                   alt={"btnMenu"}
                                   width={3}
                                   height={15}
                            />
                        </button>
                    </div>
                    <div className={"price-all-products-items-top"}>
                        {price}
                    </div>
                </div>
            </div>
            <div className={"all-products-items-middle"}>
                <div className={"summary-all-products-items-middle"}>
                    {summary}
                </div>
                <div className={"summary-content-all-products-items-middle"}>
                    {summaryContent}
                </div>
            </div>
            <div className={"all-products-items-bottom"}>
                <div className={"sale-all-products-items-bottom"}>
                    <div className={"sale-text-all-products-items-bottom"}>
                        {saleText}
                    </div>
                    <div className={"arrow-sale-number-all-products-items-bottom"}>
                        <div className={"arrow-all-products-items-bottom"}>
                            <Image src={arrow}
                                   alt={"arrow"}
                                   width={20}
                                   height={20}
                            />
                        </div>
                        <div className={"sale-number-all-products-items-bottom"}>
                            {saleNumber}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={"remaining-all-products-items-bottom"}>
                    <div className={"remaining-text-all-products-items-bottom"}>
                        {remainingText}
                    </div>
                    <div className={"remaining-process-bar-number-all-products-items-bottom"}>
                        <div className={"remaining-process-bar-all-products-items-bottom"}>
                            <ProgressBarFuns percentage={processBarPercentage}/>
                        </div>
                        <div className={"remaining-number-all-products-items-bottom"}>
                            {remainingNumber}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductsItems;