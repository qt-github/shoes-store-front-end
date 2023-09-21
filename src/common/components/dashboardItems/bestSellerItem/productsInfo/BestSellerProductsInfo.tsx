import React from 'react';
import Image from "next/image";

interface ProductsInfoProps {
    img:any;
    nameProduct:string;
    priceProduct:string;
    quantityProduct:string;
    totalSale:string;
    unit:string;
}
const BestSellerProductsInfo = ({img, nameProduct, quantityProduct, priceProduct, totalSale, unit}:ProductsInfoProps) => {
    return (
        <div className={"best-seller-item-products-info-container"}>
            <div className={"best-seller-item-products-info-left"}>
                <div className={"img-best-seller-item-products-info-left"}>
                    <Image src={img} alt="img" width={64} height={64}/>
                </div>
                <div className={"name-price-best-seller-item-products-info-left"}>
                    <div className={"name-best-seller-item-products-info-left"}>
                        {nameProduct}
                    </div>
                    <div className={"price-best-seller-item-products-info-left"}>
                        {priceProduct}
                    </div>
                </div>
            </div>
            <div className={"best-seller-item-products-info-right"}>
                <div className={"total-sale-best-seller-item-products-info-right"}>
                    {totalSale}
                </div>
                <div className={"quantity-best-seller-item-products-info-right"}>
                    <div className={"number-quantity-best-seller-item-products-info-right-text"}>
                        {quantityProduct}
                    </div>
                    <div className={"unit-quantity-best-seller-item-products-info-right-number"}>
                        {unit}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellerProductsInfo;