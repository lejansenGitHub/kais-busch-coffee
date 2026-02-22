import { SKILLS } from './skills.js';

export const DEFAULT_HERO_STATE = {
  id: 'lord-patten',
  name: 'Lord Patten',
  level: 1,
  maxHp: 20,
  currentHp: 20,
  actions: 1,
  damage: { outer: 1, middle: 3, inner: 5 },
  maxSkillSlots: 1,
  unlockedSkillIds: [],
  equippedSkillIds: [],
  skillUsage: {},
  inFight: false,
  levelUpHistory: [],
  unlockedItemIds: [],
  drinkingHornUsed: false,
  swordInnerStreak: 0,
  swordBonusThrow: false,
  story: {
    desc: 'Ein edler Krieger von unbeugsamer Entschlossenheit. Einst aus den Hallen der Hochburg verbannt, durchstreift er das Land auf der Suche nach würdigen Gegnern — und einer guten Tasse Kaffee.',
    onHit: '„Ist das alles, was du draufhast?"',
    onStrike: '„Für die Ehre."',
    onDefeat: '„Das ist noch nicht vorbei. Nicht mal annähernd."',
  },
};

export const SKILL_UNLOCK_CODES = {
  // Enemy rewards
  blind_fury:     '4812',
  advance:        '6514',
  heavy_hands:    '3046',
  war_cry:        '1952',
  silver_tongue:  '9618',
  gold_reserve:   '4729',
  double_attack:  '3897',
  last_stand:     '5236',
  snipers_gambit: '4086',
  off_balance:    '2743',
  tremor:         '5918',
  // Quest rewards
  freeze:         '6287',
  iron_ward:      '8174',
  vertigo:        '8341',
  insight:        '7835',
  fine_sack:      '8364',
  crude_sack:     '1657',
  repulsion:      '7492',
};

export const LEVEL_UP_CHOICES = [
  {
    id: 'hp10',
    label: '+10 HP',
    apply(state) {
      state.maxHp += 10;
      state.currentHp += 10;
    },
  },
  {
    id: 'inner3',
    label: '+3 Inner damage',
    apply(state) {
      state.damage.inner += 3;
    },
  },
  {
    id: 'middle2',
    label: '+2 Middle damage',
    apply(state) {
      state.damage.middle += 2;
    },
  },
  {
    id: 'outer1',
    label: '+1 Outer damage',
    apply(state) {
      state.damage.outer += 1;
    },
  },
];

export const ITEMS = {
  belt:           { name: 'Belt',           desc: 'Reduziert Schaden vom Außenkreis' },
  arm_protectors: { name: 'Arm Protectors', desc: 'Reduziert Schaden vom Mittelkreis' },
  pelt:           { name: 'Pelt',           desc: 'Reduziert Schaden vom Innenkreis' },
  small_bag:      { name: 'Small Bag',      desc: '+1 Skill-Slot (permanent bei Unlock)' },
  drinking_horn:  { name: 'Drinking Horn',  desc: 'Einmal pro Kampf heilen' },
  sword:          { name: 'Sword',          desc: '2 aufeinanderfolgende Innentreffer = 1 Bonuswurf' },
};

export const ITEM_UNLOCK_CODES = {
  belt:           '3841',
  arm_protectors: '7152',
  pelt:           '9263',
  small_bag:      '4506',
  drinking_horn:  '8037',
  sword:          '6724',
};

export function dmgReduction(level) {
  return 1 + Math.floor(level / 5);
}

/** Returns a full skill object for a skill ID, or null if unknown. */
export function getSkill(id) {
  return SKILLS[id] || null;
}
