
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
                            <h1 className="title-section">open the door</h1> 
                            <h1 className="title-section">to the future</h1>
                            <Link to="form"><Button variant="secondary" className="hvr-grow">Joint Waitlist</Button></Link>
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
                            <h1 className="title-section second-line">with an exciting wait</h1>

                            <h5 className="subtitle-section">Sign up for our waitlist and be part of our history</h5>

                            <Contact />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
	);
};