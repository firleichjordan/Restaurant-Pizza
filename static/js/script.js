// Navbar function
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu
function toggleMenu() {
  const menuBar = document.querySelector(".menuToggle");
  const nav = document.querySelector(".nav");
  menuBar.classList.toggle("active");
  nav.classList.toggle("active");
}

// Menu filter
{
  const menuFilter = document.querySelector(".menu-tabs"),
    menuItems = document.querySelectorAll(".item");

  // Filter menu items
  menuFilter.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      // Deactive existing active 'Item'
      menuFilter.querySelector(".active").classList.remove("active");

      // Active new 'Item'
      event.target.classList.add("active");

      const target = event.target.getAttribute("data-target");

      menuItems.forEach((item) => {
        if (target === item.getAttribute("data-category") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.add("hide");
          item.classList.remove("show");
        }
      });
    }
  });
}

// Page loader
window.addEventListener("load", function () {
  // loader
  document.querySelector(".page-loader").classList.add("fade-out");
  this.setTimeout(function () {
    document.querySelector(".page-loader").style.display = "none";
  });

  //AOS on scroll after loader
  AOS.init({
    delay: 500,
    duration: 600,
  });
});
