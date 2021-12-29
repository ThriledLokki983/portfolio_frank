import { useState } from "react";
import { Container, Inner, Mast, Banner, Navigation } from "./header.styles";
import { MastLeft, MastRight, Link, NavLeft, NavRight } from "./header.styles";
import { NavItems, NavItem, NavLink, NavButton } from "./header.styles";
import Icon from "../Icon/icon.component";

interface HeaderProps {
    isHome?: boolean;
}

function Header() {
    const [isHome, setIsHome] = useState(true);

    return (
        <Container>
            <Inner>
                <Mast>
                    <MastLeft>
                        <Link href="/">FT</Link>
                    </MastLeft>
                    <MastRight>
                        <Link href="/">
                            <Icon name="graduation" color="white" size={22} />
                        </Link>
                        <Link href="/">
                            <Icon name="twitter" color="white" size={18} />
                        </Link>
                        <Link href="/">
                            <Icon name="facebook" color="white" size={18} />
                        </Link>
                        <Link href="/">
                            <Icon name="linkedin" color="white" size={20} />
                        </Link>
                        <Link href="/">
                            <Icon name="email" color="white" size={18} />
                        </Link>
                    </MastRight>
                </Mast>
                {isHome ? (
                    <Banner>
                        <h1>
                            <span> Frank Tsiwah </span>
                            <span>PhD</span>
                        </h1>
                        <p> University of Groningen-NL</p>
                    </Banner>
                ) : null}
                <Navigation>
                    <NavLeft>
                        <NavItems>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#projects">Publications</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Reaserch</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Teaching</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#resume">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#resume">Contact</NavLink>
                            </NavItem>
                        </NavItems>
                    </NavLeft>
                    <NavRight>
                        <NavItems>
                            {/* <li>
                                <NavButton href="/about"></NavButton>
                            </li> */}
                        </NavItems>
                    </NavRight>
                </Navigation>
            </Inner>
        </Container>
    );
}

export default Header;
