export default {
  id: 'daniel',
  name: 'Daniel',
  level: 6,
  actions: 1,
  maxHp: 38,
  currentHp: 38,
  damage: { outer: 3, middle: 9, inner: 15 },
  skills: ['fortress', 'last_stand'],
  story: {
    desc: 'Daniel wurde durch die Teleportation hierher gerissen und ist völlig verwirrt — er erkennt Lord Patten nicht und hält ihn für einen Feind. Wenn Lord Patten ihn anspricht, knurrt Daniel: „Wer bist du? Bleib mir vom Leib! Ich weiß nicht wo ich bin, aber ich weiche keinen Schritt zurück!" Erst nach einer ordentlichen Tracht Prügel kommt er zur Besinnung: „Mylord…? Mylord! Vergebt mir — ich wusste nicht, was ich tat. Mein Schwert gehört wieder Euch, wie eh und je."',
    onHit: '„Ich stehe für meinen Lord."',
    onStrike: '„Für Lord Patten!"',
    onDefeat: '„Mein Lord\u2026 Ich habe versagt. Vorerst."',
  },
  reward: { skill: 'last_stand' },
};
