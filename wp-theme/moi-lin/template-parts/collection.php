<?php
/**
 * The collection: the four shirts, with sort, colour choice and details.
 * Sorting and details are handled in assets/js/site.js; this renders the
 * default (featured) order, so the page reads correctly without JavaScript.
 */

defined( 'ABSPATH' ) || exit;

$c        = moilin_copy()['collection'];
$colours  = moilin_copy()['colours'];
$products = moilin_products();
$count    = count( $products );
$count_label = sprintf( '%d %s', $count, 1 === $count ? 'product' : 'products' );
?>
<section id="collection" data-pad="1" style="background:var(--ivory);padding:96px 80px 0">
	<?php moilin_eyebrow( $c['eyebrow'] ); ?>
	<h2 data-display-40="1" style="font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;color:var(--chocolate);margin:0 0 24px"><?php echo esc_html( $c['heading'] ); ?></h2>
</section>

<div data-pad="1" data-collection-bar class="moi-collection-bar">
	<span aria-live="polite" data-product-count style="font-size:13px;font-weight:600;color:var(--chocolate)"><?php echo esc_html( $count_label ); ?></span>
	<label style="display:flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-muted)">
		<?php echo esc_html( $c['sort_label'] ); ?>
		<select data-field="1" data-sort style="font-family:var(--font-body);font-size:13px;font-weight:500;letter-spacing:0;text-transform:none;color:var(--chocolate);background:var(--ivory);border:1px solid var(--line);padding:8px 12px;border-radius:0">
			<option value="featured"><?php echo esc_html( $c['sort_featured'] ); ?></option>
			<option value="price-asc"><?php echo esc_html( $c['sort_price_asc'] ); ?></option>
			<option value="price-desc"><?php echo esc_html( $c['sort_price_desc'] ); ?></option>
		</select>
	</label>
</div>

<section data-pad="1" style="background:var(--ivory);padding:40px 80px 96px">
	<div data-cols4="1" data-carousel="1" data-rail-target data-product-grid tabindex="0" role="group" aria-label="<?php echo esc_attr( $c['heading'] ); ?>" style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px 24px">
		<?php foreach ( $products as $product ) : ?>
			<?php
			$default_colour = $product['colours'][0];
			$name           = $product['name'];
			?>
			<div data-card="1" data-product data-price="<?php echo (int) $product['price']; ?>" data-id="<?php echo esc_attr( $product['id'] ); ?>" style="font-family:var(--font-body);display:flex;flex-direction:column;gap:12px;min-width:0">
				<?php foreach ( $product['colours'] as $colour ) : ?>
					<?php $selected = $colour === $default_colour; ?>
					<a href="<?php echo esc_url( moilin_href( $product, $colour ) ); ?>" target="_blank" rel="noreferrer" data-colour-media="<?php echo esc_attr( $colour ); ?>" aria-label="<?php echo esc_attr( sprintf( '%s in %s — 3:4 on-body frame', $name, $colours[ $colour ] ?? $colour ) ); ?>" data-zoom-parent="1" <?php echo $selected ? '' : 'hidden'; ?> class="moi-card__media" style="position:relative;display:block;text-decoration:none;aspect-ratio:3/4;overflow:hidden">
					<?php if ( isset( $product['images'][ $colour ] ) ) : ?>
						<div data-zoom-layer="1" style="position:absolute;inset:0">
							<?php
							moilin_photo(
								$product['images'][ $colour ]['thumb'],
								'(max-width: 900px) 85vw, (max-width: 1300px) 30vw, 22vw',
								array( 'picture_style' => 'position:absolute;inset:0;width:100%;height:100%', 'img_class' => 'moi-cover moi-cover--top' )
							);
							?>
							<?php
							moilin_photo(
								$product['images'][ $colour ]['hover'],
								'(max-width: 900px) 85vw, (max-width: 1300px) 30vw, 22vw',
								array( 'picture_style' => 'position:absolute;inset:0;width:100%;height:100%', 'img_class' => 'moi-cover moi-cover--top moi-card__hover' )
							);
							?>
						</div>
					<?php else : ?>
						<div data-zoom-layer="1" style="position:absolute;inset:0;background:<?php echo esc_attr( moilin_frame( $colour ) ); ?>"></div>
						<div style="position:relative;height:100%;display:flex;align-items:flex-end;padding:16px;font-size:11px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:var(--chocolate)">
							<?php echo esc_html( sprintf( '%s in %s — 3:4 on-body frame', $name, $colours[ $colour ] ?? $colour ) ); ?>
						</div>
					<?php endif; ?>
					</a>
				<?php endforeach; ?>

				<div style="display:flex;justify-content:space-between;gap:16px;align-items:baseline">
					<a href="<?php echo esc_url( moilin_href( $product, $default_colour ) ); ?>" target="_blank" rel="noreferrer" data-underline="1" data-product-name style="font-size:15px;font-weight:500;color:var(--chocolate)"><?php echo esc_html( $name ); ?></a>
					<span style="font-size:15px;color:var(--ink-muted)">€<?php echo (int) $product['price']; ?></span>
				</div>

				<div role="group" aria-label="<?php echo esc_attr( $c['colour_group_label'] ); ?>" style="display:flex;gap:12px;align-items:center">
					<?php foreach ( $product['colours'] as $colour ) : ?>
						<button type="button" data-colour="<?php echo esc_attr( $colour ); ?>" aria-pressed="<?php echo $colour === $default_colour ? 'true' : 'false'; ?>" style="display:flex;align-items:center;gap:6px;background:none;border:none;padding:0;cursor:pointer;font-family:var(--font-body);font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-muted);outline:<?php echo $colour === $default_colour ? '1px solid var(--chocolate)' : 'none'; ?>;outline-offset:3px">
							<span aria-hidden="true" style="width:14px;height:14px;display:block;border:1px solid var(--line);background:<?php echo esc_attr( moilin_swatch( $colour ) ); ?>"></span>
							<?php echo esc_html( $colours[ $colour ] ?? $colour ); ?>
						</button>
					<?php endforeach; ?>
				</div>

				<div style="display:flex;gap:10px;font-size:11px;font-weight:600;letter-spacing:0.08em">
					<?php foreach ( MOILIN_SIZES as $size ) : ?>
						<?php $out = in_array( $size, $product['unavailable'], true ); ?>
						<span style="color:<?php echo $out ? 'var(--ink-muted)' : 'var(--chocolate)'; ?>;text-decoration:<?php echo $out ? 'line-through' : 'none'; ?>">
							<?php echo esc_html( $size ); ?>
							<span style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><?php echo esc_html( $out ? $c['size_unavailable'] : $c['size_available'] ); ?></span>
						</span>
					<?php endforeach; ?>
				</div>

				<div style="display:flex;justify-content:space-between;gap:16px;align-items:center;margin-top:4px">
					<a href="<?php echo esc_url( moilin_href( $product, $default_colour ) ); ?>" target="_blank" rel="noreferrer" data-underline="1" data-shop-link style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--camel)">Shop at <?php echo esc_html( $product['retailer'] ); ?></a>
					<button type="button" data-btn="1" data-btn-ink="1" data-details-toggle="<?php echo esc_attr( $product['id'] ); ?>" data-label-open="<?php echo esc_attr( $c['details'] ); ?>" data-label-close="<?php echo esc_attr( $c['hide_details'] ); ?>" aria-expanded="false" style="--btn-sweep:var(--chocolate);--btn-ink:var(--ivory);flex-shrink:0;background:none;border:1px solid var(--line);color:var(--chocolate);font-family:var(--font-body);font-size:11px;font-weight:600;letter-spacing:var(--tracking-button);text-transform:uppercase;padding:9px 14px;min-height:38px;cursor:pointer"><?php echo esc_html( $c['details'] ); ?></button>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
	<?php get_template_part( 'template-parts/rail', null, array( 'style' => 'margin-top:20px' ) ); ?>

	<?php foreach ( $products as $product ) : ?>
		<div data-details="<?php echo esc_attr( $product['id'] ); ?>" hidden data-cols3="1" style="margin-top:24px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:24px 0;display:grid;grid-template-columns:repeat(3,1fr);gap:16px 40px;font-family:var(--font-body)">
			<div style="grid-column:1/-1;display:flex;justify-content:space-between;gap:16px;align-items:baseline">
				<span style="font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:var(--camel)"><?php echo esc_html( $product['name'] ); ?></span>
				<button type="button" data-underline="1" data-details-close style="background:none;border:none;padding:0;font-family:var(--font-body);font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-muted);cursor:pointer"><?php echo esc_html( $c['close'] ); ?></button>
			</div>
			<?php foreach ( $product['details'] as $label => $value ) : ?>
				<div style="display:flex;gap:12px;font-size:13px;line-height:1.6">
					<span style="min-width:96px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-muted);padding-top:2px"><?php echo esc_html( $c['detail_labels'][ $label ] ?? $label ); ?></span>
					<span style="color:var(--chocolate)"><?php echo esc_html( $value ); ?></span>
				</div>
			<?php endforeach; ?>
		</div>
	<?php endforeach; ?>
</section>
