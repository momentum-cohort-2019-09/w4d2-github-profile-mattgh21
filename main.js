const introDiv = document.querySelector('#introduction')
const homeworldDiv = document.querySelector('#homeworld')
const nameHeading = document.querySelector('h1')
const basicsDiv = document.querySelector('#basics')
const nameDiv = document.querySelector('#name')
const organizationDiv = document.querySelector('#organization')
const heightDiv = document.querySelector('#height')
const weightDiv = document.querySelector('#weight')

const fetchCharacter = function() {
    fetch('https://swapi.co/api/people/20/')
        .then(response => response.json())
        .then(data => {


            nameDiv.innerText = `Name: ${data.name}`
            organizationDiv.innerText = `Organization: Jedi Council`
            heightDiv.innerText = `Height: ${data.height} cm`
            weightDiv.innerText = `Weight: ${data.mass} kg`

            introDiv.innerText = `My name is ${data.name}, and I am the Grand Jedi Master of the Jedi Council. I was born in ${data.birth_year}, and have been training as a Jedi for over 800 years. I have ${data.hair_color} hair, and ${data.skin_color} skin. My passions include training padawans with a lightsaber and meditation. My greatest asset is my wisdom.`
            nameHeading.innerText = `${data.name}`


        })
}


fetchCharacter()