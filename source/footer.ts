export const footer = () => {
  console.log("Footer run");
  //footerDiv.textContent = "No copyrights " + new Date().getFullYear();
  const footerDiv = document.querySelector("#main-footer")!;
  if (footerDiv != null) {
    console.log("Found footer");
    footerDiv.textContent = "jurisandersons.com";
  }
};
