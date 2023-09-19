'use client'
import type {Metadata} from 'next'
import {Rubik} from 'next/font/google'
import React from "react";
import SidebarMenu from "@/components/sidebarMenu/SidebarMenu";
import './globals.css'
import HeaderNav from "@/components/header/HeaderNav";
import Footer from "@/components/footer/Footer";



const inter = Rubik({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="left-content"><SidebarMenu/></div>
          <div className= "right-content">
              <header><HeaderNav/></header>
                  {children}
              <footer><Footer/></footer>
          </div>
      </body>
    </html>
  )
}
