let currentUrl = 'https://dog.ceo/api/';

async function getInfoBreeds() {
    try {
        const response = await fetch(`${currentUrl}breed/hound/images/random`);
        const responseJson = await response.json();

        document.getElementById('img').src = responseJson.message;
    } catch (error) {
        console.log(error)
    }
}

getInfoBreeds()