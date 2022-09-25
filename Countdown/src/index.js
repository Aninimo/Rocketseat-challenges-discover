const countdown = () =>{
  const countDate = new Date("Feb 24,2022 00:00:00")
  const now = new Date().getTime()
  const gap = countDate - now
  
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  
  //calculate the shit
  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const textMinute = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)
  
  document.querySelector(".day").innerText = textDay
  document.querySelector(".hour").innerText = textHour
  document.querySelector(".minute").innerText = textMinute
  document.querySelector(".second").innerText = textSecond
}

setInterval(countdown,1000)

////////// MODAL //////////

function acao(){
  let modal = document.querySelector('.modal')
  modal.style.display = 'block'
}

function f(){
  let modal = document.querySelector('.modal')
  modal.style.display = 'none'
}
