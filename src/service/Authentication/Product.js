import routes from '../Routes';
import axiosCall from '../../util/AxiosCall';

function addProduct(addProduct) {
	const url = `${routes.product.addProduct}`;

	console.log(url);
	const method = 'POST';
	const body = addProduct;
	return axiosCall(url, method, body);
}

function getProduct() {
	const url = `${routes.product.getProduct}`;
	const method = 'GET';
	return axiosCall(url, method, null);
}

function getProductById(id) {
	const url = `${routes.product.getProduct}/${id}`;
	const method = 'GET';
	return axiosCall(url, method, null);
}

function editProduct(editProduct) {
	const url = `${routes.product.editProduct}`;
	const method = 'PUT';
	const body = editProduct;
	return axiosCall(url, method, body);
}

function deleteProduct(pId) {
	const url = `${routes.product.deleteProduct}/${pId}`;
	const method = 'DELETE';
	const body = pId;
	return axiosCall(url, method, null);
}

export const Product = {
	addProduct,
	getProduct,
	editProduct,
	deleteProduct,
	getProductById,
	// updateProductStatus,
};
