export default {
  id: 'eva',
  name: 'Eva',
  level: 3,
  actions: 1,
  maxHp: 22,
  currentHp: 22,
  damage: { outer: 1, middle: 2, inner: 4 },
  skills: ['double_attack_passive', 'war_cry'],
  story: {
    desc: 'Eine schwangere Frau, die jahrelang Getränke für ihren Bruder und seine Freunde geschleppt hat. Nachdem ein tollkühner Held ihr einen Schwangerschaftstee brachte, entdeckte sie einen neuen Energieschub \u2014 und sie scheut sich nicht, ihn einzusetzen.',
    onHit: '„Ich trage für zwei \u2014 das heißt, ich schlage doppelt so hart zu."',
    onStrike: '„Der war vom Baby."',
    onDefeat: '„Gut. Aber nur, weil ich mich hinsetzen muss."',
  },
  reward: { skill: 'war_cry' },
};
