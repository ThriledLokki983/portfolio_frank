import styled from "styled-components";
import img from "../../assets/images/brain-1.jpeg";

export const Container = styled.header`
    padding: 2rem 0;
    color: var(--text-color-white);
    background-image: url("https://static.ghost.org/v1.0.0/images/blog-cover.jpg");
    // background-image:url(${img});
    background-position: 50%;
    background-size: cover;
`;

export const Inner = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 4vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Mast = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MastLeft = styled.div`
    display: flex;
`;

export const MastRight = styled.div`
    align-items: center;
    display: flex;

    & svg {
        stroke: #000;
        stroke-width: 3%;
        stroke-linecap: round;
        fill: #abb2b9;
    }

    & a:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const Banner = styled.article`
    max-width: 80%;
    margin: 0 auto;
    padding: 10vw 0;
    text-align: center;

    & h1 {
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 6.5rem;
        line-height: 1.3em;

        & span:last-child {
            font-weight: 300;
            font-size: 2rem;
        }

        & span:first-child {
            text-transform: uppercase;
        }
    }

    & p {
        margin-bottom: 1rem;
        padding: 0;
        color: #abb2b9;
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.3em;
        letter-spacing: 0.15em;
    }
`;

export const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0 0 0;
`;

export const NavLeft = styled.div`
    margin: 0 20px 0 -10px;
`;

export const NavRight = styled.div``;

export const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & li:not(:last-child) {
        margin-right: 2rem;
        padding: 0;
    }

    & li {
        list-style: none;
    }
`;

export const NavItem = styled.li`
    list-style: none;
    border-bottom: 2px solid #transparent;

    & a:hover,
    & a:focus-within,
    & a:active {
        color: #fff;
        border-bottom: 1px solid currentColor;
    }
`;

export const Link = styled.a`
    height: 2.5rem;

    color: var(--text-color-white);
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
`;

export const NavLink = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: 300;
    color: #abb2b9;
    text-transform: capitalize;
`;

export const NavButton = styled(Link)`
    font-size: 1.4rem;
    text-decoration: none;
    font-weight: 300;
    color: #abb2b9;
    text-transform: capitalize;
    border: 1px solid #abb2b9;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus-within,
    &:active {
        border: 1px solid transparent;
        background-color: #fff;
        color: #000;
    }
`;
