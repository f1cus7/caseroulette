const themeToggle = document.getElementById('theme-toggle');
const inventoryNode = document.getElementById('inventory');
const balanceNode = document.querySelector('.nav-balance');

import { inventory, getBalance, setBalance } from "./index.js";

export function invFunc () {
  const existingModal = document.querySelector(".modal");
  if (existingModal) existingModal.remove();
  const existingModalBlack = document.querySelector('.modalBlack');
  if (existingModalBlack) existingModalBlack.remove();


  if (inventory.length > 0) {
    const modal = document.createElement("div");
    modal.className = themeToggle.checked
      ? "inventory-modal-black"
      : "inventory-modal";

    const cardGrid = document.createElement("div");

    inventory.forEach((item) => {
      const card = document.createElement("div");
      card.className = `card-grid-item ${item.rare}`;

      if (themeToggle.checked) {
        cardGrid.className = "card-grid";
        modal.style.backgroundColor = "#111";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
            <p style="color:snow;"><strong style="color:snow;">${item.name}</strong></p>
            <hr class="hr-card">
            <button class="weapon-cost-inv" style="font-weight: bold; background-color:#6d14b8; border: none; color:snow" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
        `;
      } else {
        cardGrid.className = "card-grid";
        modal.style.backgroundColor = "#fff";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 8px;">
            <p><strong>${item.name}</strong></p>
            <hr class="hr-card">
            <button class="weapon-cost-inv" style="font-weight: bold;" id="inv-${item.name}">Продать: + ${item.price} ₽</button>
        `;
      }

      cardGrid.appendChild(card);
    });

    // Добавляем карточки в модальное окно
    modal.appendChild(cardGrid);

    const SellButton = document.createElement("button");
    SellButton.className = "btn-opn";
    SellButton.textContent = "Продать всё";
    SellButton.style.marginTop = "20px";
    if (themeToggle.checked) {
      SellButton.style.backgroundColor = "#d34baf";
    }

    modal.appendChild(SellButton);
    document.body.appendChild(modal);

    const closeButton = document.createElement("button");
    closeButton.className = "btn-opn";
    closeButton.textContent = "Закрыть";
    closeButton.style.marginTop = "20px";
    if (themeToggle.checked) {
      closeButton.style.backgroundColor = "#d34baf";
    }
    const closeModal = () => {
      modal.remove();
      document.removeEventListener("keydown", handleEscapeKey); // Удаляем обработчик Escape
    };

    closeButton.addEventListener("click", closeModal);

    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    // Обработчик нажатия клавиши Escape
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    modal.addEventListener("click", (event) => {
      if (event.target.classList.contains("weapon-cost-inv")) {
        // Получаем текст кнопки
        const buttonText = event.target.textContent;

        // Извлекаем цену из текста кнопки
        const priceMatch = buttonText.match(/[\d,\.]+/); // Ищем числовое значение
        if (!priceMatch) return; // Если не нашли цену, завершаем обработчик

        const skinSell = parseFloat(priceMatch[0].replace(",", ".")); // Преобразуем в число
        console.log(`Цена продажи: ${skinSell}`);

        // Ищем объект в массиве inventory по цене
        const skinIndex = inventory.findIndex(
          (skin) => parseFloat(skin.price) === skinSell
        );

        if (skinIndex !== -1) {
          // Удаляем найденный скин из массива
          const soldSkin = inventory.splice(skinIndex, 1)[0]; // Удаляем и сохраняем объект
          console.log("Скин продан:", soldSkin);

          // Обновляем баланс
          setBalance(getBalance() + skinSell);

          if (themeToggle.checked) {
            balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
            inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
                    <div class="inventory-col-vo">${inventory.length}<div>`;
          } else {
            balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
            inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
                    <div class="inventory-col-vo">${inventory.length}<div>`;
          }

          // Обновляем модальное окно
          updateModal();
        } else {
          console.log("Скин с указанной ценой не найден в инвентаре.");
        }
      }
    });

    SellButton.addEventListener(`click`, () => {
      let sum = 0;
      for (let i = 0; i < inventory.length; i++) {
        sum += Number(inventory[i].price);
      }
      setBalance(getBalance() + sum);
      console.log(sum);
      if (themeToggle.checked) {
        balanceNode.innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
      } else {
        balanceNode.innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
      }
      inventory.splice(0, inventory.length);
      updateModal();
      if (themeToggle.checked) {
      inventoryNode.innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}</div>`;
      } else {
        inventoryNode.innerHTML = `<img src="images/cart.svg" alt="" style="width: 2vh"/>Инвентарь
        <div class="inventory-col-vo">${inventory.length}</div>`;
      }
      closeModal();
    });

    // Функция для обновления содержимого модального окна
    function updateModal() {
      // Находим контейнер с карточками
      const cardGrid = modal.querySelector(".card-grid");
      if (!cardGrid) return;

      // Очищаем контейнер от старых карточек
      cardGrid.innerHTML = "";

      // Добавляем новые карточки на основе обновлённого массива inventory
      inventory.forEach((item) => {
        const card = document.createElement("div");
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
    document.addEventListener("keydown", handleEscapeKey);
  }
};
