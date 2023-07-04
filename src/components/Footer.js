import { Image, Stack, Row, Container } from "react-bootstrap";
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";

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
					<Stack direction='horizontal' gap={1} className='d-flex justify-content-center pt-2 pt-md-0'>
						<a href="https://twitter.com/HeyRoomieApp" className='p-0 text-white mx-2'>
							<TiSocialTwitterCircular size={72} />
						</a>
						<a href="https://www.facebook.com/heyroomieapp" className='p-0 text-white mx-2'>
							<TiSocialFacebookCircular size={22} />
						</a>
						<a href="https://www.instagram.com/heyroomieapp/" className='p-0 text-white mx-2'>
							<TiSocialInstagramCircular size={22} />
						</a>
						<a href="https://www.linkedin.com/company/hey-roomie" className='p-0 text-white mx-2'>
							<TiSocialLinkedinCircular size={22} />
						</a>
					</Stack>
				</Row>
			</Container>
		</footer>
	);
};