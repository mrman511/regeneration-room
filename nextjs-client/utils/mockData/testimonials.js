class Testimonial {
  constructor (id, name, stars, text, date){
    this.id=id
    this.name=name;
    this.stars=stars;
    this.text=text;
    this.date=date;
  }
}

const testimonials = []

for (let i=0; i<8; i++){
  testimonials.push(new Testimonial(
    i,
    'Heidy Miner',
    4.5,
    'My teenage daughter has struggled for many years with stuffy nose and allergies. She blows her nose continually. We went for a full night session at Regeneration Station. The next day, she blew her nose only once during the whole day! She mentioned feeling happier and in better mood. We are planning to do more sessions hopefully it will completely help my daughter to heal her sinuses and allergy issues. We are feeling very thankful and hopeful. I am glad that this place exists!',
    Date.parse('April 22, 2024')
  ));
}

export default testimonials;