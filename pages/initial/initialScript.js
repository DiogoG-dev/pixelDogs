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

        // Obtendo a url da imagem
        const imgUrl = responseJson.message;

        // Traduzindo as raça
        const regex = /breeds\/([^\/]+)\//;
        const breed = translateBreeds(imgUrl.match(regex)[1]);

        // Substitui o "src" do elemento "img" pela url da imagem
        document.getElementById('img').src = imgUrl;

        // Substitui o conteúdo do elemento "name-dog" pela raça obtida
        let nameDog = document.getElementById('name-dog')
        
        // Atribuindo a url da imagem elemento
        nameDog.innerText = breed

    } catch (error) {
        console.log(error)
    }
}