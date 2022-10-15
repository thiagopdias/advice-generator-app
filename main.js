const title = document.getElementById('title')
const paragraph = document.getElementById('paragraph')
const buttonGenerator = document.getElementById('buttonGenerator')

function generatorAdvice() {
    fetch('	https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        title.innerHTML = `Advice #${data.slip.id}`
        paragraph.innerHTML = data.slip.advice
    })
    .catch(error => console.log(error))
}

window.addEventListener('load', generatorAdvice)
buttonGenerator.addEventListener('click', generatorAdvice)