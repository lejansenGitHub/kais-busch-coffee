export default {
  id: 'jess',
  name: 'Jess',
  level: 4,
  actions: 1,
  maxHp: 28,
  currentHp: 28,
  damage: { outer: 1, middle: 2, inner: 5 },
  skills: ['double_attack_passive', 'advance'],
  story: {
    desc: 'Jess wurde durch die Teleportation in diese Welt gerissen und ist völlig aufgedreht — die Verwirrung hat ihren Kampfinstinkt auf Hochtouren gebracht. Wenn Lord Patten sich nähert, geht sie sofort in Kampfstellung: „Ha! Endlich jemand, an dem ich mich abreagieren kann! Keine Ahnung wo ich bin, aber du siehst aus wie eine gute Aufwärmrunde!" Erst nach einem sportlichen Duell legt sich der Nebel: „Oh! Lord Patten! Das war… ein ziemlich guter Kampf, oder? Sorry fürs Draufhauen. Aber hey, jetzt bin ich aufgewärmt — lass uns die anderen finden!"',
    onHit: '„So sieht Training aus."',
    onStrike: '„Nicht schnell genug, Bruder."',
    onDefeat: '„Gutes Match. Beim Rückkampf krieg ich dich."',
  },
  reward: { skill: 'double_attack' },
};
