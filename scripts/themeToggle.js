import { getBalance, inventory } from "./index.js";

export function themeToggleFunc () {
    console.log('qwe')
    const styleId = 'custom-scrollbar';
    const style = document.getElementById(styleId);
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const inventoryNode = document.getElementById('inventory');
  
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
      document.querySelector('.nav-balance').innerHTML = `<img src="images/cash-stack_black.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
  
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
      document.getElementById('promocodes').style.backgroundColor = `#121212`
      document.querySelector('.promocode-input').classList.add('dark-theme');
      document.querySelector('.promocodes-btn').classList.add('dark-theme');
      document.getElementById("img-promo").src = "images/promo-code-black.svg";
      localStorage.setItem('theme', 'dark');

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
      document.getElementById('inventory').innerHTML = `<img src="images/card-black.svg" alt="" style="width: 2vh;"/>Инвентарь`;
      document.querySelector('.nav-balance').innerHTML = `<img src="images/cash-stack.svg" alt="" style="width: 2vh" /> Баланс: ${getBalance().toFixed(2)} руб.`;
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
      document.getElementById('promocodes').style.backgroundColor = `white`
      document.querySelector('.promocode-input').classList.remove('dark-theme');
      document.querySelector('.promocodes-btn').classList.remove('dark-theme');
      document.getElementById("img-promo").src = "images/promo-code.svg";
      localStorage.setItem('theme', 'light');
    }
}
