const navRoutes = [
  {
    name: 'Book Now',
    path: '/appointments',
  },{
    name: 'Home',
    path: '/',
  },{
    name: 'EE System',
    path: '/EESystem',
    subRoutes: [
      {
        name: 'Pricing',
        path: '/Pricing',
      },{
        name: "FAQ's",
        path: '/FAQ',
      },{
        name: 'Learn More',
        path: '/learn-more',
      },
    ]
  },{
    name: 'Events & Promotions',
    path: '/events-and-promotions',
  },{
    name: 'Services & Products',
    path: 'services-and-products',
  },{
    name: 'Contact Us',
    path: '/contact',
  },
]

const accountRoute= {
  name: 'My Account',
  path: '',
}

module.exports = {
  accountRoute: accountRoute,
  navRoutes: navRoutes
}