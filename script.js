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
    const arrow = document.getElementById('arrow')

    if (subOptions.style.display === 'none') {
        subOptions.style.display = ''
        arrow.style.transform = 'translate(0, 0.4rem) rotate(180deg)'
    } else {
        subOptions.style.display = 'none'
        arrow.style.transform = 'translate(0, 0rem) rotate(0deg)'
    }
}

listeSubOptions()

getInfoBreeds()