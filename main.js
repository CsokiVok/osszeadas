import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const Random1 = document.getElementById('random1')
  const Random2 = document.getElementById('random2')
  const Tipp = document.getElementById('tipp')

  const randomszam1 = Math.floor(Math.random() * 100)
  const randomszam2 = Math.floor(Math.random() * 100)
  Random1.innerHTML = randomszam1
  Random2.innerHTML = randomszam2

  document.getElementById('MatekForm').addEventListener('submit', (e) => {
    e.preventDefault();
  })

  document.getElementById('gomb').addEventListener('click', (e) => {
    if (Tipp.value == (randomszam1 + randomszam2)) {
      document.body.style.backgroundColor = "green";
    }
    else {
      document.body.style.backgroundColor = "red";
    }
  })
})