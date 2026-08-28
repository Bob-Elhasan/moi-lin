// English — canonical copy, matches the approved brief and design system voice.
export default {
  code: 'en',

  nav: {
    categories: ['Men', 'Women', 'Accessories'],
    search: 'Search',
    account: 'Account',
    bag: (n) => `Bag (${n})`,
    menu: 'Menu',
    close: 'Close',
    sizeGuide: 'Size guide',
    categoriesLabel: 'Categories',
    home: 'MOi & LiN — back to top',
    skipToContent: 'Skip to content',
  },

  announcement: 'Free European shipping over €150',

  hero: {
    eyebrow: 'Egypt 1998 · Now in Europe',
    headline: 'Worn into the skin. Woven into who you are.',
    editorial: 'Nile Delta textile. Thirty years in the making.',
    body: 'The quality of a fabric is felt before it is seen. We have built everything on that one conviction since the first room in Egypt.',
    primaryCta: 'Read the story',
    secondaryCta: 'Shop the collection',
  },

  proof: [
    { label: '1998', detail: 'First door in Egypt' },
    { label: '100+ craftspeople', detail: 'In our own manufacturing' },
    { label: 'Nile Delta textile', detail: 'Crafted for five thousand years' },
  ],

  instinct: {
    eyebrow: 'The instinct',
    headline: 'Style is rarely taught. It is absorbed.',
    body: 'Through proximity, observation, and years spent inside the rooms where taste gets made. Our founder spent those years as a model in European fashion at its most alive: the fittings, the runways, the people who understood that what someone wears is never just clothing.',
    quiet: 'Shaped by Italian rigour. Informed by French sensibility. Grounded in one conviction: the quality of a fabric is felt before it is seen.',
  },

  commitment: {
    eyebrow: 'The commitment',
    headline: 'Egypt, 1998. One room, one standard.',
    body: 'That everyone who walked through the door deserved clothes made with full material integrity.',
    quiet: 'That standard grew. A manufacturing operation of over a hundred skilled hands. A supply chain rooted in the Nile Delta, where textile has been crafted for five thousand years — flax, cotton, silk, each worked with the same hand. Every piece that left carried the same conviction as the first.',
  },

  name: {
    eyebrow: 'The name',
    moiPrefix: '',
    moiSuffix: ', French, intimate first person.',
    moiWord: 'Myself.',
    moiBody: 'The word reserved for closeness, for the version of you that surfaces when you are entirely at ease.',
    linPrefix: '',
    linSuffix: ', from the Latin linum.',
    linWord: 'Linen.',
    linBody: 'Born in the Nile Delta, carried across civilisations, worn by people who understood that refinement, at its most enduring, is grown from the earth.',
    closing: 'The person, and the fabric made for them. A garment that does not announce itself.',
  },

  tiles: {
    heading: 'Three ways to begin',
    viewAll: 'View all',
    items: [
      { name: 'The Ivory Edit', descriptor: 'Essential Nile Delta shirting' },
      { name: 'Quiet Blue', descriptor: 'Softened everyday pieces' },
      { name: 'Warm Neutrals', descriptor: 'Delta tones' },
    ],
  },

  pillars: {
    heading: 'Three things that have not changed since the first room.',
    items: [
      {
        title: 'Authenticity',
        sub: 'The fabric speaks first.',
        body: 'Natural ivory. Living texture. Fibre grown and handled with full integrity. Every piece carries exactly what the material offers, and that has always been more than enough.',
      },
      {
        title: 'Identity',
        sub: 'Wear what you are.',
        body: 'Every silhouette is conceived around one person. Your instinct, your sensibility, your presence. MOi & LiN does not dress you. It recognises you.',
      },
      {
        title: 'Reliability',
        sub: 'Earned before arrived.',
        body: 'Three decades. A hundred craftspeople. The confidence MOi & LiN brings to Europe was built quietly, long before the first European door opened.',
      },
    ],
  },

  horizon: {
    eyebrow: 'The next horizon',
    headline: 'Two continents in every collection.',
    body: 'MOi & LiN arrives in Europe carried by four partners, their expertise woven across fashion, logistics, digital commerce, and retail. The generosity of Egyptian fabric, the precision of the European eye.',
    quiet: 'Curated by people who have never followed a trend, only led one. Made for those who already know the difference, and feel it the moment their hand touches the cloth.',
  },

  service: ['Free European shipping over €150', '30-day returns', 'Made in Egypt', 'Secure payment via retailer'],

  collection: {
    eyebrow: "Women's Nile Delta shirting",
    heading: 'Made to be worn. Loved for years.',
    productCount: (n) => `${n} ${n === 1 ? 'product' : 'products'}`,
    sortLabel: 'Sort',
    sortFeatured: 'Featured',
    sortPriceAsc: 'Price, low to high',
    sortPriceDesc: 'Price, high to low',
    colourGroupLabel: 'Colour',
    sizeAvailable: ' available',
    sizeUnavailable: ' unavailable',
    shopAt: (retailer) => `Shop at ${retailer}`,
    details: 'Details',
    hideDetails: 'Hide details',
    detailLabels: {
      Composition: 'Composition',
      Weight: 'Weight',
      Fit: 'Fit',
      Care: 'Care',
      Origin: 'Origin',
      Delivery: 'Delivery',
    },
    close: 'Close',
    onBodyLabel: (name, colour) => `${name} in ${colour} — 3:4 on-body frame`,
    hoverLabel: 'Fabric detail / worn-in crop — hover frame',
  },

  colours: { Ivory: 'Ivory', Blue: 'Blue', Camel: 'Camel' },

  products: {
    'relaxed-ivory': {
      name: 'Relaxed Ivory Shirt',
      details: {
        Composition: '100% Egyptian linen, Nile Delta flax',
        Weight: '165 gsm, mid-weight',
        Fit: 'Relaxed through the bust and body, dropped shoulder',
        Care: 'Machine wash 30°, line dry, warm iron',
        Origin: 'Woven and made in Egypt',
        Delivery: '3 to 5 working days across Europe',
      },
    },
    'dusty-blue': {
      name: 'Dusty Blue Poplin Shirt',
      details: {
        Composition: '100% Egyptian linen, poplin weave',
        Weight: '145 gsm, light',
        Fit: 'Classic, tailored through the waist',
        Care: 'Machine wash 30°, line dry, warm iron',
        Origin: 'Woven and made in Egypt',
        Delivery: '3 to 5 working days across Europe',
      },
    },
    'soft-camel': {
      name: 'Soft Camel Shirt',
      details: {
        Composition: '100% Egyptian linen, garment washed',
        Weight: '175 gsm, mid-weight',
        Fit: 'Relaxed, longer length, gently shaped waist',
        Care: 'Machine wash 30°, line dry, warm iron',
        Origin: 'Woven and made in Egypt',
        Delivery: '3 to 5 working days across Europe',
      },
    },
    'essential-ivory': {
      name: 'Essential Ivory Shirt',
      details: {
        Composition: '100% Egyptian linen, Nile Delta flax',
        Weight: '155 gsm, light to mid',
        Fit: 'Classic, fitted sleeve, tailored waist',
        Care: 'Machine wash 30°, line dry, warm iron',
        Origin: 'Woven and made in Egypt',
        Delivery: '3 to 5 working days across Europe',
      },
    },
  },

  newsletter: {
    headline: 'A runway. A conviction. A decision that crossed continents.',
    quiet: 'And now a garment that feels, from the first wear, like it was always yours.',
    kicker: 'Stay in the loop',
    body: 'New arrivals, thoughtfully made, sent when there is something worth sending.',
    emailLabel: 'Email address',
    placeholder: 'you@example.com',
    subscribeCta: 'Subscribe',
    subscribedMessage: 'You are on the list. Watch for the first arrivals.',
  },

  footer: {
    tagline: 'Made in Egypt. Designed for Europe.',
    columns: {
      shop: { title: 'Shop', links: ['The collection', 'The Ivory Edit', 'Quiet Blue', 'Warm Neutrals'] },
      about: { title: 'About', links: ['The instinct', 'Egypt, 1998', 'The name', 'Our partners'] },
      care: { title: 'Customer care', links: ['Size guide', 'Shipping', 'Returns', 'Contact'] },
    },
    copyright: (year) => `© ${year} MOi & LiN`,
    region: 'Egypt · Europe',
  },

  stickyCta: {
    label: 'Shop the collection',
    dismiss: 'Close',
  },

  languageSwitcher: {
    label: 'Select language',
  },
};
