import React, { useMemo, useState, useEffect } from 'react';
import Aux from '../../hoc/_Aux';
import { Row, Col, Card, Form, Button, Alert, Spinner, Modal } from 'react-bootstrap';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';
import { ShopBanner } from '../../service';
import { useParams } from 'react-router-dom';
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

const validationSchema = Yup.object({
	type: Yup.string().required('Required*'),
});

export const EditShopBanner = (props) => {
	let { id } = useParams();
	const [alert1, setalert1] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const [banner, setBanner] = useState();

	console.log(id);

	useEffect(() => {
		ShopBanner.getShopBannerById(id).then((res) => {
			const resData = res.data;
			setBanner(resData);
		});
	}, []);

	console.log(banner);
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
		const img = data.filename;
		const formData = new FormData();

		// Object.keys(data).forEach((key) => {
		// 	console.log(key, data[key]);
		// 	formData.append(key, data[key]);
		// });
		formData.append('id', parseInt(id));
		formData.append('shopId', parseInt(localStorage.getItem('shop-id')));
		formData.append('type', data.type);

		if (files.length > 0) {
			console.log(acceptedFiles[0]);
			formData.append('file', acceptedFiles[0]);
		} else if (files.length === 0) {
			console.log(data.filename);
			formData.append('file', data.filename);
		}

		return formData;
	};

	const handleSubmit = async (values) => {
		setalert1(true);

		const formData = getFormData(values);
		console.log(formData);
		ShopBanner.editShopBanner(formData)
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
	};

	// const handleSubmit = async (e) => {
	// 	setalert1(true)
	// 	e.preventDefault();

	// 	const shopid = { shopId: parseInt(localStorage.getItem('shop-id')) };
	// 	console.log(shopid);

	// 	const formData = getFormData(shopid);
	// 	console.log(formData);

	// 	ShopBanner.addShopBanner(formData)
	// 		.then((response) => {
	// 			console.log(response.data);
	// 			setalert1(false)

	// 			setShow(true);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});

	// };

	if (!banner) {
		return 'loading...';
	}

	return (
		<Aux>
			{
				<Modal show={show} onHide={handleClose} centered="true" enforceFocus="true">
					<Modal.Header closeButton>
						<Modal.Title className="font-weight-bold text-dark">
							Shop Banner Edited Sucessfully!!
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>Click on show button to view Edited Banner</Modal.Body>
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
					</Modal.Footer>
				</Modal>
			}

			<Row>
				<Col>
					<Card>
						<Card.Header>
							<Card.Title as="h5">Add-Shop-Banner</Card.Title>
						</Card.Header>
						<Card.Body>
							<Formik initialValues={banner} validationSchema={validationSchema} onSubmit={handleSubmit}>
								{(formik) => {
									return (
										<form onSubmit={formik.handleSubmit}>
											<Row>
												<Col md={6}>
													<Form.Group controlId="type">
														<Form.Label>
															Type<i className="text-danger">*</i>
														</Form.Label>
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
															<div className="row text-danger mx-auto ">
																{formik.errors.type}
															</div>
														) : null}
													</Form.Group>
												</Col>
											</Row>

											<Row>
												<Col md="6">
													<Row>
														<Col md="12">
															<Form.Group>
																<Form.Label>Banner Image</Form.Label>
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
														<Col md={12}>
															<Form.Group controlId="image">
																<Form.Label>Previous Banner Image </Form.Label>
																<div>
																	<img src={banner.filename} />
																</div>
															</Form.Group>
														</Col>
													</Row>
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
													<Button
														variant="outline-success"
														className="btn-block"
														type="submit"
													>
														Save
													</Button>
												</Col>
												<Col md={6}>
													<Button variant="outline-danger" type="reset" className="btn-block">
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
};
export default EditShopBanner;
