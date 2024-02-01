import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button, Offcanvas, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../assest/logo-light.jpg'
function NavBarComponent() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" className="bg-body-white  d-none d-lg-flex bg-white fixed-top">


                <Navbar.Brand href="#home">Kripa Shindhu Multi Trade Earning Pvt. Ltd.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar >

            {/* Button to toggle Offcanvas is visible on smaller screens */}
            < Navbar expand="lg" className="d-lg-none" >

                <Navbar.Brand href="#home">
                    <Image src={logo} height={100} width={50} alt="Kripa Shindhu Multi Trade Earning Pvt. Ltd" />
                </Navbar.Brand>
                <Button variant="outline-light" onClick={handleOffcanvas} >
                    <Image width="50" height="50" src="https://img.icons8.com/ios/50/menu--v1.png" alt="Kripa Shindhu Multi Trade Earning Pvt. Ltd" />

                </Button>

            </Navbar >

            {/* Offcanvas is visible on smaller screens and hidden on larger screens */}
            < Offcanvas
                show={showOffcanvas}
                onHide={() => setShowOffcanvas(false)
                }
                placement="start"
                className="d-lg-none"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Image src={logo} height={100} width={50} alt="Kripa Shindhu Multi Trade Earning Pvt. Ltd" />

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <ul className="vertical-nav-menu sidebar-menu scrollbar-sidebar">
                            <li>
                                <Link to='/dashboard'>

                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/dashboard.png" alt="icon" /> <button className='nav-btn-no-style'>Dashboard</button>            </Link>
                            </li>
                            <li>
                                <Link to="/BankTransfer">
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/withdraw.png" alt="icon" /> Withdraw            </Link>
                            </li>
                            <li>
                                <Link to="/Deposit">
                                    <img src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/wallet.png" alt="icon" /> Deposit          </Link>
                            </li>
                            <li>
                                <Link to="/epin">
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/epin.png" alt="icon" /> E-pin Recharge                </Link>
                            </li>

                            <li>
                                <Link to="/task">
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/bv_log.png" alt="icon" /> Task           </Link>
                            </li>
                            <li>

                                <Link to='/team'>
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/referral.png" alt="icon" /> My Referrals       </Link>

                            </li> <li>
                                <Link to='/transaction' >
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/transactions.png" alt="icon" /> Transactions            </Link>
                            </li>
                            <li>
                                <a href="#" >
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/ranking.png" alt="icon" /> Ranking                </a>
                            </li>

                            <li>
                                <Link to="/ticket" >
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/ticket.png" alt="icon" /> Support Ticket            </Link>
                            </li>

                            <li>
                                <a href="#" >
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/profile.png" alt="icon" /> Profile            </a>
                            </li>
                            <li>
                                <a href="#" >
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/password.png" alt="icon" /> Change Password            </a>
                            </li>
                            <li>
                                <a href="#" >
                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/logout.png" alt="icon" /> Logout            </a>
                            </li>
                        </ul>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}

export default NavBarComponent;
