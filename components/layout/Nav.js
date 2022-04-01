import React, { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";
import Link from 'next/link';
import Image from 'next/image';
import {GoMilestone} from "react-icons/go";
import {RiPhoneFill, RiMenu3Fill,RiCloseFill} from "react-icons/ri";
import {
    Header,
    HeaderWrap,
    HeaderLogo,
    HeaderLogoAside,
    HeaderLogoCollapse,
    HeaderLogoContacts,
    HeaderLogoContactsUnit,
    HeaderLogoPanel,
    HeaderLogoPanelBrand,
    StyledLink,
    Nav, NavMain,
    HeaderLogoPanelBrandLink,
    HeaderLogoAsideButton,
    UnitLeft,
    UnitBody,
    UnitBodyPhone,
    HeaderMobileTelNav,
    HeaderMobileNavBox
} from "./Styles";

function NavMenu() {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <Header>
            <HeaderWrap>
                <HeaderLogo>
                    <HeaderLogoAside>
                        <HeaderLogoCollapse>
                            <HeaderLogoContactsUnit>
                                <UnitLeft>
                                    <GoMilestone style={{fontSize: "38px", color: "#6178db"}}/>
                                </UnitLeft>
                                <UnitBody>
                                    <p>המייסדים 58, אבן יהודה<br/>
                                        אבן יהודה</p>
                                </UnitBody>
                            </HeaderLogoContactsUnit>
                        </HeaderLogoCollapse>
                        <HeaderLogoPanel>
                            <HeaderLogoPanelBrand>
                                <Link href="/" passHref>
                                    <HeaderLogoPanelBrandLink>
                                        <Image src="/logo.png" alt="SOSOFinance" width={150} height={105}/>
                                    </HeaderLogoPanelBrandLink>
                                </Link>
                            </HeaderLogoPanelBrand>
                        </HeaderLogoPanel>
                        <HeaderLogoAsideButton>
                            <HeaderLogoContacts>
                                <UnitBodyPhone>
                                    <li>
                                       <a href="tel:097057456666" aria-label="telephone" >+097205402345678</a>
                                    </li>
                                    <li>
                                       <a href="tel:097205402345678" aria-label="telephone">+097205402345678</a>
                                    </li>
                                </UnitBodyPhone>
                                <UnitLeft>
                                    <RiPhoneFill style={{fontSize: "38px", color: "#6178db", marginTop:"5px"}}/>
                                </UnitLeft>
                            </HeaderLogoContacts>
                        </HeaderLogoAsideButton>
                    </HeaderLogoAside>
                </HeaderLogo>
                <Nav scrollNav={scrollNav}>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <RiCloseFill/> : <RiMenu3Fill/>}
                    </div>
                    <NavMain className={click ? " nav-menu click" : "nav-menu"}>
                        <li>
                            <ActiveLink activeClassName="active"  href = "/"  prefetch={false}>
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>ראשי</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/about" prefetch={false}>
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>אודות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/our_services" prefetch={false}>
                                 <a><StyledLink className="navlink" onClick={closeMobileMenu}>השירותים שלנו</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/mortgage_advice" prefetch={false}>
                                 <a><StyledLink className="navlink" onClick={closeMobileMenu}>ייעוץ משכנתאות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/mortgage_deniers" prefetch={false}>
                                 <a><StyledLink className="navlink" onClick={closeMobileMenu}>מסורבי משכנתא</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/mortgage_routes" prefetch={false}>
                                   <a><StyledLink className="navlink" onClick={closeMobileMenu}>מסלולי המשכנתאות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/loan_consolidation" prefetch={false}>
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>איחוד הלוואות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/non_bank_mortgage" prefetch={false}>
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>משכנתא חוץ בנקאית</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                        <ActiveLink activeClassName="active" href="/contact" prefetch={false}>
                            <a><StyledLink className="navlink" onClick={closeMobileMenu}>צור קשר</StyledLink></a>
                        </ActiveLink>
                        </li>
                        <HeaderMobileTelNav>
                            <HeaderMobileNavBox>
                                <UnitBodyPhone>
                                    <li>
                                        <a href="tel:053-7734677" aria-label="telephone" rel="noopener noreferrer">+097053-7734677</a>
                                    </li>
                                    <li>
                                        <a href="tel:097054-6868540" aria-label="telephone" rel="noopener noreferrer">+097054-6868540</a>
                                    </li>
                                </UnitBodyPhone>
                                <UnitBody>
                                    <p>ראשון לציון, משה לוי 14<br/>
                                        ישראל</p>
                                </UnitBody>
                            </HeaderMobileNavBox>
                        </HeaderMobileTelNav>
                    </NavMain>
                </Nav>
            </HeaderWrap>
        </Header>
    );
}
export default NavMenu
