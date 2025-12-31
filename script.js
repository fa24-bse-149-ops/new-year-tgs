gsap.registerPlugin(ScrollTrigger);

/* HERO ENTRANCE */
gsap.from(".school-logo", {
  scale: 0,
  opacity: 0,
  duration: 1.3,
  ease: "back.out(1.7)"
});

gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1.5
});

/* SCROLL REVEALS */
gsap.utils.toArray(".reveal").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
});

/* COUNTERS */
document.querySelectorAll(".counter").forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const value = +counter.innerText;
    const inc = target / 80;
    if (value < target) {
      counter.innerText = Math.ceil(value + inc);
      setTimeout(update, 25);
    } else {
      counter.innerText = target;
    }
  };

  ScrollTrigger.create({
    trigger: counter,
    start: "top 80%",
    onEnter: update
  });
});

/* MUSIC */
document.getElementById("playMusic").onclick = () => {
  document.getElementById("bgMusic").play();
};

/* PARTICLES */
const pCanvas = document.getElementById("particles");
const pCtx = pCanvas.getContext("2d");
pCanvas.width = innerWidth;
pCanvas.height = innerHeight;

const particles = Array.from({ length: 70 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: Math.random() * 2 + 1,
  s: Math.random() * 0.6 + 0.2
}));

function animateParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  particles.forEach(p => {
    p.y -= p.s;
    if (p.y < 0) p.y = innerHeight;
    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pCtx.fillStyle = "rgba(255,215,0,0.6)";
    pCtx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* FIREWORKS (2026 TRIGGER) */
const fw = document.getElementById("fireworks");
const fctx = fw.getContext("2d");
fw.width = innerWidth;
fw.height = innerHeight;

function fireworks() {
  fctx.clearRect(0, 0, fw.width, fw.height);
  for (let i = 0; i < 120; i++) {
    fctx.beginPath();
    fctx.arc(Math.random()*fw.width, Math.random()*fw.height, 2, 0, Math.PI*2);
    fctx.fillStyle = "gold";
    fctx.fill();
  }
}

if (new Date().getFullYear() >= 2026) {
  setInterval(fireworks, 900);
}
