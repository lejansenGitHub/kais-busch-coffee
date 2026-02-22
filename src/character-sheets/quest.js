import './style.css';
import './quest-style.css';
import { SKILLS } from './skills.js';
import { SKILL_UNLOCK_CODES, ITEM_UNLOCK_CODES } from './hero-data.js';

const QUESTS = {
  ingrid: {
    name: 'Ingrid',
    title: 'Die Hüterin der Vorratskammer',
    portrait: '\u{1F9D4}\u{200D}\u{2640}\u{FE0F}',
    intro: 'Eine alte Frau mit langem Gedächtnis und einer gut bestückten Küche. Sie spricht von der Vergangenheit mit einer Mischung aus Zuneigung und Verzweiflung.',
    quests: [
      {
        title: 'Das Eis der Versöhnung',
        task: 'Vor vielen Jahren haben sich junge Männer regelmäßig Joghurts mit Perlen aus meinem Kühlschrank und Aldi-Baguettes mit Salami aus unserem Vorrat genommen. Um Frieden mit der Vergangenheit zu schließen, brauche ich einen jungen Mann wie dich, der mir mein Lieblingseis bringt. Kannst du das Rätsel lösen, um die richtige Sorte herauszufinden?\n\n<em>Ich wachse in einer Schale am Baum,\nEichhörnchen horten mich — man glaubt es kaum.\nKnack mich auf, röste mich fein —\nIn Nutella darf ich nicht fehlen, nein!\nWelche Eissorte soll es sein?</em>',
        criteria: [
          'Das richtige Eis wurde gekauft und Ingrid gebracht',
        ],
        rewards: [
          { type: 'skill', id: 'freeze' },
        ],
      },
    ],
  },
  eva: {
    name: 'Eva',
    title: 'Die werdende Schwester',
    portrait: '\u{1F930}',
    intro: 'Eva erwartet ihr erstes Kind. Jahrelang hat sie brav Getränke und Snacks zu ihrem Bruder und seinen wilden Freunden gebracht \u2014 jetzt sollte ihr mal jemand etwas bringen.',
    quests: [
      {
        title: 'Eine ordentliche Tasse Tee',
        task: 'Damals hat Eva unzählige Abende damit verbracht, Getränke zu ihrem Bruder und seinen Kumpels zu schleppen. Niemand hat je daran gedacht, sich zu revanchieren. Nun, die Zeiten haben sich geändert \u2014 Eva ist schwanger und könnte wirklich eine warme Tasse Tee gebrauchen. Kein Kaffee, kein Alkohol, kein Quatsch. Einfach ein guter, beruhigender Tee, der für sie und das Kleine sicher ist. Zeit, die Rollen zu tauschen, findest du nicht?',
        criteria: [
          'Ein koffeinfreier Tee, geeignet für Schwangere, wurde gekauft und Eva gebracht',
        ],
        rewards: [
          { type: 'skill', id: 'iron_ward' },
        ],
      },
    ],
  },
  hendrik: {
    name: 'Hendrik',
    title: 'Der Hockeyspieler',
    portrait: '\u{1F3D1}',
    intro: 'Hendrik lebt für Hockey. Auf dem Platz ist er schnell, präzise und gnadenlos. Er glaubt, dass wahre Stärke nicht in den Armen sitzt, sondern im Auge \u2014 wer das Ziel nicht trifft, hat nichts verdient.',
    quests: [
      {
        title: 'Der Präzisionsschuss',
        task: 'Hendrik stellt ein kleines Tor oder Ziel auf und drückt dir einen Hockeyschläger und einen Ball in die Hand. „Vergiss Sandsäcke \u2014 zeig mir, ob du echte Präzision hast. Du hast 5 Versuche, den Ball ins Ziel zu schießen. Triffst du mindestens 2 von 5, hast du meinen Respekt. Aber Vorsicht \u2014 der Schläger verzeiht keine halben Sachen."',
        criteria: [
          'Mindestens 2 von 5 Hockeyschüssen haben das Ziel getroffen',
        ],
        rewards: [
          { type: 'item', id: 'sword' },
        ],
      },
    ],
  },
  simon: {
    name: 'Simon',
    title: 'Flammenmagier',
    portrait: '\u{1F9D9}',
    intro: 'Sie nennen ihn den Flammenmagier \u2014 nicht weil er laut ist, sondern weil man das Feuer erst spürt, wenn es zu spät ist. Simon verbrennt mit Präzision.',
    quests: [
      {
        title: 'Die Streichholz-Staffel',
        task: 'Ein wahrer Flammenmagier verlässt sich nicht auf billige Tricks \u2014 er beherrscht das Feuer. Simon entzündet ein Streichholz und drückt es dir in die Hand. Deine Aufgabe: Trage das brennende Streichholz von Punkt A nach Punkt B (ca. 10 Meter), ohne dass die Flamme erlischt. Du hast 3 Versuche. Mindestens 2 müssen gelingen.\n\n„Feuer ist launisch. Es gehorcht nur denen, die es mit Geduld und ruhiger Hand führen."',
        criteria: [
          'Mindestens 2 von 3 brennenden Streichhölzern wurden erfolgreich über die Strecke getragen, ohne dass die Flamme erlosch',
        ],
        rewards: [
          { type: 'skill', id: 'vertigo' },
        ],
      },
    ],
  },
  kai: {
    name: 'Kai',
    title: 'Meister der Karten',
    portrait: '\u{1F0CF}',
    intro: 'Kai lebt für Magic: The Gathering. Seine Sammlung ist sein Stolz, sein Wissen über Kartenwerte grenzenlos. Wer seinen Respekt will, muss beweisen, dass er den Unterschied zwischen Junk und Gold erkennt.',
    quests: [
      {
        title: 'Meister der Karten',
        task: 'Kai zieht 3 Runden lang jeweils 2 Magic-Karten aus seiner Sammlung und zeigt sie dir. Deine Aufgabe: In jeder Runde musst du erraten, welche der beiden Karten wertvoller ist. Triffst du mindestens 2 von 3 richtig, hast du Kais Anerkennung verdient.',
        criteria: [
          'Mindestens 2 von 3 Runden wurde die wertvollere Karte korrekt erkannt',
        ],
        rewards: [
          { type: 'item', id: 'small_bag' },
        ],
      },
    ],
  },
  katta: {
    name: 'Katta',
    title: 'Meisterin des Genusses',
    portrait: '\u{1F37D}\u{FE0F}',
    intro: 'Katta kennt jedes Gewürz, jede Textur, jeden Geschmack. Für sie ist Essen keine Nahrungsaufnahme \u2014 es ist Kunst. Wer ihren Respekt will, muss beweisen, dass er mehr schmeckt als nur „salzig" und „süß".',
    quests: [
      {
        title: 'Die Blindverkostung',
        task: 'Katta reicht dir 3 Runden lang jeweils eine Speise \u2014 mit geschlossenen Augen. Du darfst riechen, kauen und schmecken, aber nicht sehen. In jeder Runde musst du erraten, was du gerade isst. Triffst du mindestens 2 von 3 richtig, hast du Kattas Anerkennung verdient. „Wer blind schmeckt, sieht mehr als die meisten."',
        criteria: [
          'Mindestens 2 von 3 Speisen wurden mit geschlossenen Augen korrekt erkannt',
        ],
        rewards: [
          { type: 'item', id: 'belt' },
        ],
      },
    ],
  },
  elena: {
    name: 'Elena',
    title: 'Die Gelehrte',
    portrait: '\u{1F4DA}',
    intro: 'Eine Sprach- und Kunstgelehrte, die Kinder unterrichtet. Elena kennt Sascha seit er jung war. Sie glaubt, dass wahre Stärke aus Verständnis kommt \u2014 und sie hat vor, das zu beweisen.',
    quests: [
      {
        title: 'Die Sprachprüfung',
        task: 'Elena ist bereit, ihr Wissen zu teilen, aber nur wenn du beweist, dass du sprachübergreifend denken kannst. Sie gibt dir drei englische Sätze, in denen jeweils ein deutsches Wort als Wortspiel versteckt ist. Löse alle drei und verdiene dir ihren Respekt.\n\n<em>Riddle 1:\n"She brought a GIFT to the party, but everyone avoided drinking it."\nWhat German word is hidden here?</em>\n\n<em>Riddle 2:\n"Be KIND to the little ones \u2014 they\'re only children after all."\nWhat German word is hidden here?</em>\n\n<em>Riddle 3:\n"She wanted to TAG along, but only during daylight."\nWhat German word is hidden here?</em>',
        criteria: [
          'Alle drei deutschen Wörter wurden korrekt erraten und Elena gesagt',
        ],
        rewards: [
          { type: 'skill', id: 'insight' },
        ],
      },
    ],
  },
  martina: {
    name: 'Martina',
    title: 'Die Dirigentin',
    portrait: '\u{1F3B5}',
    intro: 'Martina steht inmitten eines kleinen Platzes und dirigiert — doch kein Orchester ist zu sehen. Ihre Hände zeichnen unsichtbare Noten in die Luft. Als sie Lord Patten bemerkt, hält sie inne: „Ah, ein neues Publikum! Oder besser — ein neuer Musiker? Die Musik dieser Welt ist seltsam, aber ich spüre ihren Rhythmus. Kannst du ihn auch spüren?"',
    quests: [
      {
        title: 'Der Takt der Altstadt',
        task: 'Martina klatscht einen Rhythmus vor — Lord Patten muss ihn nachklatschen. Jede Runde hat 8 Schläge mit unterschiedlichen Mustern:\n\n<em>Runde 1: schnell schnell — Pause — langsam — schnell schnell — Pause\nRunde 2: langsam — schnell schnell — schnell schnell — Pause — langsam\nRunde 3: schnell schnell — langsam — Pause — schnell schnell — langsam\nRunde 4: Pause — langsam — schnell schnell — langsam — schnell schnell\nRunde 5: langsam — Pause — schnell schnell — Pause — langsam — schnell schnell</em>\n\n„Schnell" = kurzer Klatscher, „Langsam" = betonter, langer Klatscher, „Pause" = Stille.\nMindestens 3 von 5 Runden müssen korrekt nachgeklatscht werden.\n\n„Musik ist das Einzige, was Mauern durchbrechen kann — im wörtlichen Sinne. Aber dafür braucht man Taktgefühl. Zeig mir deins."',
        criteria: [
          'Mindestens 3 von 5 Rhythmus-Runden wurden korrekt nachgeklatscht',
        ],
        rewards: [
          { type: 'quest_item', name: 'Notenblatt' },
        ],
      },
    ],
  },
  'hubi-quest': {
    name: 'Hubi',
    title: 'Die Barriere am Schelmenturm',
    portrait: '\u{1F3B6}',
    intro: 'Vor dem Schelmenturm flimmert eine unsichtbare Wand in der Luft. Wer hindurchzugehen versucht, wird zurückgestoßen. Lennart runzelt die Stirn: „Magisch. Aber nicht unüberwindbar — ich spüre, dass Musik der Schlüssel ist. Hast du etwas, womit man spielen könnte?"',
    quests: [
      {
        title: 'Die Melodie der Barriere',
        task: 'Lord Patten muss die Flöte (von Hubi erhalten) zusammen mit dem Notenblatt (von Martina erhalten) verwenden, um eine Melodie zu spielen. Der Spieler spielt auf der Flöte die Noten nach, die auf dem Notenblatt stehen.\n\nAchtung: Die Musik durchbricht die Barriere, aber sie hat auch eine unerwartete Wirkung — Hubi wird von der Melodie verzaubert und verliert den Verstand. Er stellt sich Lord Patten als Mid-Boss in den Weg.',
        criteria: [
          'Die Flöte und das Notenblatt wurden kombiniert und eine Melodie gespielt',
          'Die Barriere am Schelmenturm wurde durchbrochen',
        ],
        rewards: [
          { type: 'quest_item', name: 'Barriere durchbrochen' },
        ],
      },
    ],
  },
  father: {
    name: 'Der Vater',
    title: 'Der Bierkenner',
    portrait: '\u{1F37A}',
    intro: 'Manche nennen ihn Kalle. Andere kennen ihn als Karl-Heinz. Aber eines weiß jeder: Er kennt sein Bier. In seiner Gilde wird nicht nach Namen gefragt \u2014 sondern nach Geschmack.',
    quests: [
      {
        title: 'Die Bierverkostung',
        task: 'Der Vater stellt dir zwei Gläser Bier hin \u2014 eines Kölsch, eines Alt. Du trinkst mit geschlossenen Augen und musst erkennen, welches welches ist. Das Ganze geht über 3 Runden mit frischen Gläsern. Du musst alle 3 Runden richtig erraten, um zu bestehen. „Wer sein Bier nicht kennt, kennt sich selbst nicht."',
        criteria: [
          'In allen 3 Runden wurde Kölsch und Alt korrekt erkannt (mit geschlossenen Augen)',
        ],
        rewards: [
          { type: 'item', id: 'drinking_horn' },
        ],
      },
    ],
  },
};

const app = document.querySelector('#app');
const characterId = app.dataset.character;
const data = QUESTS[characterId];

if (!data) {
  app.innerHTML = '<p>Unbekannter Quest-Charakter.</p>';
} else {
  app.innerHTML = `
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${data.name}</div>
      </div>

      <div class="quest-intro">
        <div class="quest-portrait">${data.portrait}</div>
        <div class="quest-intro-text">
          <div class="quest-title-line">${data.title}</div>
          <p>${data.intro}</p>
        </div>
      </div>

      ${data.quests.map((q, i) => `
        <div class="quest-block">
          <div class="quest-number">Quest ${i + 1}</div>
          <div class="quest-name">${q.title}</div>

          <div class="quest-section">
            <div class="quest-section-label">Aufgabe</div>
            <p class="quest-text">${q.task}</p>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Abnahmekriterien</div>
            <ul class="quest-criteria">
              ${q.criteria.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Belohnungen</div>
            <div class="quest-rewards">
              ${q.rewards.map(r => {
                let name, code, badge;
                if (r.type === 'skill') {
                  name = SKILLS[r.id].name;
                  code = SKILL_UNLOCK_CODES[r.id];
                  badge = 'S';
                } else if (r.type === 'item') {
                  name = r.id.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                  code = ITEM_UNLOCK_CODES[r.id];
                  badge = 'I';
                } else {
                  name = r.name;
                  code = null;
                  badge = 'Q';
                }
                return `
                <div class="reward-row">
                  <span class="reward-type ${r.type}">${badge}</span>
                  <span class="reward-name">${name}</span>
                  ${code ? `<span class="reward-code">${code}</span>` : ''}
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>`;
}
