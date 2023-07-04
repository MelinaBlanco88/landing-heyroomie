import { Button, Form } from "react-bootstrap";

export const Contact = () => {
	return (
		<>
			<Form>
				<div className="form-group">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="text" placeholder="Enter Last Name" />
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

				<Button variant="primary" type="submit">I want to register</Button>
			</Form>
        </>
	);
};