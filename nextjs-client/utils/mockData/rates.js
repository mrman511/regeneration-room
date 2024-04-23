const dayRates = {
  title: 'Day Rates',
  image_path: 'dayRates.jpeg',
  rates: [
    {
      title: '2 Hour Session',
      rate: 150,
    },
    {
      title: '4 Hour Package',
      rate: 300,
    },
    {
      title: '6 Hour Package',
      rate: 450,
    },
    {
      title: '10 Hour Package',
      rate: 700,
    },
    {
      title: '20 Hour Package',
      rate: 1100,
    },
  ]
}

const groupRates = {
  title: 'Group Rates',
  image_path: 'groupRates.jpeg',
  rates: [
    {
      title: 'Group of 4',
      rate: 130,
      savings: 20,
    },
    {
      title: 'Group of 6',
      rate: 115,
      savings: 35,
    },
    {
      title: 'Group of 8 or more',
      rate: 100,
      savings: 50,
    },
  ],
  note: 'Prices are per person, per 2 hour session.',
}

const childrenRates = {
  title: `Children's Rates`,
  image_path: 'childRates.jpeg',
  sub_title: 'We Encourage you to bring your children with you.',
  rates: [
    {
      title: '0 - 5 years',
      rate: 0,
      rate_text: 'Free with an adult',
    },
    {
      title: '6 - 9 years',
      rate: 15,
    },
    {
      title: '10 - 13 years',
      rate: 25,
    },
    {
      title: '14 - 17 years',
      rate: 40,
    },
  ],
  note: 'Prices are per child per hour.'
};

const petRates = {
  title: 'Pet Rates',
  sub_title: 'Pets are welcome every other Saturday',
  image_path: 'petRates.jpeg',
  rates: [
    {
      title: 'Per hour',
      rate: 25,
    }
  ]
};

const overNightRates = {
  title: 'Overnight Visits',
  image_path: 'overnightRates.jpeg',
  rates:[
    {
      title: 'Private',
      rate: 650,
      rate_text: '$650 One person only'
    },
    {
      title: 'Group',
      rate_text: '$450 1st guest, $250 each subsequent adult to a maximum of 10. Groups of 2 or more.',
    },
    {
      title: 'Children',
      rate_text: '17 & Under ($150) - with one paying adjult ($150)',
    },
  ]
}

const rateGroups = [ dayRates, groupRates, childrenRates, petRates, overNightRates]

module.exports = {
  rateGroups,
}