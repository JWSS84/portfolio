// abre e fecha menu mobile

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
  menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list', 'bi-x')
    : menuMobile.classList.replace('bi-x', 'bi-list')
  body.classList.toggle('menu-nav-active')
})

/**
 * fecha o menu quando clicar e muda o icone
   quando algum item for clica será retirado a class menu active,
   e trocado o icone do menu "X" ou "hamburguer"
 */
const navItem = document.querySelectorAll('.navItem')

navItem.forEach(item => {
  item.addEventListener('click', () => {
    if (body.classList.contains('menu-nav-active')) {
      body.classList.remove('menu-nav-active')
      menuMobile.classList.replace('bi-x', 'bi-list')
    }
  })
})
