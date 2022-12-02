// ================================================== VARIÁVEIS ==================================================
const pokemonDoVisor = document.querySelector('#pokemonGif'); // Este é o pokemon que aparece no visor
const campoPesquisa = document.querySelector('#pesquisaPokemon'); // Este é o campo de pesquisa amarelo
const botaoPesquisa = document.querySelector('#pesquisaPokemonBtn'); // Este é o botão de pesquisa azul
const nomeDisplay = document.querySelector('#pokemonNome'); // Este é o nome do pokemon que aparece no visor
const tipoUm = document.querySelector('#pokemonTipo1'); // Este é o tipo um do pokemon que aparece no visor
const tipoDois = document.querySelector('#pokemonTipo2'); // Este é o tipo dois do pokemon que aparece no visor
const descricao = document.querySelector('#pokeDescript'); // Este é a descrição do pokemon que aparece no visor na tela info
const pokemonStats = document.querySelector('#pokemonStats'); // Este é o status do pokemon que aparece no visor na tela status
const botaoEsquerdo = document.querySelector('#controleEsquerdo'); // Este é o botão de controle esquerdo
const botaoDireito = document.querySelector('#controleDireito'); // Este é o botão de controle direito
const botaoCima = document.querySelector('#controleCima'); // Este é o botão de controle cima
const botaoBaixo = document.querySelector('#controleBaixo'); // Este é o botão de controle baixo

const HP = document.querySelector('.barFillHP'); // Este é a barra de HP
const ATK = document.querySelector('.barFillATK'); // Este é a barra de ATK
const DEF = document.querySelector('.barFillDEF'); // Este é a barra de DEF
const SPATK = document.querySelector('.barFillSPATK'); // Este é a barra de SPATK
const SPDEF = document.querySelector('.barFillSPDEF'); // Este é a barra de SPDEF
const SPD = document.querySelector('.barFillSPEED'); // Este é a barra de SPD

const botaoInfo = document.querySelector('#botaoInfo'); // Este é o botão de info
const botaoStats = document.querySelector('#botaoStatus'); // Este é o botão de status
let pokemonNome = 'bulbasaur'; // Este é o nome do pokemon que aparece no visor atualmente

// ================================================== FUNÇÕES IDIOTAS ==================================================
function continha(numero){ // Função que faz a continha para o valor da barra
  // 3 = 1% | 300 = 100% anotei isso pra não esquecer
  numero = numero / 3; // Divide o numero por 3 porque os status estão representados por 0 a 300
  return numero; // Retorna o numero
}

// ================================================== API CORE ==================================================
  async function poke(nome, direcao){ // Esta função pega o nome do pokemon e a direção que está sendo usado o controle
    try{
      let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`).then(response => response.json()); // Esta variável armazena a API do pokemon
    const direita = data.id + 1; // Esta variável chama o próximo pokemon de acordo com o id, apenas para o controle direito
    const esquerda = data.id - 1; // Esta variável chama o próximo pokemon de acordo com o id, apenas para o controle esquerdo
    if(direcao === 'direita'){ // Se a direção for direita, o pokemon do visor será o próximo pokemon
      data = await fetch(`https://pokeapi.co/api/v2/pokemon/${direita}`).then(response => response.json()); // Esta variável armazena a API do próximo pokemon
    } else if(direcao === 'esquerda'){ // Se a direção for esquerda, o pokemon do visor será o pokemon anterior
      data = await fetch(`https://pokeapi.co/api/v2/pokemon/${esquerda}`).then(response => response.json()); // Esta variável armazena a API do pokemon anterior 
    }
    nomeDisplay.innerHTML = data.name; // altera o nome do pokemon para o nome pesquisado
    pokemonDoVisor.src = `./img/anim/${data.name}.gif` // Altera a imagem do pokemon de acordo com o nome
    tipoUm.innerHTML = data.types[0].type.name; // Altera o tipo do pokemon de acordo com o nome
    tipoUm.classList = `tipo ${data.types[0].type.name}`; // Altera a cor do tipo de acordo com o nome
    HP.style.width = `${continha(data.stats[0].base_stat)}%`; // Altera a barra de HP de acordo com o status
    ATK.style.width = `${continha(data.stats[1].base_stat)}%`; // Altera a barra de ATK de acordo com o status
    DEF.style.width = `${continha(data.stats[2].base_stat)}%`; // Altera a barra de DEF de acordo com o status
    SPATK.style.width = `${continha(data.stats[3].base_stat)}%`; // Altera a barra de SPATK de acordo com o status
    SPDEF.style.width = `${continha(data.stats[4].base_stat)}%`; // Altera a barra de SPDEF de acordo com o status
    SPD.style.width = `${continha(data.stats[5].base_stat)}%`; // Altera a barra de SPD de acordo com o status
  
    const specie = await fetch(data.species.url).then(response => response.json()); // Esta variável entra dentro da API com o nome pedido e busca a descrição
    traducao(specie.flavor_text_entries[12].flavor_text); // Esta função traduz a descrição do pokemon
  
  
    if(data.types.length > 1){ // Se o pokemon tiver mais de um tipo, ele adiciona o segundo tipo
      tipoDois.innerHTML = data.types[1].type.name; // Altera o tipo do pokemon de acordo com o nome
      tipoDois.classList = `tipo ${data.types[1].type.name}`; // Altera a cor do tipo de acordo com o nome
  } else { // Se o pokemon tiver apenas um tipo, ele remove o segundo tipo
      tipoDois.innerHTML = ''; // Remove o tipo do pokemon
      tipoDois.classList = ''; // Remove a cor do tipo
  }
  }
  catch(error){ // Caso dê erro, mostra no console
    alert('Você digitou o nome do pokemon incorretamente, por favor digite o nome correto e tente novamente');}
} 

async function traducao(texto){ // Esta função traduz o texto inserido
  const traduzido = await fetch(`https://api.mymemory.translated.net/get?q=${texto}&langpair=en|pt`).then(response => response.json()); // Esta variável armazena a API de tradução
  descricao.innerHTML = traduzido.responseData.translatedText; // Altera a descrição do pokemon de acordo com a descrição 
}
// ================================================== BOTÃO AZUL DE PESQUISA ==================================================
botaoPesquisa.addEventListener('click', () => { // Quando o botão de azul for clicado
  if(campoPesquisa.value === ''){
    alert('Por favor pesquise o nome certo do pokémon que você procura')
  } else {
    pokemonNome = campoPesquisa.value; // Armazena o valor do input na variável pokemonNome
    campoPesquisa.value = ''; // Apaga o valor do input
    poke(pokemonNome.toLocaleLowerCase()); // Chama a função poke com o valor do input, no caso o nome que foi pesquisado
  }
})

// ================================================== CONTROLES ==================================================
botaoCima.addEventListener('click', () =>{
  descricao.classList.remove('hidden') // Mostra a div de descrição
  pokemonStats.style.display = 'none'; // Esconde a div de status
})
botaoBaixo.addEventListener('click', () =>{
  pokemonStats.style.display = 'block'; // Mostra a div de status
  descricao.classList.add('hidden') // Esconde a div de descrição
})

botaoDireito.addEventListener('click', () => { // Quando o botão direito for clicado
  pokemonNome = nomeDisplay.innerHTML; // Armazena o nome do pokemon que está no visor na variável pokemonNome
  poke(pokemonNome.toLocaleLowerCase(), "direita"); // Chama a função poke com o nome atual e a direção direita fazendo o próximo em relação a ele vir
})

botaoEsquerdo.addEventListener('click', () => { // Quando o botão esquerdo for clicado
  pokemonNome = nomeDisplay.innerHTML; // Armazena o nome do pokemon que está no visor na variável pokemonNome
  poke(pokemonNome.toLocaleLowerCase(), "esquerda"); // Chama a função poke com o nome atual e a direção esquerda fazendo o anterior em relação a ele vir
})

document.addEventListener('keydown', (event)=>{ // Quando uma tecla for pressionada
  if(event.keyCode == 39){ // Se a tecla for a seta direita
    pokemonNome = nomeDisplay.innerHTML; // Armazena o nome do pokemon que está no visor na variável pokemonNome
    poke(pokemonNome, "direita"); // Chama a função poke com o nome atual e a direção direita fazendo o próximo em relação a ele vir
  } else if(event.keyCode == 37){ // Se a tecla for a seta esquerda
    pokemonNome = nomeDisplay.innerHTML; // Armazena o nome do pokemon que está no visor na variável pokemonNome
    poke(pokemonNome, "esquerda"); // Chama a função poke com o nome atual e a direção esquerda fazendo o anterior em relação a ele vir
  } else if(event.keyCode == 40){
    descricao.classList.remove('hidden'); // Mostra a div de descrição
    pokemonStats.style.display = 'none'; // Esconde a div de status
} else if(event.keyCode == 38){
  pokemonStats.style.display = 'block'; // Mostra a div de status
  descricao.classList.add('hidden') // Esconde a div de descrição
} else if(event.keyCode == 13){
  if(campoPesquisa.value === ''){
    alert('Por favor pesquise o nome certo do pokémon que você procura')
  } else {
    pokemonNome = campoPesquisa.value; // Armazena o valor do input na variável pokemonNome
    campoPesquisa.value = ''; // Apaga o valor do input
    poke(pokemonNome.toLocaleLowerCase()); // Chama a função poke com o valor do input, no caso o nome que foi pesquisado
  }
}
})

// ================================================== BOTÕES STATUS E INFO ==================================================
botaoStatus.addEventListener('click', () => { // Quando o botão de status for clicado
  pokemonStats.style.display = 'block'; // Mostra a div de status
  descricao.classList.add('hidden') // Esconde a div de descrição
})
botaoInfo.addEventListener('click' || 'keydown', () => { // Quando o botão de info for clicado
  descricao.classList.remove('hidden') // Mostra a div de descrição
  pokemonStats.style.display = 'none'; // Esconde a div de status
})
