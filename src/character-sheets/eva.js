export default {
  id: 'eva',
  name: 'Eva',
  level: 9,
  actions: 2,
  maxHp: 48,
  currentHp: 48,
  damage: { outer: 2, middle: 5, inner: 9 },
  skills: ['double_attack_passive', 'war_cry', 'advance'],
  story: {
    desc: 'Eine schwangere Frau, die jahrelang Getränke für ihren Bruder und seine Freunde geschleppt hat. Nachdem ein tollkühner Held ihr einen Schwangerschaftstee brachte, entdeckte sie einen neuen Energieschub \u2014 und sie scheut sich nicht, ihn einzusetzen.',
    onHit: '„Ich trage für zwei \u2014 das heißt, ich schlage doppelt so hart zu."',
    onStrike: '„Der war vom Baby."',
    onDefeat: '„Gut. Aber nur, weil ich mich hinsetzen muss."',
  },
  reward: { skill: 'war_cry' },
};
