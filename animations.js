/* ==========================================================================
   animations.js — animações discretas (só o que realmente ajuda)
   O site funciona normalmente com tudo isto desligado.
   ========================================================================== */

window.GC = window.GC || {};

/* Elementos com [data-reveal] aparecem suavemente ao entrar na tela. */
GC.initRevealAnimations = function () {
  var items = document.querySelectorAll("[data-reveal]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!items.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  items.forEach(function (el) { observer.observe(el); });
};
