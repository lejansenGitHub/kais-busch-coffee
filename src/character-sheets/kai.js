export default {
  id: 'kai',
  name: 'Kai',
  level: 6,
  actions: 1,
  maxHp: 34,
  currentHp: 34,
  damage: { outer: 3, middle: 8, inner: 13 },
  skills: ['respect_the_cards', 'trick_shot'],
  story: {
    desc: 'Ein Showman durch und durch. Kai trägt sein Magic-Deck wie andere ein Schwert \u2014 immer griffbereit, immer bereit zu beeindrucken. Er kennt den Wert jeder Karte und erwartet, dass du das auch tust.',
    onHit: '\u201EHey, Vorsicht! Da liegen Karten!\u201C',
    onStrike: '\u201EDas war ein Trick Shot. Hat er gesessen?\u201C',
    onDefeat: '\u201EGutes Spiel. Aber im Kartenspielen gewinnst du nie.\u201C',
  },
};
