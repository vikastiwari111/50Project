const menu_btn = document.querySelector(".menu-btn")
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

menu_btn.addEventListener("click", () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})
close_btn.addEventListener("click", () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})