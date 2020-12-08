export default function addBurgerAutoClose() {
  const checkbox = document.getElementById('navigation-toggler');

  if (!checkbox) {
    console.log("Not found");

    return
  }

  const links = document.querySelectorAll(".navigation__item-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      checkbox.checked = false;
    });
  })
}