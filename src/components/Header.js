import { Container, Navbar, Image, Button } from "react-bootstrap";

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
					<Navbar.Toggle />

					<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						<Button className="hvr-grow">Joint Waitlist</Button>
					</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};