const opacities = [
  {
    post: '1/3',
    str: '54'
  },{
    post: '2/3',
    str: 'a8',
  }
];

const baseThemeColours = {
  'almost-black': '#0a0724',
  'extra-dark': '#100c3a',
  'primary-dark': '#1B1464',
  'primary-light': '#11A5E1',
  'secondary-action': '#F5D06F',
  'secondary-trim': '#BA7802',
  'success': '#3DE111',
  'error': '#E14D11',
};

const themeColours = {};

for (let key in baseThemeColours){
  const base = baseThemeColours[key];
  themeColours[key] = base;
  for (let opacity of opacities){
    themeColours[`${key}-${opacity.post}`] = `${base}${opacity.str}`
  }
}

export default themeColours;