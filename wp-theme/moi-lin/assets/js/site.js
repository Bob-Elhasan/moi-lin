/*
 * MOi & LiN landing page behaviour, ported from the React hooks and
 * components. Everything here is progressive: without it the page still
 * shows its content, it just does not animate or sort.
 */
(function () {
	'use strict';

	var root = document.documentElement;
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
	var narrow = window.matchMedia('(max-width: 900px)');

	/* ------------------------------------------------------------------
	   Reveal delays: data-delay becomes --reveal-delay on the element.
	------------------------------------------------------------------ */
	document.querySelectorAll('[data-delay]').forEach(function (el) {
		el.style.setProperty('--reveal-delay', el.getAttribute('data-delay') + 'ms');
	});

	/* ------------------------------------------------------------------
	   Headline lines. Measures where the words wrap at the current width
	   and rebuilds the headline as masked lines, so each line can rise
	   from behind its own mask.
	------------------------------------------------------------------ */
	function splitLines(el) {
		var text = el.getAttribute('data-text');
		if (!text) return;
		var words = text.split(/\s+/).filter(Boolean);
		el.textContent = '';
		words.forEach(function (word, i) {
			var span = document.createElement('span');
			span.setAttribute('data-word', word);
			span.textContent = word + (i < words.length - 1 ? ' ' : '');
			el.appendChild(span);
		});

		var groups = [];
		var top = null;
		el.querySelectorAll('[data-word]').forEach(function (span) {
			var y = span.offsetTop;
			if (top === null || y - top > 2) {
				groups.push([]);
				top = y;
			}
			groups[groups.length - 1].push(span.getAttribute('data-word'));
		});

		var stagger = Number(el.getAttribute('data-stagger')) || 90;
		var delay = Number(el.getAttribute('data-delay')) || 0;
		el.textContent = '';
		el.setAttribute('aria-label', text);
		groups.forEach(function (line, i) {
			var mask = document.createElement('span');
			mask.className = 'line-mask';
			var inner = document.createElement('span');
			inner.className = 'line-inner';
			inner.style.setProperty('--line-delay', delay + i * stagger + 'ms');
			inner.textContent = line.join(' ') + (i < groups.length - 1 ? ' ' : '');
			mask.appendChild(inner);
			el.appendChild(mask);
		});
	}

	var lineEls = Array.prototype.slice.call(document.querySelectorAll('[data-lines]'));
	var lineWidths = new Map();

	function splitAll() {
		lineEls.forEach(function (el) {
			splitLines(el);
			lineWidths.set(el, el.offsetWidth);
		});
	}

	splitAll();
	if (document.fonts && document.fonts.ready) {
		document.fonts.ready.then(splitAll);
	}
	if ('ResizeObserver' in window) {
		var lineObserver = new ResizeObserver(function (entries) {
			entries.forEach(function (entry) {
				var el = entry.target;
				if (el.offsetWidth !== lineWidths.get(el)) splitAll();
			});
		});
		lineEls.forEach(function (el) { lineObserver.observe(el); });
	}

	/* ------------------------------------------------------------------
	   Once-only reveals: text, images, threads and headline lines.
	------------------------------------------------------------------ */
	function setState(el, state) {
		if (el.hasAttribute('data-lines')) el.setAttribute('data-lines', state);
		else if (el.hasAttribute('data-thread')) el.setAttribute('data-thread', state);
		else el.setAttribute('data-reveal', state);
	}

	var revealEls = document.querySelectorAll('[data-reveal="out"], [data-thread="out"], [data-lines="out"]');
	if ('IntersectionObserver' in window) {
		var revealObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				setState(entry.target, 'in');
				revealObserver.unobserve(entry.target);
			});
		}, { rootMargin: '0px 0px -12% 0px' });
		revealEls.forEach(function (el) { revealObserver.observe(el); });
	} else {
		revealEls.forEach(function (el) { setState(el, 'in'); });
	}

	/* ------------------------------------------------------------------
	   Scroll-tied effects, all run from one rAF-throttled listener.
	------------------------------------------------------------------ */
	var header = document.querySelector('[data-header]');
	var headerBar = header ? header.querySelector('[data-header-progress]') : null;
	var cta = document.querySelector('[data-sticky-cta]');
	var ctaDismissed = false;
	try {
		ctaDismissed = window.sessionStorage.getItem('moilin-cta-dismissed') === '1';
	} catch (e) {
		ctaDismissed = false;
	}

	function headerUpdate() {
		if (!header) return;
		var y = window.scrollY;
		header.classList.toggle('is-condensed', y > 40);
		var scrollable = root.scrollHeight - window.innerHeight;
		var progress = scrollable > 0 ? Math.min(1, Math.max(0, y / scrollable)) : 0;
		if (headerBar) {
			headerBar.style.transform = 'scaleX(' + progress + ')';
			headerBar.style.opacity = progress > 0.01 ? '1' : '0';
		}
	}

	function ctaUpdate() {
		if (!cta) return;
		var grid = document.getElementById('collection');
		var foot = document.querySelector('footer');
		if (!grid || !foot) return;
		var g = grid.getBoundingClientRect();
		var f = foot.getBoundingClientRect();
		var pastGrid = g.top < window.innerHeight * 0.5 && f.top > window.innerHeight;
		var shown = pastGrid && !ctaDismissed;
		cta.classList.toggle('is-shown', shown);
		cta.toggleAttribute('inert', !shown);
		cta.setAttribute('aria-hidden', String(!shown));
	}

	var parallaxImgs = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
	function parallaxUpdate() {
		var vh = window.innerHeight || 1;
		parallaxImgs.forEach(function (img) {
			var box = img.closest('.moi-parallax');
			if (!box) return;
			var range = Number(img.getAttribute('data-parallax')) || 14;
			var rect = box.getBoundingClientRect();
			var progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
			progress = Math.max(-1, Math.min(1, progress));
			img.style.transform = 'scale(1.1) translateY(' + progress * range + 'px)';
		});
	}

	var stitches = Array.prototype.slice.call(document.querySelectorAll('[data-stitch]'));
	function stitchUpdate() {
		var vh = window.innerHeight || 1;
		var start = 0.95;
		var end = 0.6;
		stitches.forEach(function (el) {
			var span = (start - end) * vh || 1;
			var top = el.getBoundingClientRect().top;
			var progress = Math.min(1, Math.max(0, (start * vh - top) / span));
			el.style.setProperty('--stitch-rest', (1 - progress) * 100 + '%');
		});
	}

	function grainUpdate() {
		root.style.setProperty('--grain-y', -((window.scrollY * 0.28) % 420) + 'px');
	}

	var rails = [];
	document.querySelectorAll('[data-carousel]').forEach(function (track) {
		var rail = track.nextElementSibling;
		if (!rail || !rail.hasAttribute('data-rail')) return;
		rails.push({ track: track, rail: rail, thumb: rail.querySelector('[data-rail-thumb]') });
	});
	function railUpdate() {
		rails.forEach(function (r) {
			var visible = r.track.clientWidth / (r.track.scrollWidth || 1);
			r.rail.style.visibility = visible < 0.995 ? 'visible' : 'hidden';
			var max = r.track.scrollWidth - r.track.clientWidth;
			var progress = max > 0 ? r.track.scrollLeft / max : 0;
			var travel = (1 - visible) * r.track.clientWidth * progress;
			r.thumb.style.transform = 'translateX(' + travel + 'px) scaleX(' + Math.min(1, visible) + ')';
		});
	}

	var ticking = false;
	function runScrollEffects() {
		ticking = false;
		headerUpdate();
		ctaUpdate();
		railUpdate();
		if (!reduceMotion.matches) {
			stitchUpdate();
			grainUpdate();
			if (!narrow.matches && finePointer.matches) parallaxUpdate();
		}
	}
	function scheduleScroll() {
		if (!ticking) {
			ticking = true;
			window.requestAnimationFrame(runScrollEffects);
		}
	}

	if (reduceMotion.matches) {
		stitches.forEach(function (el) { el.style.setProperty('--stitch-rest', '0%'); });
	}
	window.addEventListener('scroll', scheduleScroll, { passive: true });
	window.addEventListener('resize', scheduleScroll);
	window.addEventListener('load', scheduleScroll);
	rails.forEach(function (r) {
		r.track.addEventListener('scroll', scheduleScroll, { passive: true });
	});
	if ('ResizeObserver' in window) {
		var railObserver = new ResizeObserver(scheduleScroll);
		rails.forEach(function (r) {
			railObserver.observe(r.track);
			Array.prototype.forEach.call(r.track.children, function (child) { railObserver.observe(child); });
		});
	}
	scheduleScroll();

	/* ------------------------------------------------------------------
	   Mobile menu: it owns the screen while open. Escape closes it, Tab
	   stays inside it, and focus returns to the toggle on close.
	------------------------------------------------------------------ */
	var menu = document.getElementById('mobile-menu');
	var menuToggle = document.querySelector('[data-menu-toggle]');

	function menuFocusables() {
		if (!menu) return [];
		return Array.prototype.slice.call(menu.querySelectorAll('a[href], button:not([disabled])')).filter(function (el) {
			return el.offsetParent !== null;
		});
	}

	function setMenu(open) {
		if (!menu) return;
		menu.classList.toggle('is-open', open);
		menu.setAttribute('aria-hidden', String(!open));
		menu.toggleAttribute('inert', !open);
		if (menuToggle) menuToggle.setAttribute('aria-expanded', String(open));
		if (open) {
			document.body.setAttribute('data-scroll-locked', '');
			var items = menuFocusables();
			if (items[0]) items[0].focus();
		} else {
			document.body.removeAttribute('data-scroll-locked');
			if (menuToggle) menuToggle.focus();
		}
	}

	if (menu) {
		if (menuToggle) {
			menuToggle.addEventListener('click', function () {
				setMenu(!menu.classList.contains('is-open'));
			});
		}
		var closeBtn = menu.querySelector('[data-menu-close]');
		if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
		menu.querySelectorAll('[data-menu-link]').forEach(function (link) {
			link.addEventListener('click', function () { setMenu(false); });
		});
		document.addEventListener('keydown', function (e) {
			if (!menu.classList.contains('is-open')) return;
			if (e.key === 'Escape') {
				e.preventDefault();
				setMenu(false);
				return;
			}
			if (e.key !== 'Tab') return;
			var items = menuFocusables();
			if (!items.length) return;
			var first = items[0];
			var last = items[items.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		});
	}

	/* ------------------------------------------------------------------
	   Pillars: one value open at a time on mobile.
	------------------------------------------------------------------ */
	var pillarCards = Array.prototype.slice.call(document.querySelectorAll('[data-pillar-card]'));
	var openPillar = 0;

	function renderPillars() {
		pillarCards.forEach(function (card, i) {
			var open = openPillar === i;
			if (open) card.setAttribute('data-open', '1');
			else card.removeAttribute('data-open');
			var trigger = card.querySelector('[data-pillar-trigger]');
			var panel = card.querySelector('[data-pillar-panel]');
			if (trigger) trigger.setAttribute('aria-expanded', String(open));
			if (panel) panel.setAttribute('aria-hidden', String(!open));
		});
	}

	document.querySelectorAll('[data-pillar-trigger]').forEach(function (trigger) {
		trigger.addEventListener('click', function () {
			var i = Number(trigger.getAttribute('data-pillar-index'));
			openPillar = openPillar === i ? -1 : i;
			renderPillars();
		});
	});
	renderPillars();

	/* ------------------------------------------------------------------
	   Collection: sort, colour choice and product details.
	------------------------------------------------------------------ */
	var grid = document.querySelector('[data-product-grid]');
	var sortSelect = document.querySelector('[data-sort]');
	var originalOrder = grid ? Array.prototype.slice.call(grid.children) : [];
	var openProductId = null;

	function renderDetails() {
		document.querySelectorAll('[data-details]').forEach(function (panel) {
			panel.hidden = panel.getAttribute('data-details') !== openProductId;
		});
		document.querySelectorAll('[data-details-toggle]').forEach(function (btn) {
			var open = btn.getAttribute('data-details-toggle') === openProductId;
			btn.setAttribute('aria-expanded', String(open));
			btn.textContent = open ? btn.getAttribute('data-label-close') : btn.getAttribute('data-label-open');
		});
	}

	if (sortSelect && grid) {
		sortSelect.addEventListener('change', function () {
			var cards = originalOrder.slice();
			if (sortSelect.value === 'price-asc') cards.sort(function (a, b) { return a.dataset.price - b.dataset.price; });
			if (sortSelect.value === 'price-desc') cards.sort(function (a, b) { return b.dataset.price - a.dataset.price; });
			cards.forEach(function (card) { grid.appendChild(card); });
			openProductId = null;
			renderDetails();
		});
	}

	document.querySelectorAll('[data-product]').forEach(function (card) {
		var medias = card.querySelectorAll('[data-colour-media]');
		var nameLink = card.querySelector('[data-product-name]');
		var shopLink = card.querySelector('[data-shop-link]');

		card.querySelectorAll('[data-colour]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var colour = btn.getAttribute('data-colour');
				card.querySelectorAll('[data-colour]').forEach(function (other) {
					var pressed = other === btn;
					other.setAttribute('aria-pressed', String(pressed));
					other.style.outline = pressed ? '1px solid var(--chocolate)' : 'none';
				});
				var href = null;
				medias.forEach(function (media) {
					var show = media.getAttribute('data-colour-media') === colour;
					media.hidden = !show;
					if (show) href = media.getAttribute('href');
				});
				if (href) {
					if (nameLink) nameLink.setAttribute('href', href);
					if (shopLink) shopLink.setAttribute('href', href);
				}
			});
		});
	});

	document.querySelectorAll('[data-details-toggle]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			var id = btn.getAttribute('data-details-toggle');
			openProductId = openProductId === id ? null : id;
			renderDetails();
		});
	});
	document.querySelectorAll('[data-details-close]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			openProductId = null;
			renderDetails();
		});
	});
	renderDetails();

	/* ------------------------------------------------------------------
	   Sticky shop bar: dismissed for the session once closed.
	------------------------------------------------------------------ */
	var dismissBtn = document.querySelector('[data-sticky-dismiss]');
	if (dismissBtn) {
		dismissBtn.addEventListener('click', function () {
			ctaDismissed = true;
			try {
				window.sessionStorage.setItem('moilin-cta-dismissed', '1');
			} catch (e) {
				/* storage can be blocked; the bar still hides for this page view */
			}
			scheduleScroll();
		});
	}

	/* ------------------------------------------------------------------
	   Newsletter. Confirms on screen only; wire to a mailing list before launch.
	------------------------------------------------------------------ */
	var form = document.querySelector('[data-subscribe-form]');
	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			form.hidden = true;
			var message = form.parentElement.querySelector('[data-subscribed]');
			if (message) message.hidden = false;
		});
	}
})();
