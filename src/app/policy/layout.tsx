import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Policy',
    description: 'Policy page',
}
export default function PolicyLayout({
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