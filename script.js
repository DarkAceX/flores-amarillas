function mostrarFlor() {
  const flor = document.getElementById('girasol');
  flor.hidden = false;
  iniciarCorazones();
}

function iniciarCorazones() {
  const emojis = ["❤️", "🌻"];
  const particleContainer = document.getElementById("particles");

  setInterval(() => {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (Math.random() * 2 + 3) + "s";
    particleContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 6000);
  }, 300);
}
