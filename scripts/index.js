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
const craftNode = document.getElementById('craft');
const MiniGamesNode = document.getElementById('mini-games');


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
});


// const craftModal = (skin) => {
//     // Удаляем старое модальное окно, если оно существует
//     const existingModal = document.querySelector('.modal');
//     if (existingModal) existingModal.remove();

//     // Создаем новое модальное окно
//     const modal = document.createElement('div');

//     if (themeToggle.checked) {
//         modal.className = 'modalBlack craft-black';
//         modal.style.backgroundColor = '#111';

//         modal.innerHTML = `
//             <div>
//                 <div class="craft-grid-parent">
//                     <div class="craft-grid-child" id="craft-grid-child-1"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-2"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-3"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-4"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-5"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-6"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-7"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-8"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-9"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-10"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-11"><div class="craft-text">Крафт</div></div>
//                     <div class="craft-grid-child" id="craft-grid-child-12"><img src="images/right-black.svg" class=right-black-img><br><button class="btn-opn dark-theme" id="start-craft">Жми!</button></div>
//                     <div class="craft-grid-child" id="craft-grid-child-13"></div>
//                     <div class="craft-grid-child" id="craft-grid-child-14"><div class="craft-text"></div></div>
//                 </div>
//             </div>
//         `;

//         // Добавляем модальное окно в DOM
//         document.body.appendChild(modal);

//         // Находим контейнер после добавления модального окна в DOM
//         const container = document.getElementById('craft-grid-child-1');

//         let inventoryIndexUsed = [];

//         // Перебираем inventory, чтобы добавить изображения и цены
//         inventory.forEach((item, index) => {
//             // Создаем контейнер для каждого элемента
//             const itemDiv = document.createElement('div');
    
//             // Присваиваем уникальный id каждому div
//             itemDiv.id = `item-${index}`;  // Используем индекс для уникального id
//             itemDiv.className = `inventory-items-for-craft`

//             // Создаем элементы для изображения и цены
//             const img = document.createElement('img');
//             const price = document.createElement('p');
    
//             // Устанавливаем данные для изображения и цены
//             img.src = item.image;  // Используем свойство image из объекта
//             price.textContent = `Цена: ${item.price} ₽`;  // Устанавливаем цену как текст
    
//             img.alt = item.name;    // Используем свойство name для alt
//             img.style.width = '70%';
//             img.style.margin = '10px auto';
//             price.style.margin = '10px auto';

//             // Добавляем логику для изменения цвета границы в зависимости от rare
//             let borderColor = 'gray';  // Значение по умолчанию для common или неизвестных rare
    
//             // Логика для установки цвета границы в зависимости от редкости (rare)
//             if (item.rare === 'arm') {
//                 borderColor = 'rgb(81, 106, 242)';  // Общая редкость
//             } else if (item.rare === 'zap') {
//                 borderColor = 'rgb(127, 80, 246)';  // Необычная редкость
//             } else if (item.rare === 'zas') {
//                 borderColor = 'rgb(193, 66, 222)';   // Редкая
//             } else if (item.rare === 'tai') {
//                 borderColor = 'rgb(216, 87, 82)'; // Эпическая
//             } else if (item.rare === 'knife') {
//                 borderColor = 'rgb(216, 87, 82)'; // Легендарная
//             } else {
//                 borderColor = 'black';  // По умолчанию для нераспознанных значений
//             }

//             // Устанавливаем стиль для контейнера, добавляем border
//             itemDiv.style.border = `2px solid ${borderColor}`;
//             itemDiv.style.borderRadius = '8px';  // Опционально, чтобы границы были скругленные
//             itemDiv.style.margin = `0vh`
//             itemDiv.style.width = `8vw`
//             itemDiv.style.height = `8vw`

//             // Добавляем изображение и цену в контейнер div
//             itemDiv.appendChild(img);
//             itemDiv.appendChild(price);
    
//             // Добавляем весь div в основной контейнер
//             container.appendChild(itemDiv);
//         });

//         let currentContainerIndex = 0;

//         const items = document.querySelectorAll('.inventory-items-for-craft');

//         console.log(`Найдено ${items.length} элементов.`);

//         let totalSum = 0;

//         // Добавляем обработчик клика для каждого элемента
//         items.forEach(item => {
//             item.addEventListener('click', () => {
//                 const container1 = document.getElementById('craft-grid-child-1');

//                 const targetContainers = [
//                     document.getElementById('craft-grid-child-2'),
//                     document.getElementById('craft-grid-child-3'),
//                     document.getElementById('craft-grid-child-4'),
//                     document.getElementById('craft-grid-child-5'),
//                     document.getElementById('craft-grid-child-6'),
//                     document.getElementById('craft-grid-child-7'),
//                     document.getElementById('craft-grid-child-8'),
//                     document.getElementById('craft-grid-child-9'),
//                     document.getElementById('craft-grid-child-10')
//                 ];

//                 // Если текущий контейнер не пуст, перемещаем элемент в следующий контейнер
//                 if (currentContainerIndex < targetContainers.length) {
//                     const selectedContainer = targetContainers[currentContainerIndex];

//                     // Клонируем элемент, чтобы сохранить оригинальный в первом контейнере
//                     const itemClone = item.cloneNode(true);

//                     // Добавляем клон в выбранный контейнер
//                     selectedContainer.appendChild(itemClone);

//                     // Удаляем оригинальный элемент из первого контейнера
//                     container1.removeChild(item);

//                     // Увеличиваем индекс для следующего контейнера
//                     currentContainerIndex++;


//                     const price = parseFloat(item.querySelector('p').textContent.replace('Цена: ', '').replace(' ₽', ''));  // Получаем цену скина
//                     totalSum += Math.round(price);  // Добавляем цену скина к общей сумме


//                     // Логирование
//                     console.log(`Элемент с id ${item.id} перемещён в контейнер ${selectedContainer.id}`);
//                     if (currentContainerIndex === 9) {
//                         document.getElementById("craft-grid-child-11").innerHTML= `<div class="craft-text" style="font-size: 1.8vh">Общая сумма скинов: ${totalSum}<br>
//                         Может выпать скин на сумму от: ${totalSum / 2} до ${totalSum * 1.5}</div>`
//                     } else {
                        
//                     }
//                 } else {
//                     console.log('Все контейнеры заняты, элемент не может быть перемещён.');
//                 }
                
//     document.getElementById('start-craft').addEventListener(`click`, () => {
//         if (currentContainerIndex < 9) {
//             alert (`Осталось добавить ${9 - currentContainerIndex} скинов!`)
//         } else {
//             const morsum = Math.round(getRandomNumber(totalSum/2, totalSum * 1.5))
//             document.getElementById('craft-grid-child-13').innerHTML = `<img src="images/craft-skin.png" class="img-craft-drop">`;
//             document.getElementById('craft-grid-child-14').innerHTML = `<div class="craft-text" style="font-size: 1.8vh; margin-top: 5vh">Его цена: ${morsum}</div>`;
//             inventory.push({name: 'morgen', rare: 'knife', price: morsum, image: `images/craft-skin.png`});
//         }
//     })

//             });

//         });
//     } else {
//         modal.className = 'modal craft-white';
//         modal.style.backgroundColor = '#fff';

//         // Место для контента, если тема не включена (например, если themeToggle.checked === false)
//         modal.innerHTML = `
//             <p>Контент для светлой темы</p>
//         `;
//         document.body.appendChild(modal);
//     }


//     console.log(skin);

//     document.body.appendChild(modal);

//     const closeModal = () => {
//         modal.remove();
//         document.removeEventListener('keydown', handleEscapeKey); // Удаляем обработчик клавиши
//     };

//     const handleEscapeKey = (event) => {
//         if (event.key === 'Escape') {
//             closeModal();
//         }
//     };

//     document.addEventListener('keydown', handleEscapeKey);

//     // modal.querySelector('.close-modal').addEventListener('click', closeModal);
// }
// craftNode.addEventListener('click', () => craftModal(inventory));


// Добавляем обработчик события на переключатель

MiniGamesNode.addEventListener(`click`, () => {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();
    // Создаем новое модальное окно
    const modal = document.createElement('div');

    if (themeToggle.checked) {
        modal.className = 'modalBlack craft-black';
        modal.style.backgroundColor = '#111';

        modal.innerHTML = `<div>privet<div>`;
    } else {
        modal.className = 'modal modalMinigames ';
        modal.style.backgroundColor = 'white';



        modal.innerHTML = `
        <div style="font-size: 4vh; display:flex; justify-content:center">Мини-игры</div>
        <div class="nvuti-game">
            <div style="font-size: 3vh">NVUTI</div>
            <div class="parent-nvuti-grid">
                <div class="child-nvuti-grid-1">
                    <p style="text-align:left; margin-left: 2vw">Сумма</p>
                    <input type="number" placeholder="10" id="nvuti-input-sum" min="10">
                    <hr style="border-color: grey; width: 70%; margin: 1vh auto 0px">
                </div>
                <div class="child-nvuti-grid-2">
                    <button class="sum-up nvuti-buttons">Удвоить</button>
                    <button class="sum-half nvuti-buttons">Половина</button><br>
                    <button class="sum-max nvuti-buttons">Макс</button>
                    <button class="sum-min nvuti-buttons">Мин</button>
                </div>
                <div class="child-nvuti-grid-3">
                    <p style="text-align:left; margin-left: 2vw">Процент</p>
                    <input type="number" placeholder="50" id="nvuti-input-procent" min="1" max="100">
                    <hr style="border-color: grey; width: 70%; margin: 1vh auto 0px">
                </div>
                <div class="child-nvuti-grid-4">
                    <button class="procent-up nvuti-buttons">Удвоить</button>
                    <button class="procent-half nvuti-buttons">Половина</button><br>
                    <button class="procent-max nvuti-buttons">Макс</button>
                    <button class="procent-min nvuti-buttons">Мин</button>
                </div>
                <div class="child-nvuti-grid-5">
                    <p id=possible-gain>0.00</p>
                    <p class=possible-gain-text>Возможный выигрыш<p>
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
        <div class="roulette">q</div>
        <div class="nvuti-game">q</div>
        <div class="roulette">q</div>
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
        
        } else { console.error(`Слил`) }
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
    }
  });
