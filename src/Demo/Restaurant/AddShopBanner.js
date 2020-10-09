import React, { useMemo, useState } from 'react';
import Aux from '../../hoc/_Aux';
import { Row, Col, Card, Form, Button, Alert, Spinner, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';
import { ShopBanner } from '../../service';
import BannerImageNotes from './BannerImageNotes';

const baseStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px',
	borderWidth: 2,
	borderRadius: 2,
	borderColor: 'black',
	borderStyle: 'dashed',
	backgroundColor: '#fafafa',
	color: '#bdbdbd',
	outline: 'none',
	transition: 'border .24s ease-in-out',
	height: '100%',
	width: '100%',
	cursor: 'pointer',
};

const activeStyle = {
	borderColor: '#2196f3',
};

const acceptStyle = {
	borderColor: '#00e676',
};

const rejectStyle = {
	borderColor: '#ff1744',
};

const initialValues = {
	bname: '',
	type: '',
};

const validationSchema = Yup.object({
	type: Yup.string().required('Required*'),
});

export const AddShopBanner = (props) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (e) => {
			setalert1(true);
			const shopid = { shopId: parseInt(localStorage.getItem('shop-id')) };

			const formData = getFormData(shopid);
			console.log(formData);

			ShopBanner.addShopBanner(formData)
				.then((response) => {
					console.log(response.data);
					setalert1(false);

					setShow(true);
				})
				.catch((err) => {
					console.log(err);
					setalert1(false);
					alert('something went wrong please page load again');
				});
		},
	});

	const [alert, setalert] = useState(false);
	const [alert1, setalert1] = useState(false);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles } = useDropzone({
		accept: 'image/*',
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	);

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{' '}
			{file.path} - {file.size} bytes
		</li>
	));

	const getFormData = (data) => {
		const formData = new FormData();
		Object.keys(data).forEach((key) => {
			console.log(key, data[key]);
			formData.append(key, data[key]);
			console.log(formData);
		});

		for (let index = 0; index < acceptedFiles.length; index++) {
			formData.append('file', acceptedFiles[index]);
		}
		formData.append('type', formik.values.type);

		return formData;
	};

	return (
		<Aux>
			{
				<Modal show={show} onHide={handleClose} centered="true" enforceFocus="true">
					<Modal.Header closeButton>
						<Modal.Title className="font-weight-bold text-dark">
							Shop Banner Added Sucessfully!!
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>Click on show button to view newly added Banner</Modal.Body>
					<Modal.Footer>
						<Button
							variant="primary"
							onClick={() => {
								props.history.push({
									pathname: '/ShopBannerlist',
								});
							}}
						>
							Show
						</Button>
						{/* <Button variant="primary" onClick={handleClose}>
							Close
						</Button> */}
					</Modal.Footer>
				</Modal>
			}

			{alert && <Alert variant="danger">Shop-Banner Added!!!</Alert>}

			<Row>
				<Col>
					<Card>
						<Card.Header>
							<Card.Title as="h5">Add-Shop-Banner</Card.Title>
						</Card.Header>
						<form onSubmit={formik.handleSubmit}>
							<Card.Body>
								<Row>
									{/* <Col md={6}>
									<Form.Group controlId="bannername">
										<Form.Label>Banner Name</Form.Label>
										<Form.Control
											type="text"
											name="bname"
											placeholder="Enter Bannner Name"
											onChange={formik.handleChange}
											value={formik.values.bname}
											onBlur={formik.handleBlur}
										/>
										{formik.errors.bname && formik.touched.bname ? (
											<div className="row text-danger mx-auto ">{formik.errors.bname}</div>
										) : null}
									</Form.Group>
								</Col> */}
									<Col md={6}>
										<Form.Group controlId="type">
											<Form.Label>Type</Form.Label>
											<Form.Control
												as="select"
												name="type"
												onChange={formik.handleChange}
												value={formik.values.type}
												onBlur={formik.handleBlur}
											>
												<option value=""> Type</option>
												<option value="banner">Banner</option>
												<option value="discount">Discount</option>
											</Form.Control>
											{formik.errors.type && formik.touched.type ? (
												<div className="row text-danger mx-auto ">{formik.errors.type}</div>
											) : null}
										</Form.Group>
									</Col>
								</Row>

								<Row>
									<Col md="6">
										<Form.Group>
											<Form.Label>Banner Image</Form.Label>
											<div className="container">
												<div {...getRootProps({ style })}>
													<input {...getInputProps()} type="file" multiple name="image[]" />
													<p>Drag 'n' drop some files here, or click to select files</p>
													<p>Image size text</p>
												</div>
												{files.length === 0 ? null : (
													<aside>
														<h4 className="mt-3">Selected file</h4>
														<ul>{files}</ul>
													</aside>
												)}
											</div>
										</Form.Group>
									</Col>
									<Col md={6}>
										<BannerImageNotes />
									</Col>
								</Row>

								{alert1 && (
									<div className="mb-2 text-center">
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
										<Spinner animation="grow" variant="success" />
									</div>
								)}

								<Row className="mt-5">
									<Col md={6}>
										<Button variant="outline-success" className="btn-block" type="submit">
											Save
										</Button>
									</Col>
									<Col md={6}>
										<Button variant="outline-danger" type="reset" className="btn-block">
											Cancel
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</form>
					</Card>
				</Col>
			</Row>
		</Aux>
	);
};
export default AddShopBanner;
