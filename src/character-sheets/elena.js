export default {
  id: 'elena',
  name: 'Elena',
  level: 5,
  actions: 1,
  maxHp: 35,
  currentHp: 35,
  damage: { outer: 3, middle: 8, inner: 14 },
  skills: ['revision', 'silver_tongue'],
  story: {
    desc: 'Eine Sprach- und Kunstgelehrte, die Kinder unterrichtet. Sie kennt Sascha seit er klein war \u2014 und behandelt ihn immer noch so. Bewaffnet mit Kreide und scharfem Verstand schreibt sie die Regeln nach Belieben um.',
    onHit: '„Interessante Technik. Dafür gibt\u2019s eine Vier minus."',
    onStrike: '„Ich hab dir Besseres beigebracht, Sascha."',
    onDefeat: '„Gut gespielt. Das werte ich als Zusatzleistung."',
  },
  reward: { skill: 'silver_tongue' },
};
