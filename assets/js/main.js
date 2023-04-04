const url = `https://pokeapi.co/api/v2/pokemon/ditto`;

// terminar
function getItem(url){
		fetch(url)
		.then(response => response.json())
		.then(dados => {
      console.log(dados.name);
    //   dados.sprites.forEach((item, index) => {
    //     if (index < 1) {
    //       let col = document.createElement('div');

    //       let image = document.createElement('img');
    //       image.setAttribute('src', item.img_src);
    //       image.className = 'img-fluid rounded shadow';

    //       col.appendChild(image);
    //       conteudo.appendChild(col);
    //     }
    // });
})
		.catch(_ => {console.log(_)})
		.finally( () => {console.log('Processo finalizado!')});
	}

	getItem(url);

  	// let meu_elemento = document.CreateElement('img');
	  // element.id = 'MeuElemento';
  	// element.className = 'img-fluid';
	  // element.setAttribute('src', 'link da imagem');

		// //O elemento criado acima será adicionado dentro do conteúdo
		// document.getElementById('conteudo').appendChild(meu_elemento);