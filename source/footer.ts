import { Page, IPage } from "./interfaces.js";

export const footer = () => {
  console.log("Footer run");
  //footerDiv.textContent = "No copyrights " + new Date().getFullYear();
  const footerDiv = document.querySelector("#main-footer")!;
  if (footerDiv != null) {
    console.log("Found footer");
    footerDiv.textContent = "jurisandersons.com";
  }
};

export const menuIcons = (current: IPage, pages: IPage[]) => {
  const ul = document.querySelector(".menu-nav")!;
  console.log("--- menuIcons() current Page:", current);
  console.log("--- menuIcons() ul:", ul);
  if (ul == null) {
    return;
  }

  //const links = ["index.html", "about.html"];

  pages.forEach((item) => {
    let li = document.createElement("li");
    li.className = current.url == item.url ? "nav-item current" : "nav-item";
    let aa = document.createElement("a");
    aa.href = item.url;
    aa.className = "nav-link";
    aa.innerText = item.title;
    li.appendChild(aa);
    ul.appendChild(li);
  });
};
