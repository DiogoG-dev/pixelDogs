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

    const ramdomDogUrl = infoDogs[Math.floor(Math.random() * infoDogs.length)];

    const imgDog = document.getElementById('img-dog');
    imgDog.style.backgroundImage = `url(${ramdomDog})`;

    let alternaves = [];

    const firstAlternative = document.getElementById('first-alternative');
    const secondAlternative = document.getElementById('second-alternative');
    const thirdAlternative = document.getElementById('third-alternative');
    const fourthAlternative = document.getElementById('fourth-alternative');

    firstAlternative.innerText
    alternaves.push(firstAlternative)
    alternaves.push(secondAlternative)
    alternaves.push(thirdAlternative)
    alternaves.push(fourthAlternative)

    alternaves.sort( (a,b) => Math.random() -0.5)

    console.log(alternaves)
}