export default {
  id: 'lennart',
  name: 'Lennart',
  level: 11,
  actions: 2,
  maxHp: 50,
  currentHp: 50,
  damage: { outer: 4, middle: 12, inner: 19 },
  skills: ['blind_fury', 'pushback'],
  story: {
    desc: 'Ein unerbittlicher Taktiker, der mit Gerissenheit statt roher Gewalt kämpft. Einst Späher in den nördlichen Marken, lernte er, dass der beste Wurf der ist, den der Gegner nie kommen sieht.',
    onHit: '„Das hast du gespürt, oder?"',
    onStrike: '„Berechnet."',
    onDefeat: '„Ich werde mich daran erinnern... und ich vergesse nicht."',
  },
  reward: { skill: 'pushback', code: '3167' },
};
