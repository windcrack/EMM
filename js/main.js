import { toggleMenuMob } from "./module/mobile.js";
import { slider } from "./module/slider.js";

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia("(max-width: 800px)").matches;
  $(".js-select").select2({
    minimumResultsForSearch: Infinity,
    //dropdownCssClass: "form-select__wrap",
  });

  slider();
  if (isMobile) {
    toggleMenuMob();
  }
});
