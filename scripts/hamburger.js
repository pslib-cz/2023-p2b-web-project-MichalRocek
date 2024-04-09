document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".hamburger__button")
    const menu = document.querySelector(".toggle-menu")

    let toggleMenu = () => {
        button.classList.toggle("is-active");
        menu.classList.toggle("is-active");
    }
    button.addEventListener("click", toggleMenu);
});