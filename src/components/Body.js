
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Contact } from "../components/Contact"

export const Body = () => {
	return (
		<div id='index'>
            <section id="hero" className="primary-bg">
                <Container>
                    <Row className="align-items-center">
                        <Col className="text-center text-md-start" xs={12} md={6}>
                            <h1 className="title-section">open the door</h1> 
                            <h1 className="title-section">to the future</h1>
                            <Button variant="secondary">Joint Waitlist</Button>
                        </Col>

                        <Col className="d-flex justify-content-center justify-content-md-end" xs={12} md={6}>
                            <Image
                                fluid
                                src='./images/banner.png'
                                alt='Banner Hey! Roomie'
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="about" className="secondary-bg">
                <Container>
                    <Row className="align-items-center">
                        <Col className="text-center text-md-start" xs={12} md={5}>
                            <Image
                                fluid
                                src='./images/about.png'
                                alt='About Hey! Roomie'
                            />
                        </Col>

                        <Col className="d-flex justify-content-center justify-content-md-end" xs={12} md={7}>
                            <span className="item-text">
                                <b>Hey! Roomie</b> is a cutting-edge platform that aims to transform the way people find roommates 
                                and shared living spaces. With the rising costs of housing and the increasing trend of individuals 
                                seeking shared accommodations, <b>Hey! Roomie</b> is here to simplify and enhance the roommate search process.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="form" className="accent-bg">
                <Container>
                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <h1 className="title-section">The best stories start</h1> 
                            <h1 className="title-section">with an exciting wait</h1>

                            <Contact />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
	);
};