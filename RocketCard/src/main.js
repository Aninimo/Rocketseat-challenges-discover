////////// RANDOM COLORS //////////
function random(){
  let r = Math.floor(Math.random()*255),
      g = Math.floor(Math.random()*255),
      b = Math.floor(Math.random()*255)
      
  document.getElementById("background").style.backgroundColor = 'rgb('+r+','+g+','+b+')'
}


const LinksSocialMedia = {
  github: "Aninimo"
}


function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      followers.textContent = data.followers
      following.textContent = data.following
      public_repos.textContent = data.public_repos
      company.textContent = data.company
      userLocation.textContent = data.location
      avatar_url.src = data.avatar_url
      
    })
}

getGithubProfileInfos()
