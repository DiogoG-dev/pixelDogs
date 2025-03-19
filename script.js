/* Comportamento da Arrow em "sub-options" e "sub-options"*/
const miniGameContainer = document.getElementById('mini-game-container');
miniGameContainer.addEventListener('click', listeSubOptions)

function listeSubOptions() {
    const subOptions = document.getElementById('sub-options');
    const arrowMiniGame = document.getElementById('arrow-mini-game')

    if (subOptions.style.display === 'block') {
        subOptions.style.display = 'none'
        arrowMiniGame.style.transform = 'translate(0, 0rem) rotate(0deg)'
    } else {
        subOptions.style.display = 'block'
        arrowMiniGame.style.transform = 'translate(0, 0.4rem) rotate(180deg)'
    }
}

/* Comportamento da Arrow em "side-bar"  e "side-bar"*/
const buttonSideBar = document.getElementById('close-open-side-bar');
buttonSideBar.addEventListener('click', listeSideBar)

function listeSideBar() {
    const sideBar = document.getElementById('side-bar');
    const arrowSideBar = document.getElementById('arrow-side-bar')

    if (sideBar.style.display === 'flex') {
        sideBar.style.display = 'none'
        arrowSideBar.style.transform = 'translate(0, 0) rotate(180deg)'
    } else {
        sideBar.style.display = 'flex'
        arrowSideBar.style.transform = 'translate(0, 0) rotate(0deg)'
    }
}

const guessOption = document.getElementById('guess')
guessOption.addEventListener('click', guessNav)

function guessNav() {
    const iframeContent = document.getElementById('iframeContent')
    if (iframeContent.src !== './pages/guessMiniGame/guess.html') {
        iframeContent.src = './pages/guessMiniGame/guess.html'
    }
}
