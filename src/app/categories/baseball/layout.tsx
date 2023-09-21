import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Baseball',
    description: 'This is baseball page',
}
export default function BaseballLayout({
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