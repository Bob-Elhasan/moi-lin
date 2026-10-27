<?php
/**
 * The landing page. Section order matches site/src/App.jsx.
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<main id="top">
	<?php get_template_part( 'template-parts/hero' ); ?>
	<?php get_template_part( 'template-parts/proof' ); ?>
	<?php get_template_part( 'template-parts/instinct' ); ?>
	<?php moilin_stitch( 'var(--chocolate)' ); ?>
	<?php get_template_part( 'template-parts/commitment' ); ?>
	<?php moilin_stitch( 'var(--ecru)' ); ?>
	<?php get_template_part( 'template-parts/name' ); ?>
	<?php moilin_stitch( 'var(--ivory)' ); ?>
	<?php get_template_part( 'template-parts/tiles' ); ?>
	<?php moilin_stitch( 'var(--ecru)' ); ?>
	<?php get_template_part( 'template-parts/pillars' ); ?>
	<?php moilin_stitch( 'var(--chocolate)' ); ?>
	<?php get_template_part( 'template-parts/horizon' ); ?>
	<?php moilin_stitch( 'var(--ivory)' ); ?>
	<?php get_template_part( 'template-parts/service' ); ?>
	<?php get_template_part( 'template-parts/collection' ); ?>
	<?php moilin_stitch( 'var(--chocolate)' ); ?>
	<?php get_template_part( 'template-parts/newsletter' ); ?>
</main>
<?php
get_footer();
