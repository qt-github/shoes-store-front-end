import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div className={"footer d-flex justify-content-between"}>
            <span >© 2023 - Kicks Dashboard</span>
            <span/>
            <ul className="d-flex mt-2">
                <li className="lst list-group-item">
                    <Link className={"link-footer"} href={"/about"}>About</Link>
                </li>
                <li className="lst list-group-item ms-3">
                    <Link className={"link-footer"} href={"/careers"}>Careers</Link>
                </li>
                <li className="lst list-group-item ms-3">
                    <Link className={"link-footer"} href={"/policy"}>Policy</Link>
                </li>
                <li className="lst list-group-item ms-3" >
                    <Link className={"link-footer"} href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Footer;