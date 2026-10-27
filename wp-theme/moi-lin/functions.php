<?php
/**
 * MOi & LiN theme setup: assets, image helpers and the copy/product data
 * the landing page templates read from.
 */

defined( 'ABSPATH' ) || exit;

define( 'MOILIN_VERSION', '1.0.0' );

require_once get_theme_file_path( 'inc/copy.php' );
require_once get_theme_file_path( 'inc/products.php' );

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'title-tag' );
		add_theme_support( 'html5', array( 'script', 'style' ) );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style( 'moilin-tokens', get_theme_file_uri( 'assets/css/tokens.css' ), array(), MOILIN_VERSION );
		wp_enqueue_style( 'moilin-global', get_theme_file_uri( 'assets/css/global.css' ), array( 'moilin-tokens' ), MOILIN_VERSION );
		wp_enqueue_style( 'moilin-theme', get_theme_file_uri( 'assets/css/theme.css' ), array( 'moilin-global' ), MOILIN_VERSION );
		wp_enqueue_script( 'moilin-site', get_theme_file_uri( 'assets/js/site.js' ), array(), MOILIN_VERSION, array( 'strategy' => 'defer', 'in_footer' => true ) );
	}
);

/**
 * Responsive image manifest, written by the React site's gen-manifest step.
 * Maps a base path such as "assets/images/hero" to the widths generated for it.
 */
function moilin_manifest() {
	static $manifest = null;
	if ( null === $manifest ) {
		$raw      = file_get_contents( get_theme_file_path( 'assets/data/imageManifest.json' ) );
		$manifest = json_decode( (string) $raw, true );
		if ( ! is_array( $manifest ) ) {
			$manifest = array();
		}
	}
	return $manifest;
}

/**
 * Prints a <picture> with WebP and JPEG sources at each generated width.
 * Mirrors the React Photo component: the largest JPEG is the fallback src.
 *
 * @param string $base  Manifest key, e.g. "assets/images/hero".
 * @param string $sizes The `sizes` attribute for the responsive set.
 * @param array  $args  Optional: alt, eager, img_class, picture_style.
 */
function moilin_photo( $base, $sizes, $args = array() ) {
	$alt     = isset( $args['alt'] ) ? $args['alt'] : '';
	$eager   = ! empty( $args['eager'] );
	$manifest = moilin_manifest();
	$entry    = isset( $manifest[ $base ] ) ? $manifest[ $base ] : null;

	$picture_style = isset( $args['picture_style'] ) ? ' style="' . esc_attr( $args['picture_style'] ) . '"' : '';
	$img_class     = isset( $args['img_class'] ) ? ' class="' . esc_attr( $args['img_class'] ) . '"' : '';
	$img_data      = isset( $args['img_data'] ) ? ' ' . $args['img_data'] : '';

	if ( ! $entry ) {
		$src = get_theme_file_uri( $base . '.jpg' );
		printf(
			'<picture%1$s><img src="%2$s" alt="%3$s" loading="%4$s"%5$s%6$s></picture>',
			$picture_style,
			esc_url( $src ),
			esc_attr( $alt ),
			$eager ? 'eager' : 'lazy',
			$img_class,
			$img_data
		);
		return;
	}

	$widths = $entry['widths'];
	$webp   = array();
	$jpg    = array();
	foreach ( $widths as $w ) {
		$webp[] = esc_url( get_theme_file_uri( "{$base}-{$w}.webp" ) ) . " {$w}w";
		$jpg[]  = esc_url( get_theme_file_uri( "{$base}-{$w}.jpg" ) ) . " {$w}w";
	}
	$largest = end( $widths );
	$src     = get_theme_file_uri( "{$base}-{$largest}.jpg" );

	printf(
		'<picture%1$s><source type="image/webp" srcset="%2$s" sizes="%3$s"><img src="%4$s" srcset="%5$s" sizes="%3$s" alt="%6$s" loading="%7$s"%8$s%9$s%10$s decoding="%11$s"></picture>',
		$picture_style,
		implode( ', ', $webp ),
		esc_attr( $sizes ),
		esc_url( $src ),
		implode( ', ', $jpg ),
		esc_attr( $alt ),
		$eager ? 'eager' : 'lazy',
		$eager ? ' fetchpriority="high"' : '',
		$img_class,
		$img_data,
		$eager ? 'auto' : 'async'
	);
}

/** Absolute URL for a file inside assets/. */
function moilin_asset( $path ) {
	return get_theme_file_uri( 'assets/' . ltrim( $path, '/' ) );
}

/** Thread-and-label opener used above story-section eyebrows. */
function moilin_eyebrow( $text, $on_chocolate = false, $thread_width = 56 ) {
	printf(
		'<div class="moi-eyebrow"><span data-thread="out" aria-hidden="true" style="width:%1$dpx;background:var(--camel);--reveal-delay:0ms"></span><p class="moi-eyebrow__text">%2$s</p></div>',
		(int) $thread_width,
		esc_html( $text )
	);
}

/** Running-stitch seam between two sections, drawn by scroll position. */
function moilin_stitch( $background ) {
	printf(
		'<div data-stitch="1" aria-hidden="true" style="background:%s;height:24px;display:flex;align-items:center;overflow:hidden"><div data-stitch-draw="1" style="width:100%%"><svg width="100%%" height="9" preserveAspectRatio="none" style="display:block"><line x1="0" y1="4.5" x2="100%%" y2="4.5" stroke="var(--camel)" stroke-width="1" stroke-dasharray="2 7" stroke-linecap="round"/></svg></div></div>',
		esc_attr( $background )
	);
}
