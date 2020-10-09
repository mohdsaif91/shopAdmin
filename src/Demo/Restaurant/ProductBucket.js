import React from 'react';
import Aux from '../../hoc/_Aux';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';


export default function ProductBucket() {
	return (
		<Aux>
			<Row>
				<Col>
					<Card>
						<Card.Header>
							<Card.Title as="h5">Add-Multiple-Product</Card.Title>
						</Card.Header>

						<Card.Body>
							<Row className="my-5">Notes for Image</Row>

							<Row>
								<Form.Group controlId="upload">
									<Form.Label>Upload Excel</Form.Label>

									<Form.Control type="file" accept=".xlsx, .xls, .csv"></Form.Control>

									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>
							</Row>
							<Row className="mt-5">
								<Col md={6}>
									<Button variant="outline-success" className="btn-block">
										Upload
									</Button>
								</Col>
								<Col md={6}>
									<Button variant="outline-danger" className="btn-block">
										Cancel
									</Button>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Aux>
	);
}
