<?php
/**
 * Footer, mobile sticky shop bar and closing hooks.
 */

defined( 'ABSPATH' ) || exit;

$c = moilin_copy();
?>
<footer data-reveal="out" data-pad="1" class="moi-footer">
	<div data-cols4="1" style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px">
		<div>
			<img data-footer-logo="1" src="<?php echo esc_url( moilin_asset( 'logos/Logo-White.png' ) ); ?>" alt="MOi &amp; LiN" style="display:block;margin-bottom:16px">
			<p style="font-family:var(--font-display);font-style:italic;font-size:17px;color:var(--ivory);margin:0"><?php echo esc_html( $c['footer']['tagline'] ); ?></p>
		</div>
		<?php foreach ( $c['footer']['columns'] as $column ) : ?>
			<div style="display:flex;flex-direction:column;gap:12px;font-size:13px;color:var(--ink-muted-on-chocolate)">
				<span style="font-size:13px;font-weight:600;color:var(--ivory)"><?php echo esc_html( $column['title'] ); ?></span>
				<?php foreach ( $column['links'] as $link ) : ?>
					<a href="#" data-underline="1" style="color:var(--ink-muted-on-chocolate)"><?php echo esc_html( $link ); ?></a>
				<?php endforeach; ?>
			</div>
		<?php endforeach; ?>
	</div>
	<div style="border-top:1px solid var(--line-on-chocolate);margin-top:64px;padding-top:24px;display:flex;flex-wrap:wrap;gap:16px 40px;justify-content:space-between;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-muted-on-chocolate)">
		<span><?php echo esc_html( sprintf( '© %d MOi & LiN', (int) wp_date( 'Y' ) ) ); ?></span>
		<span><?php echo esc_html( $c['footer']['region'] ); ?></span>
	</div>
</footer>

<div data-mobile-only="1" data-sticky-cta="1" data-material="chocolate" class="moi-sticky-cta" aria-hidden="true" inert>
	<a href="#collection" data-btn="1" data-btn-ink="1" class="moi-sticky-cta__shop" style="--btn-sweep:var(--camel);--btn-ink:var(--ivory)"><?php echo esc_html( $c['sticky_cta']['label'] ); ?></a>
	<button type="button" data-sticky-dismiss class="moi-sticky-cta__dismiss" aria-label="<?php echo esc_attr( $c['sticky_cta']['dismiss'] ); ?>"><?php echo esc_html( $c['sticky_cta']['dismiss'] ); ?></button>
</div>

<?php wp_footer(); ?>
</body>
</html>
