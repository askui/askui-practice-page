window.onload = function () {
  showCalculatorPage();
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
  document.getElementById("calculator-drag-drop-page").style.display = "none";
  document.getElementById("register-page").style.display = "none";
  document.getElementById("images-page").style.display = "none";
  document.getElementById("team-page").style.display = "none";
  document.getElementById("android-page").style.display = "none";
}

function showCalculatorPage() {
  hideAllPages();
  document.getElementById("calculator-drag-drop-page").style.display = "block";
}

function showRegisterPage() {
  hideAllPages();
  document.getElementById("register-page").style.display = "block";
}

function showImagesPage() {
  hideAllPages();
  document.getElementById("images-page").style.display = "block";
}

function showTeamPage() {
  hideAllPages();
  document.getElementById("team-page").style.display = "block";
}

function showAndroidPage() {
  hideAllPages();
  document.getElementById("android-page").style.display = "block";
}
