successMessage();
dismissSuccessMessage();

function successMessage() {
  const form = document.querySelector(".form__success");
  const successBtn = document.querySelector(".success__button");

  successBtn.addEventListener("click", function (e) {
    e.preventDefault();
    form.classList.remove("hidden");
  });
}

function dismissSuccessMessage() {
  const form = document.querySelector(".form__success");
  const dismissBtn = document.querySelector(".dismiss__button");

  dismissBtn.addEventListener("click", function (e) {
    form.classList.add("hidden");
  });
}
