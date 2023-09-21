import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Golf',
    description: 'This is golf page',
}
export default function GolfLayout({
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