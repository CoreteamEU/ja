import { Page, IPage } from "./interfaces.js";
import { footer, menuItems, social } from "./footer.js";

const pages: Page[] = [
  new Page("index.html", "Home"),
  new Page("about.html", "About"),
  new Page("portfolio.html", "Projects"),
  new Page("tech.html", "Technical"),
  new Page("music.html", "Musical"),
  new Page("coreteam.html", "My startup"),
  // new Page("cv.html", "CV"),
  new Page("contact.html", "Contact"),
];

const setupCollapsibles = () => {
  var coll: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
    "collapsible"
  ) as HTMLCollectionOf<HTMLElement>;
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var slf: Element = this!;
      slf.classList.toggle("active");
      var content = slf.nextElementSibling as HTMLElement;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};

const main = () => {
  // var path = window.location.pathname;
  // var pageURL = path.split("/").pop()!;
  let unitName = document.querySelector("meta[unitname]")!;

  let found = pages.filter((item) => {
    console.log(item);
    return item.url == unitName.getAttribute("unitname");
  })[0]!;

  menuItems(found, pages);
  social();

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
  setupCollapsibles();
};

main();
