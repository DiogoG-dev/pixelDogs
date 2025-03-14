let currentUrl = 'https://dog.ceo/api/';

async function getInfoBreeds() {
    try {
        const response = await fetch(`${currentUrl}breeds/image/random`);
        const responseJson = await response.json();

        const urlImg = responseJson.message;
        const base = "https://images.dog.ceo/breeds/";
        const twoPath = urlImg.replace(base, "")
        let breed = twoPath.split("/")[0];

        breed = breed.toUpperCase()

        document.getElementById('img').src = urlImg;
        let nameDog = document.getElementById('name-dog')
        nameDog.innerText = breed
    } catch (error) {
        console.log(error)
    }
}

const miniGameContainer = document.getElementById('mini-game-container');
const subOptions = document.getElementById('sub-options');
miniGameContainer.addEventListener('click', listeSubOptions)

async function listeSubOptions() {
    const arrowMiniGame = document.getElementById('arrow-mini-game')

    if (subOptions.style.display === 'none') {
        subOptions.style.display = ''
        arrowMiniGame.style.transform = 'translate(0, 0.4rem) rotate(180deg)'
    } else {
        subOptions.style.display = 'none'
        arrowMiniGame.style.transform = 'translate(0, 0rem) rotate(0deg)'
    }
}

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

listeSubOptions()

getInfoBreeds()