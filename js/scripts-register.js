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

  const birthDateInput = document.getElementById('birth-date');
  const birthMonthInput = document.getElementById('birth-month');
  const birthYearInput = document.getElementById('birth-year');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startYear = 1900;
  const endYear = currentYear;

  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.textContent = i;
    birthDateInput.appendChild(option);
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  for (let i = 0; i < months.length; i++) {
    const option = document.createElement('option');
    option.value = i + 1;
    option.textContent = months[i];
    birthMonthInput.appendChild(option);
  }

  for (let year = endYear; year >= startYear; year--) {
    const option = document.createElement('option');
    option.textContent = year;
    birthYearInput.appendChild(option);
  }
});