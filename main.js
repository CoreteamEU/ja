"use strict";
// Select DOM items
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuBranding = document.querySelector(".menu-branding");
var menuNav = document.querySelector(".menu-nav");
var navItems = document.querySelectorAll(".nav-item");
// set initial state
var showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (showMenu) {
        menuBtn.classList.remove("close");
    }
    else {
        menuBtn.classList.add("close");
    }
    menu.classList;
    toggle(menu);
    toggle(menuNav);
    toggle(menuBranding);
    navItems.forEach(function (item) {
        toggle(item);
    });
    showMenu = !showMenu;
}
function toggle(node) {
    var showClass = "show";
    if (showMenu) {
        node.classList.remove(showClass);
    }
    else {
        node.classList.add(showClass);
    }
}
