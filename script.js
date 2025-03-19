/* Comportamento da Arrow em "sub-options" e "sub-options"*/
const miniGameContainer = document.getElementById('mini-game-container');
const subOptions = document.getElementById('sub-options');
const arrowMiniGame = document.getElementById('arrow-mini-game');

miniGameContainer.addEventListener('click',  () => {

    if (subOptions.style.display === 'block') {
        subOptions.style.display = 'none';
        arrowMiniGame.style.transform = 'translate(0, 0rem) rotate(0deg)';
    } else {
        subOptions.style.display = 'block';
        arrowMiniGame.style.transform = 'translate(0, 0.4rem) rotate(180deg)';
    }
});

/* Comportamento da Arrow em "side-bar"  e "side-bar"*/
const buttonSideBar = document.getElementById('close-open-side-bar');
const sideBar = document.getElementById('side-bar');
const arrowSideBar = document.getElementById('arrow-side-bar');

buttonSideBar.addEventListener('click', () => {
    sideBar.classList.toggle('show'); // Alterna a classe para animação

    // Gira a seta de acordo com a visibilidade
    if (sideBar.classList.contains('show')) {
        arrowSideBar.style.transform = 'rotate(0deg)';
    } else {
        arrowSideBar.style.transform = 'rotate(180deg)';
    }
});

/* Mecânica para alternar entre páginas */
const iframeContent = document.getElementById('iframeContent')

/* Initial Page */
const initialPage = document.getElementById('game-dog')
initialPage.addEventListener('click', () => {
    if (iframeContent.src !== './pages/initial/initial.html') {
        iframeContent.src = './pages/initial/initial.html';
    }
});

/* Guess Page */
const guessOption = document.getElementById('guess')
guessOption.addEventListener('click',  () => {
    if (iframeContent.src !== './pages/guessMiniGame/guess.html') {
        iframeContent.src = './pages/guessMiniGame/guess.html';
    }
});
