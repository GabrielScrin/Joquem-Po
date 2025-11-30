# JokenPô - NASA Edition

## Overview

JokenPô - NASA Edition is a modern, space-themed implementation of the classic Rock-Paper-Scissors game. This project combines the traditional game mechanics with a visually stunning interface inspired by NASA and space exploration.

The application features dynamic background images sourced from Unsplash, providing a unique visual experience every time the game is loaded. The user interface is designed with a "glassmorphism" aesthetic, neon glows, and smooth animations to create a premium feel.

## Features

-   **Classic Gameplay**: Play Rock, Paper, Scissors against an AI opponent (Alexa).
-   **Dynamic Backgrounds**: Randomly loads high-quality space-themed images (Earth, Galaxy, Mars, etc.) on each visit.
-   **Interactive UI**:
    -   Glassmorphism design with blur effects.
    -   Hover animations and neon glow effects on buttons.
    -   Floating container animation.
-   **Score Tracking**: Real-time score updates for both the player and the machine.
-   **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices.
-   **Visual Feedback**:
    -   Emoji representations for choices.
    -   Color-coded result messages (Green/Cyan for win, Red for loss, White for draw).

## Technologies Used

-   **HTML5**: Semantic structure of the application.
-   **CSS3**: Custom styling including CSS variables, Flexbox, animations, and media queries.
-   **JavaScript (ES6+)**: Game logic, DOM manipulation, and event handling.
-   **Google Fonts**: 'Orbitron' for headers and 'Roboto' for body text.

## Setup and Usage

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Edge, Safari) to run this application.

### Installation

1.  Clone this repository to your local machine:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory.

### Running the Game

Simply open the `index.html` file in your web browser.

-   **On Windows**: Double-click `index.html`.
-   **On Mac/Linux**: Open with your preferred browser (e.g., `open index.html`).

## How to Play

1.  **Choose your weapon**: Click on one of the three buttons:
    -   🪨 **Pedra** (Rock)
    -   📄 **Papel** (Paper)
    -   ✂️ **Tesoura** (Scissors)
2.  **Watch the result**: The AI (Alexa) will instantly make its choice.
3.  **Check the outcome**:
    -   **Rock** beats **Scissors**
    -   **Scissors** beats **Paper**
    -   **Paper** beats **Rock**
4.  **Track your score**: The scoreboard at the bottom will update automatically.

## Project Structure

-   `index.html`: The main HTML file containing the structure of the game.
-   `style.css`: Contains all the styling rules, animations, and responsive design logic.
-   `script.js`: Handles the game logic, random background generation, and DOM updates.

## Documentation

The source code is fully documented with JSDoc comments. You can review `script.js` to understand the underlying logic and function purposes.

---

*Developed with 🚀 for the DevClub community.*
