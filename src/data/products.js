// Structural catalogue data — locale-independent. Display text (name, colour
// labels, detail copy) lives in the i18n dictionaries under `products` and
// `colours`, keyed by these same product ids and canonical colour keys.
//
// Retailer links are placeholders — no confirmed retailer URLs or names
// exist yet. Swap `retailer` and the URL built by `hrefFor` for real deep
// product links once they're available.
// `images`, where present, is keyed by colour and gives real photography —
// `thumb` (primary on-body shot) and `hover` (secondary crop, swapped in on
// hover per the brief). Colours without an entry fall back to the flat
// placeholder frame until photography exists for that colourway.
export const PRODUCTS = [
  {
    id: 'relaxed-ivory',
    price: 150,
    fit: 'Relaxed',
    colours: ['Ivory', 'Blue', 'Camel'],
    unavailable: ['XS'],
    retailer: 'Retailer A',
    images: {
      Ivory: { thumb: 'assets/images/products/relaxed-ivory-front', hover: 'assets/images/products/relaxed-ivory-detail' },
    },
  },
  {
    id: 'dusty-blue',
    price: 165,
    fit: 'Classic',
    colours: ['Blue', 'Ivory'],
    unavailable: [],
    retailer: 'Retailer A',
    images: {
      Blue: { thumb: 'assets/images/products/dusty-blue-front', hover: 'assets/images/products/dusty-blue-detail' },
    },
  },
  {
    id: 'soft-camel',
    price: 170,
    fit: 'Relaxed',
    colours: ['Camel', 'Ivory'],
    unavailable: ['XL'],
    retailer: 'Retailer B',
    images: {
      Camel: { thumb: 'assets/images/products/soft-camel-front', hover: 'assets/images/products/soft-camel-detail' },
    },
  },
  {
    id: 'essential-ivory',
    price: 145,
    fit: 'Classic',
    colours: ['Ivory'],
    unavailable: [],
    retailer: 'Retailer B',
    images: {
      Ivory: { thumb: 'assets/images/products/essential-ivory-front', hover: 'assets/images/products/essential-ivory-detail' },
    },
  },
];

export const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

const SWATCH_COLOURS = { Ivory: '#F6F1E6', Blue: 'var(--dusty-blue)', Camel: 'var(--camel)' };
const FRAME_COLOURS = { Ivory: '#EFE9DC', Blue: '#B9C6CF', Camel: '#CDB08A' };

export function swatchOf(name) {
  return SWATCH_COLOURS[name] || 'var(--line)';
}

export function frameOf(name, hovered) {
  if (hovered) return '#E4DCCA';
  return FRAME_COLOURS[name] || 'var(--line)';
}

// Deep link into the (placeholder) retailer's product page, never a generic storefront.
export function hrefFor(product, colour) {
  return 'https://example-retailer.test/moi-lin/' + product.id + '?colour=' + colour.toLowerCase();
}
