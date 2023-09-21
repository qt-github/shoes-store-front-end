import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Hiking',
    description: 'This is hiking page',
}
export default function HikingLayout({
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