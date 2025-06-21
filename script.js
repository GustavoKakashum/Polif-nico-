// Efeito sonoro ao clicar em qualquer botão
const buttons = document.querySelectorAll('button, a.btn');
const clickSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.wav');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
