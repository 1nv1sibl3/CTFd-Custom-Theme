// Sound effects
const sounds = {
  click: new Audio('/themes/idk-invi/static/sounds/click.mp3'),
  hover: new Audio('/themes/idk-invi/static/sounds/hover.mp3'),
  success: new Audio('/themes/idk-invi/static/sounds/success.mp3'),
  error: new Audio('/themes/idk-invi/static/sounds/error.mp3')
};

// Play sound function
function playSound(soundName) {
  if (localStorage.getItem('minecraft-sounds') !== 'disabled') {
    sounds[soundName].currentTime = 0;
    sounds[soundName].play();
  }
}

// Add sound effects to buttons
document.querySelectorAll('.minecraft-button').forEach(button => {
  button.addEventListener('mouseenter', () => playSound('hover'));
  button.addEventListener('click', () => playSound('click'));
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('minecraft-theme', 
      document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );
    playSound('click');
  });
}

// Sound toggle
const soundToggle = document.getElementById('sound-toggle');
if (soundToggle) {
  soundToggle.addEventListener('click', () => {
    const soundsEnabled = localStorage.getItem('minecraft-sounds') !== 'disabled';
    localStorage.setItem('minecraft-sounds', soundsEnabled ? 'disabled' : 'enabled');
    soundToggle.textContent = soundsEnabled ? '🔇' : '🔊';
    playSound('click');
  });
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('minecraft-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});
