export default {
  id: 'nick',
  name: 'Nick',
  level: 9,
  actions: 1,
  maxHp: 25,
  currentHp: 25,
  damage: { outer: 4, middle: 12, inner: 20 },
  skills: ['backstab', 'evasion'],
  story: {
    desc: 'Nick wurde durch die Teleportation in diese Welt gerissen und ist völlig verwirrt — sein Instinkt schreit Gefahr und er versteckt sich in den Schatten. Wenn Lord Patten sich nähert, zischt Nick aus dem Dunkel: „Keinen Schritt weiter! Ich weiß nicht wer du bist, aber ich hab dich schon dreimal umkreist, bevor du mich bemerkt hast." Erst nach einem Duell kommt er wieder zu Sinnen: „Mylord? Verdammt — Ihr hättet gleich sagen können, dass Ihr es seid. Naja, wenigstens weiß ich jetzt, dass Ihr noch draufhabt. Ich bin wieder Euer Schatten."',
    onHit: '„Du hast mich nicht mal kommen sehen."',
    onStrike: '„Zu langsam, Bruder."',
    onDefeat: '„Du gewinnst diese Runde. Ich bin zurück, bevor du es merkst."',
  },
  rewards: [{ item: 'arm_protectors' }, { skill: 'off_balance' }],
};
