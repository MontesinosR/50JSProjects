const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

// This variables are nodelists, so they will behave as arrays.
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

// The function is called after 2,5 secs so we can see the animations
setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://source.unsplash.com/random" alt="randompic"/>'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/79.jpg" alt="profile-pic-jane"/>'
  name.innerHTML = 'Jane Doe'
  date.innerHTML = 'March 12, 2022'

  // Loop through the nodelists in order to remove HTML classes
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
