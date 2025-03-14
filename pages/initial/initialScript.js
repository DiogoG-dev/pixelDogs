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