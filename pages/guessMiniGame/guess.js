let currentUrl = 'https://dog.ceo/api/breeds/image/random/4';

const setRound = document.getElementById('round-count')

window.onload = async () => {
    try {
        loandRound()
        await getDataForGame(currentUrl)
    } catch (error) {
        console.log(error)
    }
}

async function getDataForGame(url) {
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
}

// Função para verificar se a resposta está correta
function checkAnswer(selected, correct) {
    if(selected === correct) {
        openCloseCard()

        const main = document.getElementById('main-container')
        main.style.opacity = 0.3

        let contador = Number(localStorage.getItem('roundCount')) || 1;
        contador += 1;

        localStorage.setItem('roundCount', contador)
        setRound.innerText = localStorage.getItem('roundCount')
    } else {
        alert('Errooooooooooooou!')

        contador = 1
        localStorage.setItem('roundCount', contador)

        setRound.innerText = localStorage.getItem('roundCount')
        getDataForGame(currentUrl)
    }
}

function loandRound() {
    if(localStorage.getItem('roundCount')) {
        setRound.innerText = localStorage.getItem('roundCount')
    } else {
        setRound.innerText = 1
    }
}

function openCloseCard() {
    const main = document.getElementById('main-container')
    const card = document.getElementById('card');
    card.style.display = 'flex';

    const nextButton = document.getElementById('next-button')
    nextButton.addEventListener('click', () => {
        card.style.display = 'none'
        main.style.opacity = 1
        
        getDataForGame(currentUrl)
    })
}