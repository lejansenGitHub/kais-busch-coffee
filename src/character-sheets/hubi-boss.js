export default {
  id: 'hubi-boss',
  name: 'Hubi (Verzaubert)',
  level: 10,
  actions: 3,
  maxHp: 55,
  currentHp: 55,
  damage: { outer: 2, middle: 7, inner: 11 },
  skills: ['heavy_hands', 'war_cry', 'fine_sack'],
  story: {
    desc: 'Die Musik der Flöte hat die Barriere am Schelmenturm durchbrochen — doch sie hat auch Hubi erfasst. Seine Augen sind glasig, sein Blick leer. Die Melodie hallt in seinem Kopf wider und hat seinen Geist völlig übernommen. Er erkennt niemanden mehr — nicht Lord Patten, nicht seine Gefährten. Er steht vor dem Turm wie ein Wächter, der nur einem Befehl gehorcht: Niemand kommt vorbei.',
    onHit: '„Die Musik... sie hört nicht auf..."',
    onStrike: '„Ihr... sollt... nicht... durch!"',
    onDefeat: 'Die Melodie verblasst. Hubi sackt auf die Knie, fasst sich an den Kopf. „Was... was ist passiert? Warum tut mir alles weh?" Er blinzelt, erkennt Lord Patten — und sein Blick wird wieder klar.',
  },
  rewards: [{ item: 'pelt' }, { skill: 'heavy_hands' }],
};
