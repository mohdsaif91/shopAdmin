import routes from '../Routes';
import axiosCall from '../../util/AxiosCall';

function addShopBanner(addShopBanner) {
	const url = `${routes.shopbanner.addShopBanner}`;
	console.log(url);
	const method = 'POST';
	const body = addShopBanner;
	return axiosCall(url, method, body);
}
function editShopBanner(editShopBanner) {
	const url = `${routes.shopbanner.editShopBanner}`;
	const method = 'PUT';
	const body = editShopBanner;
	return axiosCall(url, method, body);
}

function getShopBanner() {
	const shopid = parseInt(localStorage.getItem('shop-id'));
	const url = `${routes.shopbanner.getShopBanner}/shop/${shopid}`;
	const method = 'GET';
	return axiosCall(url, method, null);
}

function getShopBannerById(bid) {
	const url = `${routes.shopbanner.getShopBanner}/${bid}`;
	const method = 'GET';
	return axiosCall(url, method, null);
}

function deleteShopBanner(sbId) {
	const url = `${routes.shopbanner.deleteShopBanner}/${sbId}`;
	const method = 'DELETE';

	return axiosCall(url, method, null);
}

export const ShopBanner = {
	addShopBanner,
	getShopBanner,
	getShopBannerById,
	deleteShopBanner,
	editShopBanner,
};
