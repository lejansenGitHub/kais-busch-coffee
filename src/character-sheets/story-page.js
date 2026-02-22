import './style.css';

const style = document.createElement('style');
style.textContent = `
  .story-chapter {
    margin-bottom: 24px;
  }
  .story-chapter:last-child {
    margin-bottom: 0;
  }
  .chapter-title {
    font-size: 16px;
    font-weight: 900;
    color: #c9aa71;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-shadow: 0 0 6px rgba(201, 170, 113, 0.25);
  }
  .chapter-text {
    font-family: Georgia, serif;
    font-size: 14px;
    color: #a08a60;
    line-height: 1.7;
  }
  .chapter-text p {
    margin-bottom: 10px;
  }
  .chapter-text p:last-child {
    margin-bottom: 0;
  }
  .story-divider {
    border: none;
    border-top: 1px solid #2a2010;
    margin: 20px 0;
  }
  .back-link {
    display: inline-block;
    margin-bottom: 16px;
    font-size: 13px;
    font-weight: 700;
    color: #7a6a4a;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
document.head.appendChild(style);

const app = document.getElementById('app');
app.innerHTML = `
  <a href="../" class="back-link">\u2190 Zur\u00fcck</a>
  <div class="character-card">
    <div class="card-header">
      <div class="character-name">Die Geschichte</div>
    </div>

    <div class="story-chapter">
      <div class="chapter-title">I. Prolog</div>
      <div class="chapter-text">
        <p>Ein gleißendes Licht. Ein Donnerschlag, der die Luft zerreißt. Dann — Stille.</p>
        <p>Lord Patten öffnet die Augen und findet sich in einer Welt wieder, die nicht die seine ist. Fremde Straßen, fremde Gesichter, fremde Gerüche. Die Magie, die ihn hierher geschleudert hat, pulsiert noch in seinen Knochen.</p>
        <p>Neben ihm materialisiert sich sein treuester Berater: Lennart, Magier der zweiten Sphäre, Kenner der Dimensionsrisse und — wie sich herausstellen wird — erstaunlich ruhig angesichts der Tatsache, dass sie gerade durch Raum und Zeit geschleudert wurden.</p>
        <p>„Keine Sorge, Mylord", sagt Lennart und klopft sich den Staub von der Robe. „Ich spüre bereits einen Rückweg."</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">II. Das Portal</div>
      <div class="chapter-text">
        <p>Lennart konzentriert sich, seine Finger zittern, als er den magischen Fluss dieser Welt ertastet. Dann verzieht er das Gesicht.</p>
        <p>„Ein Portal. Ich spüre es deutlich — am Ende dieser Altstadt. Aber..." Er zögert. „Es ist instabil. Drei Stunden, vielleicht weniger. Dann schließt es sich."</p>
        <p>Drei Stunden. Für Lord Patten eine Ewigkeit — und gleichzeitig nichts. Der Weg durch die Altstadt liegt vor ihnen, doch er wird nicht einfach sein.</p>
        <p>Lennart hält inne und schließt die Augen. „Da ist noch etwas. Auf halbem Weg — eine magische Barriere. Ich kann sie spüren, aber nicht durchbrechen. Nicht mit gewöhnlicher Magie." Er öffnet die Augen. „Musik. Ich glaube, nur Musik kann sie lösen. Eine bestimmte Melodie, gespielt auf dem richtigen Instrument."</p>
        <p>„Wir müssen uns beeilen", drängt Lennart. „Jede Minute zählt."</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">III. Die Gefährten</div>
      <div class="chapter-text">
        <p>Doch Lord Patten ist nicht der Einzige, den die Teleportation erfasst hat. Lennart spürt weitere Präsenzen — vertraute Seelen, verstreut durch die Altstadt.</p>
        <p>„Eure Gefährten, Mylord. Sie wurden ebenfalls hierher gerissen. Aber..." Lennart runzelt die Stirn. „Die Teleportation hat ihren Geist verwirrt. Sie werden Euch nicht erkennen. Manche werden kämpfen."</p>
        <p>Lord Patten nickt grimmig. Er kennt seine Leute. Manche muss man erst zur Vernunft bringen, bevor man mit ihnen reden kann. Und „zur Vernunft bringen" bedeutet in seinem Reich meistens: eine ordentliche Tracht Prügel.</p>
        <p>Also gut. Durch die Altstadt, die Gefährten einsammeln, den Verwirrten den Kopf zurechtrücken — und das Portal erreichen. Bevor die Zeit abläuft.</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">IV. Die Barriere</div>
      <div class="chapter-text">
        <p>Auf halbem Weg, am Fuß des Schelmenturms, endet der Weg abrupt. Eine unsichtbare Wand aus purer Magie versperrt die Straße — kalt, summend und undurchdringlich. Lennarts Warnung war berechtigt.</p>
        <p>„Musik", wiederholt Lennart. „Nur eine bestimmte Melodie kann diese Barriere brechen." Sein Blick fällt auf die Flöte in Hubis Hand — dieselbe Flöte, die ihm bei ihrer ersten Begegnung aus der Tasche gefallen war.</p>
        <p>Hubi dreht das Instrument nervös in den Fingern. „Ich kann nicht mal Flöte spielen", protestiert er. Aber als er das Instrument an die Lippen setzt, geschieht etwas Seltsames: Eine Melodie strömt heraus — fremd, alt, wunderschön. Hubis Finger bewegen sich wie von selbst.</p>
        <p>Doch die Musik hat einen Preis. Mit jedem Ton wird Hubis Blick glasiger. Die Melodie übernimmt seinen Geist — er erkennt niemanden mehr. Er steht vor dem Turm wie ein Wächter, der nur einem Befehl gehorcht: Niemand kommt vorbei.</p>
        <p>Lord Patten muss seinen eigenen Gefährten niederstrecken, um weiterzukommen. Ein bitterer Kampf — aber als Hubi fällt, zerspringt die Barriere in tausend Lichtfragmente. Und Hubi? Blinzelt, schüttelt den Kopf, und fragt: „Was ist passiert?"</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">V. Die Gesetze dieser Welt</div>
      <div class="chapter-text">
        <p>Lennart hebt die Hand. „Noch etwas, Mylord. Diese Welt hat ihre eigenen Regeln — und sie sind auf Eurer Seite."</p>
        <p>„Wenn Ihr in einem Kampf fällt, seid Ihr nicht besiegt. Trinkt ein Bier, sammelt Eure Kräfte — und der Gegner wird Euch erneut herausfordern. Ihr könnt so oft antreten, wie Ihr müsst."</p>
        <p>„Und wenn Euch eine Prüfung nicht gelingt — eine Quest, ein Rätsel — dann wartet fünf Minuten. Die Magie dieser Welt setzt sich zurück, und Ihr dürft es erneut versuchen."</p>
        <p>Lord Patten nickt. Das Schicksal hat ihn nicht hierher gebracht, um zu scheitern. Er wird jeden Kampf gewinnen, jede Prüfung bestehen — es ist nur eine Frage der Zeit.</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">VI. Die Motivation</div>
      <div class="chapter-text">
        <p>Es gibt noch einen Grund, warum Lord Patten es zurück schaffen muss — einen, der schwerer wiegt als alle anderen.</p>
        <p>Er heiratet. Bald. Seine Verlobte wartet, die Vorbereitungen laufen, und wenn er nicht rechtzeitig zurück ist... nun, man möchte sich nicht vorstellen, was seine zukünftige Gemahlin zu sagen hätte.</p>
        <p>„Dimensionsriss hin oder her", murmelt Lord Patten, „die Hochzeit verschieben ist keine Option."</p>
        <p>Also vorwärts. Keine Ausreden, keine Verzögerungen. Durch die Altstadt, Gefährten sammeln, Portal erreichen, nach Hause. So lautet der Plan.</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">VII. Das Ende der Altstadt</div>
      <div class="chapter-text">
        <p>Die Altstadt liegt hinter ihnen. Die Gefährten sind gesammelt — manche willig, manche mit ein paar blauen Flecken mehr als nötig. Das Portal schimmert vor ihnen in der Abenddämmerung.</p>
        <p>Lennart tritt vor, streckt die Hände aus — und hält inne. Ein Lächeln breitet sich auf seinem Gesicht aus.</p>
        <p>„Mylord... ich habe mich geirrt. Das Portal ist stabil. Sehr stabil sogar. Es wird nicht in drei Stunden verschwinden. Es wird... nun ja, es wird noch eine ganze Weile hier sein."</p>
        <p>Stille. Erleichterung. Jemand deutet auf eine Taverne am Straßenrand. Lord Patten grinst — eine Runde hätten sie sich verdient.</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">VIII. Stimme der Vernunft</div>
      <div class="chapter-text">
        <p>„NEIN."</p>
        <p>Hubi steht vor dem Portal. Arme verschränkt, Blick eisern. Während alle anderen die Taverne ansteuern wollen, hat er sich breitbeinig vor den schimmernden Durchgang gestellt.</p>
        <p>„Wir gehen JETZT durch. Sofort. Keine Taverne, kein Umweg, kein Bier." Seine Stimme zittert — nicht vor Wut, sondern vor Angst. Denn Hubi kennt Lord Pattens Verlobte. Und er weiß: Wenn es um die Hochzeit geht, ist mit ihr nicht zu spaßen.</p>
        <p>„Mylord, ich sage das als Freund", fleht Hubi. „Eure Verlobte wird uns ALLE umbringen, wenn wir zu spät kommen. Und sie fängt bei MIR an!" Er zeigt auf die Gruppe. „Jede Minute, die wir hier vertrödeln, ist eine Minute näher an unserem Untergang!"</p>
        <p>Lord Patten seufzt. Er weiß, dass Hubi nicht ganz Unrecht hat. Aber nach allem, was sie durchgemacht haben — die Kämpfe, die Barriere, die Quests — verdienen sie einen Moment der Ruhe.</p>
        <p>„Ihr wollt in die Taverne?" Hubis Stimme wird schrill. „Dann müsst Ihr an mir vorbei!"</p>
        <p>Und so kommt es zum letzten Kampf des Abenteuers — nicht gegen einen verzauberten Feind, nicht gegen dunkle Magie, sondern gegen die Stimme der Vernunft höchstpersönlich.</p>
      </div>
    </div>

    <hr class="story-divider">

    <div class="story-chapter">
      <div class="chapter-title">IX. Epilog</div>
      <div class="chapter-text">
        <p>Hubi sackt zusammen und seufzt tief. „Na gut. EINE Runde in der Taverne. Aber wenn Eure Verlobte fragt — ich war dagegen. Ich war die ganze Zeit dagegen."</p>
        <p>Er steht auf, klopft sich ab und murmelt: „Wir sind so was von tot."</p>
        <p>Die Gefährten jubeln. Die Taverne ruft. Lord Patten hebt sein Glas und blickt in die Runde — auf Freunde, die durch Raum und Zeit mit ihm gereist sind und am Ende nur eine Frage übrig haben:</p>
        <p>„Die Hochzeit kann warten", sagt Lord Patten und grinst. „Dafür ist ja dann noch der Rest meines Lebens da."</p>
        <p>Und das Portal? Das Portal kann bis morgen warten.</p>
      </div>
    </div>
  </div>
`;
