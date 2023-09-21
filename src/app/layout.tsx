'use client'
import {Rubik} from 'next/font/google'
import React from "react";
import SidebarMenu from "@/components/sidebarMenu/SidebarMenu";
import './globals.css'
import HeaderNav from "@/components/header/HeaderNav";
import Footer from "@/components/footer/Footer";
import SaleGraph from "@/common/components/dashboardItems/saleGraphItem/SaleGraph";

const inter = Rubik({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="left-content">
          <SidebarMenu/>
        </div>
        <div className= "right-content">
              <header className={"header-right-content"}><HeaderNav/></header>
                <div className={"body-right-content"}>{children}</div>
            {/*<div><SaleGraph/></div>*/}
              <footer className={"footer-right-content"}><Footer/></footer>
        </div>
      </body>
    </html>
  )
}
