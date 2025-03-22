const currentUrl = 'https://dog.ceo/api/breeds/image/random/4';
const setRound = document.getElementById('round-count')
let contador = Number(localStorage.getItem('roundCount')) || 1;

window.onload = async () => {
    try {
        loandRound()
        await getDataForGame(currentUrl)
    } catch (error) {
        console.log(error)
    }
}

/* Função buscar informações para o jogo */
async function getDataForGame(url) {
    loandPage(1)
    let infoDogs = [];

    const response = await fetch(url);
    const responseJson = await response.json();
    infoDogs = responseJson.message;

    const randomDogUrl = infoDogs[Math.floor(Math.random() * infoDogs.length)];

    const imgDog = document.getElementById('img-dog');
    imgDog.style.backgroundImage = `url(${randomDogUrl})`;

    const regex = /breeds\/([^\/]+)\//;
    const correctBreed = randomDogUrl.match(regex)[1].replace('-', ' ').toUpperCase();

    let alternatives = infoDogs.map(url => url.match(regex)[1].replace('-', ' ').toUpperCase());

    alternatives = alternatives.sort(() => Math.random() - 0.5);

    const buttons = [
        document.getElementById('first-alternative'),
        document.getElementById('second-alternative'),
        document.getElementById('third-alternative'),
        document.getElementById('fourth-alternative')
    ]

    buttons.forEach((button, index) => {
        button.innerText = alternatives[index];
        button.onclick = () => checkAnswer(alternatives[index], correctBreed)
    })
    loandPage(0)
}

// Função para verificar se a resposta está correta
function checkAnswer(selected, correct) {
    if (selected === correct) {
        openCloseCard('win')

        contador += 1;    
        localStorage.setItem('roundCount', contador);
        setRound.innerText = localStorage.getItem('roundCount');
    } else {
        openCloseCard('loss', correct)

        contador = 1;
        localStorage.setItem('roundCount', contador);
        setRound.innerText = localStorage.getItem('roundCount');
    }
}

/* Função para carregar o round do game */
function loandRound() {
    if (localStorage.getItem('roundCount')) {
        setRound.innerText = localStorage.getItem('roundCount')
    } else {
        setRound.innerText = 1
    }
}

/* Função para Abrir e Fechar o card */
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

/* Função para lançar confetes */
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

/* Função para mostrar o carregamento da página */
function loandPage(value) {
    const loader = document.getElementById('loader');

    if(value === 0) {
        const main = document.getElementById('main-container')
        main.style.opacity = 1

        loader.style.display = 'none'
    }
    if(value === 1) {
        const main = document.getElementById('main-container')
        main.style.opacity = 0.3

        loader.style.display = 'flex'
    }
}