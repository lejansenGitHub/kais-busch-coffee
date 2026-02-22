export default {
  id: 'katta',
  name: 'Katta',
  level: 12,
  actions: 3,
  maxHp: 58,
  currentHp: 58,
  damage: { outer: 2, middle: 5, inner: 8 },
  skills: ['sugar_rush', 'high_standards'],
  story: {
    desc: 'Eine Meisterin des Genusses mit unfehlbarem Gaumen. Katta kämpft wie sie kocht \u2014 elegant, präzise und mit einer Prise Arroganz. Sie akzeptiert nur Perfektion.',
    onHit: '\u201ENicht schlecht. Aber da fehlt die Würze.\u201C',
    onStrike: '\u201EPerfekt abgeschmeckt.\u201C',
    onDefeat: '\u201EGut. Du hast Geschmack. Das muss ich anerkennen.\u201C',
  },
};
