(() => {
  const burgerBTN = document.querySelector(".burger");

  burgerBTN.addEventListener("click", () => {
    burgerBTN.classList.toggle("burger_opened");
    document.body.classList.toggle("stop-scroll");
  });
})();
