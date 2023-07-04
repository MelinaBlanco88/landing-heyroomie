import { Image, Stack, Row, Container } from "react-bootstrap";
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
	return (
		<Footer id='footer' className="black-bg">
			<Container>
				<Row>
					<Image
						src='./images/logo-heyroomie-white.png'
						alt='Logo Hey! Roomie'
						height='auto'
						width='122px'
						style={{ objectFit: "contain" }}
					/>

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
		</Footer>
	);
};