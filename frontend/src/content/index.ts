import * as emaille from './places/emaille.place.mdx';
import * as extrablatt from './places/extrablatt.place.mdx';
import * as cafebleu from './places/cafebleu.place.mdx';
import * as dhbwKa from './places/hochschulen/dhbwKarlsruhe.place.mdx';
import * as fomHsKa from './places/hochschulen/fomHochschuleKarlsruhe.place.mdx';
import * as hsKa from './places/hochschulen/hochschuleKarlsruhe.place.mdx';
import * as karlsHs from './places/hochschulen/karlshochschule.place.mdx';
import * as kit from './places/hochschulen/kit.place.mdx';
import * as paedagogischeHs from './places/hochschulen/paedagogischehochschule.place.mdx';
import * as staatlicheHs from './places/hochschulen/staatlicheHochschule.place.mdx';

export const places = {
  "restaurants": [
    { info: emaille.place, content: emaille.default }
  ],
  "cafes": [
    { info: extrablatt.place, content: extrablatt.default },
    { info: cafebleu.place, content: cafebleu.default }
  ],
  "hochschulen": [
    { info: dhbwKa.place, content: dhbwKa.default },
    { info: fomHsKa.place, content: fomHsKa.default },
    { info: hsKa.place, content: hsKa.default },
    { info: karlsHs.place, content: karlsHs.default },
    { info: kit.place, content: kit.default },
    { info: paedagogischeHs.place, content: paedagogischeHs.default },
    { info: staatlicheHs.place, content: staatlicheHs.default },
  ]
};
