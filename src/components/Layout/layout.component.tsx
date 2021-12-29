import React from "react";
import { Viewport, Section, MainContent } from "./layout.styles";
import { Container, FootLeft, FootRight } from "./layout.styles";

// COMPONENTS
import Header from "../Header/header.component";
import Footer from "../Footer/footer.component";

interface LayoutProps {
    children: React.ReactNode;
}

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
function Layout({ children }: LayoutProps) {
    return (
        <Viewport>
            <Section>
                <Header />
            </Section>
            <Section>
                <MainContent>
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </MainContent>
            </Section>
            <Section>
                <Footer />
            </Section>
        </Viewport>
    );
}

export default Layout;
