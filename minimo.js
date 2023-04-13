const alertamin = ()=>{
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].quantidade <= produtos[i].quantidadeMin) {
        /* let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <p>Estoque Baixo</p>
          <h2>${produtos[i].item}</h2>
          <h2 class="corEstoque">Quantidade: ${produtos[i].quantidade}</h2>
        `; */
        // Adiciona o card à página
        let cardsContainer = document.getElementById('cards');
        cardsContainer.appendChild(card);
      } else if (produtos[i].quantidade == produtos[i].quantidadeMin) {
        let card = document.createElement('div');
        card.classList.add('cardB');
        card.innerHTML = `
        <p>Estoque minimo atingido</p>
          <h2>${produtos[i].item}</h2>
          <h2 class="corEstoqueMin">Quantidade: ${produtos[i].quantidade}</h2>
        `;
        // Adiciona o card à página
        let cardsContainer = document.getElementById('cards');
        cardsContainer.appendChild(card);
      } 
    }
  }
  alertamin()
  