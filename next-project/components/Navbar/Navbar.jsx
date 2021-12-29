import Link from 'next/link';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../public/assets/Logo/logo.png';
import {useState} from "react";
import styles from "./navbar.module.css"
import { Navbar,  Nav, NavDropdown,Dropdown,Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

// import {Container,Nav,NavbarBrand,NavDropdown} from "react-bootstrap"
// import {NavLink} from "react-dom"
export const Header = () => {

    const [show, setShow] = useState(false);
    const [active, setActive] = useState('default');
    const [expanded, setExpanded] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
  return (
    <>
        
      {/*<div className="page-wraper">*/}
      {/*          <header className="site-header header-transparent text-black mo-left" id="fix-header">*/}
      {/*              <div className="sticky-header main-bar-wraper navbar-expand-lg">*/}
      {/*                  <div className="main-bar clearfix">*/}
      {/*                      <div className="container clearfix">*/}
      {/*                          <div className="logo-header  logo-dark">*/}
      {/*                             <Image src={logo} alt="" />*/}
      {/*                          </div>*/}
      {/*                          <button className="navbar-toggler collapsed navicon justify-content-end"><span></span><span></span><span></span></button>*/}
      {/*                          <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">*/}
      {/*                              <div className="logo-header">*/}
      {/*                               <Image src={logo} alt="" />*/}
      {/*                              </div>*/}
      {/*                              <ul className="nav navbar-nav navbar">*/}
      {/*                                  <li><Link href='/' passHref > Home </Link></li>*/}
      {/*                                  <li><Link href='/about-us' passHref > About Us </Link></li>*/}
      {/*                                  <li><Link href='/sell-any-make' passHref> Sell Any Make </Link></li>*/}
      {/*                                  <li>*/}
      {/*                                    <span className={'sellmycar'}> Sell My Car </span><i className="fa fa-chevron-down"></i>*/}
      {/*                                      <ul className="sub-menu">*/}
      {/*                                          <li> <Link href='/working-car' passHref> Working Car </Link></li>*/}
      {/*                                          <li> <Link href='/not-working-car' passHref> Not Working Car </Link></li>*/}
      {/*                                      </ul>*/}
      {/*                                  </li>*/}
      {/*                                  <li><Link href='/contact-us' passHref> Contact Us </Link></li>*/}
      {/*                                  <li><Link href='/blog' passHref> Blogs </Link></li>*/}
      {/*                              </ul>*/}

      {/*                          </div>*/}
      {/*                      </div>*/}
      {/*                  </div>*/}
      {/*              </div>*/}
      {/*          </header>*/}
      {/*          </div>*/}
        <Navbar  expanded={expanded} bg="light" expand="lg" className={` ${styles.navbarColor}`} sticky="top">
            <Container className={styles.container} fluid>
                <Navbar.Brand href="/">  <Image className={styles.logoImg} height={40} width={120} src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} className={styles.navbartoggler}  />
                <Navbar.Collapse >
                    <Nav   activeKey={active}
                          className={styles.marginLeft}

                        // style={{ maxHeight: '100px' }}
                       
                    >
                        <Link href='/' passHref >
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navlink} href="/">Home</Nav.Link>
                        </Link>
                        <Link href='/about-us' passHref >
                            <Nav.Link onClick={() => setExpanded(false)} eventKey="/about-us" className={styles.navlink} href="/about-us" passHref>

                                About Us</Nav.Link>
                        </Link>
                        <Link href='/sell-any-make' passHref>
                            <Nav.Link  onClick={() => setExpanded(false)} eventKey="link-2"  className={styles.navlink} href="/sell-any-make">Sell Any Make</Nav.Link>
                        </Link>
                        {/*<Link href='/working-car' passHref>*/}
                        {/*    <Nav.Link className={styles.navlink} href="/working-car">Working Car</Nav.Link>*/}
                        {/*</Link>*/}
                        {/*<Link href='/not-working-car' passHref>*/}
                        {/*    <Nav.Link className={styles.navlink} href="/not-working-car">Non Working Car</Nav.Link>*/}
                        {/*</Link>*/}
                        <NavDropdown show={show}
                                     onMouseEnter={showDropdown}
                                     onMouseLeave={hideDropdown} className={styles.navlink} style={{border:"none !important"}} title="Sell My Car" id="navbarScrollingDropdown">
                            <Link href='/working-car' passHref>
                                <NavDropdown.Item  onClick={() => setExpanded(false)}className={styles.navlink}href="/working-car">Working car</NavDropdown.Item>
                            </Link>

                            {/*<NavDropdown.Divider />*/}
                            <Link href='/not-working-car' passHref>
                                <NavDropdown.Item onClick={() => setExpanded(false)} className={styles.navlink}href="/not-working-car">Non Working Car</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <Link href='/contact-us' passHref>
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navlink} href="/contact-us">Contact Us</Nav.Link>
                        </Link>
                        <Link href='/blog' passHref>
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navlink} href="/blog">Blogs</Nav.Link>
                        </Link>



                    </Nav>
                    {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
  );
};
