import ButtonIconText from '@/common/components/button/icon-text/ButtonIconText';
import React from 'react';
import plusIcon from'src/assets/icon/Add_circle.png'

const AllProductsHeader = () => {
    return (
        <div className={"all-products-header-container"}>
            <div className={"title-direction-all-products-header"}>
                <span className={"title-all-products-header"}>All Products</span>
                <span className={"direction-all-products-header"}>Home {'>'} All Products</span>
            </div>
            <div className={"button-all-products-header"}>
                <ButtonIconText icon={plusIcon}
                text={"ADD NEW PRODUCT"}/>
            </div>
        </div>
    );
};

export default AllProductsHeader;