// Função para Abrir e Fechar o card
function openCloseCard(value, correctBreed) {
    const main = document.getElementById('main-container')
    const card = document.getElementById('card');
    const alternatives = document.getElementById('alternatives')
    const nextButton = document.getElementById('next-button')

    main.style.opacity = 0.3
    card.style.display = 'flex';
    alternatives.style.display = 'none'
    nextButton.replaceWith(nextButton.cloneNode(true));

    const title = document.getElementById('title-card')
    const icon = document.getElementById('icon-card')
    const msg = document.getElementById('msg-card')

    if (value === 'win') {
        soltarConfete()

        title.innerText = 'Mandou bem!'
        icon.className = "fa-solid fa-medal"
        msg.innerText = 'Você venceu essa fase. Mas será que está pronto para o que vem a seguir?'
    } else if (value === 'loss') {
        title.innerText = 'Que pena!'
        icon.className = "fa-solid fa-xmark"
        msg.innerHTML = `A raça do cachorro era <span>${correctBreed}</span>. Mas não pare agora, tente mais uma vez.`
    }

    const newNextButton = document.getElementById('next-button');
    
    newNextButton.addEventListener('click', () => {
        main.style.opacity = 1
        card.style.display = 'none'
        
        alternatives.style.display = 'grid'
        getDataForGame(currentUrl)
    })
}

// Função para lançar confetes
function soltarConfete() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 2000,
            spread: 360,
            origin: { y: 0.4 }
        });
    } else {
        console.error("Biblioteca canvas-confetti não carregada!");
    }
}