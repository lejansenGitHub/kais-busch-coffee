export default {
  id: 'lukas',
  name: 'Lukas',
  level: 10,
  actions: 3,
  maxHp: 55,
  currentHp: 55,
  damage: { outer: 2, middle: 6, inner: 10 },
  skills: ['dark_deal', 'snipers_gambit'],
  story: {
    desc: 'Lukas wurde durch die Teleportation in diese Welt gerissen und ist gefährlich desorientiert — sein sonst so scharfer Verstand ist vernebelt und er vertraut niemandem. Wenn Lord Patten auf ihn zugeht, zischt Lukas: „Noch einen Schritt und wir haben ein Problem. Ich weiß nicht was hier läuft, aber du siehst nicht aus wie jemand, dem ich vertrauen sollte." Erst nach einem harten Duell lichtet sich der Nebel: „Lord Patten. Na klar. Hätte ich mir denken können — nur Ihr seid hartnäckig genug, mich zu schlagen. Gut, ich bin dabei. Aber das hier kostet Euch noch was."',
    onHit: '„Das ist nur Geschäft."',
    onStrike: '„Nichts Persönliches. Naja, vielleicht ein bisschen."',
    onDefeat: '„Du verhandelst hart. Das respektiere ich."',
  },
  reward: { skill: 'snipers_gambit' },
};
