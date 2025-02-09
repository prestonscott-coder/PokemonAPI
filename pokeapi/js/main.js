//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://pokeapi.co/api/v2/pokemon-form/${choice}/`

  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data.sprites.front_default)
        document.querySelector('img').src = data.sprites.front_default
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


document.querySelector('.button').addEventListener('click', pokeName);

let storedNames = []; // Array to store Pokémon names

function pokeName() {
  const pokemon = document.querySelector('.input').value;
  const uppercasePokemon = pokemon.toUpperCase();

  if (!storedNames.includes(uppercasePokemon)) {
    // Add the Pokémon name if it doesn't already exist in the array
    storedNames.push(uppercasePokemon);

    // Create a new list item and append it to the list
    const li = document.createElement('li');
    li.textContent = uppercasePokemon;
    document.querySelector('ol').appendChild(li);
  } else {
    console.log(`${uppercasePokemon} is already in the list.`);
  }
}