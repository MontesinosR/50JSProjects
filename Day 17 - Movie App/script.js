const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e4a7fb66bfe0f394b35fbc0fe801036b&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=e4a7fb66bfe0f394b35fbc0fe801036b&query="'

const search = document.getElementById('search')
const main = document.getElementById('main')
const form = document.getElementById('form')

//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}

//Searchbar functionallity

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if(searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm)

      search.value = ''
  } else {
      window.location.reload()
  }
})
