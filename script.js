let currentUrl = 'https://dog.ceo/api/';

window.onload = async () => {
    try {
        await getInfoRandomDog(currentUrl)
    } catch (error) {
        console.log(`Erro ao carregar informações: `+ error)
    }
}

// Buscar Informações Sobre o Cachorro
async function getInfoRandomDog(Url) {
    try {
        const response = await fetch(`${Url}breeds/image/random`);
        const responseJson = await response.json();

        const imgUrl = responseJson.message;
        const baseUrl = "https://images.dog.ceo/breeds/";

        // Exclui o conteúdo até a url da imagem
        const mainPath = imgUrl.replace(baseUrl, "")

        // Pega o elemento anterior a "/" e coloca em caixa alta
        let breed = mainPath.split("/")[0];
        breed = breed.toUpperCase()

        // Substitui o "src" do elemento "img" pela url da imagem
        document.getElementById('img').src = imgUrl;

        // Substitui o conteúdo do elemento "name-dog" pela raça obtida
        let nameDog = document.getElementById('name-dog')
        nameDog.innerText = breed
    } catch (error) {
        console.log(error)
    }
}

/* Comportamento da Arrow em "sub-options" */
const miniGameContainer = document.getElementById('mini-game-container');
const subOptions = document.getElementById('sub-options');
miniGameContainer.addEventListener('click', listeSubOptions)

async function listeSubOptions() {
    const arrowMiniGame = document.getElementById('arrow-mini-game')

    if (subOptions.style.display === 'block') {
        subOptions.style.display = 'none'
        arrowMiniGame.style.transform = 'translate(0, 0rem) rotate(0deg)'
    } else {
        subOptions.style.display = 'block'
        arrowMiniGame.style.transform = 'translate(0, 0.4rem) rotate(180deg)'
    }
}

/* Comportamento da Arrow em "side-bar" */
const buttonSideBar = document.getElementById('close-open-side-bar');
const sideBar = document.getElementById('side-bar');
buttonSideBar.addEventListener('click', listeSideBar)

async function listeSideBar() {
    const arrowSideBar = document.getElementById('arrow-side-bar')
    const mainContainer = document.getElementById('main-container')

    if (sideBar.style.display === 'none') {
        sideBar.style.display = ''
        arrowSideBar.style.transform = 'translate(0, 0) rotate(0deg)'
    } else {
        sideBar.style.display = 'none'
        arrowSideBar.style.transform = 'translate(0, 0) rotate(180deg)'
        mainContainer.style.width = '100%'
    }
}
