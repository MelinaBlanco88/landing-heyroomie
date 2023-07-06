import { Button, Col, Form, Row } from "react-bootstrap";
import "react-phone-input-2/lib/bootstrap.css"
import PhoneInput from "react-phone-input-2"
import { useForm } from "../hooks/useForm";
import axios from "axios";


const formData = {
	name: "",
	email: "",
	phoneCod: "",
	phoneNumber: "",
};

export const Contact = () => {
	const { name, email, phoneCod, phoneNumber, country, onInputChange } = useForm(formData);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(country)
		try {
			// La data que vuelve es: { ok: true } si todo sale bien, si no, ejecuta el codigo q esta dentro del catch
			const { data } = await axios({
				method: "POST",
				url: "/api/contact",
				data: { name, email, phoneCod, phoneNumber, country },
			})

			// aca habria q hacer que como todo salio bien muestre un cartelito o similar
			// Se podria agregar un modal y un state de showModal que sea true o false, el modal habría que ponerlo en este componente para no complicar los estados, cualquier cosa me avisas
		} catch (error) {
			// aqui seria por el caso contrario, se puede usar el mismo modal o cartel y cambiar el texto
			console.log(error)
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div className="form-group mb-4">
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Control name="name" onChange={onInputChange} type="text" placeholder="Enter name" />
				</Form.Group>

				<Form.Group className="mb-3">
					<Row className="cod-phone align-items-center w-100 m-0">
						<Col xs={4} md={2} lg={3} xl={2} className="p-0">
							<PhoneInput
								inputProps={{
									name: "phoneCod",
									required: true,
								}}
								onChange={(e) => onInputChange({ target: { name: "phoneCod", value: e } })}
								country="mx"
								preferredCountries={["ar", "mx", "es", "cr", "pa", "cl", "co", "ec", "sv", "hn", "pe"]}
							/>
						</Col>
						<Col xs={1} className="p-0">-</Col>
						<Col xs={7} md={9} lg={8} xl={9} className="p-0">
							<input
								required
								className="w-100"
								type="tel"
								name="phoneNumber"
								autoComplete="on"
								id="phoneInput"
								placeholder="Phone"
								value={phoneNumber}
								onChange={onInputChange}
							/>
						</Col>
					</Row>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Enter email"
						name="email"
						value={email}
						onChange={onInputChange}
					/>
					<Form.Text className="text-muted">
						We"ll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Select className="mb-3" onChange={(e) => onInputChange({ target: { name: "country", value: e.target.value } })} aria-label="Default select">
						<option>Country</option>
						<option value="USA">USA</option>
						<option value="México">México</option>
						<option value="Colombia">Colombia</option>
						<option value="España">España</option>
						<option value="Italia">Italia</option>
						<option value="Other">Other</option>
					</Form.Select>
				</Form.Group>

			</div>

			<Button variant="primary" type="submit" className="hvr-radial-out">I want to register</Button>
		</Form>
	);
};