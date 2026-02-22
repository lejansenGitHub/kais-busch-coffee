export default {
  id: 'mirko',
  name: 'Mirko',
  level: 7,
  actions: 2,
  maxHp: 40,
  currentHp: 40,
  damage: { outer: 2, middle: 5, inner: 9 },
  skills: ['fortress', 'iron_ward'],
  story: {
    desc: 'Mirko wurde durch die Teleportation hierher geschleudert und ist völlig durcheinander — der jüngste der Brüder klammert sich panisch an seinen Geldbeutel und traut keiner Menschenseele. Wenn Lord Patten ihn anspricht, faucht Mirko: „Finger weg von meinem Gold! Keine Ahnung was hier passiert ist, aber du kriegst keinen Heller von mir!" Erst nach einem ordentlichen Kampf wird sein Kopf wieder klar: „Lord Patten? Oh nein — hab ich etwa auf meinen eigenen Lord eingedroschen? Das ist… peinlich. Verbuchen wir das als Betriebsunfall. Ich bin wieder an Eurer Seite."',
    onHit: '„Das kommt auf deine Rechnung."',
    onStrike: '„Betrachte das als Investition."',
    onDefeat: '„Gut. Aber du schuldest mir noch Zinsen."',
  },
  rewards: [{ skill: 'fortress' }, { quest_item: 'Goldbeutel' }],
};
