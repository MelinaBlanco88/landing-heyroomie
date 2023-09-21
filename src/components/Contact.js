import { useState } from "react";
import { Button, Col, Form, Row, Modal, Image } from "react-bootstrap";
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput from "react-phone-input-2";
import { useForm } from "../hooks/useForm";
import axios from "axios";

const formData = {
  name: "",
  email: "",
  phoneCod: "",
  phoneNumber: "",
};

export const Contact = () => {
  const { name, email, phoneCod, phoneNumber, country, onInputChange, onResetForm } =
    useForm(formData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/contact",
        data: { name, email, phoneCod, phoneNumber, country },
      });

      if (data.ok) {
        setShowSuccessMessage(true);
        setErrorMessage("");
        onResetForm()
        setFormSubmitted(true);
      } else {
        setShowSuccessMessage(false);
        setErrorMessage("Failed to send the form. Please try again.");
      }
    } catch (error) {
      setShowSuccessMessage(false);
      setErrorMessage("Failed to send the form. Please try again.");
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessMessage(false);
    setErrorMessage("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="form-group mb-4">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            name="name"
            onChange={onInputChange}
            type="text"
            placeholder="Nombre"
            value={formSubmitted ? "" : name}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Row className="cod-phone align-items-center w-100 m-0">
            <Col xs={4} md={2} lg={3} xl={2} className="p-0">
            <PhoneInput
              inputProps={{
                name: "phoneCod",
                required: true,
              }}
              onChange={(e) =>
                onInputChange({ target: { name: "phoneCod", value: e } })
              }
              country="mx"
              preferredCountries={[
                "ar",
                "mx",
                "es",
                "cr",
                "pa",
                "cl",
                "co",
                "ec",
                "sv",
                "hn",
                "pe",
              ]}
              value={formSubmitted ? "" : phoneCod}
            />
            </Col>
            <Col xs={1} className="p-0">
              -
            </Col>
            <Col xs={7} md={9} lg={8} xl={9} className="p-0">
              <input
                required
                className="w-100"
                type="tel"
                name="phoneNumber"
                autoComplete="on"
                id="phoneInput"
                placeholder="Teléfono"
                value={formSubmitted ? "" : phoneNumber}
                onChange={onInputChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={formSubmitted ? "" : email}
            onChange={onInputChange}
          />
          <Form.Text className="text-muted">
		        Nunca se compartirán los datos.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Select
            className="mb-3"
            onChange={(e) =>
              onInputChange({ target: { name: "country", value: e.target.value } })
            }
            aria-label="Default select"
            value={formSubmitted ? "" : country}
          >
            <option>País</option>
            <option value="USA">USA</option>
            <option value="México">México</option>
            <option value="Colombia">Colombia</option>
            <option value="España">España</option>
            <option value="Italia">Italia</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
      </div>

      <Button variant="primary" type="submit" className="hvr-radial-out">
        Unirme
      </Button>

      <Modal show={showSuccessMessage || errorMessage} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            ¡Felicitaciones!
            
            <Image src="../../images/hand.png" thumbnail alt="Hand ok" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showSuccessMessage && 
            <>
              <p>Your data has been sent successfully.</p>
              <p>You are receiving a Beta version when available.</p>
            </>
          }
          {errorMessage && <p>{errorMessage}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};