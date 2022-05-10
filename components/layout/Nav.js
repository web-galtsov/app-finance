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
                                    <p>הכישור 30 חולון<br/>
                                        ישראל
                                    </p>
                                </UnitBody>
                            </HeaderLogoContactsUnit>
                        </HeaderLogoCollapse>
                        <HeaderLogoPanel>
                            <HeaderLogoPanelBrand>
                                <Link href="/" passHref>
                                    <HeaderLogoPanelBrandLink>
                                        <div
                                            style={{
                                                width: "150px",
                                                height: "105x",
                                                position: "relative",
                                                alignSelf: "center",
                                                aspectRatio: "150/105",
                                            }}
                                        >
                                               <Image
                                                   src="/logo.webp"
                                                   alt="SOSOFinance"
                                                   rel="apple-touch-icon"
                                                   layout="fill"
                                                   objectFit="contain"
                                                   priority
                                               />
                                        </div>
                                    </HeaderLogoPanelBrandLink>
                                </Link>
                            </HeaderLogoPanelBrand>
                        </HeaderLogoPanel>
                        <HeaderLogoAsideButton>
                            <HeaderLogoContacts>
                                <UnitBodyPhone>
                                    <li>
                                       <a href="tel:09720503467613" aria-label="telephone" rel="apple-touch-icon">0503467613</a>
                                    </li>
                                    <li>
                                       <a href="tel:09720537734677" aria-label="telephone" rel="apple-touch-icon">0537734677</a>
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
                            <ActiveLink activeClassName="active"  href = "/"  prefetch={false} rel="apple-touch-icon">
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>ראשי</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/about" prefetch={false} rel="apple-touch-icon">
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>אודות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/our_services" prefetch={false} rel="apple-touch-icon">
                                 <a><StyledLink className="navlink" onClick={closeMobileMenu}>השירותים שלנו</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/mortgage_advice" prefetch={false} rel="apple-touch-icon">
                                 <a><StyledLink className="navlink" onClick={closeMobileMenu}>ייעוץ משכנתאות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/mortgage_deniers" prefetch={false} rel="apple-touch-icon">
                                 <a><StyledLink className="navlink" onClick={closeMobileMenu}>מסורבי משכנתא</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/mortgage_routes" prefetch={false} rel="apple-touch-icon">
                                   <a><StyledLink className="navlink" onClick={closeMobileMenu}>מסלולי המשכנתאות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/loan_consolidation" prefetch={false} rel="apple-touch-icon">
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>איחוד הלוואות</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active"  href="/non_bank_mortgage" prefetch={false} rel="apple-touch-icon">
                                <a><StyledLink className="navlink" onClick={closeMobileMenu}>משכנתא חוץ בנקאית</StyledLink></a>
                            </ActiveLink>
                        </li>
                        <li>
                        <ActiveLink activeClassName="active" href="/contact" prefetch={false} rel="apple-touch-icon">
                            <a><StyledLink className="navlink" onClick={closeMobileMenu}>צור קשר</StyledLink></a>
                        </ActiveLink>
                        </li>
                        <HeaderMobileTelNav>
                            <HeaderMobileNavBox>
                                <UnitBodyPhone>
                                    <li>
                                        <a href="tel:053-7734677" aria-label="telephone" rel="noopener noreferrer apple-touch-icon">+097053-7734677</a>
                                    </li>
                                    <li>
                                        <a href="tel:097054-6868540" aria-label="telephone" rel="noopener noreferrer apple-touch-icon">+097054-6868540</a>
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
