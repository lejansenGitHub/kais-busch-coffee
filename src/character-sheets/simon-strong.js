export default {
  id: 'simon-strong',
  name: 'Simon (Erwacht)',
  level: 14,
  actions: 3,
  maxHp: 70,
  currentHp: 70,
  damage: { outer: 2, middle: 5, inner: 9 },
  skills: ['blind_fury', 'advance', 'snipers_gambit', 'pushback'],
  story: {
    desc: 'Simon ist zurückgekehrt \u2014 stärker, schärfer, entschlossener. Die Wüste hat ihn geformt, die Kämpfe haben ihn gehärtet. Seine Augen brennen mit einer neuen Intensität. „Runde zwei, Mylord. Diesmal wird es nicht so einfach."',
    onHit: '\u201EIhr habt mich unterschätzt. Das passiert nicht nochmal.\u201C',
    onStrike: '\u201EEin Schuss. Ein Treffer. Wie immer.\u201C',
    onDefeat: '\u201EGut gekämpft. Ihr seid würdig.\u201C',
  },
};
