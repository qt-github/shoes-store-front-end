import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Careers page',
}
export default function CareersLayout({
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