import styled from "styled-components";

export const Viewport = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content minmax(50rem, min-content) 1fr;
    grid-gap: 5rem;
    height: 100vh;
`;

export const Section = styled.section`
    height: fit-content;
`;

export const Header = styled.header``;

export const MainContent = styled.main`
    grid-area: section;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 4vw;
`;

export const Footer = styled.footer`
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

export const FootRight = styled.div``;
