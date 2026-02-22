export default {
  id: 'hubi-boss',
  name: 'Hubi (Verzaubert)',
  level: 7,
  actions: 2,
  maxHp: 45,
  currentHp: 45,
  damage: { outer: 3, middle: 10, inner: 17 },
  skills: ['heavy_hands', 'war_cry', 'fine_sack'],
  story: {
    desc: 'Die Musik der Flöte hat die Barriere am Schelmenturm durchbrochen — doch sie hat auch Hubi erfasst. Seine Augen sind glasig, sein Blick leer. Die Melodie hallt in seinem Kopf wider und hat seinen Geist völlig übernommen. Er erkennt niemanden mehr — nicht Lord Patten, nicht seine Gefährten. Er steht vor dem Turm wie ein Wächter, der nur einem Befehl gehorcht: Niemand kommt vorbei.',
    onHit: '„Die Musik... sie hört nicht auf..."',
    onStrike: '„Ihr... sollt... nicht... durch!"',
    onDefeat: 'Die Melodie verblasst. Hubi sackt auf die Knie, fasst sich an den Kopf. „Was... was ist passiert? Warum tut mir alles weh?" Er blinzelt, erkennt Lord Patten — und sein Blick wird wieder klar.',
  },
  reward: { skill: 'heavy_hands' },
};
