'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from "next/image";
import Link from "next/link";
import {Badge} from "react-bootstrap";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';



function SidebarMenu() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Collapse className={"d-flex flex-column"} id="basic-navbar-nav">
                    <Navbar.Brand className="logo">
                        <Link href={"/"}>
                            <Image  className={"logo-image"} src="/images/Logo.png"
                                   alt={"Logo"}
                                   width={130}
                                   height={35}/>
                        </Link>
                    </Navbar.Brand>
                    <Nav className={" w-100 d-flex flex-column "}>
                            <Link className={"link-item"} href={"/dashboard"}>
                                    <DashboardOutlinedIcon/>
                                   <span className="name-item">DASHBOARD</span>
                            </Link>
                            <Link className={"link-item"} href={"/allProducts"}>
                                    <Inventory2OutlinedIcon/>
                                    <span className="name-item" >ALL PRODUCTS</span>
                            </Link>
                            <Link className={"link-item"} href={"/orderList"}>
                                    <AssignmentOutlinedIcon/>
                                    <span className={"name-item"}>ORDER LIST</span>
                            </Link>
                        <NavDropdown className={"categories"} title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item className="category-item d-flex justify-content-between align-items-start" href="#action/3.1">
                                <Link className={"category-link"} href={"/categories/sneakers"}>
                                    <div className="ms-2 me-auto">
                                        <div className="category-name">Sneakers</div>
                                    </div>
                                    <button className={"shoes-number"} type={"button"}>21</button>
                                </Link>

                            </NavDropdown.Item>
                            <NavDropdown.Item className="category-item d-flex justify-content-between align-items-start" href="#action/3.1">
                                <Link className={"category-link"} href={"/categories/runners"}>
                                    <div className="ms-2 me-auto">
                                        <div className="category-name">Runners</div>
                                    </div>
                                    <button className={"shoes-number"} type={"button"}>21</button>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="category-item d-flex justify-content-between align-items-start" href="#action/3.1">
                                <Link className={"category-link"} href={"/categories/golf"}>
                                    <div className="ms-2 me-auto">
                                        <div className="category-name">Golf</div>
                                    </div>
                                    <button className={"shoes-number"} type={"button"}>21</button>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="category-item d-flex justify-content-between align-items-start" href="#action/3.1">
                                <Link className={"category-link"} href={"/categories/hiking"}>
                                    <div className="ms-2 me-auto">
                                        <div className="category-name">Hiking</div>
                                    </div>
                                    <button className={"shoes-number"} type={"button"}>21</button>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="category-item d-flex justify-content-between align-items-start" href="#action/3.1">
                                <Link className={"category-link"} href={"/categories/football"}>
                                    <div className="ms-2 me-auto">
                                        <div className="category-name">Football</div>
                                    </div>
                                    <button className={"shoes-number"} type={"button"}>21</button>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="category-item d-flex justify-content-between align-items-start" href="#action/3.1">
                                <Link className={"category-link"} href={"/categories/baseball"}>
                                    <div className="ms-2 me-auto">
                                        <div className="category-name">Baseball</div>
                                    </div>
                                    <button className={"shoes-number"} type={"button"}>21</button>
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SidebarMenu;