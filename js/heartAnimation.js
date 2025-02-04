// Heart Animation
function createHearts() {
  const heartContainer = document.querySelector('.heart-container');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    const randomX = Math.random() * 100;
    heart.style.left = `${randomX}%`;
    const delay = Math.random() * 3;
    heart.style.animationDelay = `${delay}s`;
    heartContainer.appendChild(heart);
  }
}

createHearts();