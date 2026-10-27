<?php
/**
 * The name: MOi and LiN, each shown with its logo glyph in place of text.
 */

defined( 'ABSPATH' ) || exit;

$c = moilin_copy()['name'];
?>
<section data-story="1" data-pad="1" style="background:var(--ecru);padding:144px 80px">
	<div class="moi-eyebrow" style="justify-content:center;margin:0 0 40px">
		<span data-thread="out" aria-hidden="true" style="width:56px;background:var(--camel);--reveal-delay:0ms"></span>
		<p class="moi-eyebrow__text"><?php echo esc_html( $c['eyebrow'] ); ?></p>
	</div>

	<div data-reveal="out" style="max-width:60ch;margin:0 auto;text-align:center">
		<p style="font-family:var(--font-display);font-weight:400;font-size:28px;line-height:1.35;color:var(--chocolate);margin:0 0 40px;text-wrap:pretty">
			<img src="<?php echo esc_url( moilin_asset( 'logos/moi-only.png' ) ); ?>" alt="Moi" class="moi-glyph">
			<?php echo esc_html( $c['moi_suffix'] ); ?>
			<br>
			<i><?php echo esc_html( $c['moi_word'] ); ?></i>
			<br>
			<?php echo esc_html( $c['moi_body'] ); ?>
		</p>

		<p style="font-family:var(--font-display);font-weight:400;font-size:28px;line-height:1.35;color:var(--chocolate);margin:0;text-wrap:pretty">
			<img src="<?php echo esc_url( moilin_asset( 'logos/lin-only.png' ) ); ?>" alt="Lin" class="moi-glyph">
			<?php echo esc_html( $c['lin_suffix'] ); ?>
			<br>
			<i><?php echo esc_html( $c['lin_word'] ); ?></i>
			<br>
			<?php echo esc_html( $c['lin_body'] ); ?>
		</p>
	</div>

	<div style="max-width:900px;margin:96px auto 0;text-align:center">
		<span data-thread="out" aria-hidden="true" style="display:block;width:40px;height:1px;background:var(--camel);margin:0 auto 40px;--reveal-delay:0ms"></span>
		<p data-lines="out" data-display-40="1" data-text="<?php echo esc_attr( $c['closing'] ); ?>" data-delay="120" data-stagger="110" style="font-family:var(--font-display);font-style:italic;font-weight:400;font-size:40px;line-height:1.25;color:var(--chocolate);margin:0;text-wrap:pretty"><?php echo esc_html( $c['closing'] ); ?></p>
	</div>
</section>
