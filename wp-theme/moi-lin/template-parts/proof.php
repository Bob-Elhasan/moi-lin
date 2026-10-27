<?php
/**
 * Proof bar: three credibility cells under the hero.
 */

defined( 'ABSPATH' ) || exit;

$cells = moilin_copy()['proof'];
?>
<div style="border-bottom:1px solid var(--line)">
	<div data-proof-row="1" data-pad="1" style="display:flex;background:var(--ecru);font-family:var(--font-body)">
		<?php foreach ( $cells as $i => $cell ) : ?>
			<div data-proof-cell="1" style="flex:1;padding:24px;border-right:<?php echo $i < count( $cells ) - 1 ? '1px solid var(--line)' : 'none'; ?>">
				<div style="font-size:15px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--chocolate)"><?php echo esc_html( $cell['label'] ); ?></div>
				<div data-proof-detail="1" style="font-size:11px;margin-top:4px;color:var(--ink-muted)"><?php echo esc_html( $cell['detail'] ); ?></div>
			</div>
		<?php endforeach; ?>
	</div>
</div>
