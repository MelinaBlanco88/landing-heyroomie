import { Container, Navbar, Image, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
	return (
		<header id='header' className="primary-bg">
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<Image
							className='ms-0 logo-image'
							src='./images/logo-heyroomie.png'
							alt='Logo Hey! Roomie'
							height='auto'
							width='166px'
							style={{ objectFit: "contain" }}
						/>
					</Navbar.Brand>


					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<Link to="form"><Button className="hvr-grow" >Join the waitlist</Button></Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};