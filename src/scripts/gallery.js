import { set } from "lodash";

export default function() {
  const dishes = [...document.querySelectorAll(".specialties__info")];
  const buttons = [...document.querySelectorAll(".specialties__button")];

  function changeDish(event) {
    event.preventDefault();

    for(const dish of dishes) {
      dish.className = "specialties__info specialties__info--hidden";
    }

    const activeDishIndex = event.target.dataset.index;
    const activeDish = dishes.find(dish => dish.dataset.index === activeDishIndex);

    activeDish.classList.remove("specialties__info--hidden");

    for(const button of buttons) {
      button.className = "specialties__button";
    }

    event.target.classList.add("specialties__button--active");
  }

  for(const button of buttons) {
    button.addEventListener('click', changeDish);
  };
}