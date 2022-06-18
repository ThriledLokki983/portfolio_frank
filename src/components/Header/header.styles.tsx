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
    position: relative;
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


	@media (max-width: 768px) {
        display: none;
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

    	@media (max-width: 768px) {
            display: none;
        }
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

// Mobiel Navigation
export const MobileMenu = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: flex;
        z-index: 999;
	}
`;

export const MobileMenuBtn = styled.input`
	display: none;

	@media (max-width: 768px) {
	}

	&:checked ~ .menu {
		display: flex;
		max-height: fit-content;
		padding-block-end: 2rem;
	}

	&:checked ~ label > span {
		background: transparent;
	}

	&:checked ~ label > span:before {
		transform: rotate(-45deg);
	}
	&:checked ~ label > span:after {
		transform: rotate(45deg);
	}

	&:checked ~ label:not(.steps) span:after,
	&:checked ~ label:not(.steps) span:before {
		top: 0;
	}
`;

export const MobileMenuIcon = styled.label`
	cursor: pointer;
	display: inline-block;
	float: right;
	padding-top: 2rem;
	position: relative;
	user-select: none;

	span {
		background: #fff;
		display: grid;
		height: 0.35rem;
		position: relative;
		transition: background 0.2s ease-out;
		width: 4.5rem;
		border-radius: 0.3rem;

		&:before,
		&:after {
			background: #fff;
			content: "";
			display: block;
			height: 100%;
			position: absolute;
			transition: all 0.25s ease-in-out;
			width: 100%;
		}

		&:before {
			top: 1rem;
			border-radius: 0.3rem;
		}

		&:after {
			top: -1rem;
			border-radius: 0.3rem;
		}
	}

	@media (max-width: 768px) {
	}
`;

export const NavIcon = styled.span`
	&::before,
	&::after {
		background: #fff;
		display: grid;
		height: 0.4rem;
		position: relative;
		width: 3.5rem;
		border-radius: 0.3rem;
		transition: background 0.2s ease-out;
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

export const MobileMenuList = styled.ul`
        padding: 15rem 3rem;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: flex-end;
        margin: 0;
        width: 100%;

        li {
            list-style: none;

            a {
                color: #fff;
                font-size: 4rem;
            }

            &:not(:last-child) {
                margin-bottom: 2rem;
            }
        }


    @media (max-width: 768px) {
        height: 100vh;
        width: 80%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        position: absolute;
        right: -4rem;
        top: -2rem;
        z-index: 1;
        transition: transform 0.3s ease-in-out;

        & not(.slide-in-left){
            transform: translateX(100%);
        }
    }
`;