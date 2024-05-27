document.addEventListener("DOMContentLoaded", function () {
  const register = document.getElementById("register");
  const successMessage = document.getElementById("success-message");
  const resetButton = register.querySelector('button[type="reset"]');

  register.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.textContent = "Successfully submitted!";
  });

  resetButton.addEventListener("click", function () {
    successMessage.textContent = "";
  });
});