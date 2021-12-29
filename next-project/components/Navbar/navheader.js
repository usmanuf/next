import Image from "next/image";
import Link from "next/link";
import { Navbar,  Nav, NavDropdown,Dropdown,Container } from "react-bootstrap";

function NavHeader() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className={`${styles.navbarColor}`}>
                <Container>
                    <Navbar.Brand href="#home">  <Image className={styles.logoImg} height={40} width={120} src={image} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle className={styles.navbartoggler} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className={styles.marginLeft}>
                            <Link  passHref="/landingPage"><Nav.Link href="/landingPage"className={styles.navlink} >Home</Nav.Link></Link>
                            <Link className={styles.navlink} passHref="aboutUs"><Nav.Link passHref="aboutUs"className={styles.navlink} >About</Nav.Link></Link>
                            <NavDropdown className={styles.dropd} title="Vehicles We Buy">
                                <Link className={styles.dropL} passHref="workingCars"><Nav.Link passHref="workingCars" >WorkingCars</Nav.Link></Link>
                                <NavDropdown.Divider />
                                <Link  passHref="noworkingcar"><Nav.Link passHref="noworkingcar" >NOnWorkingCars</Nav.Link></Link>
                            </NavDropdown>
                            <Link className={styles.navlink} passHref="sellAnyMake"><Nav.Link passHref="sellAnyMake"className={styles.navlink} >SellMake</Nav.Link></Link>
                            <Link className={styles.navlink} passHref="blog"><Nav.Link passHref="blog"className={styles.navlink} >Blog</Nav.Link></Link>
                            <Link className={styles.navlink} passHref="contactUs"><Nav.Link href="contactUs"className={styles.navlink} >ContactUs</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavHeader;
