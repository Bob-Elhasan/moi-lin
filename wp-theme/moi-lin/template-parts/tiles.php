<?php
/**
 * Three ways to begin: the category tiles. Commerce zone, so no entrance
 * reveal; hover zoom only.
 */

defined( 'ABSPATH' ) || exit;

$c     = moilin_copy()['tiles'];
$tiles = array(
	array( 'base' => 'assets/images/tiles/ivory-edit', 'fallback' => '#94A7B4' ),
	array( 'base' => 'assets/images/tiles/quiet-blue', 'fallback' => '#94A7B4' ),
	array( 'base' => 'assets/images/tiles/warm-neutrals', 'fallback' => '#CDB08A' ),
);
?>
<section data-pad="1" style="background:var(--ivory);padding:96px 80px">
	<div data-section-head="1" style="display:flex;justify-content:space-between;align-items:baseline;gap:24px;margin-bottom:40px;flex-wrap:wrap">
		<h2 data-display-40="1" style="font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;color:var(--chocolate);margin:0"><?php echo esc_html( $c['heading'] ); ?></h2>
		<a href="#collection" data-underline="1" data-tap="1" style="color:var(--camel);font-family:var(--font-body);font-weight:500"><?php echo esc_html( $c['view_all'] ); ?></a>
	</div>

	<div data-cols3="1" data-carousel="1" data-rail-target tabindex="0" role="group" aria-label="<?php echo esc_attr( $c['heading'] ); ?>" style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
		<?php foreach ( $c['items'] as $i => $item ) : ?>
			<a href="#collection" data-zoom-parent="1" style="position:relative;display:block;aspect-ratio:3/4;overflow:hidden;text-decoration:none;min-width:0">
				<?php
				moilin_photo(
					$tiles[ $i ]['base'],
					'(max-width: 900px) 78vw, 30vw',
					array( 'picture_style' => 'position:absolute;inset:0;width:100%;height:100%', 'img_data' => 'data-zoom-layer="1"', 'img_class' => 'moi-cover' )
				);
				?>
				<div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(58,46,40,0.6), rgba(58,46,40,0) 50%)"></div>
				<div style="position:absolute;left:20px;right:20px;bottom:20px;color:var(--ivory)">
					<div style="font-family:var(--font-display);font-size:28px;line-height:1.1"><?php echo esc_html( $item['name'] ); ?></div>
					<div style="font-family:var(--font-body);font-size:11px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;margin-top:8px"><?php echo esc_html( $item['descriptor'] ); ?></div>
				</div>
			</a>
		<?php endforeach; ?>
	</div>
	<?php get_template_part( 'template-parts/rail', null, array( 'style' => 'margin-top:20px' ) ); ?>
</section>
