const navRoutes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'EE System',
    path: '/ee-system',
    subRoutes: [
      {
        name: 'Pricing',
        path: '/pricing',
      },{
        name: "FAQ's",
        path: '/frequently-asked-questions',
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
  },{
    name: 'Book Now',
    path: '/appointments',
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