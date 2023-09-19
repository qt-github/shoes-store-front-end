import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'All Products',
    description: 'This is all products page',
}
export default function AllProductsLayout({
                                            children,
                                        }:{
    children: React.ReactNode
}){
    return(
        <>
            <main>
                {children}
            </main>
        </>
    )
}