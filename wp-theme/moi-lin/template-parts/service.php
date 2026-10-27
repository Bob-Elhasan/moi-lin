<?php
/**
 * Service strip: plain text reassurance directly above the collection.
 */

defined( 'ABSPATH' ) || exit;

$items = moilin_copy()['service'];
?>
<div data-pad="1" style="background:var(--ivory);border-bottom:1px solid var(--line);padding:16px 80px;display:flex;flex-wrap:wrap;gap:24px 40px;justify-content:center;font-family:var(--font-body);font-size:11px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-muted)">
	<?php foreach ( $items as $item ) : ?>
		<span><?php echo esc_html( $item ); ?></span>
	<?php endforeach; ?>
</div>
