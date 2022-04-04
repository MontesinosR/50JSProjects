const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// This try-catch type async functions are necessary here as otherwise if the input in the form does not match any GitHub user, nothing would happen. Async-await function are a must when working with APIs.

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)

    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username')
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')

    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
  }
}

function createUserCard(user) {
  const userID = user.name || user.login
  const userBio = user.bio ? `<p>${user.bio}</p>` : ''
  const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    ` // The "repos" div will be later filled with the addReposToCard function.
  main.innerHTML = cardHTML

}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos
    .slice(0, 5) //This prevents the card from getting overflowed with too many repos (as many as the max-height of the card), it will only show the first 5 out of the repos array, which looks better.
    .forEach(repo => {
      const repoEl = document.createElement('a')
      repoEl.classList.add('repo')
      repoEl.href = repo.html_url
      repoEl.target = '_blank'
      repoEl.innerText = repo.name

      reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  if (user) {
    getUser(user)

    search.value = ''
  }
})
