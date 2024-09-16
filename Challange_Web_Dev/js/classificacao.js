const classificacoes = PILOTOS.map((piloto, index) => ({
  posicao: index + 1,
  piloto: piloto,
  largada: index + 1,
  melhorTempo: `1:${Math.floor(Math.random() * 60)}:0${index}`,
  pontos: (PILOTOS.length - index) * 2,
}));

//Mostra a tabela completa de pilotos quando a página pe carregada
window.addEventListener('DOMContentLoaded', mapeamento(classificacoes));

//Permitindo pesquisar apertando enter
const barraDePesquisa = document.getElementById('barra-pesquisa');
barraDePesquisa.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.code == 'Enter') {
    mostrarPilotos(e.target.value);
  }
});

//Filtragem de pilotos
function buscarPiloto(corredor) {
  const dados = classificacoes.filter((classificacao) => {
    return classificacao.piloto.nome
      .toLowerCase()
      .includes(corredor.toLowerCase());
  });

  return dados;
}

//Imprime os pilotos na tela
function mostrarPilotos(corredor) {
  //Apaga a tabela
  const tabelaPilotos = document.getElementById('classificacao-pilotos');
  tabelaPilotos.innerHTML = '';

  const dados = buscarPiloto(corredor);
  //Retorna um alerta se o piloto não for encontrado na lista
  if (dados.length == 0) {
    alert('Piloto não encontrado');
    mapeamento(classificacoes);
  } else {
    mapeamento(dados);
  }
}

//Mapeia a lista que for retornada
function mapeamento(lista) {
  const calssificacaoPilotos = document.getElementById('classificacao-pilotos')

  lista.forEach((classificacao) => {
    const cardPiloto = document.createElement('li')
    cardPiloto.classList.add('card-piloto')
 
    cardPiloto.innerHTML = `
    <div class="piloto-equipe">
      <img src="${classificacao.piloto.foto}" alt="${classificacao.piloto.nome}">
      <h3 class="equipe bg-${classificacao.piloto.equipe.nome}">${classificacao.piloto.equipe.nome}</h3>
    </div>
    <div class="classificacao">
      <h1>${classificacao.posicao}</h1>
      <h2>${classificacao.piloto.nome}</h2>
    </div>
    <ul class="estatisticas">
      <li>
        <h3>${classificacao.pontos}</h3>
        <h3>Pontos</h3>
      </li>
      <li>
        <h3>${classificacao.melhorTempo}</h3>
        <h3>Melhor Tempo</h3>
      </li>
      <li>
        <h3>${classificacao.largada}</h3>
        <h3>Largada</h3>
      </li>
    </ul>
    `;
    calssificacaoPilotos.appendChild(cardPiloto)
  })
}
