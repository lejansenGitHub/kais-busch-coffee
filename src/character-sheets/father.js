export default {
  id: 'father',
  name: 'Der Vater',
  level: 8,
  actions: 1,
  maxHp: 45,
  currentHp: 45,
  damage: { outer: 4, middle: 11, inner: 18 },
  skills: ['many_faces', 'thieves_gambit'],
  story: {
    desc: 'Der Vater wurde durch die Teleportation hierher geschleudert und ist gefährlich desorientiert — er wechselt zwischen seinen vielen Identitäten und weiß nicht mehr, wer er eigentlich ist. Wenn Lord Patten auf ihn zugeht, mustert er ihn misstrauisch: „Ich kenne dich nicht. Oder doch? Nein. Geh weiter, Fremder, bevor ich vergesse, höflich zu sein." Erst nach einem harten Kampf klart sein Geist auf: „Ah… Lord Patten. Ja, jetzt erinnere ich mich. Oder zumindest der Teil von mir, der sich erinnern will. Gehen wir — bevor ich es mir anders überlege."',
    onHit: '„Da musst du dir schon mehr einfallen lassen... wer auch immer du glaubst, dass ich bin."',
    onStrike: '„Eine Lektion von deinem alten Herrn."',
    onDefeat: '„Gut gemacht. Aber denk dran \u2014 du besiegst nie wirklich einen Mann, den du nicht benennen kannst."',
  },
  reward: { item: 'pelt' },
};
