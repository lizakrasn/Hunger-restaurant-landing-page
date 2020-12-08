import { gsap } from "gsap";

export default function animateText(element) {

  const chars = element.innerText.split('').map((char, i) => {
    const span = document.createElement("div");
    span.innerText = char;
    span.style.display = 'inline-block';
    return span;
  })

  element.innerHTML = '';

  chars.forEach(c => element.append(c));

  const timeline = gsap.timeline({paused: true});

  for(const letter of chars) {
    timeline.to(letter, {
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      ease: "expo",
      rotation: Math.random() * 360,
      duration: 0.5,
    }, 0);
  }

  element.addEventListener("mouseenter", () => {
    timeline.play()
  })
  element.addEventListener("mouseleave", () => timeline.reverse())
}