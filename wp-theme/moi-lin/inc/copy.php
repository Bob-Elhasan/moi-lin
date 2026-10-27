<?php
/**
 * English copy, mirrored from site/src/i18n/en.js.
 * Edit the wording here, not in the template files.
 */

defined( 'ABSPATH' ) || exit;

function moilin_copy() {
	static $copy = null;
	if ( null !== $copy ) {
		return $copy;
	}

	$copy = array(
		'announcement' => 'Free European shipping over €150',

		'nav'          => array(
			'categories'      => array( 'Men', 'Women', 'Accessories' ),
			'search'          => 'Search',
			'account'         => 'Account',
			'bag'             => 'Bag (0)',
			'menu'            => 'Menu',
			'close'           => 'Close',
			'size_guide'      => 'Size guide',
			'categories_label' => 'Categories',
			'home'            => 'MOi & LiN — back to top',
			'skip'            => 'Skip to content',
		),

		'hero'         => array(
			'eyebrow'       => 'Egypt 1998 · Now in Europe',
			'headline'      => 'Worn into the skin. Woven into who you are.',
			'editorial'     => 'Nile Delta textile. Thirty years in the making.',
			'body'          => 'The quality of a fabric is felt before it is seen. We have built everything on that one conviction since the first room in Egypt.',
			'primary_cta'   => 'Read the story',
			'secondary_cta' => 'Shop the collection',
		),

		'proof'        => array(
			array( 'label' => '1998', 'detail' => 'First door in Egypt' ),
			array( 'label' => '100+ craftspeople', 'detail' => 'In our own manufacturing' ),
			array( 'label' => 'Nile Delta textile', 'detail' => 'Crafted for five thousand years' ),
		),

		'instinct'     => array(
			'eyebrow'  => 'The instinct',
			'headline' => 'Style is rarely taught. It is absorbed.',
			'body'     => 'Through proximity, observation, and years spent inside the rooms where taste gets made. Our founder spent those years as a model in European fashion at its most alive: the fittings, the runways, the people who understood that what someone wears is never just clothing.',
			'quiet'    => 'Shaped by Italian rigour. Informed by French sensibility. Grounded in one conviction: the quality of a fabric is felt before it is seen.',
		),

		'commitment'   => array(
			'eyebrow'  => 'The commitment',
			'headline' => 'Egypt, 1998. One room, one standard.',
			'body'     => 'That everyone who walked through the door deserved clothes made with full material integrity.',
			'quiet'    => 'That standard grew. A manufacturing operation of over a hundred skilled hands. A supply chain rooted in the Nile Delta, where textile has been crafted for five thousand years — flax, cotton, silk, each worked with the same hand. Every piece that left carried the same conviction as the first.',
		),

		'name'         => array(
			'eyebrow'    => 'The name',
			'moi_suffix' => ', French, intimate first person.',
			'moi_word'   => 'Myself.',
			'moi_body'   => 'The word reserved for closeness, for the version of you that surfaces when you are entirely at ease.',
			'lin_suffix' => ', from the Latin linum.',
			'lin_word'   => 'Linen.',
			'lin_body'   => 'Born in the Nile Delta, carried across civilisations, worn by people who understood that refinement, at its most enduring, is grown from the earth.',
			'closing'    => 'The person, and the fabric made for them. A garment that does not announce itself.',
		),

		'tiles'        => array(
			'heading'  => 'Three ways to begin',
			'view_all' => 'View all',
			'items'    => array(
				array( 'name' => 'The Ivory Edit', 'descriptor' => 'Essential Nile Delta shirting' ),
				array( 'name' => 'Quiet Blue', 'descriptor' => 'Softened everyday pieces' ),
				array( 'name' => 'Warm Neutrals', 'descriptor' => 'Delta tones' ),
			),
		),

		'pillars'      => array(
			'heading' => 'Three things that have not changed since the first room.',
			'items'   => array(
				array(
					'title' => 'Authenticity',
					'sub'   => 'The fabric speaks first.',
					'body'  => 'Natural ivory. Living texture. Fibre grown and handled with full integrity. Every piece carries exactly what the material offers, and that has always been more than enough.',
				),
				array(
					'title' => 'Identity',
					'sub'   => 'Wear what you are.',
					'body'  => 'Every silhouette is conceived around one person. Your instinct, your sensibility, your presence. MOi & LiN does not dress you. It recognises you.',
				),
				array(
					'title' => 'Reliability',
					'sub'   => 'Earned before arrived.',
					'body'  => 'Three decades. A hundred craftspeople. The confidence MOi & LiN brings to Europe was built quietly, long before the first European door opened.',
				),
			),
		),

		'horizon'      => array(
			'eyebrow'  => 'The next horizon',
			'headline' => 'Two continents in every collection.',
			'body'     => 'MOi & LiN arrives in Europe carried by four partners, their expertise woven across fashion, logistics, digital commerce, and retail. The generosity of Egyptian fabric, the precision of the European eye.',
			'quiet'    => 'Curated by people who have never followed a trend, only led one. Made for those who already know the difference, and feel it the moment their hand touches the cloth.',
		),

		'service'      => array( 'Free European shipping over €150', '30-day returns', 'Made in Egypt', 'Secure payment via retailer' ),

		'collection'   => array(
			'eyebrow'            => "Women's Nile Delta shirting",
			'heading'            => 'Made to be worn. Loved for years.',
			'sort_label'         => 'Sort',
			'sort_featured'      => 'Featured',
			'sort_price_asc'     => 'Price, low to high',
			'sort_price_desc'    => 'Price, high to low',
			'colour_group_label' => 'Colour',
			'size_available'     => ' available',
			'size_unavailable'   => ' unavailable',
			'details'            => 'Details',
			'hide_details'       => 'Hide details',
			'detail_labels'      => array(
				'Composition' => 'Composition',
				'Weight'      => 'Weight',
				'Fit'         => 'Fit',
				'Care'        => 'Care',
				'Origin'      => 'Origin',
				'Delivery'    => 'Delivery',
			),
			'close'              => 'Close',
			'hover_label'        => 'Fabric detail / worn-in crop — hover frame',
		),

		'colours'      => array( 'Ivory' => 'Ivory', 'Blue' => 'Blue', 'Camel' => 'Camel' ),

		'newsletter'   => array(
			'headline'           => 'A runway. A conviction. A decision that crossed continents.',
			'quiet'              => 'And now a garment that feels, from the first wear, like it was always yours.',
			'kicker'             => 'Stay in the loop',
			'body'               => 'New arrivals, thoughtfully made, sent when there is something worth sending.',
			'email_label'        => 'Email address',
			'placeholder'        => 'you@example.com',
			'subscribe_cta'      => 'Subscribe',
			'subscribed_message' => 'You are on the list. Watch for the first arrivals.',
		),

		'footer'       => array(
			'tagline' => 'Made in Egypt. Designed for Europe.',
			'columns' => array(
				'shop'  => array( 'title' => 'Shop', 'links' => array( 'The collection', 'The Ivory Edit', 'Quiet Blue', 'Warm Neutrals' ) ),
				'about' => array( 'title' => 'About', 'links' => array( 'The instinct', 'Egypt, 1998', 'The name', 'Our partners' ) ),
				'care'  => array( 'title' => 'Customer care', 'links' => array( 'Size guide', 'Shipping', 'Returns', 'Contact' ) ),
			),
			'region'  => 'Egypt · Europe',
		),

		'sticky_cta'   => array(
			'label'   => 'Shop the collection',
			'dismiss' => 'Close',
		),
	);

	return $copy;
}
