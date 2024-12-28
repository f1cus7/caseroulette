const balanceNode = document.querySelector('.nav-balance');
const themeToggle = document.getElementById('theme-toggle');
const staticOpenCaseNode = document.getElementById('static-open-case');
const inventoryNode = document.getElementById('inventory');
import { 
    getBalance,
    setBalance,
    getStaticOpenCase,
    incrementStaticOpenCase,
    incrementStaticOpenCase5x,
    incrementStaticOpenCase10x,
    incrementStaticOpenCase100x,
    inventory,
 } from './index.js';
import {getRandomSkin} from './getRandomSkin.js';
import { createModal, createModal510x } from './createModal.js';

export function openCase(caseArray, caseNumber) {
    // Проверяем, хватает ли баланса
    if (getBalance() < 500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    // Увеличиваем количество открытых кейсов
    incrementStaticOpenCase();
    
    if (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr />`;
    }

    // Списываем стоимость кейса
    setBalance(getBalance() - 500);
    
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    }

    // Используем getRandomSkin для выбора скина с учетом шансов
    const randomSkin = getRandomSkin(caseArray);

    // Если случайный скин не был найден, выходим из функции
    if (!randomSkin) {
        alert('Не удалось выбрать скин.');
        return;
    }

    // Формируем индекс скина для передачи в createModal
    const skinIndex = caseArray.findIndex(skin => skin.name === randomSkin.name && skin.rare === randomSkin.rare);

    // Показываем модальное окно с информацией о выпавшем скине
    createModal(randomSkin, skinIndex, caseNumber);  // Передаем данные о скине
}

export function openCase5x(caseArray, caseNumber) {
    if (getBalance() < 2500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    incrementStaticOpenCase5x();
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr />`;
    }

    setBalance(getBalance() - 2500);
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    }

    const skins = [];
    for (let i = 0; i < 5; i++) {
        // Используем getRandomSkin для выбора скина с учетом шансов
        const randomSkin = getRandomSkin(caseArray);

        // Если не удалось выбрать скин, выходим из цикла
        if (!randomSkin) {
            alert('Не удалось выбрать скин.');
            return;
        }

        // Сохраняем индекс скина для корректного отображения изображения
        const randomIndex = caseArray.findIndex(skin => skin.name === randomSkin.name && skin.rare === randomSkin.rare);

        // Добавляем скин в массив с изображением
        skins.push({
            ...randomSkin,
            imagePath: `images/${caseNumber}_${randomIndex + 1}.png` // Генерация пути к изображению
        });

        // Добавляем скин в инвентарь
        inventory.push({ ...randomSkin, image: `images/${caseNumber}_${randomIndex + 1}.png` });
    }

    // Обновляем инвентарь на странице
    inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
    <div class="inventory-col-vo">${inventory.length}</div>`;

    // Показываем модальное окно с 5 скинами
    createModal510x(skins, 5);
}

export function openCase10x(caseArray, caseNumber) {
    if (getBalance() < 5000) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    incrementStaticOpenCase10x();
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr />`;
    }
    setBalance(getBalance() - 5000);
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    }

    const skins = [];
    for (let i = 0; i < 10; i++) {
        // Используем getRandomSkin для выбора скина с учетом шансов
        const randomSkin = getRandomSkin(caseArray);

        // Если не удалось выбрать скин, выходим из цикла
        if (!randomSkin) {
            alert('Не удалось выбрать скин.');
            return;
        }

        // Сохраняем индекс скина для корректного отображения изображения
        const randomIndex = caseArray.findIndex(skin => skin.name === randomSkin.name && skin.rare === randomSkin.rare);

        // Добавляем скин в массив с изображением
        skins.push({
            ...randomSkin,
            imagePath: `images/${caseNumber}_${randomIndex + 1}.png` // Генерация пути к изображению
        });

        // Добавляем скин в инвентарь
        inventory.push({ ...randomSkin, image: `images/${caseNumber}_${randomIndex + 1}.png` });
    }

    // Обновляем инвентарь на странице
    if(themeToggle.checked) {
        inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    } else {
        inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    }

    // Показываем модальное окно с 10 скинами
    createModal510x(skins, 10);
}

export function openCase100x(caseArray, caseNumber) {
    if (getBalance() < 50000) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    incrementStaticOpenCase100x();
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${getStaticOpenCase()}<hr />`;
    }
    setBalance(getBalance() - 50000);
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
    }

    const skins = [];
    for (let i = 0; i < 100; i++) {
        // Используем getRandomSkin для выбора скина с учетом шансов
        const randomSkin = getRandomSkin(caseArray);

        // Если не удалось выбрать скин, выходим из цикла
        if (!randomSkin) {
            alert('Не удалось выбрать скин.');
            return;
        }

        // Сохраняем индекс скина для корректного отображения изображения
        const randomIndex = caseArray.findIndex(skin => skin.name === randomSkin.name && skin.rare === randomSkin.rare);

        // Добавляем скин в массив с изображением
        skins.push({
            ...randomSkin,
            imagePath: `images/${caseNumber}_${randomIndex + 1}.png` // Генерация пути к изображению
        });

        // Добавляем скин в инвентарь
        inventory.push({ ...randomSkin, image: `images/${caseNumber}_${randomIndex + 1}.png` });
    }

    // Обновляем инвентарь на странице
    if(themeToggle.checked) {
        inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    } else {
        inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}<div>`;
    }

    createModal510x(skins, 0);
}