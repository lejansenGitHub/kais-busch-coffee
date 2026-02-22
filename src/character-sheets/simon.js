export default {
  id: 'simon',
  name: 'Simon',
  level: 1,
  actions: 1,
  maxHp: 20,
  currentHp: 20,
  damage: { outer: 1, middle: 3, inner: 5 },
  skills: ['blind_fury', 'advance'],
  story: {
    desc: 'Ein ruhiger, aber tödlicher Scharfschütze aus den östlichen Dünen. Simon trifft selten, aber mit verheerender Präzision. Geduld ist seine größte Waffe.',
    onHit: '„Ist das alles, was du draufhast?"',
    onStrike: '„Ein Schuss. Ein Treffer."',
    onDefeat: '„Der Sand wird uns alle irgendwann begraben."',
  },
  reward: { skill: 'blind_fury' },
};
