/* Comportamento da Arrow em "sub-options" e "sub-options"*/
const miniGameContainer = document.getElementById('mini-game-container');
const subOptions = document.getElementById('sub-options');
miniGameContainer.addEventListener('click', listeSubOptions)

async function listeSubOptions() {
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
const sideBar = document.getElementById('side-bar');
buttonSideBar.addEventListener('click', listeSideBar)

async function listeSideBar() {
    const arrowSideBar = document.getElementById('arrow-side-bar')

    if (sideBar.style.display === 'none') {
        sideBar.style.display = ''
        arrowSideBar.style.transform = 'translate(0, 0) rotate(0deg)'
    } else {
        sideBar.style.display = 'none'
        arrowSideBar.style.transform = 'translate(0, 0) rotate(180deg)'
    }
}
