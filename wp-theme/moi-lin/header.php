<?php
/**
 * Document head, announcement bar and sticky header.
 */

defined( 'ABSPATH' ) || exit;

$c = moilin_copy();
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Egyptian linen. Thirty years in the making. Cairo, 1998 — now in Europe.">
	<script>document.documentElement.classList.add('js');</script>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a href="#story" data-skip-link="1"><?php echo esc_html( $c['nav']['skip'] ); ?></a>

<div style="background:var(--chocolate);color:var(--ivory);font-family:var(--font-body);font-size:11px;font-weight:500;letter-spacing:var(--tracking-label);text-transform:uppercase;text-align:center;padding:8px 24px">
	<?php echo esc_html( $c['announcement'] ); ?>
</div>

<div class="moi-header" data-pad="1" data-material="ecru" data-header>
	<nav data-desktop-only="1" aria-label="<?php echo esc_attr( $c['nav']['categories_label'] ); ?>" style="display:flex;gap:24px;font-size:13px;font-weight:500;color:var(--chocolate)">
		<?php foreach ( $c['nav']['categories'] as $category ) : ?>
			<a href="#collection" data-underline="1" style="color:var(--chocolate)"><?php echo esc_html( $category ); ?></a>
		<?php endforeach; ?>
	</nav>

	<button type="button" data-mobile-only="1" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="<?php echo esc_attr( $c['nav']['menu'] ); ?>" class="moi-header__menu">
		<?php echo esc_html( $c['nav']['menu'] ); ?>
	</button>

	<a href="#top" aria-label="<?php echo esc_attr( $c['nav']['home'] ); ?>" class="moi-header__logo">
		<img src="<?php echo esc_url( moilin_asset( 'logos/Logo-Dark.png' ) ); ?>" alt="MOi &amp; LiN" width="200" height="40" style="height:40px;width:auto;display:block">
	</a>

	<div class="moi-header__actions">
		<div style="display:flex;gap:20px;font-size:13px;font-weight:500;color:var(--chocolate)">
			<button type="button" data-underline="1" data-tap="1" class="moi-btn-reset"><?php echo esc_html( $c['nav']['search'] ); ?></button>
			<button type="button" data-desktop-only="1" data-underline="1" class="moi-btn-reset"><?php echo esc_html( $c['nav']['account'] ); ?></button>
			<button type="button" data-underline="1" data-tap="1" class="moi-btn-reset"><?php echo esc_html( $c['nav']['bag'] ); ?></button>
		</div>
	</div>

	<span aria-hidden="true" data-header-progress class="moi-header__progress"></span>
</div>

<div id="mobile-menu" class="moi-menu" data-menu aria-hidden="true" inert>
	<div style="display:flex;justify-content:space-between;align-items:center">
		<img src="<?php echo esc_url( moilin_asset( 'logos/Logo-Dark.png' ) ); ?>" alt="MOi &amp; LiN" style="height:24px">
		<button type="button" data-menu-close class="moi-menu__close"><?php echo esc_html( $c['nav']['close'] ); ?></button>
	</div>

	<nav aria-label="<?php echo esc_attr( $c['nav']['categories_label'] ); ?>" style="display:flex;flex-direction:column">
		<?php foreach ( $c['nav']['categories'] as $i => $category ) : ?>
			<a href="#collection" data-menu-link class="moi-menu__link" style="--i:<?php echo (int) $i; ?>"><?php echo esc_html( $category ); ?></a>
		<?php endforeach; ?>
	</nav>

	<div style="margin-top:auto;display:flex;flex-direction:column;gap:20px">
		<div style="display:flex;flex-direction:column;gap:4px;font-size:15px;color:var(--ink-muted)">
			<button type="button" data-underline="1" data-tap="1" class="moi-btn-reset" style="font-size:15px;color:var(--ink-muted);align-self:flex-start"><?php echo esc_html( $c['nav']['account'] ); ?></button>
			<button type="button" data-underline="1" data-tap="1" class="moi-btn-reset" style="font-size:15px;color:var(--ink-muted);align-self:flex-start"><?php echo esc_html( $c['nav']['size_guide'] ); ?></button>
		</div>
	</div>
</div>
