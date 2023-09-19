import React from 'react';
import './Footer.module.css'
import Link from "next/link";

const Footer = () => {
    return (
        <div className={"footer d-flex justify-content-between"}>
            <span >© 2023 - kicks Dashboard</span>
            <span/>
            <ul className="d-flex flex-wrap">
                <li className="lst list-group-item">
                    <Link href={"#"}>About</Link>
                </li>
                <li className="lst list-group-item ms-3">
                    <Link href={"#"}>Careers</Link>
                </li>
                <li className="lst list-group-item ms-3">
                    <Link href={"#"}>Policy</Link>
                </li>
                <li className="lst list-group-item ms-3" >
                    <Link href={"#"}>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Footer;