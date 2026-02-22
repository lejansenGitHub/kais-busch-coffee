export const SKILLS = {
  // Active — enemy debuffs
  blind_fury:    { name: 'Blind Fury',    type: 'A', desc: 'Gegner muss mit geschlossenen Augen werfen',                    maxUses: 1, duration: 2 },
  repulsion:     { name: 'Repulsion',     type: 'A', desc: 'Gegner muss einen vollen Schritt zur Seite treten (Richtung frei wählbar)', maxUses: 1, duration: 3 },
  pushback:      { name: 'Pushback',      type: 'A', desc: 'Gegner muss einen Schritt zurücktreten',                              maxUses: 2, duration: 2 },
  iron_ward:     { name: 'Iron Ward',     type: 'A', desc: 'Innenkreis (Crit) ist für den Gegner blockiert',               maxUses: 1, duration: 3 },
  off_balance:   { name: 'Off Balance',   type: 'A', desc: 'Gegner muss mit der schwachen Hand werfen',                       maxUses: 1, duration: 3 },
  heavy_hands:   { name: 'Heavy Hands',   type: 'A', desc: 'Gegner muss Ofenhandschuhe tragen',                                maxUses: 1, duration: 3 },
  freeze:        { name: 'Freeze',        type: 'A', desc: 'Gegner muss den Wurfarm vollständig gestreckt halten',      maxUses: 1, duration: 2 },
  crude_sack:    { name: 'Crude Sack',    type: 'A', desc: 'Gegner muss mit dem Sandsack schlechter Qualität werfen',              maxUses: 1, duration: 2 },
  tremor:        { name: 'Tremor',        type: 'A', desc: 'Gegner muss auf einem Bein stehend werfen',                 maxUses: 1, duration: 2 },
  vertigo:       { name: 'Vertigo',       type: 'A', desc: 'Gegner muss sich vor jedem Wurf 3-mal drehen',           maxUses: 1, duration: 2 },
  revision:      { name: 'Revision',      type: 'A', desc: 'Nach einem Treffer einen Teil der Zielscheibe mit Kreide übermalen \u2014 der Treffer zählt als Fehlwurf', maxUses: 3 },

  // Active — self buffs
  advance:        { name: 'Advance',        type: 'A', desc: 'Du darfst einen Schritt nach vorne machen',                              maxUses: 2, duration: 2 },
  double_attack:  { name: 'Double Attack',  type: 'A', desc: 'Wirf mit beiden Armen gleichzeitig mit zwei Sandsäcken',  maxUses: 1, duration: 2 },
  fine_sack:      { name: 'Fine Sack',      type: 'A', desc: 'Du wirfst mit dem Sandsack hoher Qualität',                   maxUses: 1, duration: 3 },
  snipers_gambit: { name: "Sniper's Gambit", type: 'A', desc: 'Du gehst einen Schritt zurück, machst aber +2 Schaden in allen Zonen',   maxUses: 1, duration: 2 },
  war_cry:        { name: 'War Cry',        type: 'A', desc: 'Du erhältst +2 Aktionen in der nächsten Runde',                             maxUses: 1 },

  // Passive — self
  double_attack_passive: { name: 'Double Attack', type: 'P', desc: 'Du wirfst immer mit beiden Armen gleichzeitig mit zwei Sandsäcken', maxUses: 0 },
  titans_grip:   { name: "Titan's Grip",  type: 'P', desc: 'Deine Innentreffer verursachen +2 Bonusschaden',               maxUses: 0 },
  last_stand:    { name: 'Last Stand',    type: 'P', desc: 'Unter 10 HP verursachen alle deine Treffer +2 Schaden',            maxUses: 0 },
  fortress:      { name: 'Fortress',      type: 'P', desc: 'Außenkreis-Treffer des Gegners verursachen 3 Schaden weniger',             maxUses: 0 },

  silver_tongue: { name: 'Silver Tongue', type: 'P', desc: 'Du darfst während der gegnerischen Würfe frei reden, um abzulenken', maxUses: 0 },
  insight:       { name: 'Insight',       type: 'P', desc: 'Gegner muss vor dem Kampf seine Skills zeigen \u2014 du darfst 1 Einsatz eines aktiven Skills ohne Effekt abziehen', maxUses: 0 },

  // Active — rogue / thief
  backstab:       { name: 'Backstab',       type: 'A', desc: 'Du darfst hinter den Gegner treten und auf seinen Rücken werfen',               maxUses: 2, duration: 2 },
  thieves_gambit: { name: "Thieves' Gambit", type: 'A', desc: 'Stiehl einen verbleibenden Skill-Einsatz des Gegners',                     maxUses: 1 },
  dark_deal:      { name: 'Dark Deal',      type: 'A', desc: 'Zwinge den Gegner zu wählen: einen Wurf auslassen oder 3 Bonusschaden nehmen',     maxUses: 1 },

  // Passive — self (continued)
  evasion:       { name: 'Evasion',       type: 'P', desc: 'Du darfst einmal pro Runde einem Treffer ausweichen',                                      maxUses: 0 },
  many_faces:    { name: 'Many Faces',    type: 'P', desc: 'Der Gegner kennt deine Skills erst, wenn du sie einsetzt \u2014 immun gegen Insight', maxUses: 0 },

  // Active — Kai specials
  respect_the_cards: { name: 'Respect the Cards', type: 'A', desc: 'Lege 4 Magic-Karten auf das Ziel \u2014 getroffene Karten werden abgeräumt, der Wurf zählt als Fehlschlag', maxUses: 1 },
  trick_shot:        { name: 'Trick Shot',        type: 'A', desc: 'Sage einen Trickshot an \u2014 bei Erfolg +2 Schaden in allen Zonen. Kostet keine extra Aktion', maxUses: 3 },

  // Active — Katta specials
  sugar_rush:      { name: 'Zuckerschock',    type: 'A', desc: 'Gib dem Gegner etwas Süßes \u2014 nächster Wurf +2 Schaden, danach 2 Würfe \u22123 Schaden', maxUses: 2 },
  high_standards:  { name: 'Hoher Anspruch',  type: 'A', desc: 'Mitte/Innen +2 Schaden, Außenkreis zählt als Fehlwurf. Kostet keine extra Aktion', maxUses: 2 },

  // Passive — loyalty
  oath_of_loyalty: { name: 'Treueschwur', type: 'P', desc: 'Dein gewählter Verbündeter darf seine Fähigkeit zweimal einsetzen statt einmal', maxUses: 0 },

};
