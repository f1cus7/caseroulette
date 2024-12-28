// Функция для расчета рандома
const getRandomNumber = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
};

// Функция для определения выпавшего редкого предмета
 export const getRandomSkin = (arr) => {


// редкости
const normalizedChances = {
    arm: 0.8000,
    zap: 0.1600,
    zas: 0.0310,
    tai: 0.0064,
  knife: 0.0026
};

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