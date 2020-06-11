import { Page } from "./interfaces.js";
import { footer, menuItems, social } from "./footer.js";
const pages = [
    new Page("index.html", "Home"),
    new Page("about.html", "About"),
    new Page("work.html", "Work"),
    new Page("contact.html", "Contact"),
];
const main = () => {
    var path = window.location.pathname;
    var pageURL = path.split("/").pop();
    let found = pages.filter((item) => {
        console.log(item);
        return item.url == pageURL;
    })[0];
    menuItems(found, pages);
    social();
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuBranding = document.querySelector(".menu-branding");
    const menuNav = document.querySelector(".menu-nav");
    const navItems = document.querySelectorAll(".nav-item");
    var showMenu = false;
    console.log("--- menuBtn:", menuBtn);
    function toggleMenu() {
        console.log("--- menu clicked");
        if (showMenu) {
            menuBtn.classList.remove("close");
        }
        else {
            menuBtn.classList.add("close");
        }
        [menu, menuNav, menuBranding].forEach((itm) => toggle(itm));
        navItems.forEach((item) => toggle(item));
        showMenu = !showMenu;
    }
    function toggle(node) {
        const showClass = "show";
        if (showMenu) {
            node.classList.remove(showClass);
        }
        else {
            node.classList.add(showClass);
        }
    }
    // execution
    menuBtn.addEventListener("click", toggleMenu);
    footer();
};
main();
//# sourceMappingURL=main.js.map