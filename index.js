// VARIÁVEIS
const pokemonDoVisor = document.querySelector('#pokemonGif'); // Este é o pokemon que aparece no visor
const campoPesquisa = document.querySelector('#pesquisaPokemon');
const botaoPesquisa = document.querySelector('#pesquisaPokemonBtn');
const nomeDisplay = document.querySelector('#pokemonNome');
const tipoUm = document.querySelector('#pokemonTipo1');
const tipoDois = document.querySelector('#pokemonTipo2');
let pokemonNome = 'bulbasaur';

// ================================================== ARMAZENANDO A API EM UMA VARIÁVEL ==================================================
async function poke(nome){
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`).then(response => response.json());
  nomeDisplay.innerHTML = data.name;
  pokemonDoVisor.src = `./img/anim/${nome}.gif` // Altera a imagem do pokemon de acordo com o nome
  tipoUm.innerHTML = data.types[0].type.name;
  tipoUm.classList = `tipo ${data.types[0].type.name}`;
  if(data.types.length > 1){
    tipoDois.innerHTML = data.types[1].type.name;
    tipoDois.classList = `tipo ${data.types[1].type.name}`;
} else {
    tipoDois.innerHTML = '';
    tipoDois.classList = '';
}
}
// ================================================== CAPTURANDO E APAGANDO VALOR DO INPUT ==================================================
botaoPesquisa.addEventListener('click', () => {
  pokemonNome = campoPesquisa.value; // Armazena o valor do input na variável pokemonNome
  campoPesquisa.value = ''; // Apaga o valor do input
  poke(pokemonNome);
})





// 












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