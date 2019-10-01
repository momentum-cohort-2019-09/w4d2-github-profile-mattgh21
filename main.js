const introDiv = document.querySelector('#introduction')
const homeworldDiv = document.querySelector('#homeworld')
const nameHeading = document.querySelector('h1')

const fetchCharacter = function() {
    fetch('https://swapi.co/api/people/20/')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            // return fetch(data)

            introDiv.innerText = `My name is ${data.name}, and I am the Grand Jedi Master of the Jedi Council. I was born in ${data.birth_year}, and have been training as a Jedi for over 800 years. I am ${data.height} centimeters tall, and weigh ${data.mass} kg. I have ${data.hair_color} hair, and ${data.skin_color} skin. My passions include training padawans with a lightsaber and meditation. My greatest asset is my wisdom.`
            nameHeading.innerText = `${data.name}`

            function basicsToHtml() {
                return `
                <div id="basics>
                    <h2>The Basics</h2>
                        <ul>
                            <li>Name: ${data.name}</li>
                            <li>Company: Jedi Council</li>
                            <li>Films:</li>
                        </ul>
                </div>
                `
            }
            basicsToHtml()
        })
}



fetchCharacter()