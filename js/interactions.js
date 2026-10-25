/* ==========================================================================
   interactions.js — comportamentos da interface
   ========================================================================== */

window.GC = window.GC || {};

/* Mostra uma linha sutil no cabeçalho assim que a página começa a rolar.
   Usa um marcador de 1px no topo e IntersectionObserver (sem evento de scroll). */
GC.initHeaderState = function () {
  var header = document.querySelector(".site-header");

  if (!header || !("IntersectionObserver" in window)) return;

  var marker = document.createElement("div");
  marker.setAttribute("aria-hidden", "true");
  marker.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none";
  document.body.prepend(marker);

  new IntersectionObserver(function (entries) {
    header.classList.toggle("is-scrolled", !entries[0].isIntersecting);
  }).observe(marker);
};
