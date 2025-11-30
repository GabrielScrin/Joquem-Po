const resultMessage = document.querySelector('#result-message');
const alexaChoiceDisplay = document.querySelector('#alexa-choice');
const yourScoreSpan = document.querySelector('#your-score');
const machineScoreSpan = document.querySelector('#machine-score');
const buttons = document.querySelectorAll('.choice-btn');

let humanScore = 0;
let machineScore = 0;

// NASA/Space Themed Backgrounds
const backgroundImages = [
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920&auto=format&fit=crop', // Earth
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop', // Tech/Space
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1920&auto=format&fit=crop', // Deep Space
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1920&auto=format&fit=crop', // Galaxy
    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1920&auto=format&fit=crop', // Abstract Space
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop'  // Mars-like
];

// Set random background on load
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
}

// Game Logic
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

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
