const balanceNode = document.querySelector('.nav-balance');
const caseOne = document.getElementById('case-one');
const caseTwo = document.getElementById('case-two');
const caseThree = document.getElementById('case-three');
const btnOpenCaseOne = document.getElementById('btn-open-case-one');
const btnOpenCaseTwo = document.getElementById('btn-open-case-two');
const btnOpenCaseThree = document.getElementById('btn-open-case-three');
const btnOpenCaseOne5x = document.getElementById('btn-open-case-one-5x');
const btnOpenCaseOne10x = document.getElementById('btn-open-case-one-10x');
const btnOpenCaseOne100x = document.getElementById('btn-open-case-one-100x');
const btnOpenCaseTwo5x = document.getElementById('btn-open-case-two-5x');
const btnOpenCaseTwo10x = document.getElementById('btn-open-case-two-10x');
const btnOpenCaseTwo100x = document.getElementById('btn-open-case-two-100x');
const btnOpenCaseThree5x = document.getElementById('btn-open-case-three-5x');
const btnOpenCaseThree10x = document.getElementById('btn-open-case-three-10x');
const btnOpenCaseThree100x = document.getElementById('btn-open-case-three-100x');
const promocodeBtn = document.querySelector('.promocodes-btn');
const inventoryNode = document.getElementById('inventory');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const craftNode = document.getElementById('craft');
const MiniGamesNode = document.getElementById('mini-games');
const home = document.getElementById('house');

import { caseOneArr, caseTwoArr, caseThreeArr } from './module.js';
import { caseOneStart, caseTwoStart, caseThreeStart, homeFunc } from './homePage.js';
import {openCase, openCase5x, openCase10x, openCase100x} from './openCase.js';
import { invFunc } from './inventory.js';
import { themeToggleFunc } from './themeToggle.js';
import { promocode } from './promocode.js';

export let inventory = [];
export const getBalance = () => balance;
export const setBalance = (newBalance) => { balance = newBalance; };
export const getStaticOpenCase = () => staticOpenCase;
export const incrementStaticOpenCase = () => { staticOpenCase++; };
export const incrementStaticOpenCase5x = () => { staticOpenCase += 5; };
export const incrementStaticOpenCase10x = () => { staticOpenCase += 10; };
export const incrementStaticOpenCase100x = () => { staticOpenCase += 100; };


// фича
balanceNode.addEventListener(`click`, () => {
    balance += 5;
        if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${balance.toFixed(2)} руб.`;
    };
})

const getRandomNumber = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
};

let balance = 25000;
let staticOpenCase = 0;



caseOne.addEventListener(`click`, caseOneStart);
caseTwo.addEventListener(`click`, caseTwoStart);
caseThree.addEventListener(`click`, caseThreeStart);
home.addEventListener(`click`, homeFunc);
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
inventoryNode.addEventListener('click', invFunc);
themeToggle.addEventListener('change', themeToggleFunc);
promocodeBtn.addEventListener('click', promocode);


// Добавляем обработчик события нажатия клавиши "L"
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'l') {  // Если нажата клавиша L (независимо от регистра)
    themeToggle.checked = !themeToggle.checked;  // Переключаем состояние
    themeToggleFunc();  // Вызываем функцию переключения темы
  }
});


MiniGamesNode.addEventListener(`click`, () => {

    MiniGamesNode.setAttribute('disabled', '');

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
                    <div class="run-numbers">1.00x</div>
                    <img src="images/run.gif" class="run-gif" />
                    <div class="run-line"></div>
        </div>
        <div class="bet-run">
            <div class="run-balance">
                <button class="run-btn" id="run-plus" style="background-color: #121212">+</button>
                <input type="number" class="run-input-sum" placeholder="10.00" value="10.00"  style="background-color: #121212; color: snow"/>
                <button class="run-btn" id="run-minus"  style="background-color: #121212">-</button>
            </div>
            <div class="run-balance-btn">
                <button class="run-btn-stavka" id="zerofive"  style="background-color: #121212">1/2</button>
                <button class="run-btn-stavka" id="all-in" style="width: 4vw; height: 3vh; background-color: #121212" >ALL IN</button>
                <button class="run-btn-stavka" id="twox"  style="background-color: #121212">x2</button>
            </div>
            <p class="auto-run-text">авто-вывод</p>
            <div class="run-balance-qwe">
                <div style="display: flex;  border-bottom: 1px solid #af4eff">
                    <p style="color: #121212; font-size: 1vw; margin-left: 0.5vw; color: snow">X</p>
                    <input  class="stavka-run" placeholder="1.2" maxlength="4" style="padding-left:0.5vw; background-color: #121212; color: snow" min="1" id="run-auto-vivod" />
                </div>
                <button class="run-btn-stavka" id="run-onexone" style="background-color: #121212">1.1X</button>
                <button class="run-btn-stavka" id="run-onextwo" style="background-color: #121212">1.2X</button>
                <button class="run-btn-stavka" id="run-onexfive" style="background-color: #121212">1.5X</button>
                <button class="run-btn-stavka" id="run-two" style="background-color: #121212">2X</button>
            </div>
            <div class="run-div-start">
            <button class="start-run" style="background-color: #121212">Сделать ставку</button>
            <button class="take-run">Забрать</button>
            </div>
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
                    <img src="images/run.gif" class="run-gif" />
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
const runGif = document.querySelector('.run-gif');
   
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
    if (runInputSum.value >= 10.00 && runInputSum.value <= balance) {
    document.querySelector('.run-input-sum').setAttribute('disabled', 'true');
    let min = 1;
    let max = 10;
    let rand = (Math.random() ** 4) * (max - min) + min;
    console.log(rand.toFixed(2));        
    x = 1.0;
    let line = 1;
    let gif = -26;
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
        line += 0.03;
        gif += 0.06;
        document.querySelector('.run-line').style.width = `${line}vw`;
        runGif.style.marginLeft = `${gif}vw`
        document.querySelector('.run-numbers').innerHTML = `${x.toFixed(2)}x`;
        if (Math.round(x * 100) / 100 === Math.round(rand * 100) / 100) {
            clearInterval(interval);
            document.querySelector('.run-numbers').style.color = `red`;
            startRun.style.display = `inline-block`;
            takeRun.style.display = `none`;
            document.querySelector('.run-line').style.backgroundColor = `red`;
            document.querySelector('.run-input-sum').removeAttribute('disabled');
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
            document.querySelector('.run-input-sum').removeAttribute('disabled');

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
    document.querySelector('.run-input-sum').removeAttribute('disabled');
})























    const closeModal = () => {
        modal.remove();
        document.removeEventListener('keydown', handleEscapeKey); // Удаляем обработчик клавиши
        document.querySelector('.theme-switcher').style.display = 'inline-flex';
        MiniGamesNode.removeAttribute('disabled', '');
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();

        }
    };

    document.addEventListener('keydown', handleEscapeKey);

}
);