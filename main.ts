// Select DOM items
const menuBtn = document.querySelector(".menu-btn")!;
const menu = document.querySelector(".menu")!;
const menuBranding = document.querySelector(".menu-branding")!;
const menuNav = document.querySelector(".menu-nav")!;
const navItems = document.querySelectorAll(".nav-item")!;

// set initial state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (showMenu) {
    menuBtn.classList.remove("close");
  } else {
    menuBtn.classList.add("close");
  }
  menu.classList;
  toggle(menu);
  toggle(menuNav);
  toggle(menuBranding);
  navItems.forEach((item) => {
    toggle(item);
  });

  showMenu = !showMenu;
}

function toggle(node: Element) {
  const showClass = "show";
  if (showMenu) {
    node.classList.remove(showClass);
  } else {
    node.classList.add(showClass);
  }
}
