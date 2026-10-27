<?php
/**
 * Newsletter capture. The form only confirms on screen for now; connect the
 * submit handler to a mailing-list provider before launch.
 */

defined( 'ABSPATH' ) || exit;

$c = moilin_copy()['newsletter'];
?>
<section data-story="1" data-pad="1" data-split="1" style="background:var(--chocolate);padding:144px 80px;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center">
	<div>
		<h2 data-lines="out" data-display-64="1" data-text="<?php echo esc_attr( $c['headline'] ); ?>" style="font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;color:var(--ivory);margin:0 0 24px;max-width:26ch;text-wrap:pretty"><?php echo esc_html( $c['headline'] ); ?></h2>
		<p data-reveal="out" data-delay="200" style="font-family:var(--font-display);font-style:italic;font-size:21px;line-height:1.45;color:var(--ink-muted-on-chocolate);margin:0;max-width:44ch;text-wrap:pretty"><?php echo esc_html( $c['quiet'] ); ?></p>
	</div>

	<div data-reveal="out" data-capture-card="1" style="border:1px solid var(--line-on-chocolate);padding:40px;font-family:var(--font-body)">
		<p style="font-size:11px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:var(--camel);margin:0 0 16px"><?php echo esc_html( $c['kicker'] ); ?></p>
		<p style="font-size:15px;line-height:1.6;color:var(--ivory);margin:0 0 24px;max-width:40ch;text-wrap:pretty"><?php echo esc_html( $c['body'] ); ?></p>

		<p data-subscribed hidden style="font-size:15px;color:var(--ivory);margin:0"><?php echo esc_html( $c['subscribed_message'] ); ?></p>

		<form data-subscribe-form style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end">
			<div style="display:flex;flex-direction:column;gap:8px;flex:1 1 180px;min-width:0">
				<label for="capture-email" style="font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:var(--ivory)"><?php echo esc_html( $c['email_label'] ); ?></label>
				<input id="capture-email" data-field="1" type="email" required placeholder="<?php echo esc_attr( $c['placeholder'] ); ?>" style="font-family:var(--font-body);font-size:15px;color:var(--ivory);background:transparent;border:1px solid var(--line-on-chocolate);padding:14px 16px;border-radius:0;min-width:0;width:100%">
			</div>
			<button type="submit" data-btn="1" data-btn-ink="1" style="--btn-sweep:var(--camel);--btn-ink:var(--ivory);font-family:var(--font-body);font-weight:700;font-size:13px;letter-spacing:var(--tracking-button);text-transform:uppercase;background:var(--ivory);color:var(--chocolate);border:none;padding:16px 32px;cursor:pointer"><?php echo esc_html( $c['subscribe_cta'] ); ?></button>
		</form>
	</div>
</section>
