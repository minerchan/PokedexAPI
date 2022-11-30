// ================================================== VARIÁVEIS ==================================================
const pokemonDoVisor = document.querySelector('#pokemonGif'); // Este é o pokemon que aparece no visor
const campoPesquisa = document.querySelector('#pesquisaPokemon');
const botaoPesquisa = document.querySelector('#pesquisaPokemonBtn');
const nomeDisplay = document.querySelector('#pokemonNome');
const tipoUm = document.querySelector('#pokemonTipo1');
const tipoDois = document.querySelector('#pokemonTipo2');
const numeroDex = document.querySelector('#numero');
const descricao = document.querySelector('#pokeDescript');
const botaoEsquerdo = document.querySelector('#controleEsquerdo');
const botaoDireito = document.querySelector('#controleDireito');
let pokemonNome = 'bulbasaur';

// ================================================== ARMAZENANDO A API EM UMA VARIÁVEL ==================================================
async function poke(nome, direcao){
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`).then(response => response.json());
  const direita = data.id + 1;
  const esquerda = data.id - 1;
  if(direcao === 'direita'){
    data = await fetch(`https://pokeapi.co/api/v2/pokemon/${direita}`).then(response => response.json());
  } else if(direcao === 'esquerda'){
    data = await fetch(`https://pokeapi.co/api/v2/pokemon/${esquerda}`).then(response => response.json());
  }
  nomeDisplay.innerHTML = data.name; // altera o nome do pokemon para o nome pesquisado
  pokemonDoVisor.src = `./img/anim/${data.name}.gif` // Altera a imagem do pokemon de acordo com o nome
  tipoUm.innerHTML = data.types[0].type.name; // Altera o tipo do pokemon de acordo com o nome
  tipoUm.classList = `tipo ${data.types[0].type.name}`; // Altera a cor do tipo de acordo com o nome
  const specie = await fetch(data.species.url).then(response => response.json());
  traducao(specie.flavor_text_entries[12].flavor_text);
  
  // console.log(traducao(specie['flavor_text_entries'][3]['flavor_text']));
  // descricao.innerHTML = traducao(specie['flavor_text_entries'][3]['flavor_text']);
  
  // traducao();


  if(data.types.length > 1){ // Se o pokemon tiver mais de um tipo, ele adiciona o segundo tipo
    tipoDois.innerHTML = data.types[1].type.name; // Altera o tipo do pokemon de acordo com o nome
    tipoDois.classList = `tipo ${data.types[1].type.name}`; // Altera a cor do tipo de acordo com o nome
} else { // Se o pokemon tiver apenas um tipo, ele remove o segundo tipo
    tipoDois.innerHTML = ''; // Remove o tipo do pokemon
    tipoDois.classList = ''; // Remove a cor do tipo
}
}

async function traducao(texto){
  const traduzido = await fetch(`https://api.mymemory.translated.net/get?q=${texto}&langpair=en|pt`).then(response => response.json());
  descricao.innerHTML = traduzido.responseData.translatedText;
  // console.log(traduzido.responseData.translatedText)
}
// ================================================== CAPTURANDO E APAGANDO VALOR DO INPUT ==================================================
botaoPesquisa.addEventListener('click', () => { // Quando o botão de azul for clicado
  pokemonNome = campoPesquisa.value; // Armazena o valor do input na variável pokemonNome

  campoPesquisa.value = ''; // Apaga o valor do input
  poke(pokemonNome); // Chama a função poke com o valor do input, no caso o nome que foi pesquisado
})



botaoDireito.addEventListener('click', () => {
  pokemonNome = nomeDisplay.innerHTML;
  poke(pokemonNome, "direita");
})

botaoEsquerdo.addEventListener('click', () => {
  pokemonNome = nomeDisplay.innerHTML;
  poke(pokemonNome, "esquerda");
})

document.addEventListener('keydown', (event)=>{
  if(event.keyCode == 39){
    pokemonNome = nomeDisplay.innerHTML;
    poke(pokemonNome, "direita");
  } else if(event.keyCode == 37){
    pokemonNome = nomeDisplay.innerHTML;
    poke(pokemonNome, "esquerda");
  }
})









// campoPesquisa.addEventListener('keydown', (e)=>{
//   e = campoPesquisa.value; // Aqui é onde eu pego a primeira letra do nome do pokemon e coloco em maiúsculo
//   campoPesquisa.value.charAt(0) = e; // Aqui é onde eu coloco a primeira letra do nome do pokemon em maiúsculo
// })
// campoPesquisa.value.extConcharAt(0).toUpperCase(); // Aqui é onde eu pego a primeira letra do nome do pokemon e coloco em maiúsculo







// const card = document.querySelector('.cardPokemon');
// const imagem = document.querySelector('.imagem');
// const nome = document.querySelector('.nome');
// const habUm = document.querySelector('.habilidadeUm');
// const habDois = document.querySelector('.habilidadeDois');
// const habTres = document.querySelector('.habilidadeTres');
// const campo = document.querySelector('#escrever');
// const botao = document.querySelector('#botao')


// // campo.value = nome;

// async function buscandoAPI(parametro){
//   const teste = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`).then(res => res.json())
//   // console.log(teste.abilities[1].ability.name)
  
//   if (teste.abilities[1] == undefined){
//     let hability2 = ""
//     habDois.textContent = hability2;
  
//   } else {
//     let hability2 = teste.abilities[1].ability.name
//     habDois.textContent = hability2;
//   }

//   if (teste.abilities[2] == undefined){
//     let hability3 = ""
//     habTres.textContent = hability3;
  
//   } else {
//     let hability3 = teste.abilities[2].ability.name
//     habTres.textContent = hability3;
//   }

//   imagem.src = teste.sprites.other.home.front_default
//   nome.textContent = teste.name
//   habUm.textContent = teste.abilities[0].ability.name

//   }
  
//   botao.addEventListener('click', ()=>{
//     let procurando = campo.value;
//     campo.value = '';
//     buscandoAPI(procurando)
//   })