export default {
  id: 'hubi',
  name: 'Hubi',
  level: 1,
  actions: 1,
  maxHp: 15,
  currentHp: 15,
  damage: { outer: 1, middle: 2, inner: 4 },
  skills: ['advance'],
  story: {
    desc: 'Hubi ist der Erste, den Lord Patten in dieser fremden Welt antrifft. Er sitzt verwirrt auf einer Bank, dreht eine seltsame Flöte in den Händen und murmelt vor sich hin. Als Lord Patten sich nähert, springt er auf: „Halt! Wer bist du? Komm mir nicht zu nahe!" Ein kurzer Kampf — eher ein Handgemenge — und Hubis Kopf wird wieder klar. „Lord Patten? Oh Mann, ich dachte du wärst ein Räuber! Komm, ich geh mit dir — aber Vorsicht, hier stimmt was nicht."',
    onHit: '„Hey, nicht so fest!"',
    onStrike: '„Nimm das!"',
    onDefeat: 'Hubi schüttelt den Kopf, als würde er aus einem Traum erwachen. Dabei fällt ihm die Flöte aus der Tasche und klirrt auf das Kopfsteinpflaster. „Die hatte ich die ganze Zeit bei mir... keine Ahnung woher."',
  },
  reward: { skill: 'advance' },
};
