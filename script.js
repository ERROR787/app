// Navigation Logic
const screens = document.querySelectorAll('.screen');
const startButton = document.getElementById('start-button');
const backButtons = document.querySelectorAll('.back-button');
const nextButtons = document.querySelectorAll('.next-button');

// Show the first screen (Home)
document.getElementById('home').classList.remove('hidden');

// Start Button
startButton.addEventListener('click', () => {
  showScreen('how-we-met');
});

// Back Buttons
backButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentScreen = button.closest('.screen');
    const currentId = currentScreen.id;
    let previousScreenId;

    switch (currentId) {
      case 'how-we-met':
        previousScreenId = 'home';
        break;
      case 'memories':
        previousScreenId = 'how-we-met';
        break;
      case 'why-i-love-you':
        previousScreenId = 'memories';
        break;
      case 'surprise':
        previousScreenId = 'why-i-love-you';
        break;
      default:
        previousScreenId = 'home';
    }

    showScreen(previousScreenId);
  });
});

// Next Buttons
nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentScreen = button.closest('.screen');
    const currentId = currentScreen.id;
    let nextScreenId;

    switch (currentId) {
      case 'how-we-met':
        nextScreenId = 'memories';
        break;
      case 'memories':
        nextScreenId = 'why-i-love-you';
        break;
      case 'why-i-love-you':
        nextScreenId = 'surprise';
        break;
      default:
        nextScreenId = 'home';
    }

    showScreen(nextScreenId);
  });
});

// Helper Function to Show Screens
function showScreen(screenId) {
  screens.forEach(screen => screen.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

// Typewriter Effect for "Why I Love You"
const loveMessage = document.getElementById('love-message');
const messages = [
  "There are a million reasons why I love you, but if I had to put it into words, it would be because you make my world brighter just by being in it.",
  "I love the way you understand me without me having to say a word, and how you make me feel safe and cherished just by being you. You’re my calm in the chaos, my joy in the ordinary, and my favorite part of every day.",
  "I love you for who you are, for who you help me become, and for the beautiful future we’re building together.",
  "You're my best friend and my soulmate, You’re my everything, and I’m so grateful to have you in my life."
];
let index = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < messages[index].length) {
    loveMessage.textContent += messages[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    loveMessage.textContent = messages[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 10);
  } else {
    index = (index + 1) % messages.length;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();

// Surprise Button
const surpriseButton = document.getElementById('surprise');

surpriseButton.addEventListener('click', () => {
  surpriseContent.classList.remove('hidden');
  surpriseButton.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  // Get all audio elements
  const audioElements = document.querySelectorAll('audio');

  // Track the currently playing audio
  let currentlyPlaying = null;

  // Add event listeners to all audio elements
  audioElements.forEach((audio) => {
    audio.addEventListener('play', () => {
      console.log('Song started playing:', audio.querySelector('source').src);

      // Pause and reset the currently playing song (if any)
      if (currentlyPlaying && currentlyPlaying !== audio) {
        console.log('Pausing and resetting other song:', currentlyPlaying.querySelector('source').src);
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0; // Reset to the beginning
      }

      // Update the currently playing audio
      currentlyPlaying = audio;
    });

    audio.addEventListener('pause', () => {
      console.log('Song paused:', audio.querySelector('source').src);

      // If the paused audio was the currently playing one, reset the tracker
      if (currentlyPlaying === audio) {
        currentlyPlaying = null;
      }
    });
  });

  // Stop All Button
  const stopAllButton = document.getElementById('stop-all-button');

  if (stopAllButton) {
    stopAllButton.addEventListener('click', () => {
      console.log('Stopping all songs');
      audioElements.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; // Reset the song to the beginning
      });

      // Reset the currently playing tracker
      currentlyPlaying = null;
    });
  } else {
    console.error('Stop All button not found!');
  }
});
