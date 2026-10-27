<?php
/**
 * Swipe affordance for a scroll-snap row. Wired to its carousel by
 * assets/js/site.js: it is the carousel's next sibling, or the rail that
 * follows the element carrying data-rail-target.
 *
 * @param array $args { on_chocolate?: bool, style?: string }
 */

defined( 'ABSPATH' ) || exit;

$args        = wp_parse_args( $args ?? array(), array( 'on_chocolate' => false, 'style' => '' ) );
$track_attrs = $args['on_chocolate'] ? ' data-on-chocolate="1"' : '';
$style       = $args['style'] ? ' style="' . esc_attr( $args['style'] ) . '"' : '';
?>
<div data-rail aria-hidden="true" data-rail-root<?php echo $style; ?>>
	<div data-rail-track<?php echo $track_attrs; ?>>
		<div data-rail-thumb style="width:100%"></div>
	</div>
</div>
