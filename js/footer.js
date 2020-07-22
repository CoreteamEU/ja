export const contactsLinks = () => {
    const contacts = document.querySelector("#contacts");
    if (contacts != null) {
        contacts.innerHTML = `      
        <a href="mailto:JurimAndersonam@gmail.com">JurimAndersonam@gmail.com</a>
      |
        <span class="text-secondary">Phone:</span>
        <a href="tel:+37129177669">+37129177669</a>
      `;
    }
};
export const footer = () => {
    const footerDiv = document.querySelector("#main-footer");
    if (footerDiv != null) {
        // console.log("Found footer");
        footerDiv.innerHTML =
            "<span id='contacts'></span> | " + new Date().getFullYear();
        contactsLinks();
    }
};
export const menuItems = (current, pages) => {
    const ul = document.querySelector(".menu-nav");
    console.log("--- menuIcons() current Page:", current);
    console.log("--- menuIcons() ul:", ul);
    if (ul == null) {
        return;
    }
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
export const social = () => {
    let icons = document.querySelector(".icons");
    icons.innerHTML = `
  <h6>links:</h6>

  <a href="http://coreteam.eu"><i class="icon icon-coreteam"></i></a>

  <a href="https://www.linkedin.com/in/jurisandersons/">
  <i class="fab fa-linkedin fa-2x"></i>
  </a>

  <a href="https://github.com/coreteameu/">
  <i class="fab fa-github fa-2x"></i>
  </a>



  <a href="https://www.youtube.com/channel/UCvb1clq_2GGFQ4NC3Hitshw">
  <i class="fab fa-youtube fa-2x"></i>
  </a>

  <a href="https://soundcloud.com/misterssensors">
  <i class="fab fa-soundcloud fa-2x"></i>
  </a>

  <a href="https://mrsensors.bandcamp.com/">
  <i class="fab fa-bandcamp fa-2x"></i>
  </a>

  <a href="https://twitter.com/mrsensors">
  <i class="fab fa-twitter fa-2x"></i>
  </a>`;
};
//# sourceMappingURL=footer.js.map