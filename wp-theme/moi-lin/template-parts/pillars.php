<?php
/**
 * Three values. Columns on desktop; full-width cards that expand in place
 * below 900px. The two markups are switched in CSS, not in PHP.
 */

defined( 'ABSPATH' ) || exit;

$c     = moilin_copy()['pillars'];
$items = $c['items'];
?>
<section data-story="1" data-pad="1" style="background:var(--ecru);padding:144px 80px">
	<span data-thread="out" aria-hidden="true" style="display:block;width:56px;height:1px;background:var(--camel);margin-bottom:24px;--reveal-delay:0ms"></span>
	<h2 data-lines="out" data-display-64="1" data-text="<?php echo esc_attr( $c['heading'] ); ?>" data-delay="80" style="font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;color:var(--chocolate);margin:0 0 64px;max-width:32ch;text-wrap:pretty"><?php echo esc_html( $c['heading'] ); ?></h2>

	<div data-cols3="1" data-desktop-only="1" class="moi-pillars__columns" style="display:grid;grid-template-columns:repeat(3,1fr);gap:0">
		<?php foreach ( $items as $i => $item ) : ?>
			<?php
			$pad = 0 === $i ? '0 40px 0 0' : ( $i === count( $items ) - 1 ? '0 0 0 40px' : '0 40px' );
			$rule = $i < count( $items ) - 1 ? '1px solid var(--line)' : 'none';
			?>
			<div data-reveal="out" data-delay="<?php echo (int) ( $i * 130 ); ?>" style="padding:<?php echo esc_attr( $pad ); ?>;border-right:<?php echo esc_attr( $rule ); ?>">
				<h3 style="font-family:var(--font-display);font-weight:400;font-size:28px;line-height:1.2;color:var(--chocolate);margin:0 0 16px"><b><?php echo esc_html( $item['title'] ); ?></b><br><?php echo esc_html( $item['sub'] ); ?></h3>
				<p style="font-family:var(--font-body);font-size:15px;line-height:1.6;color:var(--chocolate);margin:0;text-wrap:pretty"><?php echo esc_html( $item['body'] ); ?></p>
			</div>
		<?php endforeach; ?>
	</div>

	<div data-pillar-cards="1" class="moi-pillars__cards">
		<?php foreach ( $items as $i => $item ) : ?>
			<div data-reveal="out" data-delay="<?php echo (int) ( $i * 90 ); ?>" data-pillar-card="1"<?php echo 0 === $i ? ' data-open="1"' : ''; ?>>
				<h3 style="margin:0">
					<button type="button" data-pillar-trigger="1" aria-expanded="<?php echo 0 === $i ? 'true' : 'false'; ?>" aria-controls="pillar-panel-<?php echo (int) $i; ?>" data-pillar-index="<?php echo (int) $i; ?>">
						<span data-pillar-titles="1">
							<b style="font-family:var(--font-display);font-weight:700;font-size:21px;line-height:1.2;color:var(--chocolate)"><?php echo esc_html( $item['title'] ); ?></b>
							<span style="font-family:var(--font-display);font-size:19px;line-height:1.25;color:var(--ink-muted)"><?php echo esc_html( $item['sub'] ); ?></span>
						</span>
						<span data-pillar-mark="1" aria-hidden="true"></span>
					</button>
				</h3>
				<div id="pillar-panel-<?php echo (int) $i; ?>" data-pillar-panel="1" role="region" aria-hidden="<?php echo 0 === $i ? 'false' : 'true'; ?>">
					<div data-pillar-panel-inner="1">
						<p style="font-family:var(--font-body);font-size:15px;line-height:1.6;color:var(--chocolate);margin:0;text-wrap:pretty"><?php echo esc_html( $item['body'] ); ?></p>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</section>
