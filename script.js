const particles = document.getElementById("particles");

for (let i = 0; i < 55; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.animationDelay = `${Math.random() * 3}s`;
  p.style.animationDuration = `${1.8 + Math.random() * 3.5}s`;
  p.style.opacity = `${0.15 + Math.random() * 0.65}`;
  particles.appendChild(p);
}

// Slight parallax for the pulse graphic.
const visual = document.querySelector(".pulse-visual");
window.addEventListener("mousemove", (e) => {
  if (!visual || window.innerWidth < 901) return;
  const x = (e.clientX / window.innerWidth - .5) * 10;
  const y = (e.clientY / window.innerHeight - .5) * 10;
  visual.style.transform = `translate(${x}px, ${y}px)`;
});
