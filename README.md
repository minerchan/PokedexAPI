<div align="justify">

<h1>Pokédex - Consumo de API avançado</h1>
<h4>Este projeto é o resultado dos meus estudos sobre API e funções asyncronas. Caso queira conferir o funcionamento pode acessar o site pronto clicando <a href="https://scrpokedex.netlify.app/">aqui</a></h2>

<h2>&#128161; Funções interessantes:</h2>
<h4><ul>
<li><a href="#pesquisa">Pesquisa por nome</a></li>
<li><a href="#controles">Controles</a></li>
<li><a href="#status">Representação gráfica dos status</a></li>
<li><a href="#traducao">Descrição e tradução</a></li>
<li><a href="#interacao">Gif animado dos pokémons</a></li>
<li><a href="#interacao">Erros previstos</a></li>
<li><a href="#interacao">Créditos externos</a></li>
</h4>


</ul>

<a id="pesquisa">
<h2>&#12948; Pesquisa por nome</h2>
<img height="300em" src="https://user-images.githubusercontent.com/104655361/205297376-63704d77-da0d-4352-ad77-4116990bde6b.gif">
<img src="https://user-images.githubusercontent.com/104655361/205297916-c2de237e-e5ae-405c-9cd1-e94fb898d8c2.jpg">

<p>Os nomes digitados no campo de pesquisa são passados para a API através de uma função asyncrona, a partir daí todo o resto como nome, status, descrição e tipos são retirados deste pokémon pesquisado. Caso o campo de pesquisa contenha um nome inválido, uma mensagem de erro será exibida</p> 
<img height="300em" src="https://user-images.githubusercontent.com/104655361/205299205-025a1562-b3a0-4f89-8699-dbd6f8854d17.gif">
<img src="https://user-images.githubusercontent.com/104655361/205299487-fb1c42b8-de1a-4987-9bc3-b5f9d108a898.jpg">
<p>este erro é necessário ser capturado porque se houvesse uma pesquisa com o nome errado, ainda sim a requisição seria feita para a API e retornaria undefined, tentando preencher os campos com undefined. Da mesma forma foi criado um alerta de erro para o campo de pesquisa vazio.</p>
<img src="https://user-images.githubusercontent.com/104655361/205300316-292021f4-d6fe-4506-8db1-cfde99a7b17a.jpg">




<a id="controles">
<h2>&#127918;	Controles</h2>
<img height="300em" src="https://user-images.githubusercontent.com/104655361/205301215-cf613e80-df4a-49d9-b55d-a2880885fbd7.gif">
<p>Para dar mais vida a pokédex adicionei controles clicáveis ao controle visual dela. Usando as setinhas do teclado é possível passar para o próximo pokémon ou o anterior e alternar entre status e info do pokémon. É possível fazer isso clicando ou usando o teclado no computador e no celular por touch. A ordem segue o número da national dex, portanto é possível ver as evoluções apenas indo para o lado.</p>
</a>





<a id="status">
<h2>&#128202;	Representação gráfica dos status</h2>
<img height="300em" src="https://user-images.githubusercontent.com/104655361/205302922-d3ae7fc9-f4fb-4207-ad5b-6f308ddb0bfa.gif">
<p>O status de cada pokémon é representado de forma gráfica levando em conta que a barra cheia seja 300, isso porque nenhum pokémon até então chega a este número, mas um pokémon como a chansey que tem 250 de vida quase chega. Porém a API entrega esse status em número, então para converter esses números em uma porcentagem equivalente ao preenchimento correto da barra eu usei uma função simples que captura o número entregue, divide por 3 e entrega ao css através de uma template string em porcentagem, essa função tem o nome de "continha"</p> 
<img src="https://user-images.githubusercontent.com/104655361/205304037-7380de70-da89-4db8-93ae-6eec612f66b2.jpg">

</a>

<a id="traducao">
<h2>&#127758;	Descrição e tradução</h2>
<img height="300em" src="https://user-images.githubusercontent.com/104655361/205305784-9e864370-97a3-4a87-8068-579331a0b420.gif">
<img src="https://user-images.githubusercontent.com/104655361/205307106-a9569a56-ab22-4e27-acce-478ce9802969.jpg">
<p>A API do pokémon fornece descrições sobre eles de todas as versões de jogos e em vários idiomas, porém não havia em português, então eu usei uma segunda API que é de tradução e peguei as descrições em inglês de uma API e fiz passar pela outra, agora todos eles possuem descrições em português</p>
<img src="https://user-images.githubusercontent.com/104655361/205307640-a03e7c3b-6cae-4116-9778-d4d1f30e54eb.jpg">
</a>




<a id="interacao">
<h2>&#x1F441;	Leve interação</h2>
<img height="300em" src="https://user-images.githubusercontent.com/104655361/180371730-54e3c4e6-521b-47ab-87b4-5ad118bcd033.png">
<p>Acho que interação é algo que não podia faltar em algo interativo né? Aqui isso é feito com o nome que a pessoa preenche para fazer o currículo ser exibido, subistituindo o nome de usuário e todas as vezes que o nome será citado pelo que ela preencheu, dando assim a impressão de falar diretamente com ela</p>
</div>
