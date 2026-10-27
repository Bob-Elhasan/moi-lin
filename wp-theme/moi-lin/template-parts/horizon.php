<?php
/**
 * The next horizon: the European expansion story on chocolate.
 */

defined( 'ABSPATH' ) || exit;

$c = moilin_copy()['horizon'];
?>
<section data-story="1" data-pad="1" data-split="1" style="background:var(--chocolate);padding:144px 80px;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center">
	<div data-reveal="out" data-reveal-variant="image" style="position:relative;overflow:hidden;aspect-ratio:16/9" role="img" aria-label="A European interior with Egyptian fabric" class="moi-parallax">
		<?php
		moilin_photo(
			'assets/images/horizon',
			'(max-width: 900px) 100vw, 45vw',
			array( 'picture_style' => 'position:absolute;inset:0;width:100%;height:100%', 'img_class' => 'moi-parallax__img', 'img_data' => 'data-parallax="16"' )
		);
		?>
	</div>

	<div>
		<?php moilin_eyebrow( $c['eyebrow'], true ); ?>
		<h2 data-lines="out" data-display-64="1" data-text="<?php echo esc_attr( $c['headline'] ); ?>" data-delay="80" style="font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;color:var(--ivory);margin:0 0 24px;max-width:24ch;text-wrap:pretty"><?php echo esc_html( $c['headline'] ); ?></h2>
		<p data-reveal="out" data-delay="220" style="font-family:var(--font-body);font-size:15px;line-height:1.6;color:var(--ivory);margin:0 0 24px;max-width:54ch;text-wrap:pretty"><?php echo esc_html( $c['body'] ); ?></p>
		<p data-reveal="out" data-delay="320" style="font-family:var(--font-display);font-style:italic;font-size:21px;line-height:1.45;color:var(--ink-muted-on-chocolate);margin:0;max-width:46ch;text-wrap:pretty"><?php echo esc_html( $c['quiet'] ); ?></p>
	</div>
</section>
