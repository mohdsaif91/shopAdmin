import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Card, Form, Table, Button, Modal } from 'react-bootstrap';
import Aux from '../../hoc/_Aux';
import { Product } from '../../service';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';
import Spinnerc from './Spinnerc';
import { useParams } from 'react-router-dom';

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
	name: Yup.string().required('Required'),
	type: Yup.string().required('Required'),
	status: Yup.string().required('Required'),
	originalPrice: Yup.number()
		.typeError("That doesn't look like a phone number")
		.positive(" number can't start with a minus")
		// .integer(" number can't include a decimal point")
		// .min(8)
		.required(' Required'),
	commissionPrice: Yup.number()
		.typeError("That doesn't look like a phone number")
		.positive(" number can't start with a minus")
		// .integer(" number can't include a decimal point")
		// .min(8)
		.required(' Required'),
	discount: Yup.number()
		.typeError("That doesn't look like a phone number")
		.positive(" number can't start with a minus")
		// .integer(" number can't include a decimal point")
		// .min(8)
		.required(' Required'),
});

export default function EditProduct(props) {
	const [shop, setShop] = useState();
	const [show, setShow] = useState(false);
	const [alert, setalert] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [check, setcheck] = useState(true);
	const [product, setProduct] = useState();
	let { id } = useParams();
	console.log(id);

	useEffect(() => {
		Product.getProductById(id).then((res) => {
			const resData = res.data;
			setProduct(resData);
		});
	}, []);
	console.log(product);

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
			if (key !== 'recommended') {
				console.log(key, data[key]);
				formData.append(key, data[key]);
			}
		});

		if (files.length > 0) {
			formData.append('media', acceptedFiles[0]);
		} else if (files.length === 0) {
			formData.append('media', data.media);
		}
		formData.append('recommended', check);

		return formData;
	};

	const handleSubmit = async (values) => {
		setalert(true);
		const formData = getFormData(values);

		Product.editProduct(formData)
			.then((response) => {
				console.log(response.data);
				setalert(false);
				setShow(true);
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	};

	if (!product) {
		return 'loading...';
	}

	return (
		<Aux>
			<Row>
				<Modal show={show} onHide={handleClose} centered="true">
					<Modal.Header closeButton>
						<Modal.Title className="font-weight-bold text-dark">Product Edited Sucessfully!!</Modal.Title>
					</Modal.Header>
					<Modal.Body>Click on show button to view newly added product</Modal.Body>
					<Modal.Footer>
						<Button
							variant="primary"
							onClick={() => {
								props.history.push({
									pathname: '/productlist',
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
				<Col>
					<Card>
						<Card.Header>
							<Card.Title as="h5">Add-Single-Product</Card.Title>
						</Card.Header>

						<Card.Body>
							<Formik initialValues={product} validationSchema={validationSchema} onSubmit={handleSubmit}>
								{(formik) => {
									return (
										<form onSubmit={formik.handleSubmit}>
											<Row>
												<Col md={6}>
													<Form.Group controlId="productname">
														<Form.Label>
															Product Name<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="name"
															placeholder="Enter Product Name"
															onChange={formik.handleChange}
															value={formik.values.name}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.name && formik.touched.name ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.name}
															</div>
														) : null}
													</Form.Group>
												</Col>
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
															<option value=""> Select Product Type</option>
															<option value="veg">Veg</option>
															<option value="non-veg">Non-Veg</option>
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
												<Col md={3}>
													<Form.Group controlId="orignalprice">
														<Form.Label>
															Orignal Price<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="originalPrice"
															placeholder="Enter Orignal Price"
															onChange={formik.handleChange}
															value={formik.values.originalPrice}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.originalPrice && formik.touched.originalPrice ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.originalPrice}
															</div>
														) : null}
													</Form.Group>
												</Col>

												{/* <Col md={3}>
													<Form.Group controlId="sellingprice">
														<Form.Label>
															Selling Price<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="sellingPrice"
															placeholder="Enter Selling Price"
															onChange={formik.handleChange}
															value={formik.values.sellingPrice}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.sellingPrice && formik.touched.sellingPrice ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.sellingPrice}
															</div>
														) : null}
													</Form.Group>
												</Col> */}
												<Col md={3}>
													<Form.Group controlId="commisiongprice">
														<Form.Label>
															Commision Price<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="commissionPrice"
															placeholder="Enter commision Price"
															onChange={formik.handleChange}
															value={formik.values.commissionPrice}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.commissionPrice &&
														formik.touched.commissionPrice ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.commissionPrice}
															</div>
														) : null}
													</Form.Group>
												</Col>
												<Col md={3}>
													<Form.Group controlId="discount">
														<Form.Label>
															Discount<i className="text-danger">*</i>
														</Form.Label>
														<Form.Control
															type="text"
															name="discount"
															placeholder="Enter Discount Value"
															onChange={formik.handleChange}
															value={formik.values.discount}
															onBlur={formik.handleBlur}
														/>
														{formik.errors.discount && formik.touched.discount ? (
															<div className="row text-danger mx-auto ">
																{formik.errors.discount}
															</div>
														) : null}
													</Form.Group>
												</Col>

												<Col md={3}>
													<Form.Group controlId="recommended">
														<Form.Check
															type="checkbox"
															label="isRecommended"
															name="recommended"
															checked={check}
															onChange={() => {
																setcheck(!check);
															}}
														/>
													</Form.Group>
												</Col>
											</Row>
											{/* <Row>

     <Col md={12}>
                          <Form.Group controlId="description">
                      <Form.Label>Description<i className="text-danger">*</i></Form.Label>
                      <Form.Control
                       
                        as="textarea" rows="2"

                        name="description"
                        placeholder="Enter Description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        onBlur={formik.handleBlur}
                      />
                        {formik.errors.description && formik.touched.description ? (
              <div className="row text-danger mx-auto ">{formik.errors.description}</div>
            ) : null}
                    </Form.Group>

                </Col>
    </Row> */}

											<Row>
												<Col md="5">
													<Form.Group>
														<Form.Label>Product Image</Form.Label>
														<div className="container">
															<div {...getRootProps({ style })}>
																<input
																	{...getInputProps()}
																	type="file"
																	multiple
																	name="image[]"
																/>
																<p>
																	Drag 'n' drop some files here, or click to select
																	files
																</p>
																<p className="text-danger">
																	##Image dimension (width*height) <b>90*90</b>##
																</p>
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

												<Col md={5}>
													<Form.Group controlId="image">
														<Form.Label>Product Image </Form.Label>
														<div>
															<img src={product.media} />
														</div>
													</Form.Group>
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
}
