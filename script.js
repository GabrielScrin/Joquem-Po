/**
 * DOM element for displaying the result message.
 * @type {HTMLElement}
 */
const resultMessage = document.querySelector('#result-message');

/**
 * DOM element for displaying the machine's choice.
 * @type {HTMLElement}
 */
const alexaChoiceDisplay = document.querySelector('#alexa-choice');

/**
 * DOM element for displaying the human's score.
 * @type {HTMLElement}
 */
const yourScoreSpan = document.querySelector('#your-score');

/**
 * DOM element for displaying the machine's score.
 * @type {HTMLElement}
 */
const machineScoreSpan = document.querySelector('#machine-score');

/**
 * NodeList of buttons for the user to make a choice.
 * @type {NodeListOf<Element>}
 */
const buttons = document.querySelectorAll('.choice-btn');

/**
 * The current score of the human player.
 * @type {number}
 */
let humanScore = 0;

/**
 * The current score of the machine (Alexa).
 * @type {number}
 */
let machineScore = 0;

/**
 * Array of NASA/Space themed background image URLs.
 * @type {string[]}
 */
const backgroundImages = [
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920&auto=format&fit=crop', // Earth
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop', // Tech/Space
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1920&auto=format&fit=crop', // Deep Space
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1920&auto=format&fit=crop', // Galaxy
    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1920&auto=format&fit=crop', // Abstract Space
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop'  // Mars-like
];

/**
 * Sets a random background image from the backgroundImages array to the document body.
 * @returns {void}
 */
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
}

/**
 * Handles the human player's turn.
 * Initiates the game logic by comparing the human's choice with a generated machine choice.
 * 
 * @param {string} humanChoice - The choice made by the human player ('rock', 'paper', or 'scissors').
 * @returns {void}
 */
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

/**
 * Generates a random choice for the machine.
 * 
 * @returns {string} The machine's choice ('rock', 'paper', or 'scissors').
 */
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

/**
 * Executes the core game logic.
 * Compares the choices, updates the scores, and displays the result message.
 * 
 * @param {string} human - The choice made by the human player.
 * @param {string} machine - The choice made by the machine.
 * @returns {void}
 */
const playTheGame = (human, machine) => {
    console.log('Human: ' + human + ' Machine: ' + machine);

    // Map choices to Emojis for display
    const emojiMap = {
        'rock': '🪨',
        'paper': '📄',
        'scissors': '✂️'
    };

    alexaChoiceDisplay.innerHTML = `Alexa escolheu: ${emojiMap[machine]} ${machine === 'rock' ? 'Pedra' : machine === 'paper' ? 'Papel' : 'Tesoura'}`;

    if (human === machine) {
        resultMessage.innerHTML = "Empate! 😐";
        resultMessage.style.color = "#FFFFFF"; // White
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScore++;
        yourScoreSpan.innerHTML = humanScore;
        resultMessage.innerHTML = "Você Ganhou! 🚀";
        resultMessage.style.color = "#4CC9F0"; // Cyan/Greenish
    } else {
        machineScore++;
        machineScoreSpan.innerHTML = machineScore;
        resultMessage.innerHTML = "Você Perdeu! ☄️";
        resultMessage.style.color = "#FC3D21"; // Red
    }
};

// Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playHuman(button.id);
    });
});

// Initialize
setRandomBackground();

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        playHuman,
        playMachine,
        playTheGame,
        setRandomBackground
    };
}
