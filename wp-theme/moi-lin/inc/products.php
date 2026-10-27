<?php
/**
 * Product catalogue, mirrored from site/src/data/products.js and the
 * `products` block of site/src/i18n/en.js. Retailer links are placeholders
 * until real product URLs exist.
 */

defined( 'ABSPATH' ) || exit;

function moilin_products() {
	return array(
		array(
			'id'          => 'relaxed-ivory',
			'name'        => 'Relaxed Ivory Shirt',
			'price'       => 150,
			'colours'     => array( 'Ivory', 'Blue', 'Camel' ),
			'unavailable' => array( 'XS' ),
			'retailer'    => 'Retailer A',
			'images'      => array(
				'Ivory' => array( 'thumb' => 'assets/images/products/relaxed-ivory-front', 'hover' => 'assets/images/products/relaxed-ivory-detail' ),
			),
			'details'     => array(
				'Composition' => '100% Egyptian linen, Nile Delta flax',
				'Weight'      => '165 gsm, mid-weight',
				'Fit'         => 'Relaxed through the bust and body, dropped shoulder',
				'Care'        => 'Machine wash 30°, line dry, warm iron',
				'Origin'      => 'Woven and made in Egypt',
				'Delivery'    => '3 to 5 working days across Europe',
			),
		),
		array(
			'id'          => 'dusty-blue',
			'name'        => 'Dusty Blue Poplin Shirt',
			'price'       => 165,
			'colours'     => array( 'Blue', 'Ivory' ),
			'unavailable' => array(),
			'retailer'    => 'Retailer A',
			'images'      => array(
				'Blue' => array( 'thumb' => 'assets/images/products/dusty-blue-front', 'hover' => 'assets/images/products/dusty-blue-detail' ),
			),
			'details'     => array(
				'Composition' => '100% Egyptian linen, poplin weave',
				'Weight'      => '145 gsm, light',
				'Fit'         => 'Classic, tailored through the waist',
				'Care'        => 'Machine wash 30°, line dry, warm iron',
				'Origin'      => 'Woven and made in Egypt',
				'Delivery'    => '3 to 5 working days across Europe',
			),
		),
		array(
			'id'          => 'soft-camel',
			'name'        => 'Soft Camel Shirt',
			'price'       => 170,
			'colours'     => array( 'Camel', 'Ivory' ),
			'unavailable' => array( 'XL' ),
			'retailer'    => 'Retailer B',
			'images'      => array(
				'Camel' => array( 'thumb' => 'assets/images/products/soft-camel-front', 'hover' => 'assets/images/products/soft-camel-detail' ),
			),
			'details'     => array(
				'Composition' => '100% Egyptian linen, garment washed',
				'Weight'      => '175 gsm, mid-weight',
				'Fit'         => 'Relaxed, longer length, gently shaped waist',
				'Care'        => 'Machine wash 30°, line dry, warm iron',
				'Origin'      => 'Woven and made in Egypt',
				'Delivery'    => '3 to 5 working days across Europe',
			),
		),
		array(
			'id'          => 'essential-ivory',
			'name'        => 'Essential Ivory Shirt',
			'price'       => 145,
			'colours'     => array( 'Ivory' ),
			'unavailable' => array(),
			'retailer'    => 'Retailer B',
			'images'      => array(
				'Ivory' => array( 'thumb' => 'assets/images/products/essential-ivory-front', 'hover' => 'assets/images/products/essential-ivory-detail' ),
			),
			'details'     => array(
				'Composition' => '100% Egyptian linen, Nile Delta flax',
				'Weight'      => '155 gsm, light to mid',
				'Fit'         => 'Classic, fitted sleeve, tailored waist',
				'Care'        => 'Machine wash 30°, line dry, warm iron',
				'Origin'      => 'Woven and made in Egypt',
				'Delivery'    => '3 to 5 working days across Europe',
			),
		),
	);
}

const MOILIN_SIZES = array( 'XS', 'S', 'M', 'L', 'XL' );

function moilin_swatch( $colour ) {
	$map = array(
		'Ivory' => '#F6F1E6',
		'Blue'  => 'var(--dusty-blue)',
		'Camel' => 'var(--camel)',
	);
	return isset( $map[ $colour ] ) ? $map[ $colour ] : 'var(--line)';
}

function moilin_frame( $colour ) {
	$map = array(
		'Ivory' => '#EFE9DC',
		'Blue'  => '#B9C6CF',
		'Camel' => '#CDB08A',
	);
	return isset( $map[ $colour ] ) ? $map[ $colour ] : 'var(--line)';
}

/** Deep link into the placeholder retailer's product page. */
function moilin_href( $product, $colour ) {
	return 'https://example-retailer.test/moi-lin/' . $product['id'] . '?colour=' . strtolower( $colour );
}
