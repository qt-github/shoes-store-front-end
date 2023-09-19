import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Order List',
    description: 'This is order list page',
}
export default function OrderListLayout({
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