let day = 0
let age = 0

document.getElementById('button').addEventListener('click', work)

function work () {
  age = document.getElementById('input1').value
  age = parseInt(age)
  day = document.getElementById('input2').value
  if (day !== 'Sunday' && day !== 'Saturday' && age < 18) {
    document.getElementById('output').innerHTML = 'Time for school!'
  } else if (day !== 'Sunday' && day !== 'Saturday' && age >= 18 && age < 65) {
    document.getElementById('output').innerHTML = 'Time to go to work!'
  } else if (age >= 65) {
    document.getElementById('output').innerHTML = 'Take a nap, relax, do something besides using this site.'
  } else {
    document.getElementById('output').innerHTML = 'Time to relax for the weekend'
  }
}
