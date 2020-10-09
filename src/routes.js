import React from 'react';
import $ from 'jquery';
import EditProduct from './Demo/Restaurant/EditProduct';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

// const Banner = React.lazy(() =>
//   import("./Demo/Shop/Banner")
// );
// const Delivery = React.lazy(() =>
//   import("./Demo/Shop/Delivery")
// );
// const DeliveryList = React.lazy(() =>
//   import("./Demo/Shop/DeliveryList")
// );
// const ZipCode = React.lazy(() =>
//   import("./Demo/Restaurant/Zipcode")
// );

const Restadmin = React.lazy(() => import('./Demo/Restaurant/RestaurantAdmin'));
const EditShop = React.lazy(() => import('./Demo/Restaurant/EditShop'));
// const Category = React.lazy(() =>
//   import("./Demo/Restaurant/Category")
// );
// const SubCategory = React.lazy(() =>
//   import("./Demo/Restaurant/SubCategory")
// );

const AddProduct = React.lazy(() => import('./Demo/Restaurant/AddProduct'));
const ProductBucket = React.lazy(() => import('./Demo/Restaurant/ProductBucket'));
const ProductList = React.lazy(() => import('./Demo/Restaurant/ProductList'));
// const Orders=React.lazy(() =>
// import("./Demo/Shop/Orders")
// );

// const RegisterUser=React.lazy(() =>
// import("./Demo/Shop/RegisterUser")
// );

const shopBannerList = React.lazy(() => import('./Demo/Restaurant/ShopBannerList'));

const addShopBannerList = React.lazy(() => import('./Demo/Restaurant/AddShopBanner'));
// const addShop = React.lazy(() => import("./Demo/shop/AddShop"));
// const addShop = React.lazy(() => import("./Demo/Shop/AddShop"));

const editProduct = React.lazy(() => import('./Demo/Restaurant/EditProduct'));
const editBanner = React.lazy(() => import('./Demo/Restaurant/EditBanner'));

const routes = [
	{
		path: '/dashboard/default',
		exact: true,
		name: 'Default',
		component: DashboardDefault,
	},
	{
		path: '/basic/button',
		exact: true,
		name: 'Basic Button',
		component: UIBasicButton,
	},
	{
		path: '/basic/badges',
		exact: true,
		name: 'Basic Badges',
		component: UIBasicBadges,
	},
	{
		path: '/basic/breadcrumb-paging',
		exact: true,
		name: 'Basic Breadcrumb Pagination',
		component: UIBasicBreadcrumbPagination,
	},
	{
		path: '/basic/collapse',
		exact: true,
		name: 'Basic Collapse',
		component: UIBasicCollapse,
	},
	{
		path: '/basic/tabs-pills',
		exact: true,
		name: 'Basic Tabs & Pills',
		component: UIBasicTabsPills,
	},
	{
		path: '/basic/typography',
		exact: true,
		name: 'Basic Typography',
		component: UIBasicBasicTypography,
	},
	{
		path: '/forms/form-basic',
		exact: true,
		name: 'Forms Elements',
		component: FormsElements,
	},
	{
		path: '/tables/bootstrap',
		exact: true,
		name: 'Bootstrap Table',
		component: BootstrapTable,
	},
	{
		path: '/charts/nvd3',
		exact: true,
		name: 'Nvd3 Chart',
		component: Nvd3Chart,
	},
	{
		path: '/maps/google-map',
		exact: true,
		name: 'Google Map',
		component: GoogleMap,
	},
	{
		path: '/sample-page',
		exact: true,
		name: 'Sample Page',
		component: OtherSamplePage,
	},
	{ path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },

	// {
	//   path: "/banner",
	//   exact: true,
	//   name: "Banner",
	//   component:Banner,
	// },

	// {
	//   path: "/delivery",
	//   exact: true,
	//   name: "Delivery",
	//   component:Delivery,
	// },
	// {
	//   path: "/deliverypeople",
	//   exact: true,
	//   name: "DeliveryList",
	//   component:DeliveryList,
	// },
	// {
	//   path: "/zipcode",
	//   exact: true,
	//   name: "ZipCode",
	//   component:ZipCode,
	// },
	{
		path: '/restdashboard',
		exact: true,
		name: 'RestAdmin',
		component: Restadmin,
	},
	{
		path: '/editshop',
		exact: true,
		name: 'EditShop',
		component: EditShop,
	},
	// {
	//   path: "/category",
	//   exact: true,
	//   name: "Category",
	//   component:Category,
	// },
	// {
	//   path: "/subcategory",
	//   exact: true,
	//   name: "SubCategory",
	//   component:SubCategory,
	// },
	{
		path: '/addproduct',
		exact: true,
		name: 'addProduct',
		component: AddProduct,
	},
	{
		path: '/bulkproduct',
		exact: true,
		name: 'ProductBucket',
		component: ProductBucket,
	},
	{
		path: '/productlist',
		exact: true,
		name: 'ProductList',
		component: ProductList,
	},
	// {
	//   path: "/orders",
	//   exact: true,
	//   name: "Orders",
	//   component:Orders,
	// },
	// {
	//   path: "/registeruser",
	//   exact: true,
	//   name: "RegisterUser",
	//   component:RegisterUser,
	// },
	{
		path: '/ShopBannerList',
		exact: true,
		name: 'Shop-Banner',
		component: shopBannerList,
	},
	{
		path: '/addshopbanner',
		exact: true,
		name: 'Add-Shop-Banner',
		component: addShopBannerList,
	},
	{ path: '/EditProduct/:id', name: 'Edit Product', component: editProduct },

	{ path: '/EditBanner/:id', name: 'Edit Banner', component: editBanner },

	// { path: "/Shop", exact: true, name: "Shop", component: Shop },
];

export default routes;
