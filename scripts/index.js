const caseOne = document.getElementById('case-one');
const caseTwo = document.getElementById('case-two');
const caseThree = document.getElementById('case-three');
const changeText = document.querySelector('.change-text');
const balanceNode = document.querySelector('.nav-balance');
const caseOneOpen = document.querySelector('.case-one-open');
const caseTwoOpen = document.querySelector('.case-two-open');
const caseThreeOpen = document.querySelector('.case-three-open');
const btnOpenCaseOne = document.getElementById('btn-open-case-one');
const btnOpenCaseOne5x = document.getElementById('btn-open-case-one-5x');
const btnOpenCaseOne10x = document.getElementById('btn-open-case-one-10x');
const btnOpenCaseOne100x = document.getElementById('btn-open-case-one-100x');
const btnOpenCaseTwo5x = document.getElementById('btn-open-case-two-5x');
const btnOpenCaseTwo10x = document.getElementById('btn-open-case-two-10x');
const btnOpenCaseTwo100x = document.getElementById('btn-open-case-two-100x');
const btnOpenCaseThree5x = document.getElementById('btn-open-case-three-5x');
const btnOpenCaseThree10x = document.getElementById('btn-open-case-three-10x');
const btnOpenCaseThree100x = document.getElementById('btn-open-case-three-100x');
const btnOpenCaseTwo = document.getElementById('btn-open-case-two');
const btnOpenCaseThree = document.getElementById('btn-open-case-three');
const staticOpenCaseNode = document.getElementById('static-open-case');
const staticArmCaseNode = document.getElementById('static-arm-case');
const staticZapCaseNode = document.getElementById('static-zap-case');
const staticZasCaseNode = document.getElementById('static-zas-case');
const staticTaiCaseNode = document.getElementById('static-tai-case');
const staticKnifeCaseNode = document.getElementById('static-knife-case');
const inventoryNode = document.getElementById('inventory');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const craftNode = document.getElementById('craft');
const MiniGamesNode = document.getElementById('mini-games');
const home = document.getElementById('house');

// масив кейса 1 
const caseOneArr = [
    {
        name: 'SCAR-20 | Первопроходец',
        rare: 'arm',
        minCost: 13.22,
        maxCost: 101.09
    },
    {
        name: 'M249 | Гипнотизёр',
        rare: 'arm',
        minCost: 13.22,
        maxCost: 111.05
    },
    {
        name: 'AUG | Роскошная отделка',
        rare: 'arm',
        minCost: 13.22,
        maxCost: 239.91
    },
    {
        name: 'MP5-SD | Статика',
        rare: 'arm',
        minCost: 13.22,
        maxCost: 170.15
    },
    {
        name: 'Револьвер R8 | Танго',
        rare: 'arm',
        minCost: 13.22,
        maxCost: 247.74
    },
    {
        name: 'Desert Eagle | Каллиграффити',
        rare: 'arm',
        minCost: 13.22,
        maxCost: 418.61
    },
    {
        name: 'Dual Berettas | Гидрострелы',
        rare: 'zap',
        minCost: 106.79,
        maxCost: 684.86
    },
    {
        name: 'MAC-10 | Сайба о́ни',
        rare: 'zap',
        minCost: 116.96,
        maxCost: 637.16
    },
    {
        name: 'SSG 08 | Метрополитен',
        rare: 'zap',
        minCost: 108.82,
        maxCost: 1063.59
    },
    {
        name: 'P90 | Резвый Рэнди',
        rare: 'zap',
        minCost: 121.02,
        maxCost: 591.6
    },
    {
        name: 'M4A4 | Турбина',
        rare: 'zap',
        minCost: 106.79,
        maxCost: 1428.81
    },
    {
        name: 'P250 | Эпицентр',
        rare: 'zas',
        minCost: 603.09,
        maxCost: 2654.01
    },
    {
        name: 'UMP-45 | Неонуар',
        rare: 'zas',
        minCost: 612.24,
        maxCost: 2914.57
    },
    {
        name: 'AK-47 | Дилетанты',
        rare: 'zas',
        minCost: 1137.02,
        maxCost: 9751.76
    },
    {
        name: 'Glock-18 | Золотой зубок',
        rare: 'tai',
        minCost: 1604.85,
        maxCost: 14748.67
    },
    {
        name: 'M4A1-S | Вейпорвейв',
        rare: 'tai',
        minCost: 6450.94,
        maxCost: 29255.3
    },
    {
        name: '★ Кукри | Градиент',
        rare: 'knife',
        minCost: 39204.92,
        maxCost: 48990.19
    }
];

// масив кейса 2
const caseTwoArr = [
    {
        name: 'Dual Berettas | Убежище',
        rare: 'arm',
        minCost: 6.10,
        maxCost: 79.33
    },
    {
        name: 'UMP-45 | Мотор',
        rare: 'arm',
        minCost: 6.10,
        maxCost: 90.51
    },
    {
        name: 'Nova | Печать тьмы',
        rare: 'arm',
        minCost: 6.10,
        maxCost: 81.36
    },
    {
        name: 'XM1014 | Ирэдзуми',
        rare: 'arm',
        minCost: 6.10,
        maxCost: 97.63
    },
    {
        name: 'Tec-9 | Шлак',
        rare: 'arm',
        minCost: 6.10,
        maxCost: 104.75
    },
    {
        name: 'SSG 08 | Катастрофа',
        rare: 'arm',
        minCost: 6.10,
        maxCost: 183.06
    },
    {
        name: 'MAC-10 | Световой короб',
        rare: 'zap',
        minCost: 6.10,
        maxCost: 303.07
    },
    {
        name: 'Five-SeveN | Гибрид',
        rare: 'zap',
        minCost: 75.26,
        maxCost: 604.11
    },
    {
        name: 'Sawed-Off | Аналоговый ввод',
        rare: 'zap',
        minCost: 77.29,
        maxCost: 610.21
    },
    {
        name: 'MP7 | Улыбочка',
        rare: 'zap',
        minCost: 75.26,
        maxCost: 656.99
    },
    {
        name: 'Glock-18 | Блок-18',
        rare: 'zap',
        minCost: 76.28,
        maxCost: 706.83
    },
    {
        name: 'M4A4 | Мастер травли',
        rare: 'zas',
        minCost: 76.28,
        maxCost: 759.71
    },
    {
        name: 'Zeus x27 | Олимп',
        rare: 'zas',
        minCost: 674.28,
        maxCost: 4428.09
    },
    {
        name: 'USP-S | Зубоскал',
        rare: 'zas',
        minCost: 683.44,
        maxCost: 5767.50
    },
    {
        name: 'M4A1-S | Чёрный лотос',
        rare: 'zas',
        minCost: 1079.05,
        maxCost: 7323.54
    },
    {
        name: 'AWP | Хромовая пушка',
        rare: 'tai',
        minCost: 2252.69,
        maxCost: 25943.07
    },
    {
        name: 'AK-47 | Наследство',
        rare: 'tai',
        minCost: 7947.98,
        maxCost: 45208.42
    },
    {
        name: '★ Кукри | Поверхностная закалка',
        rare: 'knife',
        minCost: 69204.92,
        maxCost: 70000.00
    }
];

// масив кейса 3
const caseThreeArr = [
    {
        name: 'SCAR-20 | Экзорцыпа',
        rare: 'arm',
        minCost: 4.07,
        maxCost: 79.33
    },
    {
        name: 'MAG-7 | Предсказание',
        rare: 'arm',
        minCost: 4.07,
        maxCost: 90.51
    },
    {
        name: 'MP5-SD | Юный некромант',
        rare: 'arm',
        minCost: 4.07,
        maxCost: 81.36
    },
    {
        name: 'P2000 | Поднятие духов',
        rare: 'arm',
        minCost: 4.07,
        maxCost: 97.63
    },
    {
        name: 'Sawed-Off | Спиритическая доска',
        rare: 'arm',
        minCost: 4.07,
        maxCost: 104.75
    },
    {
        name: 'MAC-10 | Заточение',
        rare: 'arm',
        minCost: 5.09,
        maxCost: 183.06
    },
    {
        name: 'Five-SeveN | Каракули',
        rare: 'zap',
        minCost: 4.07,
        maxCost: 303.07
    },
    {
        name: 'XM1014 | Зомби-страйк',
        rare: 'zap',
        minCost: 25.43,
        maxCost: 604.11
    },
    {
        name: 'ПП-19 «Бизон» | Космокот',
        rare: 'zap',
        minCost: 24.41,
        maxCost: 610.21
    },
    {
        name: 'G3SG1 | Поляна грёз',
        rare: 'zap',
        minCost: 24.41,
        maxCost: 656.99
    },
    {
        name: 'USP-S | Билет в ад',
        rare: 'zap',
        minCost: 27.46,
        maxCost: 706.83
    },
    {
        name: 'M4A1-S | Ночной ужас',
        rare: 'zas',
        minCost: 36.61,
        maxCost: 759.71
    },
    {
        name: 'MP7 | Дух бездны',
        rare: 'zas',
        minCost: 102.72,
        maxCost: 4428.09
    },
    {
        name: 'FAMAS | Быстрые движения глаз',
        rare: 'zas',
        minCost: 102.72,
        maxCost: 5767.50
    },
    {
        name: 'Dual Berettas | Плод воображения',
        rare: 'zas',
        minCost: 105.77,
        maxCost: 7323.54
    },
    {
        name: 'MP9 | Звёздный защитник',
        rare: 'tai',
        minCost: 200.35,
        maxCost: 25943.07
    },
    {
        name: 'AK-47 | Пожелание на ночь',
        rare: 'tai',
        minCost: 464.78,
        maxCost: 45208.42
    },
    {
        name: '★ Нож-бабочка | Гамма-волны',
        rare: 'knife',
        minCost: 100000.00,
        maxCost: 100000.00
    }
];


//инвентарь
let inventory = [];


// редкости
const normalizedChances = {
    arm: 0.8000,
    zap: 0.1600,
    zas: 0.0310,
    tai: 0.0064,
  knife: 0.0026
};




// фича
balanceNode.addEventListener(`click`, () => {
    balance += 5;
        if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    };
})


let balance = 25000;
let staticOpenCase = 0;
let staticArmCase = 0;
let staticZapCase = 0;
let staticZasCase = 0;
let staticTaiCase = 0;
let staticKnifeCase = 0;

const caseOneStart = () => {
    changeText.style.display = 'none'
    caseTwoOpen.style.display = 'none'
    caseThreeOpen.style.display = 'none'
    caseOneOpen.style.display = 'block'
};

const caseTwoStart = () => {
    changeText.style.display = 'none'
    caseOneOpen.style.display = 'none'
    caseThreeOpen.style.display = 'none'
    caseTwoOpen.style.display = 'block'
};

const caseThreeStart = () => {
    changeText.style.display = 'none'
    caseOneOpen.style.display = 'none'
    caseTwoOpen.style.display = 'none'
    caseThreeOpen.style.display = 'block'
};

const homeFunc = () => {
    changeText.style.display = 'block'
    caseOneOpen.style.display = 'none'
    caseTwoOpen.style.display = 'none'
    caseThreeOpen.style.display = 'none'
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();
    document.querySelector('.theme-switcher').style.display = 'inline-flex';
};

caseOne.addEventListener(`click`, caseOneStart);
caseTwo.addEventListener(`click`, caseTwoStart);
caseThree.addEventListener(`click`, caseThreeStart);
home.addEventListener(`click`, homeFunc);


// Функция для расчета рандома
const getRandomNumber = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
};

// Функция для определения выпавшего редкого предмета
const getRandomSkin = (arr) => {
    // Генерируем случайное число от 0 до 1
    const rand = Math.random();

    // Переменная для выбора редкости
    let selectedRare = null;

    // Выбор редкости через if-else
    if (rand < normalizedChances.arm) {
        selectedRare = 'arm';
    } else if (rand < normalizedChances.arm + normalizedChances.zap) {
        selectedRare = 'zap';
    } else if (rand < normalizedChances.arm + normalizedChances.zap + normalizedChances.zas) {
        selectedRare = 'zas';
    } else if (rand < normalizedChances.arm + normalizedChances.zap + normalizedChances.zas + normalizedChances.tai) {
        selectedRare = 'tai';
    } else {
        selectedRare = 'knife';
    }

    // Отбираем скины, которые соответствуют выбранной редкости
    const filteredSkins = arr.filter(skin => skin.rare === selectedRare);

    // Если нет скинов, соответствующих редкости, выходим
    if (filteredSkins.length === 0) return null;

    // Теперь выбираем случайный скин из отфильтрованных
    const chosenSkin = filteredSkins[Math.floor(Math.random() * filteredSkins.length)];

    // Генерация случайной стоимости
    const price = getRandomNumber(chosenSkin.minCost, chosenSkin.maxCost);

    return { ...chosenSkin, price };
};

function openCase(caseArray, caseNumber) {
    // Проверяем, хватает ли баланса
    if (balance < 500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase++;
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;
    }

    // Списываем стоимость кейса
    balance -= 500;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
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

function openCase5x(caseArray, caseNumber) {
    if (balance < 2500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 5;
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;
    }

    balance -= 2500;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
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


function openCase10x(caseArray, caseNumber) {
    if (balance < 5000) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 10;
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;
    }
    balance -= 5000;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
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

function openCase100x(caseArray, caseNumber) {
    if (balance < 50000) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 100;
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr class="dark-theme">`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;
    }
    balance -= 50000;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
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

btnOpenCaseOne.addEventListener('click', () => openCase(caseOneArr, 1));
btnOpenCaseTwo.addEventListener('click', () => openCase(caseTwoArr, 2));
btnOpenCaseThree.addEventListener('click', () => openCase(caseThreeArr, 3));
btnOpenCaseOne5x.addEventListener('click', () => openCase5x(caseOneArr, 1));
btnOpenCaseTwo5x.addEventListener('click', () => openCase5x(caseTwoArr, 2));
btnOpenCaseThree5x.addEventListener('click', () => openCase5x(caseThreeArr, 3));
btnOpenCaseOne10x.addEventListener('click', () => openCase10x(caseOneArr, 1));
btnOpenCaseTwo10x.addEventListener('click', () => openCase10x(caseTwoArr, 2));
btnOpenCaseThree10x.addEventListener('click', () => openCase10x(caseThreeArr, 3));
btnOpenCaseOne100x.addEventListener('click', () => openCase100x(caseOneArr, 1));
btnOpenCaseTwo100x.addEventListener('click', () => openCase100x(caseTwoArr, 2));
btnOpenCaseThree100x.addEventListener('click', () => openCase100x(caseThreeArr, 3));

const createModal = (skin, index, caseNumber) => {
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

const createModal510x = (skins, itemCount) => {
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



inventoryNode.addEventListener('click', () => {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();


    if (inventory.length > 0) {
    const modal = document.createElement('div');
    modal.className = themeToggle.checked ? 'inventory-modal-black' : 'inventory-modal';

    const cardGrid = document.createElement('div');

    inventory.forEach(item => {
        const card = document.createElement('div');
        card.className = `card-grid-item ${item.rare}`;

        if  (themeToggle.checked) {
            cardGrid.className = 'card-grid';
            modal.style.backgroundColor = '#111';
            card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
            <p style="color:snow;"><strong style="color:snow;">${item.name}</strong></p>
            <hr class="hr-card">
            <button class="weapon-cost-inv" style="font-weight: bold; background-color:#6d14b8; border: none; color:snow" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
        `;
        } else {
            cardGrid.className = 'card-grid';
            modal.style.backgroundColor = '#fff';
            card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
            <p><strong>${item.name}</strong></p>
            <hr class="hr-card">
            <button class="weapon-cost-inv" style="font-weight: bold;" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
        `;;
        }



        cardGrid.appendChild(card);
    });

    // Добавляем карточки в модальное окно
    modal.appendChild(cardGrid);

    const SellButton = document.createElement('button');
    SellButton.className = 'btn-opn';
    SellButton.textContent = 'Продать всё';
    SellButton.style.marginTop = '20px';
    if(themeToggle.checked) { SellButton.style.backgroundColor = '#d34baf'}

    modal.appendChild(SellButton);
    document.body.appendChild(modal);

    const closeButton = document.createElement('button');
    closeButton.className = 'btn-opn';
    closeButton.textContent = 'Закрыть';
    closeButton.style.marginTop = '20px';
    if(themeToggle.checked) { closeButton.style.backgroundColor = '#d34baf'}
    const closeModal = () => {
        modal.remove();
        document.removeEventListener('keydown', handleEscapeKey); // Удаляем обработчик Escape
    };

    closeButton.addEventListener('click', closeModal);

    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    // Обработчик нажатия клавиши Escape
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };



    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('weapon-cost-inv')) {
            // Получаем текст кнопки
            const buttonText = event.target.textContent;
    
            // Извлекаем цену из текста кнопки
            const priceMatch = buttonText.match(/[\d,\.]+/); // Ищем числовое значение
            if (!priceMatch) return; // Если не нашли цену, завершаем обработчик
    
            const skinSell = parseFloat(priceMatch[0].replace(',', '.')); // Преобразуем в число
            console.log(`Цена продажи: ${skinSell}`);
    
            // Ищем объект в массиве inventory по цене
            const skinIndex = inventory.findIndex(skin => parseFloat(skin.price) === skinSell);
    
            if (skinIndex !== -1) {
                // Удаляем найденный скин из массива
                const soldSkin = inventory.splice(skinIndex, 1)[0]; // Удаляем и сохраняем объект
                console.log('Скин продан:', soldSkin);
    
                // Обновляем баланс
                balance += skinSell;

                if (themeToggle.checked) {
                    balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
                    inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
                    <div class="inventory-col-vo">${inventory.length}<div>`
                } else {
                    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
                    inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
                    <div class="inventory-col-vo">${inventory.length}<div>`
                }

                // Обновляем модальное окно
                updateModal();
            } else {
                console.log('Скин с указанной ценой не найден в инвентаре.');
            }
        }
    });

    SellButton.addEventListener(`click`, () => {
        let sum = 0;
        for (let i = 0; i < inventory.length; i++) {
            sum += Number(inventory[i].price);
        }
        balance += sum;
        console.log(sum)
        if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        }
        inventory.splice(0, inventory.length)
        updateModal();
        inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}</div>`;
        closeModal()
    })
    
    // Функция для обновления содержимого модального окна
    function updateModal() {
        // Находим контейнер с карточками
        const cardGrid = modal.querySelector('.card-grid');
        if (!cardGrid) return;
    
        // Очищаем контейнер от старых карточек
        cardGrid.innerHTML = '';
    
        // Добавляем новые карточки на основе обновлённого массива inventory
        inventory.forEach(item => {
            const card = document.createElement('div');
            card.className = `card-grid-item ${item.rare}`; // Добавляем класс редкости
    
            if (themeToggle.checked) {
                card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
                <p style="color:snow;"><strong style="color:snow;">${item.name}</strong></p>
                <hr class="hr-card">
                <button class="weapon-cost-inv" style="font-weight: bold; background-color:#6d14b8; border: none; color:snow" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
            `;
            } else {
                card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
                <p><strong>${item.name}</strong></p>
                <hr class="hr-card">
                <button class="weapon-cost-inv" style="font-weight: bold;" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
            `;
            }

    
            cardGrid.appendChild(card);
        });
    }
    
    
    
    
    



    // Добавляем обработчик нажатия клавиш
    document.addEventListener('keydown', handleEscapeKey);
    }



});

MiniGamesNode.addEventListener(`click`, () => {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();
    const modal = document.createElement('div');
    document.querySelector('.theme-switcher').style.display = 'none';

    if (themeToggle.checked) {
        modal.className = 'modalBlack modalMinigames-black';
        modal.style.backgroundColor = '#111';

        modal.innerHTML = `
         <div style="font-size: 4vh; display:flex; justify-content:center; color:snow;">Мини-игры</div>
         <div class="game-container">
<div class="nvuti-game">
    <div style="font-size: 3vh; color: snow;">NVUTI</div>
    <div class="parent-nvuti-grid">
        <div class="child-nvuti-grid-1">
            <p style="text-align:left; margin-left: 2vw; color:snow;">Сумма</p>
            <input type="number" placeholder="10" id="nvuti-input-sum" min="10" style="background-color:#111; color:snow;">
            <hr style="border-color: #d34baf; width: 70%; margin: 1vh auto 0px">
        </div>
        <div class="child-nvuti-grid-2">
            <button class="sum-up nvuti-buttons btn-color">Удвоить</button>
            <button class="sum-half nvuti-buttons btn-color">Половина</button><br>
            <button class="sum-max nvuti-buttons btn-color">Макс</button>
            <button class="sum-min nvuti-buttons btn-color">Мин</button>
        </div>
        <div class="child-nvuti-grid-3">
            <p style="text-align:left; margin-left: 2vw; color:snow;">Процент</p>
            <input type="number" placeholder="50" id="nvuti-input-procent" min="1" max="100" style="background-color:#111; color:snow;">
            <hr style="border-color: #d34baf; width: 70%; margin: 1vh auto 0px">
        </div>
        <div class="child-nvuti-grid-4">
            <button class="procent-up nvuti-buttons btn-color">Удвоить</button>
            <button class="procent-half nvuti-buttons btn-color">Половина</button><br>
            <button class="procent-max nvuti-buttons btn-color">Макс</button>
            <button class="procent-min nvuti-buttons btn-color">Мин</button>
        </div>
        <div class="child-nvuti-grid-5">
            <p id="possible-gain" style="color: #d34baf;">0.00</p>
            <p class="possible-gain-text" style="color: snow;">Возможный выигрыш</p> <!-- Заменил на правильный закрывающий тег -->
            <div class="winorlose"></div>
        </div>
        <div class="child-nvuti-grid-6">
            <p id="min-sums" style="color:snow;">0 - 499999</p>
            <button class="nvuti-min-btn">Меньше</button>
        </div>
        <div class="child-nvuti-grid-7">
            <p id="max-sums" style="color:snow;">500000 - 999999</p>
            <button class="nvuti-max-btn">Больше</button>
        </div>
    </div>
</div>

<div class="roulette">
    <div class="roulette-title">
        <div style="font-size: 3vh; font-weight:lighter; color:snow">Рулетка</div>
    </div>
    <div class="roulette-container">
        <!-- Первая секция - инпут -->
        <div class="roulette-input" style="color:snow">
            <input type="number" id="bet" placeholder="ставка" class="roulete-input" style="background-color:#111; border: 1px solid red; color:snow; outline: red"/>
        </div>

        <!-- Вторая секция - колесо -->
        <div class="roulette-wheel-container">
            <div id="wheel-container">
                <canvas id="roulette-wheel" width="150" height="150"></canvas>
            </div>
        </div>

        <!-- Третья секция - кнопки -->
        <div class="roulette-buttons">
            <button id="bet-black" class="button-wheel" style="background-color:black; color:snow">Поставить на черное</button>
            <button id="bet-red" class="button-wheel" style="background-color:red; color:snow">Поставить на красное</button>
            <button id="bet-green" class="button-wheel">Поставить на зеленое</button>
        </div>

        <!-- Четвертая секция - результат -->
        <div class="roulette-result">
            <div id="result" style="color:snow">
                <p>Результат: <span id="result-number">0</span></p>
            </div>
        </div>
    </div>
</div>
</div>
<!-- Второй контейнер с дополнительными играми -->
<div class="game-container">
    <div class="run">
        <div class="game-place-run">
            <div class="run-numbers"><p>1.00x</p></div>
            <div class="run-line"></div>
        </div>
        <div class="bet-run">
            <div class="run-balance" style="border-color: #d34baf">
                <button class="run-btn" id="run-plus" style="background-color:#d34baf">+</button>
                <input type="number" class="run-input-sum" placeholder="10.00" value="10.00" style="background-color: #121212; color:snow"/>
                <button class="run-btn" id="run-minus" style="background-color:#d34baf">-</button>
            </div>
            <div class="run-balance-btn">
                <button class="run-btn-stavka" id="zerofive" style="background-color:#d34baf">1/2</button>
                <button class="run-btn-stavka" id="all-in" style="width: 4vw; height: 3vh; background-color:#d34baf">ALL IN</button>
                <button class="run-btn-stavka" id="twox" style="background-color:#d34baf">x2</button>
            </div>
            <p class="auto-run-text">авто-вывод</p>
            <div class="run-balance-qwe" style="border-color: #d34baf">
                <div style="display: flex; border-bottom: 1px solid #d34baf">
                    <p style="color: #snow; font-size: 1vw; margin-left: 0.5vw">X</p>
                    <input  class="stavka-run" placeholder="1.2" style="background-color: #121212; color:snow; padding-left:0.5vw"  maxlength="4" min="1"/>
                </div>
                <button class="run-btn-stavka" id="run-onexone" style="background-color:#d34baf">1.1X</button>
                <button class="run-btn-stavka" id="run-onextwo" style="background-color:#d34baf">1.2X</button>
                <button class="run-btn-stavka" id="run-onexfive" style="background-color:#d34baf">1.5X</button>
                <button class="run-btn-stavka" id="run-two" style="background-color:#d34baf">2X</button>
            </div>
            <button class="start-run" style="background-color:#d34baf">Сделать ставку</button>
            <button class="take-run">Забрать</button>
        </div>

    </div>
    <div class="another-game">b</div>
</div>

        `;
        body.appendChild(modal);
    } else {
        modal.className = 'modal modalMinigames ';
        modal.style.backgroundColor = 'white';



        modal.innerHTML = `
<div style="font-size: 4vh;">Мини-игры</div>

<div class="game-container">
    <div class="nvuti-game">
        <div style="font-size: 3vh;">NVUTI</div>
        <div class="parent-nvuti-grid">
            <div class="child-nvuti-grid-1">
                <p style="text-align: left; margin-left: 2vw;">Сумма</p>
                <input type="number" placeholder="10" id="nvuti-input-sum" min="10">
                <hr style="border-color: grey; width: 70%; margin: 1vh auto 0px;">
            </div>
            <div class="child-nvuti-grid-2">
                <button class="sum-up nvuti-buttons">Удвоить</button>
                <button class="sum-half nvuti-buttons">Половина</button><br>
                <button class="sum-max nvuti-buttons">Макс</button>
                <button class="sum-min nvuti-buttons">Мин</button>
            </div>
            <div class="child-nvuti-grid-3">
                <p style="text-align: left; margin-left: 2vw;">Процент</p>
                <input type="number" placeholder="50" id="nvuti-input-procent" min="1" max="100">
                <hr style="border-color: grey; width: 70%; margin: 1vh auto 0px;">
            </div>
            <div class="child-nvuti-grid-4">
                <button class="procent-up nvuti-buttons">Удвоить</button>
                <button class="procent-half nvuti-buttons">Половина</button><br>
                <button class="procent-max nvuti-buttons">Макс</button>
                <button class="procent-min nvuti-buttons">Мин</button>
            </div>
            <div class="child-nvuti-grid-5">
                <p id="possible-gain">0.00</p>
                <p class="possible-gain-text">Возможный выигрыш</p>
                <div class="winorlose"></div>
            </div>
            <div class="child-nvuti-grid-6">
                <p id="min-sums">0 - 499999</p>
                <button class="nvuti-min-btn">Меньше</button>
            </div>
            <div class="child-nvuti-grid-7">
                <p id="max-sums">500000 - 999999</p>
                <button class="nvuti-max-btn">Больше</button>
            </div>
        </div>
    </div>

    <div class="roulette">
                <div class="roulette-title">
                <div style="font-size: 3vh; font-weight:lighter;">Рулетка</div>
                </div>
        <div class="roulette-container">
            <!-- Первая секция - инпут -->
            <div class="roulette-input">
                <input type="number" id="bet" placeholder="ставка" class="roulete-input" style="border-color: red; outline: red"/>

            </div>

            <!-- Вторая секция - колесо -->
            <div class="roulette-wheel-container">
                <div id="wheel-container">
                    <canvas id="roulette-wheel" width="150" height="150"></canvas>
                </div>
            </div>

            <!-- Третья секция - кнопки -->
            <div class="roulette-buttons">
                <button id="bet-black" class="button-wheel" style="background-color:black; color:snow">Поставить на черное</button>
                <button id="bet-red" class="button-wheel" style="background-color:red; color:snow">Поставить на красное</button>
                <button id="bet-green" class="button-wheel">Поставить на зеленое</button>
            </div>

            <!-- Четвертая секция - результат -->
            <div class="roulette-result">
                <div id="result">
                    <p>Результат: <span id="result-number">0</span></p>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Второй контейнер с дополнительными играми -->
<div class="game-container">
    <div class="run">
        <div class="game-place-run">
                    <div class="run-numbers">1.00x</div>
                    <div class="run-line"></div>
        </div>
        <div class="bet-run">
            <div class="run-balance">
                <button class="run-btn" id="run-plus">+</button>
                <input type="number" class="run-input-sum" placeholder="10.00" value="10.00"/>
                <button class="run-btn" id="run-minus">-</button>
            </div>
            <div class="run-balance-btn">
                <button class="run-btn-stavka" id="zerofive">1/2</button>
                <button class="run-btn-stavka" id="all-in" style="width: 4vw; height: 3vh">ALL IN</button>
                <button class="run-btn-stavka" id="twox">x2</button>
            </div>
            <p class="auto-run-text">авто-вывод</p>
            <div class="run-balance-qwe">
                <div style="display: flex;  border-bottom: 1px solid #af4eff">
                    <p style="color: #121212; font-size: 1vw; margin-left: 0.5vw">X</p>
                    <input  class="stavka-run" placeholder="1.2" maxlength="4" style="padding-left:0.5vw" min="1" id="run-auto-vivod"/>
                </div>
                <button class="run-btn-stavka" id="run-onexone">1.1X</button>
                <button class="run-btn-stavka" id="run-onextwo">1.2X</button>
                <button class="run-btn-stavka" id="run-onexfive">1.5X</button>
                <button class="run-btn-stavka" id="run-two">2X</button>
            </div>
            <div class="run-div-start">
            <button class="start-run">Сделать ставку</button>
            <button class="take-run">Забрать</button>
            </div>
        </div>

    </div>
    <div class="another-game">b</div>
</div>

        `;
        body.appendChild(modal)
    }

    document.body.appendChild(modal);

    const nvutiInputSum = document.getElementById('nvuti-input-sum');
    const nvutiInputprocent = document.getElementById('nvuti-input-procent');
    const possibleGain = document.getElementById('possible-gain');
    const minSums = document.getElementById('min-sums');
    const maxSums = document.getElementById('max-sums');
    const sumUp = document.querySelector('.sum-up');
    const procentUp = document.querySelector('.procent-up');
    const sumHalf = document.querySelector('.sum-half');
    const procentHalf = document.querySelector('.procent-half');
    const sumMax = document.querySelector('.sum-max');
    const procentMax = document.querySelector('.procent-max');
    const sumMin = document.querySelector('.sum-min');
    const procentMin = document.querySelector('.procent-min');
    const nvutiMinBtn = document.querySelector('.nvuti-min-btn');
    const nvutiMaxBtn = document.querySelector('.nvuti-max-btn');

// Основная функция для обновления значений

    let maxProcent = 0;
    let minProcent = 0;
    let gain = 0;

const updateValues = () => {
    const percent = parseFloat(nvutiInputprocent.value);
    const sum = parseFloat(nvutiInputSum.value);

    if (!isNaN(percent) && !isNaN(sum)) {
        const totalValue = 999999;

        // Расчет минимального и максимального диапазона
        minProcent = (totalValue * percent) / 100;
        maxProcent = totalValue - minProcent;
        minSums.innerHTML = `0 - ${Math.floor(minProcent)}`;
        maxSums.innerHTML = `${Math.ceil(maxProcent)} - 999999`;

        // Вычисление возможной выгоды
        gain = (sum / percent) * 100

        possibleGain.innerHTML = `${gain.toFixed(2)}`;
    }
};

// Слушатели событий для ввода процентов и суммы
nvutiInputprocent.addEventListener('input', updateValues);
nvutiInputSum.addEventListener('input', updateValues);

// Умножение на 2
sumUp.addEventListener('click', () => {
    let currentSum = parseFloat(nvutiInputSum.value);
    if (!isNaN(currentSum)) {
        currentSum *= 2;
        nvutiInputSum.value = currentSum.toFixed(2); // Обновление значения
        updateValues();
    }
});

// Деление на 2
sumHalf.addEventListener('click', () => {
    let currentSum = parseFloat(nvutiInputSum.value);
    if (!isNaN(currentSum)) {
        currentSum /= 2;
        nvutiInputSum.value = currentSum.toFixed(2); // Обновление значения
        updateValues();
    }
});

// Установка максимальной суммы (для примера, balance может быть определен где-то еще в коде)
sumMax.addEventListener('click', () => {
    nvutiInputSum.value = balance.toFixed(2);
    updateValues();
});

// Установка минимальной суммы
sumMin.addEventListener('click', () => {
    nvutiInputSum.value = '10.00'; // Устанавливаем минимальную сумму в 10.00
    updateValues();
});

// Умножение на 2
procentUp.addEventListener('click', () => {
    let currentProcent = parseFloat(nvutiInputprocent.value);
    if (!isNaN(currentProcent)) {
        currentProcent *= 2;
        if (currentProcent > 100) {
            currentProcent = 100;
        }
        nvutiInputprocent.value = currentProcent.toFixed(2); // Обновление значения
        updateValues();
    }
});

// Деление на 2
procentHalf.addEventListener('click', () => {
    let currentProcent = parseFloat(nvutiInputprocent.value);
    if (!isNaN(currentProcent)) {
        currentProcent /= 2;
        nvutiInputprocent.value = currentProcent.toFixed(2); // Обновление значения
        updateValues();
    }
});

procentMax.addEventListener('click', () => {
    nvutiInputprocent.value = 100;
    updateValues();
});

// Установка минимальной суммы
procentMin.addEventListener('click', () => {
    nvutiInputprocent.value = 1;
    updateValues();
});
    
nvutiMaxBtn.addEventListener(`click`, () => {
    if (nvutiInputSum.value >= 10 && nvutiInputprocent.value >= 1 && nvutiInputprocent.value <= 100 && nvutiInputSum.value <= balance) {
        let randNum = getRandomNumber(0, 999999);
        balance -= nvutiInputSum.value;
        if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        };
        if (randNum >= maxProcent) {
            console.log('Поднял')
            balance += gain
            if (themeToggle.checked) {
                balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
            } else {
                balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
            };
                    document.querySelector('.winorlose').innerHTML = `<div class="nvuti-win">Вы выиграли : ${gain.toFixed(2)} рублей!</div>`
        } else { 
            console.error(`Слил`) 
                        document.querySelector('.winorlose').innerHTML = `<div class="nvuti-lose">Вы проиграли : ${nvutiInputSum.value} рублей!</div>`
        }
    } else {
        console.warn(`proebalsya`)
    }
})

nvutiMinBtn.addEventListener(`click`, () => {
    if (nvutiInputSum.value >= 10 && nvutiInputprocent.value >= 1 && nvutiInputprocent.value <= 100 && nvutiInputSum.value <= balance) {
        let randNum = getRandomNumber(0, 999999);
        balance -= nvutiInputSum.value;
        if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        };
        if (randNum <= minProcent) {
            console.log('Поднял')
            balance += gain
            if (themeToggle.checked) {
                balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
            } else {
                balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
            };
            document.querySelector('.winorlose').innerHTML = `<div class="nvuti-win">Вы выиграли : ${gain.toFixed(2)} рублей!</div>`
        } else {
            console.error(`Слил`) 
            document.querySelector('.winorlose').innerHTML = `<div class="nvuti-lose">Вы проиграли : ${nvutiInputSum.value} рублей!</div>`
            }
    } else {
        console.warn(`proebalsya`)
    }
})

const canvas = document.getElementById('roulette-wheel');
const ctx = canvas.getContext('2d');
const betInput = document.getElementById('bet');
const betBlackBtn = document.getElementById('bet-black');
const betRedBtn = document.getElementById('bet-red');
const betGreenBtn = document.getElementById('bet-green');
const resultNumber = document.getElementById('result-number');

// Числа и их цвета
const numbers = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
];
const colors = {
    black: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    red: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    green: [0]
};

let currentBet = null;
let currentAmount = 0;

// Рисуем колесо рулетки
function drawWheel() {
    const wheelRadius = canvas.width / 2;
    const sectionAngle = 2 * Math.PI / numbers.length;

    numbers.forEach((num, i) => {
        const startAngle = sectionAngle * i;
        const endAngle = sectionAngle * (i + 1);
        const isBlack = colors.black.includes(num);
        const isRed = colors.red.includes(num);
        const isGreen = colors.green.includes(num);

        ctx.beginPath();
        ctx.arc(wheelRadius, wheelRadius, wheelRadius, startAngle, endAngle);
        ctx.lineTo(wheelRadius, wheelRadius);

        if (isBlack) {
            ctx.fillStyle = 'black';
        } else if (isRed) {
            ctx.fillStyle = 'red';
        } else if (isGreen) {
            ctx.fillStyle = 'green';
        }

        ctx.fill();
        ctx.stroke();
    });
}

    let randomNumber = 0;

// Функция для вращения колеса
function spinWheel() {
    const rotations = Math.floor(Math.random() * 3) + 4; // От 4 до 6 полных оборотов
    const randomIndex = Math.floor(Math.random() * numbers.length); // Случайное число
    randomNumber = numbers[randomIndex];
    const degreesPerSection = 360 / numbers.length;

    let rotationDegree = 0;
    let totalRotation = rotations * 360 + (randomIndex * degreesPerSection); // Стартовая позиция для вращения

    const spinInterval = setInterval(() => {
        rotationDegree += 5; // Увеличиваем угол на 5 градусов
        canvas.style.transform = `rotate(${rotationDegree}deg)`; // Прокрутка канваса

        if (rotationDegree >= totalRotation) {
            clearInterval(spinInterval); // Останавливаем вращение

            // Показываем результат
            resultNumber.textContent = `число: ${randomNumber}, цвет: ${currentBet}`;
            checkWin(randomNumber);
        }
    }, 10); // Частота обновления анимации (10 миллисекунд)
}

// Проверка ставки
function checkWin(number) {
    const betInputValue = betInput.value.trim();
    currentAmount = parseInt(betInputValue); // Преобразуем значение ставки в число
    if (currentBet === 'black' && colors.black.includes(number)) {
        balance += currentAmount * 1.4860;
        if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        }
    } else if (currentBet === 'red' && colors.red.includes(number)) {
        balance += currentAmount * 1.4860;
        if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        }
    } else if (currentBet === 'green' && colors.green.includes(number)) {
        balance += currentAmount * 97.30;
        if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        }
    } else {
        resultNumber.textContent = `Вы проиграли. Выпало число: ${randomNumber}`;
    }
}

function handleBet(color) {
    // Получаем значение ставки из инпута
    const betInputValue = betInput.value.trim();
    resultNumber.textContent = ``;
    // Проверяем, что в инпуте есть корректное значение (число больше 0)
    if (betInputValue && !isNaN(betInputValue) && parseInt(betInputValue) > 0 && parseInt(betInputValue) <= balance) {
        currentBet = color;  // Устанавливаем цвет ставки (черное, красное, зеленое)
        currentAmount = parseInt(betInputValue); // Преобразуем значение ставки в число
        spinWheel(); // Запускаем колесо

        balance -= currentAmount; // Уменьшаем баланс на сумму ставки
        
        // Обновляем отображение баланса в зависимости от темы
        if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
        }
    } else {
        resultNumber.textContent = 'Пожалуйста, введите корректную ставку.';
    }
}

// Обработчики событий для каждой из кнопок
betBlackBtn.addEventListener('click', () => handleBet('black'));
betRedBtn.addEventListener('click', () => handleBet('red'));
betGreenBtn.addEventListener('click', () => handleBet('green'));


// Инициализация
drawWheel();

const runPlus = document.getElementById('run-plus');
const runInputSum = document.querySelector('.run-input-sum');
const runMinus = document.getElementById('run-minus');
const zeroFive = document.getElementById('zerofive');
const allIn = document.getElementById('all-in');
const twox = document.getElementById('twox');
const stavkaRun = document.querySelector('.stavka-run');
const runOnexone = document.getElementById('run-onexone');
const runOnextwo = document.getElementById('run-onextwo');
const runOnexfive = document.getElementById('run-onexfive');
const runTwo = document.getElementById('run-two');
const startRun = document.querySelector('.start-run');
const runDivStart = document.querySelector('.run-div-start');
const takeRun = document.querySelector(".take-run");
   
let runSum = 0;
runPlus.addEventListener('click', () => {
    if (runInputSum.value >= 1){
        runSum = Number(runInputSum.value) + (Number(runInputSum.value) * 0.10);
        runInputSum.value = runSum.toFixed(2);
    } else {
        runSum = Number(runInputSum.value) + 1;
        runInputSum.value = runSum;
    }

})
runMinus.addEventListener('click', () => {
    runSum = Number(runInputSum.value) - (Number(runInputSum.value) * 0.10);
    runInputSum.value = runSum.toFixed(2);
})
zeroFive.addEventListener('click', () => {
    let qweqwe = runInputSum.value /= 2;
    runInputSum.value = qweqwe.toFixed(2);
})
allIn.addEventListener('click', () => {
    runInputSum.value = Number(balance);
})
twox.addEventListener('click', () => {
    let qweqwe = runInputSum.value *= 2;
    runInputSum.value = qweqwe.toFixed(2);
})

const vivod = (stavka) => {
    let newrunStavka = stavka;
    stavkaRun.value = newrunStavka;
}

runOnexone.addEventListener('click', () => {vivod(1.1)});
runOnextwo.addEventListener('click', () => {vivod(1.2)});
runOnexfive.addEventListener('click', () => {vivod(1.5)});
runTwo.addEventListener('click', () => {vivod(2)});

let x = 0;
let interval;


const runPlay = () => {
    if (runInputSum.value >= 10.00) {
    let min = 1;
    let max = 10;
    let rand = (Math.random() ** 2) * (max - min) + min;
    console.log(rand.toFixed(2));        
    x = 1.0;
    let line = 1;
    document.querySelector('.run-numbers').style.color = `snow`;
    startRun.style.display = `none`;
    takeRun.style.display = `inline-block`
    document.querySelector('.run-line').style.backgroundColor = `snow`;
    balance -= Number(runInputSum.value);
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    };
    interval = setInterval(() => {
        x += 0.01;
        line += 0.035;
        document.querySelector('.run-line').style.width = `${line}vw`;
        document.querySelector('.run-numbers').innerHTML = `${x.toFixed(2)}x`;
        if (Math.round(x * 100) / 100 === Math.round(rand * 100) / 100) {
            clearInterval(interval);
            document.querySelector('.run-numbers').style.color = `red`;
            startRun.style.display = `inline-block`;
            takeRun.style.display = `none`;
            document.querySelector('.run-line').style.backgroundColor = `red`;
            
        }
    
    if (document.getElementById('run-auto-vivod').value)  {
        if (Number(document.getElementById('run-auto-vivod').value).toFixed(2) == x.toFixed(2)) {
            document.querySelector('.run-numbers').textContent = `${x.toFixed(2)}x`;
            document.querySelector('.run-numbers').style.color = `lime`
            clearInterval(interval);
            balance += Number(runInputSum.value) * x;
            if (themeToggle.checked) {
               balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
            } else {
               balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
         };
            startRun.style.display = `inline-block`;
            takeRun.style.display = `none`;
            document.querySelector('.run-line').style.backgroundColor = `lime`;
        }
        
    }
}, 50);
} else {
    alert (`минимальная ставка равна 10`)
}

};

startRun.addEventListener('click', runPlay);

takeRun.addEventListener('click', () => {
    document.querySelector('.run-numbers').textContent = `${x.toFixed(2)}x`;
    document.querySelector('.run-numbers').style.color = `lime`
    clearInterval(interval);
    balance += Number(runInputSum.value) * x;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    };
    startRun.style.display = `inline-block`;
    takeRun.style.display = `none`;
    document.querySelector('.run-line').style.backgroundColor = `lime`;
})























    const closeModal = () => {
        modal.remove();
        document.removeEventListener('keydown', handleEscapeKey); // Удаляем обработчик клавиши
        document.querySelector('.theme-switcher').style.display = 'inline-flex';
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();

        }
    };

    document.addEventListener('keydown', handleEscapeKey);

}
);

themeToggle.addEventListener('change', () => {
    const styleId = 'custom-scrollbar'; // Уникальный ID для стилизованного скроллбара
    const style = document.getElementById(styleId); // Проверяем, есть ли уже такой элемент
  
    if (themeToggle.checked) {
      body.classList.add('dark-theme');
      document.querySelector('header').classList.add('dark-theme');
      document.querySelector('nav').classList.add('dark-theme');
      document.querySelector('.nav-shop').classList.add('dark-theme');
      document.getElementById('inventory').classList.add('dark-theme');
      document.querySelector('.main-text').classList.add('dark-theme');
      document.querySelector('.main-small-text').classList.add('dark-theme');
      document.querySelectorAll('.case-text').forEach(element => {element.classList.add('dark-theme');});
      document.querySelectorAll('.grid-item').forEach(element => {element.classList.add('dark-theme');});
      document.querySelectorAll('hr').forEach(element => {element.classList.remove('light-theme');});
      document.querySelectorAll('hr').forEach(element => {element.classList.add('dark-theme');});
      document.querySelector('.aside').classList.add('dark-theme');
      document.querySelectorAll('li').forEach(element => {element.style.color = 'snow';});
      document.querySelectorAll('.btn-opn').forEach(element => {element.classList.add('dark-theme');});
      document.querySelectorAll('p').forEach(element => {element.style.color = 'snow';});
      document.querySelector('.nav-shop').innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh" />Магазин`;
      document.getElementById('inventory').innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh;"/>Инвентарь`;
      document.querySelector('.nav-balance').innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
  
      // Добавление кастомного скроллбара
      if (!style) { // Если стиль ещё не добавлен, добавляем его
        const newStyle = document.createElement('style');
        newStyle.id = styleId;
        newStyle.textContent = `
          /* Стилизация для всего скроллбара */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            padding: 10px;
          }
  
          /* Стилизация фона скроллбара */
          ::-webkit-scrollbar-track {
            background: #121212;
            border-radius: 10px;
          }
  
          /* Стилизация ползунка скроллбара */
          ::-webkit-scrollbar-thumb {
            background: #d34baf;
            border-radius: 0px 2px 2px 0px;
          }
  
          /* При наведении на ползунок */
          ::-webkit-scrollbar-thumb:hover {
            background: #c244a0;
          }
        `;
      document.head.appendChild(newStyle);
      }
      document.querySelectorAll('.lishki-color');
      document.getElementById('craft').innerHTML = `<img src="images/craft-black.svg" alt="" style="width: 2vh;"/>Крафт`
      document.querySelector('.nav-shop').classList.add('dark-theme');
      document.getElementById('craft').style.backgroundColor = `#121212`
      document.getElementById('craft').style.color = `snow`
      inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
      <div class="inventory-col-vo">${inventory.length}</div>`;
      document.getElementById('mini-games').classList.add('dark-theme');
      document.getElementById('mini-games').innerHTML = `<img src="images/mini-games-black.svg" alt="" style="width: 2vh;"/>Мини-игры`;
      document.getElementById('house').innerHTML = `<img src="images/house-black.svg" alt="" style="width: 2vh" />Главная`
      document.getElementById('house').style.color = `snow`;
      document.getElementById('shopping').innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh" />Магазин`
      document.getElementById('shopping').style.color = `snow`;
      document.getElementById('shopping').style.backgroundColor = `#121212`
    } else {
      body.classList.remove('dark-theme');
      document.querySelector('header').classList.remove('dark-theme');
      document.querySelector('nav').classList.remove('dark-theme');
      document.querySelector('.nav-shop').classList.remove('dark-theme');
      document.getElementById('inventory').classList.remove('dark-theme');
      document.querySelector('.main-text').classList.remove('dark-theme');
      document.querySelector('.main-small-text').classList.remove('dark-theme');
      document.querySelectorAll('.case-text').forEach(element => {element.classList.remove('dark-theme');});
      document.querySelectorAll('.grid-item').forEach(element => {element.classList.remove('dark-theme');});
      document.querySelectorAll('hr').forEach(element => {element.classList.remove('dark-theme');});
      document.querySelectorAll('hr').forEach(element => {element.classList.add('light-theme');});
      document.querySelector('.aside').classList.remove('dark-theme');
      document.querySelectorAll('li').forEach(element => {element.style.color = '#000';});
      document.querySelectorAll('.btn-opn').forEach(element => {element.classList.remove('dark-theme');});
      document.querySelectorAll('p').forEach(element => {element.style.color = '#000';});
      document.querySelector('.nav-shop').innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh" />Магазин`;
      document.getElementById('inventory').innerHTML = `<img src="images/card_black.svg" alt="" style="width: 2vh;"/>Инвентарь`;
      document.querySelector('.nav-balance').innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
      style?.remove();
      document.getElementById('craft').innerHTML = `<img src="images/craft.svg" alt="" style="width: 2vh;"/>Крафт`
      document.getElementById('craft').style.backgroundColor = `#fff`
      document.getElementById('craft').style.color = `#000`
      inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
      <div class="inventory-col-vo">${inventory.length}</div>`;
      document.getElementById('mini-games').classList.remove('dark-theme');
      document.getElementById('mini-games').innerHTML = `<img src="images/mini-games.svg" alt="" style="width: 2vh;"/>Мини-игры`;
      document.getElementById('house').innerHTML = `<img src="images/house.svg" alt="" style="width: 2vh" />Главная`
      document.getElementById('house').style.color = `#121212`;
      document.getElementById('shopping').innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh" />Магазин`
      document.getElementById('shopping').style.color = `#121212`;
      document.getElementById('shopping').style.backgroundColor = `white`
    }
  });
