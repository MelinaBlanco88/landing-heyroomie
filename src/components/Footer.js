import { Image, Stack, Row, Container } from "react-bootstrap";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";

export const Footer = () => {
	return (
		<footer id='footer' className="black-bg text-center">
			<Container>
				<Row className="p-5">
					<Image
						className='logo-image'
						src='./images/logo-heyroomie-white.png'
						alt='Logo Hey! Roomie'
					/>
					<h1 className="title-section">Follow Us</h1>
					<Stack direction='horizontal' gap={2} className='social-nav d-flex justify-content-center'>
						<a href="https://twitter.com/HeyRoomieApp" className='p-3 mx-2 hvr-radial-out' target="_blank" rel="noreferrer">
							<BsTwitter size={32} />
						</a>
						<a href="https://www.facebook.com/heyroomieapp" className='p-3 mx-2 hvr-radial-out' target="_blank" rel="noreferrer">
							<BiLogoFacebook size={32} />
						</a>
						<a href="https://www.instagram.com/heyroomieapp/" className='p-3 mx-2 hvr-radial-out' target="_blank" rel="noreferrer">
							<BsInstagram size={32} />
						</a>
						<a href="https://www.linkedin.com/company/hey-roomie" className='p-3 mx-2 hvr-radial-out' target="_blank" rel="noreferrer">
							<BiLogoLinkedin size={32} />
						</a>
					</Stack>
				</Row>
			</Container>
		</footer>
	);
};