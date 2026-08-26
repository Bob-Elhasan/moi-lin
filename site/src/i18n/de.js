// Deutsch — redaktionelle Übersetzung im Ton der Marke
// (direkte Stimme, keine Marketing-Floskeln, keine verbotenen Wörter:
// Luxus, kuratiert, erhöht, Reise, artisanal als Marketing-Adjektiv, zeitlos, nachhaltig).
export default {
  code: 'de',

  nav: {
    categories: ['Herren', 'Damen', 'Accessoires'],
    search: 'Suchen',
    account: 'Konto',
    bag: (n) => `Warenkorb (${n})`,
    menu: 'Menü',
    close: 'Schließen',
    sizeGuide: 'Größentabelle',
    categoriesLabel: 'Kategorien',
    home: 'MOi & LiN — zurück nach oben',
    skipToContent: 'Zum Inhalt springen',
  },

  announcement: 'Kostenloser Versand in Europa ab 150 €',

  hero: {
    eyebrow: 'Ägypten 1998 · Jetzt in Europa',
    headline: 'Auf der Haut getragen. Eingewebt in das, was Sie sind.',
    editorial: 'Textil aus dem Nildelta. Dreißig Jahre in der Entstehung.',
    body: 'Die Qualität eines Stoffes spürt man, bevor man sie sieht. Wir haben alles auf dieser einen Überzeugung aufgebaut, seit dem ersten Raum in Ägypten.',
    primaryCta: 'Die Geschichte lesen',
    secondaryCta: 'Zur Kollektion',
  },

  proof: [
    { label: '1998', detail: 'Erste Tür in Ägypten' },
    { label: 'Über 100 Handwerker', detail: 'In unserer eigenen Fertigung' },
    { label: 'Textil aus dem Nildelta', detail: 'Seit fünftausend Jahren gefertigt' },
  ],

  instinct: {
    eyebrow: 'Der Instinkt',
    headline: 'Stil wird selten gelehrt. Er wird aufgenommen.',
    body: 'Durch Nähe, Beobachtung und Jahre in den Räumen, in denen Geschmack entsteht. Unser Gründer verbrachte diese Jahre als Model in der europäischen Mode, zu ihrer lebendigsten Zeit: die Anproben, die Laufstege, die Menschen, die verstanden, dass das, was man trägt, nie nur Kleidung ist.',
    quiet: 'Geformt von italienischer Strenge. Geprägt von französischem Gespür. Verwurzelt in einer Überzeugung: Die Qualität eines Stoffes spürt man, bevor man sie sieht.',
  },

  commitment: {
    eyebrow: 'Das Versprechen',
    headline: 'Ägypten, 1998. Ein Raum, ein Standard.',
    body: 'Dass jeder, der durch diese Tür trat, Kleidung verdiente, die mit voller Materialintegrität gefertigt wurde.',
    quiet: 'Dieser Standard wuchs. Eine Fertigung mit über hundert geschickten Händen. Eine Lieferkette, verwurzelt im Nildelta, wo Textil seit fünftausend Jahren gefertigt wird — Flachs, Baumwolle, Seide, jedes mit derselben Hand bearbeitet. Jedes Stück, das unser Haus verließ, trug dieselbe Überzeugung wie das erste.',
  },

  name: {
    eyebrow: 'Der Name',
    moiPrefix: '',
    moiSuffix: ', Französisch, die vertraute erste Person.',
    moiWord: 'Ich selbst.',
    moiBody: 'Das Wort, das der Nähe vorbehalten ist, jener Version von Ihnen, die zum Vorschein kommt, wenn Sie ganz bei sich sind.',
    linPrefix: '',
    linSuffix: ', vom lateinischen linum — der Faden.',
    linWord: 'Faden.',
    linBody: 'Geboren im Nildelta als Flachs, getragen über Zivilisationen hinweg. Heute verläuft derselbe Faden ebenso durch Baumwolle und Seide wie durch Leinen, getragen von Menschen, die verstanden, dass Raffinesse, in ihrer beständigsten Form, aus der Erde wächst.',
    closing: 'Der Mensch, und der Stoff, der für ihn gemacht wurde. Ein Kleidungsstück, das sich nicht ankündigt.',
  },

  tiles: {
    heading: 'Drei Wege, um anzufangen',
    viewAll: 'Alles ansehen',
    items: [
      { name: 'The Ivory Edit', descriptor: 'Essentielle Hemden aus dem Nildelta' },
      { name: 'Quiet Blue', descriptor: 'Weich gewaschene Alltagsstücke' },
      { name: 'Warm Neutrals', descriptor: 'Farbtöne des Deltas' },
    ],
  },

  pillars: {
    heading: 'Drei Dinge, die sich seit dem ersten Raum nicht verändert haben.',
    items: [
      {
        title: 'Authentizität',
        sub: 'Der Stoff spricht zuerst.',
        body: 'Natürliches Elfenbein. Lebendige Textur. Eine Faser, angebaut und verarbeitet mit voller Integrität. Jedes Stück trägt genau das, was das Material bietet, und das war immer mehr als genug.',
      },
      {
        title: 'Identität',
        sub: 'Tragen Sie, was Sie sind.',
        body: 'Jede Silhouette ist für eine Person gedacht. Ihr Instinkt, Ihr Gespür, Ihre Präsenz. MOi & LiN kleidet Sie nicht ein. Es erkennt Sie.',
      },
      {
        title: 'Verlässlichkeit',
        sub: 'Verdient, bevor sie ankam.',
        body: 'Drei Jahrzehnte. Hundert Handwerker. Das Vertrauen, das MOi & LiN nach Europa bringt, entstand still, lange bevor die erste europäische Tür sich öffnete.',
      },
    ],
  },

  horizon: {
    eyebrow: 'Der nächste Horizont',
    headline: 'Zwei Kontinente in jeder Kollektion.',
    body: 'MOi & LiN kommt nach Europa, getragen von vier Partnern, deren Fachwissen sich über Mode, Logistik, digitalen Handel und Einzelhandel erstreckt. Die Großzügigkeit des ägyptischen Stoffes, die Präzision des europäischen Blicks.',
    quiet: 'Zusammengestellt von Menschen, die nie einem Trend gefolgt sind: Sie haben ihn gesetzt. Gemacht für jene, die den Unterschied bereits kennen und ihn spüren, sobald ihre Hand den Stoff berührt.',
  },

  service: ['Kostenloser Versand in Europa ab 150 €', '30 Tage Rückgaberecht', 'Hergestellt in Ägypten', 'Sichere Zahlung über den Händler'],

  collection: {
    eyebrow: 'Hemden aus dem Nildelta für Damen',
    heading: 'Gemacht, um getragen zu werden. Geliebt für Jahre.',
    productCount: (n) => `${n} ${n === 1 ? 'Produkt' : 'Produkte'}`,
    sortLabel: 'Sortieren',
    sortFeatured: 'Empfohlen',
    sortPriceAsc: 'Preis aufsteigend',
    sortPriceDesc: 'Preis absteigend',
    colourGroupLabel: 'Farbe',
    sizeAvailable: ' verfügbar',
    sizeUnavailable: ' nicht verfügbar',
    shopAt: (retailer) => `Erhältlich bei ${retailer}`,
    details: 'Details',
    hideDetails: 'Details ausblenden',
    detailLabels: {
      Composition: 'Zusammensetzung',
      Weight: 'Gewicht',
      Fit: 'Passform',
      Care: 'Pflege',
      Origin: 'Herkunft',
      Delivery: 'Lieferung',
    },
    close: 'Schließen',
    onBodyLabel: (name, colour) => `${name} in ${colour} — 3:4-Rahmen, getragen`,
    hoverLabel: 'Stoffdetail / getragene Optik — Bild beim Hover',
  },

  colours: { Ivory: 'Elfenbein', Blue: 'Blau', Camel: 'Kamel' },

  products: {
    'relaxed-ivory': {
      name: 'Lockeres Elfenbein-Hemd',
      details: {
        Composition: '100 % ägyptisches Leinen, Flachs aus dem Nildelta',
        Weight: '165 g/m², mittleres Gewicht',
        Fit: 'Locker geschnitten an Büste und Körper, fallende Schulter',
        Care: 'Maschinenwäsche bei 30°, an der Luft trocknen, warm bügeln',
        Origin: 'Gewebt und gefertigt in Ägypten',
        Delivery: '3 bis 5 Werktage innerhalb Europas',
      },
    },
    'dusty-blue': {
      name: 'Popelin-Hemd in Taubenblau',
      details: {
        Composition: '100 % ägyptisches Leinen, Popeline-Gewebe',
        Weight: '145 g/m², leicht',
        Fit: 'Klassisch, tailliert geschnitten',
        Care: 'Maschinenwäsche bei 30°, an der Luft trocknen, warm bügeln',
        Origin: 'Gewebt und gefertigt in Ägypten',
        Delivery: '3 bis 5 Werktage innerhalb Europas',
      },
    },
    'soft-camel': {
      name: 'Weiches Hemd in Kamel',
      details: {
        Composition: '100 % ägyptisches Leinen, nach der Konfektion gewaschen',
        Weight: '175 g/m², mittleres Gewicht',
        Fit: 'Locker geschnitten, längere Länge, sanft taillierte Silhouette',
        Care: 'Maschinenwäsche bei 30°, an der Luft trocknen, warm bügeln',
        Origin: 'Gewebt und gefertigt in Ägypten',
        Delivery: '3 bis 5 Werktage innerhalb Europas',
      },
    },
    'essential-ivory': {
      name: 'Essentielles Elfenbein-Hemd',
      details: {
        Composition: '100 % ägyptisches Leinen, Flachs aus dem Nildelta',
        Weight: '155 g/m², leicht bis mittel',
        Fit: 'Klassisch, schlanker Ärmelschnitt, tailliert',
        Care: 'Maschinenwäsche bei 30°, an der Luft trocknen, warm bügeln',
        Origin: 'Gewebt und gefertigt in Ägypten',
        Delivery: '3 bis 5 Werktage innerhalb Europas',
      },
    },
  },

  newsletter: {
    headline: 'Ein Laufsteg. Eine Überzeugung. Eine Entscheidung, die Kontinente überquerte.',
    quiet: 'Und jetzt ein Kleidungsstück, das sich vom ersten Tragen an anfühlt, als wäre es immer schon Ihres gewesen.',
    kicker: 'Bleiben Sie auf dem Laufenden',
    body: 'Neuheiten, sorgfältig gemacht, verschickt, wenn es etwas gibt, das es wert ist.',
    emailLabel: 'E-Mail-Adresse',
    placeholder: 'sie@beispiel.com',
    subscribeCta: 'Abonnieren',
    subscribedMessage: 'Sie stehen auf der Liste. Halten Sie Ausschau nach den ersten Neuheiten.',
  },

  footer: {
    tagline: 'Hergestellt in Ägypten. Entworfen für Europa.',
    columns: {
      shop: { title: 'Shop', links: ['Die Kollektion', 'The Ivory Edit', 'Quiet Blue', 'Warm Neutrals'] },
      about: { title: 'Über uns', links: ['Der Instinkt', 'Ägypten, 1998', 'Der Name', 'Unsere Partner'] },
      care: { title: 'Kundenservice', links: ['Größentabelle', 'Versand', 'Rückgabe', 'Kontakt'] },
    },
    copyright: (year) => `© ${year} MOi & LiN`,
    region: 'Ägypten · Europa',
  },

  stickyCta: {
    label: 'Zur Kollektion',
    dismiss: 'Schließen',
  },

  languageSwitcher: {
    label: 'Sprache wählen',
  },
};
