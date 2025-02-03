// Navigation
const screens = document.querySelectorAll('.screen');
const startButton = document.getElementById('start-button');
const backButtons = document.querySelectorAll('.back-button');

startButton.addEventListener('click', () => {
  document.getElementById('home').classList.add('hidden');
  document.getElementById('how-we-met').classList.remove('hidden');
});

backButtons.forEach(button => {
  button.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById('home').classList.remove('hidden');
  });
});

// Typewriter Effect for "Why I Love You"
const loveMessage = document.getElementById('love-message');
const messages = [
  "You make me smile every day.",
  "Your kindness inspires me.",
  "I love how you always support me.",
  "You're my best friend and my soulmate."
];
let index = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < messages[index].length) {
    loveMessage.textContent += messages[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    loveMessage.textContent = messages[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % messages.length;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();

// Surprise Button
const surpriseButton = document.getElementById('surprise-button');
const surpriseContent = document.getElementById('surprise-content');

surpriseButton.addEventListener('click', () => {
  surpriseContent.classList.remove('hidden');
  surpriseButton.style.display = 'none';
});
