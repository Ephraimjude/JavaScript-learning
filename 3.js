document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.querySelector(".non-logo-side");

  menuToggle.addEventListener("change", function() {
    if (menuToggle.checked) {
      menu.classList.add("open");
    } else {
      menu.classList.remove("open");
    }
  });

  var submenuToggle = document.querySelectorAll(".non-logo-side .submenu");

  for (var i = 0; i < submenuToggle.length; i++) {
    submenuToggle[i].addEventListener("click", function(e) {
      e.stopPropagation();
      this.classList.toggle("open");
    });
  }
});
