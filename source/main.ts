import { footer } from "./footer";

const main = () => {
  const menuBtn = document.querySelector(".menu-btn")!;
  const menu = document.querySelector(".menu")!;
  const menuBranding = document.querySelector(".menu-branding")!;
  const menuNav = document.querySelector(".menu-nav")!;
  const navItems = document.querySelectorAll(".nav-item")!;
  var showMenu = false;

  console.log("--- menuBtn:", menuBtn);
  function toggleMenu() {
    console.log("--- menu clicked");
    if (showMenu) {
      menuBtn.classList.remove("close");
    } else {
      menuBtn.classList.add("close");
    }
    [menu, menuNav, menuBranding].forEach((itm) => toggle(itm));
    navItems.forEach((item) => toggle(item));
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

  // execution
  menuBtn.addEventListener("click", toggleMenu);
  footer();
};

main();
