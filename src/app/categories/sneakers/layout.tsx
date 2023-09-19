import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Sneakers',
    description: 'This is sneakers page',
}
export default function SneakerLayout({
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