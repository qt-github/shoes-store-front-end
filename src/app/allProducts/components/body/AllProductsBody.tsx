'use client';
import React from 'react';
import adidasUltra1 from '@/common/components/dashboardItems/assets/images/adidasUltra1.png';
import arrowUp from "../../../../assets/icon/arrow_up_yellow.png";
import btnMenu from "../../../../assets/icon/menuBtn.png";
import AllProductsItems from "@/common/components/allProductsItems/AllProductsItems";
import AllProductsBodyComponent1 from "@/app/allProducts/components/body/component-1/AllProductsBodyComponent-1";
import AllProductsBodyComponent4 from "@/app/allProducts/components/body/component-4/AllProductsBodyComponent-4";
import AllProductsBodyComponent3 from "@/app/allProducts/components/body/component-3/AllProductsBodyComponent-3";
import AllProductsBodyComponent2 from "@/app/allProducts/components/body/component-2/AllProductsBodyComponent-2";
const AllProductsBody = () => {
    return (
        <div className={"all-product-body-container"}>
           <AllProductsBodyComponent1/>
            <AllProductsBodyComponent2/>
            <AllProductsBodyComponent3/>
            <AllProductsBodyComponent4/>
        </div>
    );
};

export default AllProductsBody;