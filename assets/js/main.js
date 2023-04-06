// ? Declaração do botão
const btn = document.getElementById("btn");

// ! terminar
// ? Quando btn for clicado, execute:
btn.addEventListener("click", () => {
	// ? Declarações:
	// ? Input para pegar o nome do pokemon
  let pokemonName = document.getElementById("pokemonName").value;

	// ? A tag <h3>
  let nome = document.getElementById("nome");

	// ? A tag <img>
	let pokemonImg = document.getElementById("pokemonImg");
	
	// ? A <div> de abilidades
	let pokemonHabilidade = document.getElementById("habilidade");
  
	// ? Url da API (onde vai pegar o value do input)
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
	
	// ? Url da API (onde vai pegar o value do input)
  function getItem(url) {
    fetch(url)
      .then((response) => response.json())
      .then((dados) => {
        console.log(dados);
        nome.innerText = `${dados["name"]}`;
        pokemonImg.setAttribute(
          "src",`${dados["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_default"]}`
        );
				dados.abilities.forEach((item, index) => {
						let abilities = document.createElement('p');

			});
      })
      .catch((_) => {
        console.log(_);
      })
      .finally(() => {
				console.log("Processo finalizado!");
      });
  }
  getItem(url);
});