const currentUrl = 'https://dog.ceo/api/breeds/image/random/4';
const setRound = document.getElementById('round-count')
let counter = Number(localStorage.getItem('roundCount')) || 1;

// Executa o game assim que carregar a tela
window.onload = async () => {
    try {
        loandRound()
        await getDataForGame(currentUrl)
    } catch (error) {
        console.log(error)
    }
}

// Função buscar informações para o jogo
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
    let correctBreed = translateBreeds(randomDogUrl.match(regex)[1]);
    
    console.log(correctBreed)
    console.log(randomDogUrl)


    let alternatives = infoDogs.map(url => translateBreeds(url.match(regex)[1]));

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

        counter += 1;    
        localStorage.setItem('roundCount', counter);
        setRound.innerText = localStorage.getItem('roundCount');
    } else {
        openCloseCard('loss', correct)

        counter = 1;
        localStorage.setItem('roundCount', counter);
        setRound.innerText = localStorage.getItem('roundCount');
    }
}

// Função para carregar o round do game
function loandRound() {
    if (localStorage.getItem('roundCount')) {
        setRound.innerText = localStorage.getItem('roundCount')
    } else {
        setRound.innerText = 1
    }
}

// Função para mostrar o carregamento da página
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