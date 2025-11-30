/**
 * @jest-environment jsdom
 */

describe('JokenPô Game Logic', () => {
    let script;

    beforeEach(() => {
        // Reset DOM
        document.body.innerHTML = `
            <p id="result-message">Escolha sua arma</p>
            <p id="alexa-choice"></p>
            <span id="your-score">0</span>
            <span id="machine-score">0</span>
            <button id="rock" class="choice-btn"></button>
            <button id="paper" class="choice-btn"></button>
            <button id="scissors" class="choice-btn"></button>
        `;

        // Reset modules to reload script and re-bind variables to new DOM elements
        jest.resetModules();
        script = require('./script');
    });

    test('playMachine returns a valid choice', () => {
        const choice = script.playMachine();
        expect(['rock', 'paper', 'scissors']).toContain(choice);
    });

    test('playTheGame updates score correctly when Human wins (Rock vs Scissors)', () => {
        const humanScoreSpan = document.getElementById('your-score');
        const resultMessage = document.getElementById('result-message');

        // Mock console.log to keep output clean
        console.log = jest.fn();

        // Human: rock, Machine: scissors -> Human wins
        script.playTheGame('rock', 'scissors');

        expect(humanScoreSpan.innerHTML).toBe('1');
        expect(resultMessage.innerHTML).toContain('Você Ganhou');
        expect(resultMessage.style.color).toBe('rgb(76, 201, 240)'); // #4CC9F0
    });

    test('playTheGame updates score correctly when Machine wins (Rock vs Paper)', () => {
        const machineScoreSpan = document.getElementById('machine-score');
        const resultMessage = document.getElementById('result-message');

        console.log = jest.fn();

        // Human: rock, Machine: paper -> Machine wins
        script.playTheGame('rock', 'paper');

        expect(machineScoreSpan.innerHTML).toBe('1');
        expect(resultMessage.innerHTML).toContain('Você Perdeu');
        expect(resultMessage.style.color).toBe('rgb(252, 61, 33)'); // #FC3D21
    });

    test('playTheGame handles a draw (Rock vs Rock)', () => {
        const resultMessage = document.getElementById('result-message');

        console.log = jest.fn();

        // Human: rock, Machine: rock -> Draw
        script.playTheGame('rock', 'rock');

        expect(resultMessage.innerHTML).toContain('Empate');
        expect(resultMessage.style.color).toBe('rgb(255, 255, 255)'); // #FFFFFF
    });

    test('playHuman triggers playTheGame with correct arguments', () => {
        const humanScoreSpan = document.getElementById('your-score');
        console.log = jest.fn();

        const originalRandom = Math.random;
        // Mock Math.random to ensure playMachine returns 'scissors' (index 2)
        Math.random = jest.fn(() => 0.9);

        script.playHuman('rock'); // Rock vs Scissors -> Win

        expect(humanScoreSpan.innerHTML).toBe('1');

        Math.random = originalRandom;
    });

    test('Clicking a button triggers playHuman', () => {
        const rockButton = document.getElementById('rock');
        const humanScoreSpan = document.getElementById('your-score');
        console.log = jest.fn();

        const originalRandom = Math.random;
        Math.random = jest.fn(() => 0.9); // Scissors

        rockButton.click();

        expect(humanScoreSpan.innerHTML).toBe('1');

        Math.random = originalRandom;
    });

    test('setRandomBackground changes the background image', () => {
        const originalRandom = Math.random;
        Math.random = jest.fn(() => 0); // Should pick the first image

        script.setRandomBackground();

        expect(document.body.style.backgroundImage).toContain('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa');

        Math.random = originalRandom;
    });
});
