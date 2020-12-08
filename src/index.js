import "./styles/main.scss";
import generateDishItem from "./scripts/generateDishItems";
import clock from "./scripts/clock";
import animateText from "./scripts/animateText";
import addBurgerAutoClose from "./scripts/closeBurgerMenu";
import submitForm from "./scripts/submitForm";
import slider from "./scripts/gallery";

generateDishItem();
clock();
addBurgerAutoClose();
submitForm();
sloder();

const navigationItems = document.querySelectorAll('.navigation__item-link')
navigationItems.forEach(navigationItem => animateText(navigationItem));
