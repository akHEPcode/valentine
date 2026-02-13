// Romantic floating emojis
const emojis = ["💖", "✨", "🌹", "💞"];

function createFloating() {
  const el = document.createElement("div");
  el.classList.add("floating");
  el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

setInterval(createFloating, 1200);

// YES Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "A❤️S";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 25 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

function startHearts() {
  setInterval(createHeart, 500);
}

// Moving NO button
function moveNoButton() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
}

// Background music autoplay after first click
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) music.play();
});
