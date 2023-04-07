// ? Declaração do botão
const btn = document.getElementById("btn");

// ! terminar
// TODO: substituir os dados antigos pelos novos
// ? Quando btn for clicado, execute:
btn.addEventListener("click", () => {
	// ? Declarações:
	// ? Input para pegar o nome do pokemon
  let pokemonName = document.getElementById("pokemonName").value;

	// ? A tag <h3>
  let nome = document.getElementById("nome");

	// ? A tag <img>
	let pokemonImg = document.getElementById("pokemonImg");
	
	// ? A div habilidade
	let pokemonHabilidade = document.getElementById("habilidade");
  
	// ? A div formas
	let pokemonForma = document.getElementById("formas");

	// ? A div espécies
	let pokemonEspecie = document.getElementById("especies");
	
	// ? A div tipos
	let pokemonTipo = document.getElementById("tipos");

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

				dados['abilities'].forEach((item, index) => {
					let habilidades = document.createElement('span');
			    habilidades.innerHTML = `${dados['abilities'][`${index}`]['ability']['name']}`+'<br>';
          pokemonHabilidade.appendChild(habilidades);
			});

			dados['forms'].forEach((item, index)=>{
				let formas = document.createElement('span');
				formas.innerHTML = `${dados['forms'][`${index}`]['name']}`;
				pokemonForma.appendChild(formas);
			});

			let especies = document.createElement('span');
			especies.innerHTML = `${dados['species']['name']}`;
			pokemonEspecie.appendChild(especies);
			
			dados['types'].forEach((item, index)=>{
				let tipos = document.createElement('span');
				tipos.innerHTML = `${dados['types'][`${index}`]['type']['name']}`;
				pokemonTipo.appendChild(tipos);
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