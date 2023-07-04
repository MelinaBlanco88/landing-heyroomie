import { Image, Row, Container } from "react-bootstrap";

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
				</Row>
			</Container>
		</Footer>
	);
};