import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button, Offcanvas, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function NavBarComponent() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" className="bg-body-white  d-none d-lg-flex bg-white fixed-top">


                <Navbar.Brand href="#home">Kripa Sindhu</Navbar.Brand>
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
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Button variant="outline-light" onClick={handleOffcanvas} className='"btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav'>

                    </Button>
                </Container>
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
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <ul className="vertical-nav-menu sidebar-menu scrollbar-sidebar">
                            <Nav.Link to='//dashboard'> <li>
                                <Link to='/dashboard'>

                                    <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/dashboard.png" alt="icon" /> <button className='nav-btn-no-style'>Dashboard</button>            </Link>
                            </li></Nav.Link>
                            <Nav.Link to="/BankTransfer"> <li>

                                <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/withdraw.png" alt="icon" /> Withdraw
                            </li></Nav.Link>
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
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </ul>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}

export default NavBarComponent;
