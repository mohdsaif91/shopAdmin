export default {
	items: [
		// {
		//   id: "superadmin",
		//   title: "Super Admin",
		//   type: "group",
		//   icon: "icon-ui",
		//   children: [

		//     {
		//       id: "supadmin",
		//       title: "Dashboard",
		//       type: "item",
		//       icon: "feather icon-home",
		//       url: "/dashboard",
		//     },

		// {
		//   id: "supadmin",
		//   title: "Dashboard",
		//   type: "group",
		//   icon: "icon-navigation",
		//   children: [
		//     {
		//       id: "dashboard",
		//       title: "Dashboard",
		//       type: "item",
		//       url: "/dashboard",
		//       icon: "feather icon-home",
		//     },
		//   ],
		// },

		// {
		//   id: "shop",
		//   title: "Shop",
		//   type: "collapse",
		//   icon: "feather icon-box",
		//   children: [
		//     {
		//       id: "addShop",
		//       title: "Add Shop",
		//       type: "item",
		//       url: "/addShop",
		//     },
		//     {
		//       id: "shop-list",
		//       title: "Shop List",
		//       type: "item",
		//       url: "/Shop",
		//     },
		//   ],
		// },

		// {
		//   id: "orders",
		//   title: "Orders",
		//   type: "item",
		//   icon: "feather icon-server",
		//   url: "/orders",
		// },

		// {
		//   id: "delivery",
		//   title: "Delivery People",
		//   type: "collapse",
		//   icon: "feather icon-box",
		//   children: [
		//     {
		//       id: "delivery",
		//       title: "Add Delivery People",
		//       type: "item",
		//       url: "/delivery",
		//     },
		//     {
		//       id: "deliverypeople",
		//       title: "Delivery People List",
		//       type: "item",
		//       url: "/deliverypeople",
		//     },
		//   ],
		// },

		// {
		//   id: "zipcode",
		//   title: "Zip Code",
		//   type: "item",
		//   icon: "feather icon-server",
		//   url: "/zipcode",
		// },

		// {
		//   id: "users",
		//   title: "Users",
		//   type: "collapse",
		//   icon: "feather icon-box",
		//   children: [
		//     {
		//       id: "registeruser",
		//       title: "Register User",
		//       type: "item",
		//       url: "/registeruser",
		//     },
		//     // {
		//     //   id: "enquiryuser",
		//     //   title: "Enquiry User",
		//     //   type: "item",
		//     //   url: "/enquiryuser",
		//     // },

		//   ],
		// },

		// {
		//   id: "banner",
		//   title: "Banner",
		//   type: "item",
		//   icon: "feather icon-server",
		//   url: "/Banner",
		// },

		//   ],
		// },

		{
			id: 'restaurantAdmin',
			title: 'Shop-Admin',
			type: 'group',
			children: [
				{
					id: 'restdashboard',
					title: 'Shop-Dashboard',
					type: 'item',
					icon: 'feather icon-home',
					url: '/restdashboard',
				},

				{
					id: 'restshop',
					title: 'Shop-Details',
					type: 'collapse',
					icon: 'feather icon-layout',
					children: [
						{
							id: 'editshop',
							title: 'Edit Shop Details',
							type: 'item',
							url: '/editshop',
						},
					],
				},

				{
					id: 'product',
					title: 'Product',
					type: 'collapse',
					icon: 'feather icon-folder',
					children: [
						{
							id: 'add-product',
							title: 'Add-Product',
							type: 'item',
							url: '/addproduct',
						},
						{
							id: 'product-bucket',
							title: 'Add-Bulk-product',
							type: 'item',
							url: '/bulkproduct',
						},
						{
							id: 'productlist',
							title: 'Product-List',
							type: 'item',
							url: '/productlist',
						},
					],
				},

				{
					id: 'ShopBanner',
					title: 'Shop-Banner',
					type: 'collapse',
					icon: 'feather icon-credit-card',
					children: [
						{
							id: 'addshopbanner',
							title: 'Add Shop Banner',
							type: 'item',
							url: '/addshopbanner',
						},
						{
							id: 'ShopBannerList',
							title: 'Shop Banner List',
							type: 'item',
							url: '/shopBannerList',
						},
					],
				},
			],
		},
		// {
		//   id: "ui-element",
		//   title: "UI ELEMENT",
		//   type: "group",
		//   icon: "icon-ui",
		//   children: [
		//     {
		//       id: "basic",
		//       title: "Component",
		//       type: "collapse",
		//       icon: "feather icon-box",
		//       children: [
		//         {
		//           id: "button",
		//           title: "Button",
		//           type: "item",
		//           url: "/basic/button",
		//         },
		//         {
		//           id: "badges",
		//           title: "Badges",
		//           type: "item",
		//           url: "/basic/badges",
		//         },
		//         {
		//           id: "breadcrumb-pagination",
		//           title: "Breadcrumb & Pagination",
		//           type: "item",
		//           url: "/basic/breadcrumb-paging",
		//         },
		//         {
		//           id: "collapse",
		//           title: "Collapse",
		//           type: "item",
		//           url: "/basic/collapse",
		//         },
		//         {
		//           id: "tabs-pills",
		//           title: "Tabs & Pills",
		//           type: "item",
		//           url: "/basic/tabs-pills",
		//         },
		//         {
		//           id: "typography",
		//           title: "Typography",
		//           type: "item",
		//           url: "/basic/typography",
		//         },
		//       ],
		//     },
		//   ],
		// },
		// {
		//   id: "ui-forms",
		//   title: "Forms & Tables",
		//   type: "group",
		//   icon: "icon-group",
		//   children: [
		//     {
		//       id: "form-basic",
		//       title: "Form Elements",
		//       type: "item",
		//       url: "/forms/form-basic",
		//       icon: "feather icon-file-text",
		//     },
		//     {
		//       id: "bootstrap",
		//       title: "Table",
		//       type: "item",
		//       icon: "feather icon-server",
		//       url: "/tables/bootstrap",
		//     },
		//   ],
		// // },
		// {
		//   id: "chart-maps",
		//   title: "Chart & Maps",
		//   type: "group",
		//   icon: "icon-charts",
		//   children: [
		//     {
		//       id: "charts",
		//       title: "Charts",
		//       type: "item",
		//       icon: "feather icon-pie-chart",
		//       url: "/charts/nvd3",
		//     },
		//     {
		//       id: "maps",
		//       title: "Map",
		//       type: "item",
		//       icon: "feather icon-map",
		//       url: "/maps/google-map",
		//     },
		//   ],
		// },
		// {
		//   id: "pages",
		//   title: "Pages",
		//   type: "group",
		//   icon: "icon-pages",
		//   children: [
		//     {
		//       id: "auth",
		//       title: "Authentication",
		//       type: "collapse",
		//       icon: "feather icon-lock",
		//       badge: {
		//         title: "New",
		//         type: "label-danger",
		//       },
		//       children: [
		//         {
		//           id: "signup-1",
		//           title: "Sign up",
		//           type: "item",
		//           url: "/auth/Shop-login",
		//           target: true,
		//           breadcrumbs: false,
		//         },
		//         {
		//           id: "signin-1",
		//           title: "Sign in",
		//           type: "item",
		//           url: "/auth/signin-1",
		//           target: true,
		//           breadcrumbs: false,
		//         },
		//       ],
		//     },

		//     {
		//       id: "sample-page",
		//       title: "Sample Page",
		//       type: "item",
		//       url: "/sample-page",
		//       classes: "nav-item",
		//       icon: "feather icon-sidebar",
		//     },
		//     {
		//       id: "docs",
		//       title: "Documentation",
		//       type: "item",
		//       url: "/docs",
		//       classes: "nav-item",
		//       icon: "feather icon-help-circle",
		//     },
		//     {
		//       id: "menu-level",
		//       title: "Menu Levels",
		//       type: "collapse",
		//       icon: "feather icon-menu",
		//       children: [
		//         {
		//           id: "menu-level-1.1",
		//           title: "Menu Level 1.1",
		//           type: "item",
		//           url: "#!",
		//         },
		//         {
		//           id: "menu-level-1.2",
		//           title: "Menu Level 2.2",
		//           type: "collapse",
		//           children: [
		//             {
		//               id: "menu-level-2.1",
		//               title: "Menu Level 2.1",
		//               type: "item",
		//               url: "#",
		//             },
		//             {
		//               id: "menu-level-2.2",
		//               title: "Menu Level 2.2",
		//               type: "collapse",
		//               children: [
		//                 {
		//                   id: "menu-level-3.1",
		//                   title: "Menu Level 3.1",
		//                   type: "item",
		//                   url: "#",
		//                 },
		//                 {
		//                   id: "menu-level-3.2",
		//                   title: "Menu Level 3.2",
		//                   type: "item",
		//                   url: "#",
		//                 },
		//               ],
		//             },
		//           ],
		//         },
		//       ],
		//     },
		//     {
		//       id: "disabled-menu",
		//       title: "Disabled Menu",
		//       type: "item",
		//       url: "#",
		//       classes: "nav-item disabled",
		//       icon: "feather icon-power",
		//     },
		//     /*{
		//                 id: 'buy-now',
		//                 title: 'Buy Now',
		//                 type: 'item',
		//                 icon: 'feather icon-user',
		//                 classes: 'nav-item',
		//                 url: 'https://codedthemes.com',
		//                 target: true,
		//                 external: true,
		//                 badge: {
		//                     title: 'v1.0',
		//                     type: 'label-primary'
		//                 }
		//             }*/
		//   ],
		// },
	],
};
