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

const test = document.getElementById('test');
const subOptions = document.getElementById('sub-options');
test.addEventListener('click', listeSubOptions)

async function listeSubOptions() {
    const arrowOne = document.getElementById('arrowOne')

    if (subOptions.style.display === 'none') {
        subOptions.style.display = ''
        arrowOne.style.transform = 'translate(0, 0.4rem) rotate(180deg)'
    } else {
        subOptions.style.display = 'none'
        arrowOne.style.transform = 'translate(0, 0rem) rotate(0deg)'
    }
}

const test2 = document.getElementById('test2');
const sideBar = document.getElementById('side-bar');
test2.addEventListener('click', listeSideBar)

async function listeSideBar() {
    const arrowTwo = document.getElementById('arrowTwo')
    const mainContainer = document.getElementById('main-container')

    if (sideBar.style.display === 'none') {
        sideBar.style.display = ''
        arrowTwo.style.transform = 'translate(0, 0) rotate(0deg)'
    } else {
        sideBar.style.display = 'none'
        arrowTwo.style.transform = 'translate(0, 0) rotate(180deg)'
        mainContainer.style.width = '100%'
    }
}

listeSubOptions()

getInfoBreeds()