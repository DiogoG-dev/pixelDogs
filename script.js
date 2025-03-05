let currentUrl = 'https://dog.ceo/api/';

async function getInfoBreeds() {
    try {
        const response = await fetch(`${currentUrl}breeds/list`);
        const responseJson = await response.json();

        console.log(responseJson)
    } catch (error) {
        console.log(error)
    }
}

getInfoBreeds()