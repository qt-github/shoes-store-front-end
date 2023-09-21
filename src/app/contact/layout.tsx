import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Policy page',
}
export default function ContactLayout({
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