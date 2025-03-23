const currentUrl = 'https://dog.ceo/api/breeds/image/random/4';
const setRound = document.getElementById('round-count')
let contador = Number(localStorage.getItem('roundCount')) || 1;

window.onload = async () => {
    try {
        loandRound()
        await getDataForGame(currentUrl)
    } catch (error) {
        console.log(error)
    }
}

/* Função buscar informações para o jogo */
async function getDataForGame(url) {
    loandPage(1)
    let infoDogs = [];

    const response = await fetch(url);
    const responseJson = await response.json();
    infoDogs = responseJson.message;

    const randomDogUrl = infoDogs[Math.floor(Math.random() * infoDogs.length)];

    const imgDog = document.getElementById('img-dog');
    imgDog.style.backgroundImage = `url(${randomDogUrl})`;

    const regex = /breeds\/([^\/]+)\//;
    let correctBreed = translateBreeds(randomDogUrl.match(regex)[1]);
    
    console.log(correctBreed)
    console.log(randomDogUrl)


    let alternatives = infoDogs.map(url => translateBreeds(url.match(regex)[1]));

    alternatives = alternatives.sort(() => Math.random() - 0.5);

    const buttons = [
        document.getElementById('first-alternative'),
        document.getElementById('second-alternative'),
        document.getElementById('third-alternative'),
        document.getElementById('fourth-alternative')
    ]

    buttons.forEach((button, index) => {
        button.innerText = alternatives[index];
        button.onclick = () => checkAnswer(alternatives[index], correctBreed)
    })
    loandPage(0)
}

// Função para verificar se a resposta está correta
function checkAnswer(selected, correct) {
    if (selected === correct) {
        openCloseCard('win')

        contador += 1;    
        localStorage.setItem('roundCount', contador);
        setRound.innerText = localStorage.getItem('roundCount');
    } else {
        openCloseCard('loss', correct)

        contador = 1;
        localStorage.setItem('roundCount', contador);
        setRound.innerText = localStorage.getItem('roundCount');
    }
}

/* Função para carregar o round do game */
function loandRound() {
    if (localStorage.getItem('roundCount')) {
        setRound.innerText = localStorage.getItem('roundCount')
    } else {
        setRound.innerText = 1
    }
}

/* Função para Abrir e Fechar o card */
function openCloseCard(value, correctBreed) {
    const main = document.getElementById('main-container')
    const card = document.getElementById('card');
    const alternatives = document.getElementById('alternatives')
    const nextButton = document.getElementById('next-button')

    main.style.opacity = 0.3
    card.style.display = 'flex';
    alternatives.style.display = 'none'
    nextButton.replaceWith(nextButton.cloneNode(true));

    const title = document.getElementById('title-card')
    const icon = document.getElementById('icon-card')
    const msg = document.getElementById('msg-card')

    if (value === 'win') {
        soltarConfete()

        title.innerText = 'Mandou bem!'
        icon.className = "fa-solid fa-medal"
        msg.innerText = 'Você venceu essa fase. Mas será que está pronto para o que vem a seguir?'
    } else if (value === 'loss') {
        title.innerText = 'Que pena!'
        icon.className = "fa-solid fa-xmark"
        msg.innerHTML = `A raça do cachorro era <span>${correctBreed}</span>. Mas não pare agora, tente mais uma vez.`
    }

    const newNextButton = document.getElementById('next-button');
    
    newNextButton.addEventListener('click', () => {
        main.style.opacity = 1
        card.style.display = 'none'
        
        alternatives.style.display = 'grid'
        getDataForGame(currentUrl)
    })
}

/* Função para lançar confetes */
function soltarConfete() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 2000,
            spread: 360,
            origin: { y: 0.4 }
        });
    } else {
        console.error("Biblioteca canvas-confetti não carregada!");
    }
}

/* Função para mostrar o carregamento da página */
function loandPage(value) {
    const loader = document.getElementById('loader');

    if(value === 0) {
        const main = document.getElementById('main-container')
        main.style.opacity = 1

        loader.style.display = 'none'
    }
    if(value === 1) {
        const main = document.getElementById('main-container')
        main.style.opacity = 0.3

        loader.style.display = 'flex'
    }
}

function translateBreeds(breed) {
    const breeds = {
        "affenpinscher": "pinscher affen", 
        "african": "africano", 
        "airedale": "airedale terrier",
        "appenzeller": "boiadeiro de appenzell", 
        "australian-kelpie": "kelpie australiano", 
        "australian-shepherd": "pastor australiano",
        "bakharwal-indian": "bakharwal indiano",
        "bouvier": "boiadeiro da flandres",
        "brabancon": "brabançon", 
        "briard": "pastor de brie",
        "buhund-norwegian": "buhund norueguês", 
        "bulldog-boston": "buldogue boston", 
        "bulldog-english": "buldogue inglês", 
        "bulldog-french": "buldogue francês", 
        "bullterrier-staffordshire": "staffordshire bull terrier",
        "cattledog-australian": "boiadeiro australiano",
        "chippiparai-indian": "chippiparai indiano", 
        "chow": "chow-chow",
        "collie-border": "border collie",
        "corgi-cardigan": "welsh corgi cardigan", 
        "corgi": "welsh corgi", 
        "cotondetulear": "coton de tulear", 
        "dachshund": "salsicha", 
        "dalmatian": "dálmata",
        "danish-swedish-farmdog": "fazendeiro dinamarquês", 
        "deerhound-scottish": "lebrel escocês", 
        "dhole": "cão selvagem asiático", 
        "elkhound-norwegian": "elkhound norueguês",
        "entlebucher": "boiadeiro de entlebuch", 
        "eskimo": "esquimó", 
        "finnish-lapphund": "cão finlandês", 
        "frise-bichon": "bichon frisé", 
        "gaddi-indian": "gaddi kutta", 
        "germanshepherd": "pastor alemão",
        "greyhound-indian": "galgo indiano", 
        "greyhound-italian": "galgo italiano", 
        "greyhound": "galgo", 
        "groenendael": "pastor belga", 
        "havanese": "bichon havanês", 
        "hound-afghan": "galgo afegão",
        "hound-basset": "basset hound", 
        "hound-blood": "cão de santo humberto", 
        "hound-english": "cão inglês", 
        "hound-ibizan": "podengo ibicenco", 
        "hound-plott": "plott hound", 
        "hound-walker": "walker hound",
        "lhasa": "lhasa apso", 
        "malamute": "malamute do alasca", 
        "malinois": "pastor belga", 
        "maltese": "maltês", 
        "mastiff-bull": "bulmastife", 
        "mastiff-english": "mastim inglês", 
        "mastiff-indian": "mastim indiano",
        "mastiff-tibetan": "mastim tibetano", 
        "mexicanhairless": "pelado mexicano", 
        "mix": "vira-lata", 
        "mountain-bernese": "boiadeiro de berna", 
        "mountain-swiss": "boiadeiro suíço", 
        "mudhol-indian": "mudhol indiano",
        "newfoundland": "cão terra nova",
        "ovcharka-caucasian": "pastor caucasiano",
        "pariah-indian": "pária indiano", 
        "pekinese": "pequinês",
        "pembroke": "corgi pembroke", 
        "pinscher-miniature": "pinscher miniatura",
        "pointer-german": "pointer alemão", 
        "pointer-germanlonghair": "pointer alemão",
        "pomeranian": "zwergspitz", 
        "poodle-medium": "poodle médio", 
        "poodle-miniature": "poodle miniatura", 
        "poodle-standard": "poodle",
        "pyrenees": "pirineus", 
        "rajapalayam-indian": "rajapalayam indiano",
        "retriever-chesapeake": "retriever de chesapeake", 
        "retriever-curly": "retriever cacheado",
        "retriever-flatcoated": "retriever liso", 
        "retriever-golden": "golden retriever", 
        "ridgeback-rhodesian": "rhodesian ridgeback",
        "samoyed": "samoieda",
        "schnauzer-giant": "schnauzer gigante", 
        "schnauzer-miniature": "schnauzer miniatura",
        "segugio-italian": "segugio italiano",
        "setter-english": "setter inglês", 
        "setter-gordon": "setter gordon", 
        "setter-irish": "setter irlandês", 
        "sharpei": "shar pei", 
        "sheepdog-english": "sheepdog inglês", 
        "sheepdog-indian": "sheepdog indiano",
        "sheepdog-shetland": "shetland sheepdog", 
        "spaniel-blenheim": "king charles spaniel", 
        "spaniel-brittany": "spaniel bretão", 
        "spaniel-cocker": "cocker spaniel",
        "spaniel-irish": "irish spaniel", 
        "spaniel-japanese": "spaniel japonês", 
        "spaniel-sussex": "sussex spaniel",
        "spitz-indian": "spitz indiano",
        "spitz-japanese": "spitz japonês", 
        "springer-english": "springer spaniel", 
        "stbernard": "São Bernardo", 
        "terrier-american": "terrier americano", 
        "terrier-australian": "terrier australiano",
        "terrier-bedlington": "bedlington terrier", 
        "terrier-border": "border terrier", 
        "terrier-boston": "boston terrier", 
        "terrier-cairn": "cairn terrier", 
        "terrier-dandie": "dandie terrier",
        "terrier-fox": "fox terrier", 
        "terrier-irish": "irish terrier", 
        "terrier-kerryblue": "kerry blue terrier", 
        "terrier-lakeland": "lakeland terrier", 
        "terrier-norfolk": "norfolk terrier",
        "terrier-norwich": "norwich terrier", 
        "terrier-patterdale": "patterdale terrier", 
        "terrier-russell": "russell terrier", 
        "terrier-scottish": "scottish terrier", 
        "terrier-sealyham": "sealyham terrier",
        "terrier-silky": "silky terrier", 
        "terrier-tibetan": "terrier tibetano",
        "terrier-welsh": "welsh terrier", 
        "terrier-westhighland": "west highland terrier",
        "terrier-wheaten": "wheaten terrier", 
        "terrier-yorkshire": "yorkshire terrier",
        "vizsla": "vizsla húngaro", 
        "waterdog-spanish": "dão d'água espanhol", 
        "wolfhound-irish": "irish wolfhound"
    };
    if(breeds[breed]) {
        return breeds[breed].toUpperCase()
    } else {
        return breed.replace('-', ' ').toUpperCase()
    }
}