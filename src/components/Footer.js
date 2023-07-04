import { Image, Stack, Row, Container } from "react-bootstrap";
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
	return (
		<footer id='footer' className="black-bg text-center">
			<Container>
				<Row>
					<Image
						className='logo-image'
						src='./images/logo-heyroomie-white.png'
						alt='Logo Hey! Roomie'
					/>
					<h1 className="title-section">Follow Us</h1>
					<Stack direction='horizontal' gap={1} className='d-flex justify-content-center pt-2 pt-md-0'>
						<a href="https://twitter.com/FarmaLeal/" className='p-0 text-white mx-2'>
							<FaTwitter size={22} />
						</a>
						<a href="https://www.facebook.com/CFarmaLeal/" className='p-0 text-white mx-2'>
							<AiFillFacebook size={22} />
						</a>
						<a href="https://www.instagram.com/farmaleal/" className='p-0 text-white mx-2'>
							<AiOutlineInstagram size={22} />
						</a>
						<a href="https://www.youtube.com/channel/UCVezBeVMt6iPAsq2a9_4CIA" className='p-0 text-white mx-2'>
							<AiFillYoutube size={22} />
						</a>
					</Stack>
				</Row>
			</Container>
		</footer>
	);
};