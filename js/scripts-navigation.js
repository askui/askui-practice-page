window.onload = function () {
  showFormPage();
};

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".navbar li a");

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navItems.forEach(function (navItem) {
        navItem.parentNode.classList.remove("selected");
      });
      this.parentNode.classList.add("selected");
    });
  });
});

function hideAllPages() {
  document.getElementById("form-page").style.display = "none";
  document.getElementById("calculator-drag-drop-page").style.display = "none";
  document.getElementById("images-page").style.display = "none";
}

function showFormPage() {
  hideAllPages();
  document.getElementById("form-page").style.display = "block";
}

function showCalculatorPage() {
  hideAllPages();
  document.getElementById("calculator-drag-drop-page").style.display = "block";
}

function showImagesPage() {
  hideAllPages();
  document.getElementById("images-page").style.display = "block";
}