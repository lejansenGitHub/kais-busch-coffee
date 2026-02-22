import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/kais-busch-coffee/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'character-sheets': resolve(__dirname, 'character-sheets/index.html'),
        'character-sheets-simon': resolve(__dirname, 'character-sheets/simon/index.html'),
        'character-sheets-hubi': resolve(__dirname, 'character-sheets/hubi/index.html'),
        'character-sheets-lord-patten': resolve(__dirname, 'character-sheets/lord-patten/index.html'),
        'character-sheets-skills': resolve(__dirname, 'character-sheets/skills/index.html'),
        'character-sheets-eva-enemy': resolve(__dirname, 'character-sheets/eva-enemy/index.html'),
        'character-sheets-elena-enemy': resolve(__dirname, 'character-sheets/elena-enemy/index.html'),
        'character-sheets-ingrid': resolve(__dirname, 'character-sheets/ingrid/index.html'),
        'character-sheets-eva': resolve(__dirname, 'character-sheets/eva/index.html'),
        'character-sheets-elena': resolve(__dirname, 'character-sheets/elena/index.html'),
        'character-sheets-mirko': resolve(__dirname, 'character-sheets/mirko/index.html'),
        'character-sheets-nick': resolve(__dirname, 'character-sheets/nick/index.html'),
        'character-sheets-jess': resolve(__dirname, 'character-sheets/jess/index.html'),
        'character-sheets-father': resolve(__dirname, 'character-sheets/father/index.html'),
        'character-sheets-daniel': resolve(__dirname, 'character-sheets/daniel/index.html'),
        'character-sheets-lukas': resolve(__dirname, 'character-sheets/lukas/index.html'),
        'character-sheets-allies': resolve(__dirname, 'character-sheets/allies/index.html'),
        'character-sheets-simon-quest': resolve(__dirname, 'character-sheets/simon-quest/index.html'),
        'character-sheets-hendrik': resolve(__dirname, 'character-sheets/hendrik/index.html'),
        'character-sheets-katta': resolve(__dirname, 'character-sheets/katta/index.html'),
        'character-sheets-katta-enemy': resolve(__dirname, 'character-sheets/katta-enemy/index.html'),
        'character-sheets-father-quest': resolve(__dirname, 'character-sheets/father-quest/index.html'),
        'character-sheets-kai-enemy': resolve(__dirname, 'character-sheets/kai-enemy/index.html'),
        'character-sheets-kai': resolve(__dirname, 'character-sheets/kai/index.html'),
        'character-sheets-story': resolve(__dirname, 'character-sheets/story/index.html'),
        'character-sheets-martina': resolve(__dirname, 'character-sheets/martina/index.html'),
        'character-sheets-hubi-quest': resolve(__dirname, 'character-sheets/hubi-quest/index.html'),
        'character-sheets-hubi-boss': resolve(__dirname, 'character-sheets/hubi-boss/index.html'),
        'character-sheets-guide': resolve(__dirname, 'character-sheets/guide/index.html'),
      },
    },
  },
});
