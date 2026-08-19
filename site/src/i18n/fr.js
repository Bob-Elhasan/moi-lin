// Français — traduction éditoriale, dans le registre de la marque
// (voix directe, pas d'emphase commerciale, pas de mots interdits :
// luxe, curaté, sélectionné, parcours, artisanal comme adjectif marketing, intemporel, durable).
export default {
  code: 'fr',

  nav: {
    categories: ['Chemises', 'Pantalons', 'Extérieur', 'Accessoires'],
    search: 'Rechercher',
    account: 'Compte',
    bag: (n) => `Panier (${n})`,
    menu: 'Menu',
    close: 'Fermer',
    sizeGuide: 'Guide des tailles',
  },

  announcement: 'Livraison gratuite en Europe dès 150 €',

  hero: {
    eyebrow: 'Le Caire 1998 · Désormais en Europe',
    headline: 'Porté à même la peau. Tissé dans ce que vous êtes.',
    editorial: 'Lin égyptien. Trente ans de fabrication.',
    body: "On sent la qualité d'un tissu avant de la voir. Nous avons tout construit sur cette seule conviction depuis la première pièce, au Caire.",
    primaryCta: "Découvrir l'histoire",
    secondaryCta: 'Voir la collection',
  },

  proof: [
    { label: '1998', detail: 'Première porte ouverte au Caire' },
    { label: 'Dix adresses', detail: 'Une exigence bâtie pas à pas' },
    { label: 'Plus de 100 artisans', detail: 'Au sein de notre propre production' },
    { label: 'Lin du delta du Nil', detail: 'Cultivé depuis cinq mille ans' },
  ],

  instinct: {
    eyebrow: "L'instinct",
    headline: "Le style ne s'apprend pas. Il s'absorbe.",
    body: "Par la proximité, l'observation, et des années passées dans les pièces où le goût se façonne. Notre fondateur a vécu ces années comme mannequin, dans la mode européenne à son plus vivant : les essayages, les défilés, ces personnes qui comprenaient que ce que l'on porte n'est jamais seulement un vêtement.",
    quiet: "Façonné par la rigueur italienne. Nourri par la sensibilité française. Ancré dans une seule conviction : on sent la qualité d'un tissu avant de la voir.",
  },

  commitment: {
    eyebrow: "L'engagement",
    headline: 'Le Caire, 1998. Une pièce, une exigence.',
    body: "Que quiconque franchissait cette porte méritait des vêtements faits avec une entière intégrité de matière.",
    quiet: "Cette exigence a grandi. Dix adresses. Une production réunissant plus de cent mains expertes. Une chaîne d'approvisionnement enracinée dans le delta du Nil, où le lin est cultivé depuis cinq mille ans. Chaque pièce sortie de nos ateliers a porté la même conviction que la première.",
  },

  name: {
    eyebrow: 'Le nom',
    moiPrefix: '',
    moiSuffix: ', mot français, la première personne intime.',
    moiWord: 'Moi-même.',
    moiBody: "Le mot réservé à la proximité, à la version de vous qui apparaît quand vous êtes entièrement à l'aise.",
    linPrefix: '',
    linSuffix: ', du latin linum.',
    linWord: 'Le lin.',
    linBody: "Né dans le delta du Nil, porté à travers les civilisations, choisi par ceux qui ont compris que le raffinement, dans ce qu'il a de plus authentique, naît de la terre.",
    closing: "La personne, et le tissu fait pour elle. Un vêtement qui ne s'annonce pas.",
  },

  tiles: {
    heading: 'Trois façons de commencer',
    viewAll: 'Tout voir',
    items: [
      { name: 'The Ivory Edit', descriptor: 'Chemises en lin essentielles' },
      { name: 'Quiet Blue', descriptor: 'Pièces du quotidien adoucies' },
      { name: 'Warm Neutrals', descriptor: 'Teintes du delta' },
    ],
  },

  pillars: {
    heading: "Trois choses qui n'ont pas changé depuis la première pièce.",
    items: [
      {
        title: 'Authenticité',
        sub: 'Le tissu parle en premier.',
        body: "Ivoire naturel. Texture vivante. Une fibre cultivée et travaillée avec une entière intégrité. Chaque pièce porte exactement ce que la matière offre, et cela a toujours largement suffi.",
      },
      {
        title: 'Identité',
        sub: 'Portez ce que vous êtes.',
        body: 'Chaque silhouette est pensée pour une seule personne. Votre instinct, votre sensibilité, votre présence. MOi & LiN ne vous habille pas. Elle vous reconnaît.',
      },
      {
        title: 'Fiabilité',
        sub: 'Gagnée avant même son arrivée.',
        body: "Trois décennies. Dix adresses. Cent artisans. La confiance que MOi & LiN apporte en Europe s'est construite en silence, bien avant que la première porte européenne ne s'ouvre.",
      },
    ],
  },

  horizon: {
    eyebrow: 'Le prochain horizon',
    headline: 'Deux continents dans chaque collection.',
    body: "MOi & LiN arrive en Europe, portée par quatre associés dont l'expertise s'étend à la mode, la logistique, le commerce numérique et la distribution. La générosité du tissu égyptien, la précision du regard européen.",
    quiet: "Rassemblé par des gens qui n'ont jamais suivi une tendance : ils en ont lancé une. Fait pour ceux qui connaissent déjà la différence, et la sentent dès que leur main touche le tissu.",
  },

  service: ['Livraison gratuite en Europe dès 150 €', 'Retours sous 30 jours', 'Fabriqué en Égypte', 'Paiement sécurisé via le revendeur'],

  collection: {
    eyebrow: 'Chemises en lin pour femme',
    heading: 'Fait pour être porté. Aimé pendant des années.',
    productCount: (n) => `${n} ${n === 1 ? 'produit' : 'produits'}`,
    sortLabel: 'Trier',
    sortFeatured: 'En vedette',
    sortPriceAsc: 'Prix croissant',
    sortPriceDesc: 'Prix décroissant',
    colourGroupLabel: 'Couleur',
    sizeAvailable: ' disponible',
    sizeUnavailable: ' indisponible',
    shopAt: (retailer) => `Disponible chez ${retailer}`,
    details: 'Détails',
    hideDetails: 'Masquer les détails',
    detailLabels: {
      Composition: 'Composition',
      Weight: 'Poids',
      Fit: 'Coupe',
      Care: 'Entretien',
      Origin: 'Origine',
      Delivery: 'Livraison',
    },
    close: 'Fermer',
    onBodyLabel: (name, colour) => `${name} en ${colour} — cadre 3:4, porté`,
    hoverLabel: 'Détail du tissu / aspect vécu — image au survol',
  },

  colours: { Ivory: 'Ivoire', Blue: 'Bleu', Camel: 'Camel' },

  products: {
    'relaxed-ivory': {
      name: 'Chemise Ivoire Ample',
      details: {
        Composition: '100 % lin égyptien, provenant du delta du Nil',
        Weight: '165 g/m², poids moyen',
        Fit: 'Coupe ample à la poitrine et au buste, épaule tombante',
        Care: 'Lavage en machine à 30°, séchage à l’air libre, repassage à chaud modéré',
        Origin: 'Tissé et confectionné en Égypte',
        Delivery: '3 à 5 jours ouvrés en Europe',
      },
    },
    'dusty-blue': {
      name: 'Chemise Popeline Bleu Poudré',
      details: {
        Composition: '100 % lin égyptien, tissage popeline',
        Weight: '145 g/m², léger',
        Fit: 'Coupe classique, ajustée à la taille',
        Care: 'Lavage en machine à 30°, séchage à l’air libre, repassage à chaud modéré',
        Origin: 'Tissé et confectionné en Égypte',
        Delivery: '3 à 5 jours ouvrés en Europe',
      },
    },
    'soft-camel': {
      name: 'Chemise en Lin Camel Doux',
      details: {
        Composition: '100 % lin égyptien, délavé après confection',
        Weight: '175 g/m², poids moyen',
        Fit: 'Coupe ample, longueur plus généreuse, taille légèrement marquée',
        Care: 'Lavage en machine à 30°, séchage à l’air libre, repassage à chaud modéré',
        Origin: 'Tissé et confectionné en Égypte',
        Delivery: '3 à 5 jours ouvrés en Europe',
      },
    },
    'essential-ivory': {
      name: 'Chemise Ivoire Essentielle',
      details: {
        Composition: '100 % lin égyptien, provenant du delta du Nil',
        Weight: '155 g/m², léger à moyen',
        Fit: 'Coupe classique, manche ajustée, taille structurée',
        Care: 'Lavage en machine à 30°, séchage à l’air libre, repassage à chaud modéré',
        Origin: 'Tissé et confectionné en Égypte',
        Delivery: '3 à 5 jours ouvrés en Europe',
      },
    },
  },

  newsletter: {
    headline: 'Un podium. Une conviction. Une décision qui a traversé les continents.',
    quiet: "Et aujourd'hui, un vêtement qui, dès le premier port, semble avoir toujours été le vôtre.",
    kicker: 'Restez informé',
    body: 'Les nouveautés, pensées avec soin, envoyées quand cela en vaut la peine.',
    emailLabel: 'Adresse e-mail',
    placeholder: 'vous@exemple.com',
    subscribeCta: "S'abonner",
    subscribedMessage: 'Vous êtes sur la liste. Guettez les premières arrivées.',
  },

  footer: {
    tagline: "Fabriqué en Égypte. Conçu pour l'Europe.",
    columns: {
      shop: { title: 'Boutique', links: ['La collection', 'The Ivory Edit', 'Quiet Blue', 'Warm Neutrals'] },
      about: { title: 'À propos', links: ["L'instinct", 'Le Caire, 1998', 'Le nom', 'Nos partenaires'] },
      care: { title: 'Service client', links: ['Guide des tailles', 'Livraison', 'Retours', 'Contact'] },
    },
    copyright: (year) => `© ${year} MOi & LiN`,
    region: 'Le Caire · Europe',
  },

  stickyCta: {
    label: 'Voir la collection',
    dismiss: 'Fermer',
  },

  languageSwitcher: {
    label: 'Choisir la langue',
  },
};
