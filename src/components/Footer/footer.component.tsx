import Icon from "../Icon/icon.component";
import { FootLeft, FootRight, MainFooter, Container } from "./footer.styles";

function Footer() {
    return (
        <MainFooter>
            <Container>
                <FootLeft></FootLeft>
                <FootRight>
                    <p>Copyright &copy; 2021. All rights reserved &mdash;</p>
                    <a
                        href="https://www.nimohgideon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Gideon Nimoh{" "}
                    </a>
                </FootRight>
            </Container>
        </MainFooter>
    );
}

export default Footer;
