const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '34',
}

const input = document.getElementById('pokemonId');

function eventController(event) {
    apiData.id = event.target.value;
    console.log(apiData);


    const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`
    fetch(apiUrl)
        .then((data) => {
            if (data.ok) {
                return data.json()
            }
            throw new Error('Response not ok.');
        })
        .then(pokemon => generateHtml(pokemon))
        .catch(error => console.error('Error:', error))

    const generateHtml = (data) => {
        console.log(data)
        const html = `
        <div class="name">${data.name}</div>
        <img class="front" src=${data.sprites.front_default}>
        <img class="back" src=${data.sprites.back_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
             <span>Weight: ${data.weight}</span><br>
        </div>
    `
        const pokemonDiv = document.querySelector('.pokemon')
        pokemonDiv.innerHTML = html
    }
}
input.addEventListener('change', eventController, false);

const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`

fetch(apiUrl)
    .then((data) => {
        if (data.ok) {
            return data.json()
        }
        throw new Error('Response not ok.');
    })
    .then(pokemon => generateHtml(pokemon))
    .catch(error => console.error('Error:', error))

const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img class="front" src=${data.sprites.front_default}>
        <img class="back" src=${data.sprites.back_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
             <span>Weight: ${data.weight}</span><br>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}