const contentLinks = document.getElementById("contentLinks");
const openContentLinks = document.getElementById("openContentLinks");

openContentLinks.addEventListener("click", () => {
    openContentLinks.classList.toggle("openButton");
    contentLinks.classList.toggle("openContent")
});