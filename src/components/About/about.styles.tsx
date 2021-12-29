import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & header {
        align-self: flex-start;

        &::after {
            content: "";
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #000;
            background: #000;
            margin-top: 1rem;

            @media (min-width: 768px) {
                display: none;
            }
        }
    }

    & h1 {
        font-size: 3rem;
        font-weight: 700;
        text-align: left;
        margin-bottom: 1.5rem;
    }

    & p:not(:last-child) {
        margin-bottom: 2rem;
    }

    & p {
        line-height: 1.6;
        font-size: 1.6rem;
        font-weight: 300;
        text-align: left;
    }

    & div {
        border-top: 1px solid rgba(171, 178, 185, 0.4);
        padding: 0.5rem 0;
        align-self: flex-start;
    }

    & a:not(:last-child) {
        margin-right: 1rem;
    }

    & a {
        font-size: 1.1rem;
        text-decoration: none;
        color: #7b7d7d;
        align-self: flex-start;

        &:hover {
            color: #000;
        }
    }
`;
