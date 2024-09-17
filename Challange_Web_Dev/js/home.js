const pilotosCircuitos = [
  {
    posicao: 1,
    piloto: PILOTOS[0],
  },
  {
    posicao: 2,
    piloto: PILOTOS[1],
  },
  {
    posicao: 3,
    piloto: PILOTOS[2],
  },
];

window.addEventListener("DOMContentLoaded", carregarCircuitos);

function carregarCircuitos() {
  const listaPilotos = document.querySelector(".lista-pilotos");

  pilotosCircuitos.forEach((pilotoCircuito) => {
    const cardPiloto = document.createElement("li");
    cardPiloto.classList.add("card-piloto");

    cardPiloto.innerHTML = `
    <div class="piloto-equipe">
      <img src="${pilotoCircuito.piloto.foto}" alt="${pilotoCircuito.piloto.nome}">
      <h3 class="equipe bg-${pilotoCircuito.piloto.equipe.nome}">${pilotoCircuito.piloto.equipe.nome}</h3>
    </div>
    <div class="classificacao">
      <h1>${pilotoCircuito.posicao}</h1>
      <h2>${pilotoCircuito.piloto.nome}</h2>
    </div>
    <ul class="estatisticas">
      <li>
        <h3>25</h3>
        <h3>Pontos</h3>
      </li>
      <li>
        <h3>1:04:045</h3>
        <h3>Melhor Tempo</h3>
      </li>
      <li>
        <h3>10</h3>
        <h3>Largada</h3>
      </li>
    </ul>
    `;
    listaPilotos.appendChild(cardPiloto)
  });
}
