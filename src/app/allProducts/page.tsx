import React from 'react';
import AllProductsHeader from "@/app/allProducts/components/header/AllProductsHeader";
import AllProductsBody from "@/app/allProducts/components/body/AllProductsBody";

import CPagination from "@/common/components/pagination/Pagination";

const AllProducts = () => {
    return (
        <div className={"all-products-container"}>
            <div className={"all-products-header"}>
                <AllProductsHeader/>
            </div>
            <div className={"all-products-body"}>
                <AllProductsBody/>
            </div>
            <div className={"all-products-pagination"}>
                <CPagination/>
            </div>
        </div>
    );
};

export default AllProducts;