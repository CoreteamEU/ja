export const footer = () => {
  console.log("Footer run");
  //footerDiv.textContent = "No copyrights " + new Date().getFullYear();
  const footerDiv = document.querySelector("#main-footer")!;
  if (footerDiv != null) {
    console.log("Found footer");
    footerDiv.textContent = "jurisandersons.com";
  }
};

export const menuIcons = (current: String) => {
  const ul = document.querySelector(".menu-nav")!;
  console.log("--- menuIcons() ul:", ul);
  if (ul == null) {
    return;
  }

  // let initialHTML = new HTMLElement();
  // initialHTML.innerHTML = `
  //     <li class="nav-item current">
  //       <a href="index.html" class="nav-link"> Home </a>
  //     </li>
  //     <li class="nav-item">
  //       <a href="about.html" class="nav-link"> About </a>
  //     </li>
  //     <li class="nav-item">
  //       <a href="/work.html" class="nav-link"> Work </a>
  //     </li>
  //     <li class="nav-item">
  //       <a href="/contact.html" class="nav-link"> Contact </a>
  //     </li>
  //   `;

  // let allNavItems = initialHTML.querySelectorAll(".nav-item");
  // allNavItems.forEach((item) => {
  //   console.log(item);
  // });
  const links = ["index.html", "about.html"];

  links.forEach((item) => {
    let li = document.createElement("li");
    li.className = current == item ? "nav-item current" : "nav-item";
    let aa = document.createElement("a");
    aa.href = item;
    aa.className = "nav-link";
    aa.innerText = "Linkkk";
    li.appendChild(aa);
    ul.appendChild(li);
  });

  // ul.innerHTML = `
  //   <li class="nav-item current">
  //     <a href="index.html" class="nav-link"> Home </a>
  //   </li>
  //   <li class="nav-item">
  //     <a href="about.html" class="nav-link"> About </a>
  //   </li>
  //   <li class="nav-item">
  //     <a href="/work.html" class="nav-link"> Work </a>
  //   </li>
  //   <li class="nav-item">
  //     <a href="/contact.html" class="nav-link"> Contact </a>
  //   </li>
  // `;
};
