document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const successMessage = document.getElementById("success-message");
  const resetButton = form.querySelector('button[type="reset"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.textContent = "Successfully submitted!";
  });

  resetButton.addEventListener("click", function () {
    successMessage.textContent = "";
  });
});