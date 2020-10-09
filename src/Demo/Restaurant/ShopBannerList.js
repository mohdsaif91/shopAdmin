import React, { useEffect, useState } from 'react';
import Aux from '../../hoc/_Aux';
import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import { ShopBanner } from '../../service';
const initialModalValue = {
	show: false,
	id: 0,
};

export default function ShopBannerList(props) {
	const [banner, setBanner] = useState([]);
	const [show, setShow] = useState({ ...initialModalValue });
	const handleClose = () => setShow(false);
	const handleShow = (e) => setShow({ ...show, id: parseInt(e.target.id), show: true });

	const deleteFunction = (id) => {
		ShopBanner.deleteShopBanner(id)
			.then((response) => {
				console.log(response.status);
				if (response.status === 204) {
					const notDeleted = banner.filter((m) => {
						if (m.id !== id)
							return {
								m,
							};
					});
					console.log(notDeleted);
					setBanner(notDeleted);
				}
			})

			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		ShopBanner.getShopBanner().then((res) => {
			const resData = res.data;
			console.log(resData);
			setBanner(resData);
		});
	}, []);

	const goToEditBanner = (e) => {
		const data = banner.filter((f) => {
			if (f.id === parseInt(e.target.id)) {
				return f;
			}
		});
		props.history.push({
			pathname: `/EditBanner/${e.target.id}`,
			// editProductData: data,
		});
	};

	if (!banner) {
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
							<Card.Title as="h5">Shop Banner List</Card.Title>
						</Card.Header>
						<Card.Body>
							<Table responsive>
								<thead>
									<tr>
										<th>id</th>
										<th>Type</th>
										<th>Banner Image</th>

										<th colSpan="2" className="text-center">
											{' '}
											Action
										</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{banner.map((m, index) => (
										<tr key={m.id}>
											<td>{m.id}</td>
											<td>{m.type}</td>
											<td>
												<img
													// className="shopBannerImage"
													// height="120px"
													// width="300px"
													src={m.filename}
												/>
											</td>
											<td></td>
											<td></td>

											<td>
												<Button
													id={m.id}
													variant="primary"
													onClick={(e) => {
														goToEditBanner(e);
													}}
												>
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
