import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Runners',
    description: 'This is runners page',
}
export default function RunnersLayout({
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