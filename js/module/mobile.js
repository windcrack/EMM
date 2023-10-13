// Открытие и закрытие мобильного меню
export function toggleMenuMob() {
  const mobHeader = document.querySelector(".js-mob-header");
  const button = document.querySelector(".js-burger-btn");
  const closeButton = document.querySelector(".js-close-btn");
  //const buttonBody = document.querySelector(".js-burger");

  if (!!mobHeader && !!button) {
    button.addEventListener("click", () => {
      mobHeader.classList.toggle("hide");
      //buttonBody.classList.toggle("close");
    });
  }
  if (!!mobHeader && !!closeButton) {
    closeButton.addEventListener("click", () => {
      mobHeader.classList.toggle("hide");
      //buttonBody.classList.toggle("close");
    });
  }
}
//---------------------
