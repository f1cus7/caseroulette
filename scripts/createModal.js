const themeToggle = document.getElementById('theme-toggle');
const staticArmCaseNode = document.getElementById('static-arm-case');
const staticZapCaseNode = document.getElementById('static-zap-case');
const staticZasCaseNode = document.getElementById('static-zas-case');
const staticTaiCaseNode = document.getElementById('static-tai-case');
const staticKnifeCaseNode = document.getElementById('static-knife-case');
const inventoryNode = document.getElementById('inventory');

import { inventory } from "./index.js";

let staticArmCase = 0;
let staticZapCase = 0;
let staticZasCase = 0;
let staticTaiCase = 0;
let staticKnifeCase = 0;

export const createModal = (skin, index, caseNumber) => {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();
      
    const imagePath = `images/${caseNumber}_${index + 1}.png`;

    const modal = document.createElement('div');

    if  (themeToggle.checked) {
        modal.className = 'modalBlack';
        modal.style.backgroundColor = '#111';
        modal.innerHTML = `
        <h2 style="color: snow;">Вам выпал предмет!</h2>
        <img src="${imagePath}" alt="${skin.name}" style="width: 80%; border-radius: 8px; margin: 10px 0;">
        <p style="color: snow;"><strong style="color: snow;">${skin.name}</strong></p>
        <p style="color: snow;">Редкость: <span style="color: snow;">${skin.rare}</span></p>
        <p style="color: snow;">Стоимость: <span style="color: snow;">${skin.price} ₽</span></p>
        <button class="close-modal" style="margin-top: 20px; padding: 10px 20px; background: #d34baf; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
    `;
    } else {
        modal.className = 'modal';
    modal.style.backgroundColor = '#fff';
    modal.innerHTML = `
        <h2>Вам выпал предмет!</h2>
        <img src="${imagePath}" alt="${skin.name}" style="width: 80%; border-radius: 8px; margin: 10px 0;">
        <p><strong>${skin.name}</strong></p>
        <p>Редкость: <span>${skin.rare}</span></p>
        <p>Стоимость: <span>${skin.price} ₽</span></p>
        <button class="close-modal" style="margin-top: 20px; padding: 10px 20px; background: #007BFF; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
    `;
    }



    document.body.appendChild(modal);

    const closeModal = () => {
        modal.remove();
        document.removeEventListener('keydown', handleEscapeKey);
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    document.addEventListener('keydown', handleEscapeKey);

    modal.querySelector('.close-modal').addEventListener('click', closeModal);

    if  (themeToggle.checked) {

        if (skin.rare === 'arm' ) {
            staticArmCase++;
            staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr class="dark-theme">`;
        } else if (skin.rare === 'zap' ) {
            staticZapCase++;
            staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr class="dark-theme">`;
        } else if (skin.rare === 'zas' ) {
            staticZasCase++;
            staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr class="dark-theme">`;
        } else if (skin.rare === 'tai' ) {
            staticTaiCase++;
            staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr class="dark-theme">`;
        } else if (skin.rare === 'knife' ) {
            staticKnifeCase++;
            staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr class="dark-theme">`;
        }
    } else {
        if (skin.rare === 'arm' ) {
            staticArmCase++;
            staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr class="statistic-hr">`;
        } else if (skin.rare === 'zap' ) {
            staticZapCase++;
            staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr class="statistic-hr">`;
        } else if (skin.rare === 'zas' ) {
            staticZasCase++;
            staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr class="statistic-hr">`;
        } else if (skin.rare === 'tai' ) {
            staticTaiCase++;
            staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr class="statistic-hr">`;
        } else if (skin.rare === 'knife' ) {
            staticKnifeCase++;
            staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr class="statistic-hr">`;
        }
    }

    inventory.push({name: skin.name, rare: skin.rare, price: skin.price, image: `images/${caseNumber}_${index + 1}.png`});
    if(themeToggle.checked) {
        inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    } else {
        inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    }
};

export const createModal510x = (skins, itemCount) => {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
        if  (themeToggle.checked) {
            modal.className = 'modalBlack';
            modal.style.backgroundColor = '#111';
            modal.style.overflow = 'auto';
            modal.innerHTML = `
            <h2 style="margin-bottom: 1vh; color: snow;">Вам выпало ${itemCount} предметов!</h2>
            <div class="skins-container" style="display: flex; flex-wrap: wrap; gap: 1vw; justify-content: center; width:65vw; color: snow"; overflow: auto></div>
            <button class="close-modal" style="margin-top: 5vh; padding: 2vh 5vh; background: #d34baf;; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
        `;
        } else {
            modal.className = 'modal';
        modal.style.backgroundColor = '#fff';
        modal.innerHTML = `
        <h2 style="margin-bottom: 1vh;">Вам выпало ${itemCount} предметов!</h2>
        <div class="skins-container" style="display: flex; flex-wrap: wrap; gap: 1vw; justify-content: center; width:65vw;  overflow: auto"></div>
        <button class="close-modal" style="margin-top: 5vh; padding: 2vh 5vh; background: #007BFF; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
    `;
        }



    const skinsContainer = modal.querySelector('.skins-container');
    skins.forEach((skin) => {
        const skinElement = document.createElement('div');
        skinElement.style = `text-align: center; width: ${itemCount === 5 ? '8vw' : '9vw'}; border: 1px solid #ccc; border-radius: 8px; padding: 10px;`;
        
        if (skin.rare === 'arm') {
            skinElement.style = `text-align: center; width: ${itemCount === 5 ? '10vw' : '9vw'}; border: 2px solid rgb(81, 106, 242); border-radius: 8px; padding: 10px;`;
        } else if (skin.rare === 'zap') {
            skinElement.style = `text-align: center; width: ${itemCount === 5 ? '10vw' : '9vw'}; border: 2px solid rgb(127, 80, 246); border-radius: 8px; padding: 10px;`;
        } else if (skin.rare === 'zas') {
            skinElement.style = `text-align: center; width: ${itemCount === 5 ? '10vw' : '9vw'}; border: 2px solid rgb(193, 66, 222); border-radius: 8px; padding: 10px;`;
        } else if (skin.rare === 'tai') {
            skinElement.style = `text-align: center; width: ${itemCount === 5 ? '10vw' : '9vw'}; border: 2px solid rgb(216, 87, 82); border-radius: 8px; padding: 10px;`;
        } else if (skin.rare === 'knife') {
            skinElement.style = `text-align: center; width: ${itemCount === 5 ? '10vw' : '9vw'}; border: 2px solid rgb(216, 87, 82); border-radius: 8px; padding: 10px;`;
        }
        
        skinElement.innerHTML = `
            <img src="${skin.imagePath}" alt="${skin.name}" style="width: 100%; border-radius: 8px;">
            <p><strong>${skin.name}</strong></p>
            <p>Редкость: <span>${skin.rare}</span></p>
            <p>Стоимость: <span>${skin.price} ₽</span></p>
        `;

        skinsContainer.appendChild(skinElement);

        if  (themeToggle.checked) {

            if (skin.rare === 'arm' ) {
                staticArmCase++;
                staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr class="dark-theme">`;
            } else if (skin.rare === 'zap' ) {
                staticZapCase++;
                staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr class="dark-theme">`;
            } else if (skin.rare === 'zas' ) {
                staticZasCase++;
                staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr class="dark-theme">`;
            } else if (skin.rare === 'tai' ) {
                staticTaiCase++;
                staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr class="dark-theme">`;
            } else if (skin.rare === 'knife' ) {
                staticKnifeCase++;
                staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr class="dark-theme">`;
            }
        } else {
            if (skin.rare === 'arm' ) {
                staticArmCase++;
                staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr class="statistic-hr">`;
            } else if (skin.rare === 'zap' ) {
                staticZapCase++;
                staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr class="statistic-hr">`;
            } else if (skin.rare === 'zas' ) {
                staticZasCase++;
                staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr class="statistic-hr">`;
            } else if (skin.rare === 'tai' ) {
                staticTaiCase++;
                staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr class="statistic-hr">`;
            } else if (skin.rare === 'knife' ) {
                staticKnifeCase++;
                staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr class="statistic-hr">`;
            }
        }
    });

    document.body.appendChild(modal);

    const closeModal = () => {
        modal.remove();
        document.removeEventListener('keydown', handleEscapeKey);
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    document.addEventListener('keydown', handleEscapeKey);
    modal.querySelector('.close-modal').addEventListener('click', closeModal);

    // Inventory update
    if(themeToggle.checked) {
        inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    } else {
        inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    }

};
