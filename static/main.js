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
/**
 * Função animação  para barra scroll  pelo atributo data-anime
 */

const item = document.querySelectorAll('[data-anime]')
//pega a posição do item na window
const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85
  // se o windowtop for maior que o topo do element add a class animate
  item.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animate')
    } else {
      //remove a class animate
      element.classList.remove('animate')
    }
  })
}
animeScroll()

window.addEventListener('scroll', () => {
  animeScroll()
})
