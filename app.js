const navbar = document.querySelector('.header')

window.addEventListener("scroll", () => {
    if(window.scrollY > 80) {
        navbar.classList.add('header_active')
    }else {
        navbar.classList.remove('header_active')
    }
})

const navOpenButton = document.querySelector('.nav-btn')
const navList = document.querySelector('.nav-list')
const navCloseButton = document.querySelector('.nav-btn-close')

navOpenButton.addEventListener("click", () => {
    navList.classList.add('nav-list_active')
})

navCloseButton.addEventListener("click", () => {
    navList.classList.remove('nav-list_active')
})