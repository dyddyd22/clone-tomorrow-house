const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)

function closeMyMenuOnClickOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickOutside)
  }
}
