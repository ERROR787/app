// Will You Be My Valentine?
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  let yesButtonSize = 1;

  if (yesButton && noButton) {
    noButton.addEventListener('click', () => {
      // Show "Try Again" as an alert
      alert('Try Again 😊');

      // Increase the size of the Yes button
      yesButtonSize += 0.2;
      yesButton.style.transform = `scale(${yesButtonSize})`;

      // Move the No button randomly
      const randomX = Math.random() * 100 - 50;
      const randomY = Math.random() * 100 - 50;
      noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

      // Hide the No button when the Yes button covers it
      if (yesButtonSize >= 3) {
        noButton.style.display = 'none';
        alert('You have to say Yes! 😊');
      }
    });

    yesButton.addEventListener('click', () => {
      alert('Yay! You made me the happiest person! 💖');
      showConfetti(); // Add confetti animation
      showScreen('home'); // Redirect to the home page
    });
  } else {
    console.error('Yes or No button not found!');
  }

  // Navigation Logic
  const screens = document.querySelectorAll('.screen');
  const startButton = document.getElementById('start-button');
  const backButtons = document.querySelectorAll('.back-button');
  const nextButtons = document.querySelectorAll('.next-button');

  // Start Button
  if (startButton) {
    startButton.addEventListener('click', () => {
      showScreen('how-we-met');
    });
  }

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
      case 'surprise': // Redirect to the starting page
        nextScreenId = 'valentine-question';
        break;
      default:
        nextScreenId = 'home';
    }

    showScreen(nextScreenId);
  });
});

  // Helper Function to Show Screens
  function showScreen(screenId) {
    console.log(`Showing screen: ${screenId}`); // Debugging
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.remove('hidden');
    } else {
      console.error(`Screen with ID "${screenId}" not found!`);
    }
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

  if (surpriseButton) {
    surpriseButton.addEventListener('click', () => {
      const surpriseContent = document.getElementById('surprise-content');
      if (surpriseContent) {
        surpriseContent.classList.remove('hidden');
        surpriseButton.style.display = 'none';
      }
    });
  }

  // Playlist Control
  const audioElements = document.querySelectorAll('audio');
  let currentlyPlaying = null;

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

 function showConfetti() {
  const duration = 1 * 400; // 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, gravity: 0.8 };

  function frame() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return;
    }
    confetti(Object.assign({}, defaults, { particleCount: 50 }));
    requestAnimationFrame(frame);
  }
  
  frame();
}

document.getElementById("confetti-button").addEventListener("click", showConfetti);


