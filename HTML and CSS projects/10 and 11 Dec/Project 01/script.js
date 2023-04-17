const navbar = document.getElementsByTagName('nav')[0];
const hamburgerBtn = document.getElementById("hamburger-icon");
const crossBtn = document.getElementById("cross-btn");
console.log(navbar, hamburgerBtn)
hamburgerBtn.addEventListener("click", () => {
    navbar.style.display = "flex"
    hamburgerBtn.style.display = "none"
})
crossBtn.addEventListener("click", () => {
    navbar.style.display = "none"
    hamburgerBtn.style.display = "inline"
})