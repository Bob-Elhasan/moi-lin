// One rAF-throttled scroll/resize listener shared by every scroll-tied effect
// on the page (the stitched seams, the grain drift). Seven seams each adding
// their own listener is seven layout reads per frame; this batches them into
// one pass instead.
const subscribers = new Set();
let queued = false;
let listening = false;

function flush() {
  queued = false;
  subscribers.forEach((fn) => fn());
}

function onScroll() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(flush);
}

export function subscribeScroll(fn) {
  subscribers.add(fn);
  if (!listening) {
    listening = true;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }
  fn();
  return () => subscribers.delete(fn);
}
