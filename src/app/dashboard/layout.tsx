import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard page',
}
export default function DashboardLayout({
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