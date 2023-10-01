const video = document.querySelector(".promo__bg-img");

window.addEventListener("scroll", () => {
  let { scrollY } = window;

  video.style.top = 0.3 * scrollY + "px";
});
