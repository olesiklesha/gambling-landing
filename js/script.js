(() => {
  const burgerBTN = document.querySelector(".burger");
  const localeBTN = document.querySelector(".btns__item_local span");

  burgerBTN.addEventListener("click", () => {
    burgerBTN.classList.toggle("burger_opened");
    document.body.classList.toggle("stop-scroll");
  });

  localeBTN.addEventListener("click", () => {
    localeBTN.textContent = localeBTN.textContent === "EN" ? "RU" : "EN";
  });
})();
