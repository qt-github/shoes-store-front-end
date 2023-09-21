import React from 'react';
import ButtonNormal from '../../button/normal/ButtonNormal';
import Image from "next/image";
import menuBtn from "../../../../assets/icon/menuBtn.png";
import BestSellerProductsInfo
    from "@/common/components/dashboardItems/bestSellerItem/productsInfo/BestSellerProductsInfo";
import adidasUltra1 from "../assets/images/adidasUltra1.png";
import adidasUltra2 from "../assets/images/adidasUltra2.png";
import adidasUltra3 from "../assets/images/adidasUltra3.png";


const BestSeller = () => {
    const arr = [
        {nameProduct:"Adidas NMD R1",
            img:adidasUltra1,
            quantityProduct:"999",
            unit:"sales",
            priceProduct:"$126.500",
            totalSale:"$2.215.148"
        },
        {nameProduct:"Adidas NMD R2",
            img:adidasUltra2,
            quantityProduct:"999",
            unit:"sales",
            priceProduct:"$126.500",
            totalSale:"$2.215.148"
        },
        {nameProduct:"Adidas NMD R3",
            img:adidasUltra3,
            quantityProduct:"999",
            unit:"sales",
            priceProduct:"$126.500",
            totalSale:"$2.215.148"
        },
        {nameProduct:"Adidas NMD R3",
            img:adidasUltra3,
            quantityProduct:"999",
            unit:"sales",
            priceProduct:"$126.500",
            totalSale:"$2.215.148"
        },
    ]
    return (
        <div className={"best-seller-item-container"}>
            <div className={"best-seller-item-header"}>
                <span className={"title-best-seller"}>Best Seller</span>
                <button className={"menuBtn-best-seller-item"}>
                    <Image className={"menuBtnImage-best-seller-item"} src={menuBtn} alt="menuBtn"
                           width={3}
                           height={15}/>
                </button>
            </div>
            <div className={"best-seller-item-body"}>
                {
                    arr.map((item, index)=> {
                        return <BestSellerProductsInfo key={index}
                                                       nameProduct={item.nameProduct}
                                                       img={item.img}
                                                       quantityProduct={item.quantityProduct}
                                                       unit={item.unit}
                                                       priceProduct={item.priceProduct}
                                                       totalSale={item.totalSale}
                                                       />
                    })
                }
            </div>
            <div className={"best-seller-item-footer"}>
                <ButtonNormal text={"REPORT"}
                                onClick={()=>{console.log("Report")}}/>
            </div>
        </div>
    );
};

export default BestSeller;