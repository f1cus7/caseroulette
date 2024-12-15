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
const btnOpenCaseTwo5x = document.getElementById('btn-open-case-two-5x');
const btnOpenCaseTwo10x = document.getElementById('btn-open-case-two-10x');
const btnOpenCaseThree5x = document.getElementById('btn-open-case-three-5x');
const btnOpenCaseThree10x = document.getElementById('btn-open-case-three-10x');
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
        minCost: 200000.00,
        maxCost: 200000.00
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
    balance++;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс:
          ${balance} руб.`
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

caseOne.addEventListener(`click`, caseOneStart);
caseTwo.addEventListener(`click`, caseTwoStart);
caseThree.addEventListener(`click`, caseThreeStart);



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
    if (balance < 250) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase++;
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr style='border-color: #d34baf;'>`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;
    }


    // Списываем стоимость кейса
    balance -= 250;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
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
    if (balance < 1250) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 5;
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr style='border-color: #d34baf;'>`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;
    }

    balance -= 1250;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
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
    if (balance < 2500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 10;
    if  (themeToggle.checked) {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr style='border-color: #d34baf;'>`;
    } else {
        staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;
    }

    balance -= 2500;
    if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
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


btnOpenCaseOne.addEventListener('click', () => openCase(caseOneArr, 1));
btnOpenCaseTwo.addEventListener('click', () => openCase(caseTwoArr, 2));
btnOpenCaseThree.addEventListener('click', () => openCase(caseThreeArr, 3));
btnOpenCaseOne5x.addEventListener('click', () => openCase5x(caseOneArr, 1));
btnOpenCaseTwo5x.addEventListener('click', () => openCase5x(caseTwoArr, 2));
btnOpenCaseThree5x.addEventListener('click', () => openCase5x(caseThreeArr, 3));
btnOpenCaseOne10x.addEventListener('click', () => openCase10x(caseOneArr, 1));
btnOpenCaseTwo10x.addEventListener('click', () => openCase10x(caseTwoArr, 2));
btnOpenCaseThree10x.addEventListener('click', () => openCase10x(caseThreeArr, 3));

const createModal = (skin, index, caseNumber) => {
    // Удаляем старое модальное окно, если оно существует
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    // Формируем путь к картинке с учетом номера кейса
    const imagePath = `images/${caseNumber}_${index + 1}.png`;  // caseNumber - номер кейса (1, 2, или 3)


    // Создаем новое модальное окно
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
    // Контент модального окна
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
        document.removeEventListener('keydown', handleEscapeKey); // Удаляем обработчик клавиши
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
            staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'zap' ) {
            staticZapCase++;
            staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'zas' ) {
            staticZasCase++;
            staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'tai' ) {
            staticTaiCase++;
            staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'knife' ) {
            staticKnifeCase++;
            staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr style='border-color: #d34baf;'>`;
        }
    } else {
        if (skin.rare === 'arm' ) {
            staticArmCase++;
            staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'zap' ) {
            staticZapCase++;
            staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'zas' ) {
            staticZasCase++;
            staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'tai' ) {
            staticTaiCase++;
            staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr style='border-color: #d34baf;'>`;
        } else if (skin.rare === 'knife' ) {
            staticKnifeCase++;
            staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr style='border-color: #d34baf;'>`;
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
            modal.innerHTML = `
            <h2 style="margin-bottom: 1vh; color: snow;">Вам выпало ${itemCount} предметов!</h2>
            <div class="skins-container" style="display: flex; flex-wrap: wrap; gap: 1vw; justify-content: center; width:65vw; color: snow"></div>
            <button class="close-modal" style="margin-top: 5vh; padding: 2vh 5vh; background: #d34baf;; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
        `;
        } else {
            modal.className = 'modal';
        // Контент модального окна
        modal.style.backgroundColor = '#fff';
        modal.innerHTML = `
        <h2 style="margin-bottom: 1vh;">Вам выпало ${itemCount} предметов!</h2>
        <div class="skins-container" style="display: flex; flex-wrap: wrap; gap: 1vw; justify-content: center; width:65vw;"></div>
        <button class="close-modal" style="margin-top: 5vh; padding: 2vh 5vh; background: #007BFF; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
    `;
        }



    const skinsContainer = modal.querySelector('.skins-container');
    skins.forEach((skin) => {
        const skinElement = document.createElement('div');
        skinElement.style = `text-align: center; width: ${itemCount === 5 ? '8vw' : '9vw'}; border: 1px solid #ccc; border-radius: 8px; padding: 10px;`;
        
        // Apply different styles based on rarity
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
                staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr style='border-color: #d34baf;' class="statistic-hr">`;
            } else if (skin.rare === 'zap' ) {
                staticZapCase++;
                staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr style='border-color: #d34baf;' class="statistic-hr">`;
            } else if (skin.rare === 'zas' ) {
                staticZasCase++;
                staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr style='border-color: #d34baf;' class="statistic-hr">`;
            } else if (skin.rare === 'tai' ) {
                staticTaiCase++;
                staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr style='border-color: #d34baf;' class="statistic-hr">`;
            } else if (skin.rare === 'knife' ) {
                staticKnifeCase++;
                staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr style='border-color: #d34baf;' class="statistic-hr">`;
            }
        } else {
            if (skin.rare === 'arm' ) {
                staticArmCase++;
                staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr style='border-color: #3399ff;' class="statistic-hr">`;
            } else if (skin.rare === 'zap' ) {
                staticZapCase++;
                staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr style='border-color: #3399ff;' class="statistic-hr">`;
            } else if (skin.rare === 'zas' ) {
                staticZasCase++;
                staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr style='border-color: #3399ff;' class="statistic-hr">`;
            } else if (skin.rare === 'tai' ) {
                staticTaiCase++;
                staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr style='border-color: #3399ff;' class="statistic-hr">`;
            } else if (skin.rare === 'knife' ) {
                staticKnifeCase++;
                staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr style='border-color: #3399ff;' class="statistic-hr">`;
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
    // Удаляем старое модальное окно, если оно существует
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = themeToggle.checked ? 'inventory-modal-black' : 'inventory-modal';



    // Создаем контейнер для карточек
    const cardGrid = document.createElement('div');

    // Добавляем карточки на основе массива `inventory`
    inventory.forEach(item => {
        const card = document.createElement('div');
        card.className = `card-grid-item ${item.rare}`; // Добавляем класс редкости

        if  (themeToggle.checked) {
            cardGrid.className = 'card-grid';
            modal.style.backgroundColor = '#111';
            card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
            <p style="color:snow;"><strong style="color:snow;">${item.name}</strong></p>
            <hr class="hr-card">
            <button class="weapon-cost-inv" style="font-weight: bold; background-color:#6d14b8; border: none; color:snow" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
        `;;
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
    
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
                <p><strong>${item.name}</strong></p>
                <hr class="hr-card">
                <button class="weapon-cost-inv" style="font-weight: bold;" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
            `;
    
            cardGrid.appendChild(card);
        });
    }
    
    
    
    
    



    // Добавляем обработчик нажатия клавиш
    document.addEventListener('keydown', handleEscapeKey);
});

// Добавляем обработчик события на переключатель
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
      document.querySelector('.aside').classList.remove('dark-theme');
      document.querySelectorAll('li').forEach(element => {element.style.color = '#000';});
      document.querySelectorAll('.btn-opn').forEach(element => {element.classList.remove('dark-theme');});
      document.querySelectorAll('p').forEach(element => {element.style.color = '#000';});
      document.querySelector('.nav-shop').innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh" />Магазин`;
      document.getElementById('inventory').innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh;"/>Инвентарь`;
      document.querySelector('.nav-balance').innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;
      style?.remove();
    }
  });
  