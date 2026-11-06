/* One short, non-essential illustration reveal; never hide text or links. */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in-view');
      observer.unobserve(entry.target);
    }
  }, {threshold: 0.15});
  document.querySelectorAll('.guide-visual').forEach(element => observer.observe(element));
})();
