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

getInfoBreeds()