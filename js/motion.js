const sceneImg = document.querySelector(".scene img");
const landing = document.querySelector(".home-landing");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (sceneImg && landing && !reduceMotion) {
  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const limit = landing.offsetHeight;

    // Keep moving while the cover is still on screen
    if (scrollY <= limit) {
      const offset = scrollY * 0.45;
      sceneImg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
    }

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateParallax();
}
