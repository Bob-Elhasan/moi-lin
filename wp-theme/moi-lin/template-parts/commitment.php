<?php
/**
 * The commitment: the workshop story, with three crops in a row that become
 * a swipeable rail on mobile.
 */

defined( 'ABSPATH' ) || exit;

$c     = moilin_copy()['commitment'];
$crops = array(
	array( 'base' => 'assets/images/commitment-crop-1', 'alt' => 'A silk cardigan seam and woven MOi & LiN label, close up' ),
	array( 'base' => 'assets/images/commitment-crop-2', 'alt' => 'Detail of selvedge and buttonhole stitching' ),
	array( 'base' => 'assets/images/commitment-crop-3', 'alt' => 'A sewing machine embroidering the MOi & LiN monogram' ),
);
?>
<section data-story="1" data-pad="1" style="background:var(--chocolate);padding:144px 80px">
	<div data-split="1" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center">
		<div>
			<?php moilin_eyebrow( $c['eyebrow'], true ); ?>
			<h2 data-lines="out" data-display-64="1" data-text="<?php echo esc_attr( $c['headline'] ); ?>" data-delay="80" style="font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;color:var(--ivory);margin:0 0 24px;max-width:24ch;text-wrap:pretty"><?php echo esc_html( $c['headline'] ); ?></h2>
			<p data-reveal="out" data-delay="220" style="font-family:var(--font-body);font-size:15px;line-height:1.6;color:var(--ivory);margin:0 0 24px;max-width:54ch;text-wrap:pretty"><?php echo esc_html( $c['body'] ); ?></p>
			<p data-reveal="out" data-delay="320" style="font-family:var(--font-display);font-style:italic;font-size:21px;line-height:1.45;color:var(--ink-muted-on-chocolate);margin:0;max-width:46ch;text-wrap:pretty"><?php echo esc_html( $c['quiet'] ); ?></p>
		</div>
		<div data-reveal="out" data-reveal-variant="image" style="position:relative;overflow:hidden;aspect-ratio:3/4" role="img" aria-label="Hands at work in the Egyptian workshop" class="moi-parallax">
			<?php
			moilin_photo(
				'assets/images/commitment-main',
				'(max-width: 900px) 100vw, 45vw',
				array( 'picture_style' => 'position:absolute;inset:0;width:100%;height:100%', 'img_class' => 'moi-parallax__img' )
			);
			?>
		</div>
	</div>

	<div data-cols3="1" data-carousel="tight" tabindex="0" role="group" aria-label="<?php echo esc_attr( $c['eyebrow'] ); ?>" data-rail-target style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:64px">
		<?php foreach ( $crops as $i => $crop ) : ?>
			<div data-reveal="out" data-reveal-variant="image" data-delay="<?php echo (int) ( $i * 120 ); ?>" data-zoom-parent="1" role="img" aria-label="<?php echo esc_attr( $crop['alt'] ); ?>" style="position:relative;aspect-ratio:1/1;overflow:hidden;min-width:0">
				<?php
				moilin_photo(
					$crop['base'],
					'(max-width: 900px) 68vw, 28vw',
					array( 'picture_style' => 'position:absolute;inset:0;width:100%;height:100%', 'img_data' => 'data-zoom-layer="1"', 'img_class' => 'moi-cover' )
				);
				?>
				<div style="position:absolute;inset:0;background:rgba(58,46,40,0.28);pointer-events:none"></div>
			</div>
		<?php endforeach; ?>
	</div>
	<?php get_template_part( 'template-parts/rail', null, array( 'on_chocolate' => true, 'style' => 'margin-top:20px' ) ); ?>
</section>
