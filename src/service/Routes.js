const baseUrlV1 = 'https://flashitapi.herokuapp.com/v1';

const loginurl = `${baseUrlV1}/login`;
const resturant = `${baseUrlV1}/Resturant`;

const routes = {
	login: {
		adminLogin: `${baseUrlV1}/auth`,

		tokenIsValid: `${loginurl}/tokenIsValid`,
		getUser: `${baseUrlV1}login`,
	},
	// resturant: {
	// 	addResturant: `${baseUrlV1}/shops`,
	// 	getResturant: `${baseUrlV1}/shops`,
	// },

	shopbanner: {
		addShopBanner: `${baseUrlV1}/shop-banner`,
		getShopBanner: `${baseUrlV1}/shop-banner`,
		editShopBanner: `${baseUrlV1}/shop-banner`,
		deleteShopBanner: `${baseUrlV1}/shop-banner`,
	},

	product: {
		addProduct: `${baseUrlV1}/products`,
		getProduct: `${baseUrlV1}/products`,
		editProduct: `${baseUrlV1}/products`,
		deleteProduct: `${baseUrlV1}/products`,
	},

	shop: {
		addShop: `${baseUrlV1}/shops`,
		editShop: `${baseUrlV1}/shops`,
		getShop: `${baseUrlV1}/shops`,
	},
};
export default routes;
