export function setupNavbar() {
    const burgerButton = document.getElementById('burger-button')
    const navbar = document.getElementById('navbar')
    const closeButton = document.getElementById('close-button')
    const header = document.getElementById('header')
    const preciosMenu = document.getElementById('precios-menu')
    const categoriasMenu = document.getElementById('categorias-menu')
    burgerButton.addEventListener("click", () => {
        navbar.style.transform = 'translateX(0%)'
        navbar.style.transition = 'all 1.5s ease'
        header.style.transform = 'translatey(-100%)'
        header.style.transition = 'all 1.5s ease'
    })
    closeButton.addEventListener("click", () => {
        navbar.style.transform = 'translateX(-100%)'
        header.style.transform = 'translatey(0%)'
        preciosMenu.classList.remove('toggle')
        categoriasMenu.classList.remove('toggle')
    })
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeButton.click()
        }
    })
}