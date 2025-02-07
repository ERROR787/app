// Login Form Submission with Validation
const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login');
const appSection = document.getElementById('app');
const displayName = document.getElementById('display-name');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const likes = document.getElementById('likes').value.trim();
  const sports = document.getElementById('sports').value.trim();
  const favoritePerson = document.getElementById('favorite-person').value.trim().toLowerCase();

  // Define correct answers
  const correctFavoritePerson = 'v'; // Replace with your name
  const correctSports = ['f', 'v']; // Replace with her favorite sports

  // Validate answers
  let isValid = true;

  // Check favorite person
  if (favoritePerson !== correctFavoritePerson) {
    isValid = false;
  }

  // Check favorite sports (at least one match)
  const enteredSports = sports.toLowerCase().split(/,|\s+/);
  const hasCorrectSport = enteredSports.some(sport => correctSports.includes(sport));
  if (!hasCorrectSport) {
    isValid = false;
  }

  // Show error message if answers are incorrect
  if (!isValid) {
    errorMessage.classList.remove('hidden');
    errorMessage.classList.add('visible');
    return;
  }

  // If answers are correct, proceed to the main app
  errorMessage.classList.remove('visible');
  errorMessage.classList.add('hidden');

  // Hide login page and show main app
  loginSection.classList.add('hidden');
  appSection.classList.remove('hidden');
  appSection.classList.add('visible'); 

  // Display her name on the home page
  displayName.textContent = name;

  //  Save the details to localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('likes', likes);
  localStorage.setItem('sports', sports);
  localStorage.setItem('favoritePerson', favoritePerson);
});
