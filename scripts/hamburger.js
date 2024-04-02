document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".hamburger--button")
    const menu = document.querySelector(".hamburger")

    let toggleMenu = () => {
        button.classList.toggle("is-active");
        menu.classList.toggle("is-active");
    }
    button.addEventListener("click", toggleMenu);
});