"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sec-1");
  const prev = document.getElementById("sec1-prev");
  const next = document.getElementById("sec1-next");

  const scrollAmount = container.clientWidth * 0.8; // scroll 80% af synlig bredde

  if (next)
    next.addEventListener("click", () => {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

  if (prev)
    prev.addEventListener("click", () => {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});