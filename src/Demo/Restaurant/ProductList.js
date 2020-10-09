import React, { useEffect, useState } from 'react';
import Aux from '../../hoc/_Aux';
import { Row, Col, Card, Form, Table, Button, Modal } from 'react-bootstrap';
import { Product } from '../../service';
const initialModalValue = {
	show: false,
	id: 0,
};
export default function ProductList(props) {
	const [product, setProduct] = useState([]);
	const [show, setShow] = useState({ ...initialModalValue });
	const handleClose = () => setShow(false);
	const handleShow = (e) => setShow({ ...show, id: parseInt(e.target.id), show: true });

	const deleteFunction = (id) => {
		Product.deleteProduct(id)
			.then((response) => {
				console.log(response.status);
				if (response.status === 204) {
					const notDeleted = product.filter((m) => {
						if (m.id !== id)
							return {
								m,
							};
					});
					console.log(notDeleted);
					setProduct(notDeleted);
				}
			})

			.catch((err) => {
				console.log(err);
				alert('oops!! something went wrong please load page again');
			});
	};

	useEffect(() => {
		Product.getProduct().then((res) => {
			const resData = res.data;
			console.log(resData);
			setProduct(resData);
		});
	}, []);

	const goToEditProduct = (e) => {
		const data = product.filter((f) => {
			if (f.id === parseInt(e.target.id)) {
				return f;
			}
		});
		props.history.push({
			pathname: `/EditProduct/${e.target.id}`,
			// editProductData: data,
		});
	};

	if (!product) {
		return 'loading...';
	}

	return (
		<Aux>
			<Row>
				<Modal show={show.show} onHide={handleClose} centered="true">
					<Modal.Header closeButton>
						<Modal.Title className="font-weight-bold text-dark">Delete confirmation!!</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are you sure want to delete?</Modal.Body>
					<Modal.Footer>
						<Button
							variant="danger"
							onClick={() => {
								deleteFunction(show.id);
								setShow({ show: false });
							}}
						>
							Delete
						</Button>
					</Modal.Footer>
				</Modal>
				<Col>
					<Card>
						<Card.Header>
							<Card.Title as="h5">Product-List</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row className="m-auto">
								<Col md={6}>
									<Form>
										<Form.Group>
											<Form.Control
												type="text"
												name="search"
												placeholder="Search"
												className="mb-1 mx-2"
											/>
										</Form.Group>
									</Form>
								</Col>
							</Row>

							<Table responsive>
								<thead>
									<tr>
										<th>PID</th>
										<th>Product Name</th>
										<th>Product Image</th>
										<th>Selling Price</th>
										<th>MRP</th>
										<th>Discount</th>
										<th>Type</th>
										<th>Status</th>
										<th colSpan="2" className="text-center">
											{' '}
											Action
										</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{product.map((m, index) => (
										<tr key={m.id}>
											<td scope="row">{m.id}</td>
											<td>{m.name}</td>
											<td>
												<img src={m.media} />
											</td>
											<td>{m.sellingPrice}</td>
											<td>
												<del>{m.originalPrice}</del>
											</td>
											<td>{m.discount}</td>

											<td>{m.type}</td>
											<td>{m.status}</td>
											<td>
												<Button id={m.id} variant="primary" onClick={(e) => goToEditProduct(e)}>
													Edit
												</Button>
												<Button
													id={m.id}
													variant="danger"
													onClick={(e) => {
														handleShow(e);
													}}
												>
													Delete
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Aux>
	);
}
