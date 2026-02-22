export default {
  id: 'kai-weak',
  name: 'Kai',
  level: 2,
  actions: 1,
  maxHp: 20,
  currentHp: 20,
  damage: { outer: 1, middle: 3, inner: 5 },
  skills: ['trick_shot'],
  story: {
    desc: 'Ein Showman durch und durch. Kai trägt sein Magic-Deck wie andere ein Schwert \u2014 immer griffbereit, immer bereit zu beeindrucken. Er kennt den Wert jeder Karte und erwartet, dass du das auch tust.',
    onHit: '\u201EHey, Vorsicht! Da liegen Karten!\u201C',
    onStrike: '\u201EDas war ein Trick Shot. Hat er gesessen?\u201C',
    onDefeat: '\u201EGutes Spiel. Aber im Kartenspielen gewinnst du nie.\u201C',
  },
};
