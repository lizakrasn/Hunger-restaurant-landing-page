export default function() {
  const dishItem = `<div class="menu__dish-item dish-item">
<p class="dish-item__name">PIZZA QUATRO STAGIONI . . . . </p>
<p class="dish-item__price">55,68 USD</p>
<p class="dish-item__description"> Integer ullamcorper neque eu purus euismod</p>
</div>`

  const menuDishes = document.querySelector(".menu__dishes");

  for(let i = 0; i < 21; i++) {
    menuDishes.insertAdjacentHTML('beforeend', dishItem)
  }
}