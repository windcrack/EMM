import { toggleMenuMob } from "./module/mobile.js";
import { slider } from "./module/slider.js";

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia("(max-width: 800px)").matches;
  slider();
  if (isMobile) {
    toggleMenuMob();
  }
});
