const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) { // To find out this measures, you can console log window.scrollY and check the values of each scrolling, the nav.offsetHeight will always be the same. So here we decide that the classList will change when the scroll value is higher than the nav height by 150.
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}
