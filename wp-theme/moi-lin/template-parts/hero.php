<?php
/**
 * Hero: headline, editorial line and the two calls to action.
 */

defined( 'ABSPATH' ) || exit;

$c = moilin_copy()['hero'];
?>
<section id="hero" data-hero="1" style="background:var(--ecru);display:grid;grid-template-columns:1.05fr 0.95fr;align-items:stretch;overflow:hidden">
	<div data-hero-copy="1" style="padding:144px 80px;display:flex;flex-direction:column;justify-content:center;font-family:var(--font-body)">
		<div data-hero-in="1" style="--hero-delay:0ms;display:flex;align-items:center;gap:16px;margin:0 0 24px">
			<span data-hero-thread="1" aria-hidden="true" style="--hero-delay:260ms;display:block;width:56px;height:1px;background:var(--camel);flex-shrink:0"></span>
			<p style="font-size:11px;font-weight:500;letter-spacing:var(--tracking-label);text-transform:uppercase;color:var(--camel);margin:0"><?php echo esc_html( $c['eyebrow'] ); ?></p>
		</div>

		<h1 data-display-88="1" data-hero-in="1" style="--hero-delay:100ms;font-family:var(--font-display);font-weight:400;font-size:64px;line-height:1.1;color:var(--chocolate);margin:0 0 16px;max-width:20ch;text-wrap:pretty"><?php echo esc_html( $c['headline'] ); ?></h1>

		<p data-hero-in="1" style="--hero-delay:220ms;font-family:var(--font-display);font-style:italic;font-size:21px;line-height:1.4;color:var(--ink-muted);margin:0 0 24px;max-width:32ch"><?php echo esc_html( $c['editorial'] ); ?></p>

		<p data-hero-in="1" style="--hero-delay:320ms;font-size:15px;line-height:1.6;color:var(--chocolate);margin:0 0 40px;max-width:46ch;text-wrap:pretty"><?php echo esc_html( $c['body'] ); ?></p>

		<div data-hero-in="1" style="--hero-delay:420ms;display:flex;gap:16px;flex-wrap:wrap">
			<a href="#story" data-btn="1" style="--btn-sweep:var(--camel);text-decoration:none;font-family:var(--font-body);font-weight:700;font-size:13px;letter-spacing:var(--tracking-button);text-transform:uppercase;background:var(--chocolate);color:var(--ivory);padding:16px 32px"><?php echo esc_html( $c['primary_cta'] ); ?></a>
			<a href="#collection" data-btn="1" data-btn-ink="1" style="--btn-sweep:var(--camel);--btn-ink:var(--ivory);text-decoration:none;font-family:var(--font-body);font-weight:700;font-size:13px;letter-spacing:var(--tracking-button);text-transform:uppercase;color:var(--camel);border:1px solid var(--camel);padding:15px 31px"><?php echo esc_html( $c['secondary_cta'] ); ?></a>
		</div>
	</div>

	<div data-hero-image="1" role="img" aria-label="A woman's embroidered shirt in warm afternoon light against a plaster wall" class="moi-parallax" style="min-height:640px">
		<?php
		moilin_photo(
			'assets/images/hero',
			'(max-width: 900px) 100vw, 48vw',
			array(
				'eager'         => true,
				'picture_style' => 'position:absolute;inset:0;width:100%;height:100%',
				'img_class'     => 'moi-parallax__img',
				'img_data'      => 'data-parallax="20"',
			)
		);
		?>
	</div>
</section>
