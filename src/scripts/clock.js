export default function() {
  const clockElement = document.getElementById("clock");

  let state = 13 * 60 + 59;

  const timerId = setInterval(() => {
    state--;

    if (state < 0) {
      clockElement.innerText = "No time left";
      clearInterval(timerId);

      return;
    }

    const time = `Left: ${Math.floor(state / 60)}:${state % 60}`;

    clockElement.innerText = time;
  }, 1000)
}
