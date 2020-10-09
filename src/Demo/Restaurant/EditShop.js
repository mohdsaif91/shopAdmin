import React, { useMemo, useEffect, useState } from 'react';
import { Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import Spinnerc from './Spinnerc';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import Aux from '../../hoc/_Aux';
import { useDropzone } from 'react-dropzone';
import { Shop } from '../../service';

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
	height: '150px',
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

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	phone: Yup.number()
		.typeError("That doesn't look like a  number")
		.positive("Number can't start with a minus")
		.integer("Number can't include a decimal point")
		.required('Required'),
	locality: Yup.string().required('Required'),
	zipcode: Yup.string().required('Required'),

	description: Yup.string().required('Required'),
	address: Yup.string().required('Required'),

	lat: Yup.string().required('Required'),
	lng: Yup.string().required('Required'),
});

export default function EditShop() {
	const [shop, setShop] = useState();
	const [show, setShow] = useState(false);
	const [alert, setalert] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		Shop.getShop().then((res) => {
			const resData = res.data;
			setShop(resData);
		});
	}, []);

	console.log(shop);

	const getFormData = (data) => {
		const formData = new FormData();
		Object.keys(data).forEach((key) => {
			console.log(key, data[key]);
			formData.append(key, data[key]);
		});

		if (files.length > 0) {
			formData.append('logo', acceptedFiles[0]);
		} else if (files.length === 0) {
			formData.append('logo', data.logo);
		}

		return formData;
	};

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

	const handleSubmit = (values) => {
		setalert(true);
		console.log('aayaya');
		// e.preventDefault();
		console.log(values);

		const formData = getFormData(values);

		Shop.editShop(formData)
			.then((response) => {
				console.log(response);
				setalert(false);
				setShow(true);
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	};

	if (!shop) {
		return 'loading...';
	}

	return (
		<Aux>
			<Row>
				<Col>
					<Card>
						<Card.Header>
							<Card.Title as="h5">Edit Shop Details</Card.Title>
						</Card.Header>

						<Modal show={show} onHide={handleClose} centered="true">
							<Modal.Header closeButton>
								<Modal.Title className="font-weight-bold text-dark">
									Details Edited Sucessfully!!!
								</Modal.Title>
								{/* <Modal.Body>You have done it!!</Modal.Body> */}
							</Modal.Header>
							<Modal.Body>Please reload the page to view the changes!!!!!</Modal.Body>
						</Modal>

						<Card.Body>
							<Formik initialValues={shop} validationSchema={validationSchema} onSubmit={handleSubmit}>
								{(formik) => {
									return (
										<form onSubmit={formik.handleSubmit}>
											<Row>
												<Col md={6}>
													<Form.Group controlId="Name">
														<Form.Label>
															Name<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="name"
															placeholder="Enter Name"
															// onChange={formik.handleChange}
															// value={formik.values.name}
															// onBlur={formik.handleBlur}
															{...formik.getFieldProps('name')}
														/>
														{formik.errors.name && formik.touched.name ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.name}
															</div>
														) : null}
													</Form.Group>

													<Form.Group controlId="phone">
														<Form.Label>
															Phone<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															placeholder="Enter Phone"
															name="phone"
															placeholder="Enter phone"
															onChange={formik.handleChange}
															value={formik.values.phone}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.phone && formik.touched.phone ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.phone}
															</div>
														) : null}
													</Form.Group>
													<Form.Group controlId="locality">
														<Form.Label>
															Locality<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="locality"
															placeholder="Enter locality"
															onChange={formik.handleChange}
															value={formik.values.locality}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.locality && formik.touched.locality ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.locality}
															</div>
														) : null}
													</Form.Group>
													<Form.Group controlId="zipcode">
														<Form.Label>
															Zipcode<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="zipcode"
															placeholder="Enter zipcode"
															onChange={formik.handleChange}
															value={formik.values.zipcode}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.zipcode && formik.touched.zipcode ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.zipcode}
															</div>
														) : null}
													</Form.Group>
												</Col>

												<Col md={6}>
													<Form.Group controlId="description">
														<Form.Label>
															Description<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															placeholder="Description"
															name="description"
															{...formik.getFieldProps('description')}
														/>
														{formik.errors.description && formik.touched.description ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.description}
															</div>
														) : null}
													</Form.Group>
													<Form.Group controlId="Address">
														<Form.Label>
															Address<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															as="textarea"
															rows="3"
															name="address"
															{...formik.getFieldProps('address')}
														/>
														{formik.errors.address && formik.touched.address ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.address}
															</div>
														) : null}
													</Form.Group>

													<Row>
														<Form.Group as={Col} controlId="latitude">
															<Form.Label>
																Latitude<i className="text-danger">*</i>
															</Form.Label>
															<Form.Control
																type="text"
																placeholder="Latitude"
																name="lat"
																{...formik.getFieldProps('lat')}
															/>
															{formik.errors.latitude && formik.touched.latitude ? (
																<div className="row text-danger mx-auto ">
																	{formik.errors.latitude}
																</div>
															) : null}
														</Form.Group>
														<Form.Group as={Col} controlId="longitude">
															<Form.Label>
																Longitude<i className="text-danger">*</i>
															</Form.Label>
															<Form.Control
																type="text"
																placeholder="lat"
																{...formik.getFieldProps('lat')}
															/>
															{formik.errors.longitude && formik.touched.longitude ? (
																<div className="row text-danger mx-auto ">
																	{formik.errors.longitude}
																</div>
															) : null}
														</Form.Group>
													</Row>
												</Col>
											</Row>

											<Row>
												<Col md={6}>
													<Row>
														<Col md="auto">
															<Form.Group>
																<Form.Label>Shop Image</Form.Label>
																<div className="container">
																	<div {...getRootProps({ style })}>
																		<input
																			{...getInputProps()}
																			type="file"
																			multiple
																			name="image[]"
																		/>
																		<p>
																			Drag 'n' drop some files here, or click to
																			select files
																		</p>
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
															<Form.Group>
																<Form.Label>Product Image </Form.Label>
																<div>
																	<img src={formik.values.logo} />
																</div>
															</Form.Group>
														</Col>
													</Row>
												</Col>
											</Row>

											{alert && (
												<div className="mb-2 text-center">
													<Spinnerc />
												</div>
											)}

											<Row className="mt-5">
												<Col md={6}>
													<Button
														variant="outline-success"
														className="btn-block"
														type="submit"
													>
														Save
													</Button>
												</Col>
												<Col md={6}>
													<Button variant="outline-danger" className="btn-block">
														Cancel
													</Button>
												</Col>
											</Row>
										</form>
									);
								}}
							</Formik>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Aux>
	);
}
