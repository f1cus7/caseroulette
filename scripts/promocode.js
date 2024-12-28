const prominp = document.querySelector(".promocode-input");
const balanceNode = document.querySelector(".nav-balance");
const themeToggle = document.getElementById("theme-toggle");
const getButton = document.querySelector(".promocodes-btn");

import { getBalance } from "./index.js";
import { setBalance } from "./index.js";

const date = new Date();
const promo = [
  `новыйдень${date.getDate()}`,
  `новыймесяц${date.getMonth() + 1}`,
  `новыйгод${date.getFullYear()}`,
  `фикускрутой`,
  `сигмабой`,
  `щавель`,
  `персик`,
  `ракушка`,
  `линанайкпро`,
  `скуф`,
  `дота2`,
  `путин`,
  `дота`,
  `альтушка`,
  `нормис`,
  `палитра`,
  `гитара`,
  `босскфс`,
  `пикми`,
  `докс`,
  `плаки-плаки`,
  `плакиплаки`,
  `Фары слепят`,
  `Трансформер`,
  `Убежище`,
  `боссхудожки`,
  `шобщительная`,
  `ш-общительная`,
  `чезабретто`,
  `сигма`,
  `квадробер`,
];

// Массив для хранения использованных промокодов
let usedPromocodes = [];

export function promocode() {
  const promocodeInput = prominp.value.toLowerCase().replace(/\s/g, '');

  // Проверяем на пустое значение и некорректный ввод
  if (!promocodeInput) {
    prominp.placeholder = "Промокод не пуст.";
    return;
  }

  // Проверка, был ли уже использован данный промокод
  if (usedPromocodes.includes(promocodeInput)) {
    prominp.value = "";
    prominp.placeholder = "Промокод уже использован.";
    return;
  }

  if (promo.includes(promocodeInput)) { // Проверяем, если введенный код есть в списке
    let newBalance = getBalance() + 5000;
    setBalance(newBalance);

    if (themeToggle.checked) {
      balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${newBalance.toFixed(2)} руб.`;
    } else {
      balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${newBalance.toFixed(2)} руб.`;
    }

    usedPromocodes.push(promocodeInput);

    prominp.value = ``;
    prominp.placeholder = `Промокод`
  } else {
    prominp.value = ``;
    prominp.placeholder = "Неверный промокод.";
  }
}

prominp.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      getButton.click();
    }
  });