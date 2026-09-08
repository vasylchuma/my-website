const track = document.getElementById('track');       
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

let current = 0;

const visibleCount = () => window.innerWidth <= 700 ? 1 : 4;
const totalCards = () => track.children.length;       

function maxIndex() {
  return totalCards() - visibleCount();
}

function buildDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i <= maxIndex(); i++) {
    const d = document.createElement('button');
    d.className = 'dot' + (i === current ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
  }
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}

function getCardWidth() {
  const card = track.children[0];
  const gap = parseFloat(window.getComputedStyle(track).gap) || 18;
  return card.getBoundingClientRect().width + gap;
}

function goTo(index) {
  current = Math.max(0, Math.min(index, maxIndex()));
  track.style.transform = `translateX(-${current * getCardWidth()}px)`;
  updateDots();
  prevBtn.style.opacity = current === 0 ? '0.3' : '1';
  nextBtn.style.opacity = current >= maxIndex() ? '0.3' : '1';
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

buildDots();
goTo(0);

window.addEventListener('resize', () => {
  buildDots();
  goTo(Math.min(current, maxIndex()));
});

