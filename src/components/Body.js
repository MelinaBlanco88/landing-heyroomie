
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Contact } from "../components/Contact";
import { Link, animateScroll as scroll } from "react-scroll";

export const Body = () => {
    return (
        <div id='index'>
            <section id="hero" className="primary-bg">
                <Container>
                    <Row className="align-items-center">
                        <Col className="text-center text-md-start" xs={12} md={7}>
                            <h1 className="title-section">¿Buscas a tu Roomie perfecto?</h1>
                            <Link to="form"><Button variant="secondary" className="hvr-grow">Únete a la lista</Button></Link>
                        </Col>

                        <Col className="d-flex justify-content-center justify-content-md-end" xs={12} md={5}>
                            <Image
                                fluid
                                src='./images/banner.png'
                                alt='Banner Hey! Roomie'
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="overflow">
                <section id="separator" className="accent-bg">
                    <div className="background-container">
                        <div className="background">
                            <span className="hidden">Hey! Roomie - One app for all roomie</span>
                        </div>
                    </div>
                </section>
            </div>

            <section id="about" className="secondary-bg">
                <Container>
                    <Row className="align-items-center">
                        <Col className="text-center text-md-start" xs={3}>
                            <Image
                                fluid
                                src='./images/prototipo.png'
                                alt='About Hey! Roomie'
                            />
                        </Col>

                        <Col className="d-flex justify-content-center justify-content-md-end" xs={9}>
                            <span className="item-text">
                                En <b>Hey! Roomie</b> conectamos a personas con intereses y estilos de vida similares utilizando 
                                algoritmos avanzados para garantizar una compatibilidad excepcional. 
                                <br />
                                Ofrecemos una plataforma segura y fácil de usar para comunicarte con posibles compañeros.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="form" className="accent-bg">
                <Container>
                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <h1 className="title-section">Las mejores historias comienzan</h1>
                            <h1 className="title-section second-line">con una espera emocionante.</h1>

                            <h5 className="subtitle-section">Únete a nuestra lista de espera y sé parte de nuestra historia.</h5>

                            <Contact />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};