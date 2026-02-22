export default {
  id: 'hubi-endboss',
  name: 'Hubi (Stimme der Vernunft)',
  level: 15,
  actions: 3,
  maxHp: 80,
  currentHp: 80,
  damage: { outer: 3, middle: 9, inner: 14 },
  skills: ['blind_fury', 'war_cry', 'titans_grip'],
  story: {
    desc: 'Das Portal nach Hause schimmert am Ende der Altstadt. Hubi steht davor — Arme verschränkt, Blick entschlossen. „Nein. Wir gehen JETZT durch. Sofort. Keine Taverne, kein Umweg, kein Bier." Er kennt Lord Pattens Verlobte, und er weiß: Wenn es um die Hochzeit geht, ist mit ihr nicht zu spaßen. Jede Minute, die sie länger in dieser Welt verbringen, ist eine Minute näher am Untergang. „Mylord, ich sage das als Freund — Eure Verlobte wird uns ALLE umbringen, wenn wir zu spät kommen. Und sie fängt bei MIR an!" Er stellt sich breit vor das Portal. „Ihr wollt in die Taverne? Dann müsst Ihr an mir vorbei."',
    onHit: '„Sie wird davon erfahren! Das wisst Ihr!"',
    onStrike: '„Das ist zu Eurem eigenen Besten!"',
    onDefeat: 'Hubi sackt zusammen und seufzt tief. „Na gut. EINE Runde in der Taverne. Aber wenn Eure Verlobte fragt — ich war dagegen. Ich war die ganze Zeit dagegen." Er steht auf, klopft sich ab und murmelt: „Wir sind so was von tot."',
  },
};
