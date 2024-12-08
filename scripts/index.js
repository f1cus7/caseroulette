const caseOne = document.getElementById('case-one');
const caseTwo = document.getElementById('case-two');
const caseThree = document.getElementById('case-three');
const changeText = document.querySelector('.change-text');
const balanceNode = document.querySelector('.nav-balance');
const caseOneOpen = document.querySelector('.case-one-open');
const caseTwoOpen = document.querySelector('.case-two-open');
const caseThreeOpen = document.querySelector('.case-three-open');
const btnOpenCaseOne = document.getElementById('btn-open-case-one');
const btnOpenCaseTwo = document.getElementById('btn-open-case-two');
const btnOpenCaseThree = document.getElementById('btn-open-case-three');
const staticOpenCaseNode = document.getElementById('static-open-case');

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
        minCost: 69204.92,
        maxCost: 48990.19
    }
];

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
        name: 'M4A1-S | Чёрный лотос',
        rare: 'zas',
        minCost: 1079.05,
        maxCost: 7323.54
    },
    {
        name: 'USP-S | Зубоскал',
        rare: 'zas',
        minCost: 683.44,
        maxCost: 5767.50
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
        name: 'Dual Berettas | Плод воображения',
        rare: 'zas',
        minCost: 105.77,
        maxCost: 7323.54
    },
    {
        name: 'FAMAS | Быстрые движения глаз',
        rare: 'zas',
        minCost: 102.72,
        maxCost: 5767.50
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



const rareWeapons = {
    arm: '80',
    zap: '16',
    zas: '3.1',
    tai: '0.64',
    knife: '0.26'
}





balanceNode.addEventListener(`click`, () => {
    balance++;
    balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс:
          ${balance} руб.`
})
let balance = 10000;
let staticOpenCase = 0;
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



// Функция для расчета случайного числа в заданном диапазоне
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

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
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
