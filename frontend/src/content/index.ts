import * as emaille from './places/emaille.place.mdx';
import * as extrablatt from './places/extrablatt.place.mdx';
import * as cafebleu from './places/cafebleu.place.mdx';

export const places = {
  "restaurants": [
    { info: emaille.place, content: emaille.default }
  ],
  "cafes": [
    { info: extrablatt.place, content: extrablatt.default },
    { info: cafebleu.place, content: cafebleu.default }
  ]
};
