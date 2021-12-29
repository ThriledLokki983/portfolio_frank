import { Container, Article } from "./about.styles";

function About() {
    return (
        <Container>
            <Article>
                <header>
                    <h1>About me</h1>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    recusandae neque perferendis non reiciendis, inventore
                    corporis possimus ullam ea dolore? Magni officiis animi
                    tenetur nobis atque laudantium consequatur quas aut, ea quam
                    culpa unde rerum totam, repudiandae illum! Libero, nemo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, totam autem, porro sint accusantium
                    provident earum voluptatem ad veritatis rerum deserunt
                    recusandae maiores modi eaque laboriosam praesentium?
                    Consequuntur, accusantium officia.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, totam autem, porro sint accusantium
                    provident earum voluptatem ad veritatis rerum deserunt
                    recusandae maiores modi eaque laboriosam praesentium?
                    Consequuntur, accusantium officia. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Illo obcaecati
                    necessitatibus possimus quis soluta, asperiores molestias
                    quidem. Blanditiis, sunt fuga.
                </p>
                <div>
                    <a href="mailto:franktsiwah@gmail.com">
                        franktsiwah@gamil.com
                    </a>
                    <a href="tel:+316-8771-3938">+316-8771-3938</a>
                </div>
            </Article>
            <Article>
                <figure>
                    <img src="https://picsum.photos/id/10/200/300" />
                </figure>
            </Article>
        </Container>
    );
}

export default About;
