import styled from "styled-components";

export const MainFooter = styled.footer`
    grid-area: footer;

    padding: 2rem 10rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.3rem;
    background: var(--color-base);
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FootLeft = styled.div``;

export const FootRight = styled.div`
    & p {
        font-size: 1rem;
        font-weight: 200;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    & a {
        margin-left: 0.5rem;
        font-size: 1rem;
        text-decoration: none;
        color: #fff;
        font-weight: 300;
    }
`;
