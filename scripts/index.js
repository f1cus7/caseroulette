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
const rareWeapons = {
    arm: '80',
    zap: '16',
    zas: '3.1',
    tai: '0.64',
    knife: '0.26'
}




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
const getRandomSkin = (arr, chances) => {
    // Преобразуем шансы в числа и нормализуем их
    const numericChances = Object.fromEntries(
        Object.entries(chances).map(([key, value]) => [key, parseFloat(value)])
    );

    // Нормализуем шансы, чтобы сумма была 1
    const totalChance = Object.values(numericChances).reduce((sum, chance) => sum + chance, 0);
    const normalizedChances = Object.fromEntries(
        Object.entries(numericChances).map(([key, value]) => [key, value / totalChance])
    );

    // Генерируем случайное число от 0 до 1
    const rand = Math.random();

    let cumulative = 0;
    let selectedRare = null;

    // Определяем редкость на основе нормализованных шансов
    for (const rare in normalizedChances) {
        cumulative += normalizedChances[rare];
        if (rand <= cumulative) {
            selectedRare = rare;
            break;
  
        }
    }



    // Если по какой-то причине редкость не определилась
    if (!selectedRare) {
        console.error('Ошибка: не удалось определить редкость скина');
        return null;
    }

    // Отбираем только те скины, которые соответствуют выбранной редкости
    const filteredSkins = arr.filter(skin => skin.rare === selectedRare);

    // Выбираем случайный скин из выбранных
    const chosenSkin = filteredSkins[Math.floor(Math.random() * filteredSkins.length)];

    // Генерация случайной стоимости
    const price = getRandomNumber(chosenSkin.minCost, chosenSkin.maxCost);



    return { ...chosenSkin, price };
};



const createModal = (skin, index, caseNumber) => {
    // Удаляем старое модальное окно, если оно существует
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    // Создаем новое модальное окно
    const modal = document.createElement('div');
    modal.className = 'modal';

    // Формируем путь к картинке с учетом номера кейса
    const imagePath = `images/${caseNumber}_${index + 1}.png`;  // caseNumber - номер кейса (1, 2, или 3)

    // Контент модального окна
    modal.innerHTML = `
        <h2>Вам выпал предмет!</h2>
        <img src="${imagePath}" alt="${skin.name}" style="width: 80%; border-radius: 8px; margin: 10px 0;">
        <p><strong>${skin.name}</strong></p>
        <p>Редкость: <span>${skin.rare}</span></p>
        <p>Стоимость: <span>${skin.price} ₽</span></p>
        <button class="close-modal" style="margin-top: 20px; padding: 10px 20px; background: #007BFF; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
    `;

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


    if (skin.rare === 'arm' ) {
        staticArmCase++;
        staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr>`;
    } else if (skin.rare === 'zap' ) {
        staticZapCase++;
        staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr>`;
    } else if (skin.rare === 'zas' ) {
        staticZasCase++;
        staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr>`;
    } else if (skin.rare === 'tai' ) {
        staticTaiCase++;
        staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr>`;
    } else if (skin.rare === 'knife' ) {
        staticKnifeCase++;
        staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr>`;
    }

    inventory.push({name: skin.name, rare: skin.rare, price: skin.price, image: `images/${caseNumber}_${index + 1}.png`});
    
};




// Открытие кейса 1
btnOpenCaseOne.addEventListener('click', () => {
    // Проверяем, хватает ли баланса
    if (balance < 250) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }
    staticOpenCase++
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`
    // Списываем стоимость кейса
    balance -= 250;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    // Выбираем случайный скин
    const randomIndex = Math.floor(Math.random() * caseOneArr.length);
    const randomSkin = { ...caseOneArr[randomIndex], price: getRandomNumber(caseOneArr[randomIndex].minCost, caseOneArr[randomIndex].maxCost) };

    // Показываем модальное окно с информацией о выпавшем скине
    createModal(randomSkin, randomIndex, 1);  // Передаем номер кейса (1 для caseOne)
});





const createModal5x = (skins) => {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.innerHTML = `
        <h2 style="margin-bottom: 1vh;">Вам выпало 5 предметов!</h2>
        <div class="skins-container" style="display: flex; flex-wrap: wrap; gap: 1vw; justify-content: center; width:65vw;"></div>
        <button class="close-modal" style="margin-top: 5vh; padding: 2vh 5vh; background: #007BFF; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
    `;

    const skinsContainer = modal.querySelector('.skins-container');
    skins.forEach((skin) => {
        const skinElement = document.createElement('div');
        skinElement.style = "text-align: center; width: 8vw; border: 1px solid #ccc; border-radius: 8px; padding: 10px;";
        if (skin.rare === 'arm') {
            skinElement.style = "text-align: center; width: 10vw; border: 2px solid rgb(81, 106, 242); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'zap') {
            skinElement.style = "text-align: center; width: 10vw; border: 2px solid rgb(127, 80, 246); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'zas') {
            skinElement.style = "text-align: center; width: 10vw; border: 2px solid rgb(193, 66, 222); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'tai') {
            skinElement.style = "text-align: center; width: 10vw; border: 2px solid rgb(216, 87, 82); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'knife') {
            skinElement.style = "text-align: center; width: 10vw; border: 2px solid rgb(216, 87, 82); border-radius: 8px; padding: 10px;";
        }
        skinElement.innerHTML = `
            <img src="${skin.imagePath}" alt="${skin.name}" style="width: 100%; border-radius: 8px;">
            <p><strong>${skin.name}</strong></p>
            <p>Редкость: <span>${skin.rare}</span></p>
            <p>Стоимость: <span>${skin.price} ₽</span></p>
        `;



        skinsContainer.appendChild(skinElement);

        if (skin.rare === 'arm' ) {
            staticArmCase++;
            staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr>`;
        } else if (skin.rare === 'zap' ) {
            staticZapCase++;
            staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr>`;
        } else if (skin.rare === 'zas' ) {
            staticZasCase++;
            staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr>`;
        } else if (skin.rare === 'tai' ) {
            staticTaiCase++;
            staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr>`;
        } else if (skin.rare === 'knife' ) {
            staticKnifeCase++;
            staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr>`;
        }
    });

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
};

// Открытие кейса 1 5x
btnOpenCaseOne5x.addEventListener('click', () => {
    if (balance < 1250) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 5;
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;

    balance -= 1250;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    const skins = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * caseOneArr.length);
        const randomSkin = {
            ...caseOneArr[randomIndex],
            price: getRandomNumber(caseOneArr[randomIndex].minCost, caseOneArr[randomIndex].maxCost)
        };

        // Добавляем данные для модального окна
        skins.push({ ...randomSkin, imagePath: `images/1_${randomIndex + 1}.png` });
        inventory.push({...randomSkin, image: `images/1_${randomIndex + 1}.png`});
        console.log(inventory)
    }

    

    // Показываем модальное окно с 5 скинами
    createModal5x(skins);
});

//открытие кейса 2 5x
btnOpenCaseTwo5x.addEventListener('click', () => {
    if (balance < 1250) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 5;
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;

    balance -= 1250;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    const skins = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * caseTwoArr.length);
        const randomSkin = {
            ...caseTwoArr[randomIndex],
            price: getRandomNumber(caseTwoArr[randomIndex].minCost, caseTwoArr[randomIndex].maxCost)
        };

        // Добавляем данные для модального окна
        skins.push({ ...randomSkin, imagePath: `images/2_${randomIndex + 1}.png` });
        inventory.push({...randomSkin, image: `images/2_${randomIndex + 1}.png`});
        console.log(inventory)
    }

    

    // Показываем модальное окно с 5 скинами
    createModal5x(skins);
});

//открытие кейса 3 5x
btnOpenCaseThree5x.addEventListener('click', () => {
    if (balance < 1250) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 5;
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;

    balance -= 1250;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    const skins = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * caseThreeArr.length);
        const randomSkin = {
            ...caseThreeArr[randomIndex],
            price: getRandomNumber(caseThreeArr[randomIndex].minCost, caseThreeArr[randomIndex].maxCost)
        };

        // Добавляем данные для модального окна
        skins.push({ ...randomSkin, imagePath: `images/3_${randomIndex + 1}.png` });
        inventory.push({...randomSkin, image: `images/3_${randomIndex + 1}.png`});
        console.log(inventory)
    }

    

    // Показываем модальное окно с 5 скинами
    createModal5x(skins);
});

const createModal10x = (skins) => {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.innerHTML = `
        <h2 style="margin-bottom: 1vh;">Вам выпало 10 предметов!</h2>
        <div class="skins-container" style="display: flex; flex-wrap: wrap; gap: 1vw; justify-content: center; width:65vw;"></div>
        <button class="close-modal" style="margin-top: 5vh; padding: 2vh 5vh; background: #007BFF; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
    `;

    const skinsContainer = modal.querySelector('.skins-container');
    skins.forEach((skin) => {
        const skinElement = document.createElement('div');
        skinElement.style = "text-align: center; width: 8vw; border: 1px solid #ccc; border-radius: 8px; padding: 10px;";
        if (skin.rare === 'arm') {
            skinElement.style = "text-align: center; width: 9vw; border: 2px solid rgb(81, 106, 242); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'zap') {
            skinElement.style = "text-align: center; width: 9vw; border: 2px solid rgb(127, 80, 246); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'zas') {
            skinElement.style = "text-align: center; width: 9vw; border: 2px solid rgb(193, 66, 222); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'tai') {
            skinElement.style = "text-align: center; width: 9vw; border: 2px solid rgb(216, 87, 82); border-radius: 8px; padding: 10px;";
        } else if (skin.rare === 'knife') {
            skinElement.style = "text-align: center; width: 9vw; border: 2px solid rgb(216, 87, 82); border-radius: 8px; padding: 10px;";
        }
        skinElement.innerHTML = `
            <img src="${skin.imagePath}" alt="${skin.name}" style="width: 100%; border-radius: 8px;">
            <p><strong>${skin.name}</strong></p>
            <p>Редкость: <span>${skin.rare}</span></p>
            <p>Стоимость: <span>${skin.price} ₽</span></p>
        `;

        skinsContainer.appendChild(skinElement);

        if (skin.rare === 'arm') {
            staticArmCase++;
            staticArmCaseNode.innerHTML = `Выбито армейского качества: ${staticArmCase}<hr>`;
        } else if (skin.rare === 'zap') {
            staticZapCase++;
            staticZapCaseNode.innerHTML = `Выбито запрещенного: ${staticZapCase}<hr>`;
        } else if (skin.rare === 'zas') {
            staticZasCase++;
            staticZasCaseNode.innerHTML = `Выбито засекреченного: ${staticZasCase}<hr>`;
        } else if (skin.rare === 'tai') {
            staticTaiCase++;
            staticTaiCaseNode.innerHTML = `Выбито тайного: ${staticTaiCase}<hr>`;
        } else if (skin.rare === 'knife') {
            staticKnifeCase++;
            staticKnifeCaseNode.innerHTML = `Выбито редкого: ${staticKnifeCase}<hr>`;
        }

        if (staticOpenCase === 100) {
            console.log('eee');
            const ach = document.createElement('div');
            ach.innerHTML = `<div class="achivement">
  <p class="achivement-name">
  Открывальщик!
  </p>
  <p class="achivement-text">
  Открыть 100 кейсов.
  </p>
</div>`
        }
    });

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
};


// Открытие кейса 1 10x
btnOpenCaseOne10x.addEventListener('click', () => {
    if (balance < 2500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 10;
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;

    balance -= 2500;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    const skins = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * caseOneArr.length);
        const randomSkin = {
            ...caseOneArr[randomIndex],
            price: getRandomNumber(caseOneArr[randomIndex].minCost, caseOneArr[randomIndex].maxCost)
        };

        // Добавляем данные для модального окна
        skins.push({ ...randomSkin, imagePath: `images/1_${randomIndex + 1}.png` });
        inventory.push({...randomSkin, image: `images/1_${randomIndex + 1}.png`});
        console.log(inventory)
    }

    

    // Показываем модальное окно с 5 скинами
    createModal10x(skins);
});

// Открытие кейса 3 10x
btnOpenCaseThree10x.addEventListener('click', () => {
    if (balance < 2500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 10;
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;

    balance -= 2500;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    const skins = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * caseThreeArr.length);
        const randomSkin = {
            ...caseThreeArr[randomIndex],
            price: getRandomNumber(caseThreeArr[randomIndex].minCost, caseThreeArr[randomIndex].maxCost)
        };

        // Добавляем данные для модального окна
        skins.push({ ...randomSkin, imagePath: `images/3_${randomIndex + 1}.png` });
        inventory.push({...randomSkin, image: `images/3_${randomIndex + 1}.png`});
        console.log(inventory)
    }

    

    // Показываем модальное окно с 5 скинами
    createModal10x(skins);
});

// Открытие кейса 2 10x
btnOpenCaseTwo10x.addEventListener('click', () => {
    if (balance < 2500) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }

    staticOpenCase += 10;
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`;

    balance -= 2500;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    const skins = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * caseTwoArr.length);
        const randomSkin = {
            ...caseTwoArr[randomIndex],
            price: getRandomNumber(caseTwoArr[randomIndex].minCost, caseTwoArr[randomIndex].maxCost)
        };

        // Добавляем данные для модального окна
        skins.push({ ...randomSkin, imagePath: `images/2_${randomIndex + 1}.png` });
        inventory.push({...randomSkin, image: `images/2_${randomIndex + 1}.png`});
        console.log(inventory)
    }

    

    // Показываем модальное окно с 5 скинами
    createModal10x(skins);
});

// Открытие кейса 2
btnOpenCaseTwo.addEventListener('click', () => {
    // Проверяем, хватает ли баланса
    if (balance < 100) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }
        staticOpenCase++
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`
    // Списываем стоимость кейса
    balance -= 250;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    // Выбираем случайный скин из кейса 2
    const randomIndex = Math.floor(Math.random() * caseTwoArr.length);
    const randomSkin = { ...caseTwoArr[randomIndex], price: getRandomNumber(caseTwoArr[randomIndex].minCost, caseTwoArr[randomIndex].maxCost) };

    // Показываем модальное окно с информацией о выпавшем скине
    createModal(randomSkin, randomIndex, 2);  // Передаем номер кейса (2 для caseTwo)
});

// Открытие кейса 3
btnOpenCaseThree.addEventListener('click', () => {
    // Проверяем, хватает ли баланса
    if (balance < 100) {
        alert('Недостаточно средств для открытия кейса.');
        return;
    }
        staticOpenCase++
    staticOpenCaseNode.innerHTML = `Количество открытых кейсов: ${staticOpenCase}<hr />`
    // Списываем стоимость кейса
    balance -= 250;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance} руб.`;

    // Выбираем случайный скин из кейса 3
    const randomIndex = Math.floor(Math.random() * caseThreeArr.length);
    const randomSkin = { ...caseThreeArr[randomIndex], price: getRandomNumber(caseThreeArr[randomIndex].minCost, caseThreeArr[randomIndex].maxCost) };

    // Показываем модальное окно с информацией о выпавшем скине
    createModal(randomSkin, randomIndex, 3);  // Передаем номер кейса (3 для caseThree)
});


inventoryNode.addEventListener('click', () => {
    // Удаляем старое модальное окно, если оно существует
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'inventory-modal';

    // Создаем контейнер для карточек
    const cardGrid = document.createElement('div');
    cardGrid.className = 'card-grid';

    // Добавляем карточки на основе массива `inventory`
    inventory.forEach(item => {
        const card = document.createElement('div');
        card.className = `card-grid-item ${item.rare}`; // Добавляем класс редкости

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
            <p><strong>${item.name}</strong></p>
            <hr class="hr-card">
            <p class="weapon-cost" style="font-weight: bold; font-size:1vw">${item.price} ₽</p>
        `;

        cardGrid.appendChild(card);
    });

    // Добавляем карточки в модальное окно
    modal.appendChild(cardGrid);

    const closeButton = document.createElement('button');
    closeButton.className = 'btn-opn';
    closeButton.textContent = 'Закрыть';
    closeButton.style.marginTop = '20px';

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

    // Добавляем обработчик нажатия клавиш
    document.addEventListener('keydown', handleEscapeKey);
});


