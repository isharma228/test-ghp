// Get DOM elements
const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// Counter value
let count = 0;

// Load saved count from localStorage
if (localStorage.getItem('counterValue')) {
    count = parseInt(localStorage.getItem('counterValue'));
    updateDisplay();
}

// Update display with animation
function updateDisplay() {
    counterDisplay.textContent = count;
    counterDisplay.classList.add('pulse');

    // Update color based on value
    if (count > 0) {
        counterDisplay.style.color = '#10b981';
    } else if (count < 0) {
        counterDisplay.style.color = '#ef4444';
    } else {
        counterDisplay.style.color = '#667eea';
    }

    // Save to localStorage
    localStorage.setItem('counterValue', count);

    // Remove animation class after animation completes
    setTimeout(() => {
        counterDisplay.classList.remove('pulse');
    }, 300);
}

// Event listeners
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === '+') {
        count++;
        updateDisplay();
    } else if (e.key === 'ArrowDown' || e.key === '-') {
        count--;
        updateDisplay();
    } else if (e.key === 'r' || e.key === 'R') {
        count = 0;
        updateDisplay();
    }
});
