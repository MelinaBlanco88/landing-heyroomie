import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'


const formData = {
	name: "",
	email: "",
	phoneCod: "",
	phoneNumber: "",
};

export const Contact = () => {
	const { name, email, phoneCod, phoneNumber, onInputChange, formState } = useForm(formData);

	const onSubmit = (e) => {
		e.preventDefault();
		createMessage(name, email, phoneCod, phoneNumber);
	};

	const createMessage = (name, email, phoneCod, phoneNumber) => {
		const number = "5215574766664";
		const nameEmoji = "%F0%9F%99%8B%E2%80%8D%E2%99%82%EF%B8%8F%20";
		const envelopeEmoji = "%E2%9C%89%EF%B8%8F%20";
		const phoneEmoji = "%F0%9F%93%B1";
		const emailEmoji = "%F0%9F%93%A7%20";
	};

	return (
		<Form>
			<div className="form-group mb-4">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control type="text" placeholder="Enter name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Row className="cod-phone align-items-center w-100 m-0">
						<Col xs={4} md={2} lg={3} xl={2} className="p-0">
							<PhoneInput
								inputProps={{
									name: 'phoneCod',
									required: true
								}}
								country="mx"
								preferredCountries={["ar", "mx", "es", "cr", "pa", "cl", "co", "ec", "sv", "hn", "pe"]}
							/>
						</Col>
						<Col xs={1} className="p-0">-</Col>
						<Col xs={7} md={9} lg={8} xl={9} className="p-0">
							<input
								required
								className='w-100'
								type='tel'
								name='phoneNumber'
								id='phoneInput'
								placeholder='Phone'
								value={phoneNumber}
								onChange={onInputChange}
							/>
						</Col>
					</Row>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Select className="mb-3" aria-label="Default select example">
						<option>Country</option>
						<option value="1">USA</option>
						<option value="2">México</option>
						<option value="3">Colombia</option>
						<option value="4">España</option>
						<option value="5">Italia</option>
						<option value="6">Other</option>
					</Form.Select>
				</Form.Group>
				
			</div>

			<Button variant="primary" type="submit" className="hvr-radial-out">I want to register</Button>
		</Form>
	);
};