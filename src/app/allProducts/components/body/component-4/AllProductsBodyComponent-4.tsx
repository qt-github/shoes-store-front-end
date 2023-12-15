import React from 'react';
import adidasUltra1 from "@/common/components/dashboardItems/assets/images/adidasUltra1.png";
import arrowUp from "@/assets/icon/arrow_up_yellow.png";
import btnMenu from "@/assets/icon/menuBtn.png";
import AllProductsItems from "@/common/components/allProductsItems/AllProductsItems";
import adidasUltra2 from "@/common/components/dashboardItems/assets/images/adidasUltra2.png";
import adidasUltra3 from "@/common/components/dashboardItems/assets/images/adidasUltra3.png";

const AllProductBodyComponent4 = () => {
    const arr=[
        {   img: adidasUltra1,
            arrow: arrowUp,
            btnMenu: btnMenu,
            productName: "Adidas Ultra Boost 4.0",
            processBar: 50,
            price: "$ 180",
            remainingText: "Remaining Products",
            saleNumber: "20",
            saleText: "Sales",
            summary: "Summary",
            type:"Sneaker",
            summaryContent:"Long distance running requires a lot from athletes.",
            remainingNumber: "50"
        },
        {   img: adidasUltra2,
            arrow: arrowUp,
            btnMenu: btnMenu,
            productName: "Adidas Ultra Boost 4.0",
            processBar: 50,
            price: "$ 180",
            remainingText: "Remaining Products",
            saleNumber: "20",
            saleText: "Sales",
            summary: "Summary",
            type:"Sneaker",
            summaryContent:"Long distance running requires a lot from athletes.",
            remainingNumber: "50"
        },
        {   img: adidasUltra3,
            arrow: arrowUp,
            btnMenu: btnMenu,
            productName: "Adidas Ultra Boost 4.0",
            processBar: 50,
            price: "$ 180",
            remainingText: "Remaining Products",
            saleNumber: "20",
            saleText: "Sales",
            summary: "Summary",
            type:"Sneaker",
            summaryContent:"Long distance running requires a lot from athletes.",
            remainingNumber: "50"
        },
    ]
    return (
        <div className={"all-product-body-component-4-container"}>
            {
                arr.map((item,index)=>{
                    return <AllProductsItems key={index}
                                             img={item.img}
                                             arrow={item.arrow}
                                             btnMenu={item.btnMenu}
                                             productName={item.productName}
                                             processBarPercentage={item.processBar}
                                             price={item.price}
                                             remainingText={item.remainingText}
                                             saleNumber={item.saleNumber}
                                             saleText={item.saleText}
                                             summary={item.summary}
                                             type={item.type}
                                             summaryContent={item.summaryContent}
                                             remainingNumber={item.remainingNumber}/>
                })
            }
        </div>
    );
};

export default AllProductBodyComponent4;