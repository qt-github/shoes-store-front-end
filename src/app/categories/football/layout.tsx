import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Football',
    description: 'This is football page',
}
export default function FootballLayout({
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