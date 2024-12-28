const changeText = document.querySelector('.change-text');
const caseOneOpen = document.querySelector('.case-one-open');
const caseTwoOpen = document.querySelector('.case-two-open');
const caseThreeOpen = document.querySelector('.case-three-open');
const MiniGamesNode = document.getElementById('mini-games');

export const caseOneStart = () => {
    changeText.style.display = 'none'
    caseTwoOpen.style.display = 'none'
    caseThreeOpen.style.display = 'none'
    caseOneOpen.style.display = 'block'
};

export const caseTwoStart = () => {
    changeText.style.display = 'none'
    caseOneOpen.style.display = 'none'
    caseThreeOpen.style.display = 'none'
    caseTwoOpen.style.display = 'block'
};

export const caseThreeStart = () => {
    changeText.style.display = 'none'
    caseOneOpen.style.display = 'none'
    caseTwoOpen.style.display = 'none'
    caseThreeOpen.style.display = 'block'
};

export const homeFunc = () => {
    changeText.style.display = 'block'
    caseOneOpen.style.display = 'none'
    caseTwoOpen.style.display = 'none'
    caseThreeOpen.style.display = 'none'
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();
    const existingModalBlack = document.querySelector('.modalBlack');
    if (existingModalBlack) existingModalBlack.remove();
    document.querySelector('.theme-switcher').style.display = 'inline-flex';
    MiniGamesNode.removeAttribute('disabled', '');
};