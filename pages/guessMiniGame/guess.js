let currentUrl = 'https://dog.ceo/api/breeds/image/random/4';

window.onload = async () => {
    try {
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

    // Escolhe um cachorro aleatório
    const randomDogUrl = infoDogs[Math.floor(Math.random() * infoDogs.length)];

    // Define a imagem no jogo
    const imgDog = document.getElementById('img-dog');
    imgDog.style.backgroundImage = `url(${randomDogUrl})`;

    // Extrai a raça do nome da URL
    const regex = /breeds\/([^\/]+)\//;
    const match = randomDogUrl.match(regex);
    const correctBreed = match[1];

    // Lista todas as raças
    let alternatives = infoDogs.map(url => url.match(regex)[1]);

    // Embaralha as alternativas
    alternatives = alternatives.sort(() => Math.random() - 0.5);

    // Define os botões com as alternativas
    const buttons = [
        document.getElementById('first-alternative'),
        document.getElementById('second-alternative'),
        document.getElementById('third-alternative'),
        document.getElementById('fourth-alternative')
    ];

    buttons.forEach((button, index) => {
        button.innerText = alternatives[index]; // Define o texto do botão
        button.onclick = () => checkAnswer(alternatives[index], correctBreed); // Verifica a resposta ao clicar
    });
}

// Função para verificar se a resposta está correta
function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("✅ Correto!");
    } else {
        alert("❌ Errado! A resposta certa era " + correct);
    }
}