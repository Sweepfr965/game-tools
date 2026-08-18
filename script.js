```javascript
/* =========================================================
   GAME TOOLS - COMPLETE SCRIPT
   ========================================================= */


/* =========================================================
   NOTIFICATIONS
========================================================= */

function showNotification(message, icon = "✓") {
    const notification = document.getElementById("notification");
    const text = document.getElementById("notificationText");
    const iconElement = document.getElementById("notificationIcon");

    if (!notification) return;

    if (text) text.textContent = message;
    if (iconElement) iconElement.textContent = icon;

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2500);
}


/* =========================================================
   COUNTDOWN
========================================================= */

let countdownInterval = null;
let countdownSeconds = 0;

function startCountdown() {

    clearInterval(countdownInterval);

    const eventInput = document.getElementById("eventInput");
    const minutesInput = document.getElementById("minutesInput");
    const secondsInput = document.getElementById("secondsInput");

    const eventName = eventInput.value.trim() || "Event";

    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    countdownSeconds = (minutes * 60) + seconds;

    if (countdownSeconds <= 0) {
        showNotification("Enter a countdown time.", "⚠️");
        return;
    }

    document.getElementById("eventName").textContent = eventName;

    updateCountdownDisplay();

    countdownInterval = setInterval(() => {

        countdownSeconds--;

        updateCountdownDisplay();

        if (countdownSeconds <= 0) {

            clearInterval(countdownInterval);

            document.getElementById("timer").textContent = "00:00";

            showNotification(
                eventName + " is starting!",
                "🎮"
            );
        }

    }, 1000);
}


function updateCountdownDisplay() {

    const minutes = Math.floor(countdownSeconds / 60);
    const seconds = countdownSeconds % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


function resetCountdown() {

    clearInterval(countdownInterval);

    countdownSeconds = 0;

    document.getElementById("eventInput").value = "";
    document.getElementById("minutesInput").value = "";
    document.getElementById("secondsInput").value = "";

    document.getElementById("eventName").textContent = "";
    document.getElementById("timer").textContent = "00:00";

    showNotification("Countdown reset.", "↻");
}


/* =========================================================
   RANDOM GAME
========================================================= */

const games = [

    { name: "Minecraft", genre: "sandbox", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "⛏️" },
    { name: "Fortnite", genre: "shooter", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🔫" },
    { name: "Rocket League", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "🚗" },
    { name: "Grand Theft Auto V", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🚘" },
    { name: "The Legend of Zelda", genre: "adventure", platforms: ["switch"], icon: "🗡️" },
    { name: "Terraria", genre: "sandbox", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🌳" },
    { name: "Among Us", genre: "indie", platforms: ["pc","mobile","switch"], icon: "🚀" },
    { name: "Apex Legends", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🎯" },
    { name: "Forza Horizon 5", genre: "racing", platforms: ["pc","xbox"], icon: "🏎️" },
    { name: "EA Sports FC", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "⚽" },
    { name: "Elden Ring", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "⚔️" },
    { name: "Fall Guys", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "👑" },
    { name: "Roblox", genre: "adventure", platforms: ["pc","xbox","mobile"], icon: "🧱" },
    { name: "Call of Duty", genre: "shooter", platforms: ["pc","playstation","xbox","mobile"], icon: "💥" },
    { name: "Need for Speed", genre: "racing", platforms: ["pc","playstation","xbox"], icon: "🏁" },
    { name: "Stardew Valley", genre: "indie", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🌾" },
    { name: "Pokémon", genre: "rpg", platforms: ["switch","mobile"], icon: "⚡" },
    { name: "Overwatch 2", genre: "shooter", platforms: ["pc","playstation","xbox","switch"], icon: "🛡️" },
    { name: "Hogwarts Legacy", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "🪄" },
    { name: "Cuphead", genre: "action", platforms: ["pc","playstation","xbox","switch"], icon: "☕" }

];


function randomGame() {

    const platform = document.getElementById("platformFilter").value;
    const genre = document.getElementById("genreFilter").value;

    const filteredGames = games.filter(game => {

        const platformMatch =
            platform === "all" ||
            game.platforms.includes(platform);

        const genreMatch =
            genre === "all" ||
            game.genre === genre;

        return platformMatch && genreMatch;
    });

    const result = document.getElementById("randomResult");

    if (!filteredGames.length) {

        result.innerHTML = `
            <div class="result-placeholder">
                <span>😕</span>
                <strong>No games found</strong>
                <small>Try different filters.</small>
            </div>
        `;

        return;
    }

    const game =
        filteredGames[
            Math.floor(Math.random() * filteredGames.length)
        ];

    result.innerHTML = `
        <div class="random-game-result">

            <span class="result-game-icon">
                ${game.icon}
            </span>

            <strong>
                ${game.name}
            </strong>

            <small>
                ${game.genre.toUpperCase()}
            </small>

            <button onclick="addFavorite('${game.name.replace(/'/g, "\\'")}')">
                ⭐ Add To Favorites
            </button>

        </div>
    `;
}


/* =========================================================
   CALCULATORS
========================================================= */

function changeCalculator() {

    const type =
        document.getElementById("calculatorType").value;

    document.getElementById("xpCalculator").style.display =
        type === "xp" ? "block" : "none";

    document.getElementById("kdCalculator").style.display =
        type === "kd" ? "block" : "none";

    document.getElementById("winrateCalculator").style.display =
        type === "winrate" ? "block" : "none";

    document.getElementById("matchesCalculator").style.display =
        type === "matches" ? "block" : "none";
}


function calculateXP() {

    const needed =
        Number(document.getElementById("xpNeeded").value);

    const perMatch =
        Number(document.getElementById("xpPerMatch").value);

    if (needed <= 0 || perMatch <= 0) {
        showNotification("Enter valid XP values.", "⚠️");
        return;
    }

    const matches = Math.ceil(needed / perMatch);

    document.getElementById("xpResult").textContent =
        `You need approximately ${matches} matches.`;
}


function calculateKD() {

    const kills =
        Number(document.getElementById("kills").value);

    const deaths =
        Number(document.getElementById("deaths").value);

    if (kills < 0 || deaths < 0) {
        showNotification("Enter valid numbers.", "⚠️");
        return;
    }

    if (deaths === 0) {

        document.getElementById("xpResult").textContent =
            "K/D: Perfect";

        return;
    }

    document.getElementById("xpResult").textContent =
        `Your K/D is ${(kills / deaths).toFixed(2)}.`;
}


function calculateWinRate() {

    const wins =
        Number(document.getElementById("wins").value);

    const gamesPlayed =
        Number(document.getElementById("gamesPlayed").value);

    if (gamesPlayed <= 0 || wins < 0 || wins > gamesPlayed) {
        showNotification("Enter valid values.", "⚠️");
        return;
    }

    const rate =
        (wins / gamesPlayed) * 100;

    document.getElementById("xpResult").textContent =
        `Your win rate is ${rate.toFixed(1)}%.`;
}


function calculateMatches() {

    const currentXP =
        Number(document.getElementById("currentXP").value);

    const targetXP =
        Number(document.getElementById("targetXP").value);

    const xpMatch =
        Number(document.getElementById("xpMatch").value);

    if (xpMatch <= 0 || targetXP <= currentXP) {
        showNotification("Check your XP values.", "⚠️");
        return;
    }

    const matches =
        Math.ceil((targetXP - currentXP) / xpMatch);

    document.getElementById("xpResult").textContent =
        `You need approximately ${matches} matches.`;
}


/* =========================================================
   SENSITIVITY
========================================================= */

function calculateSensitivity() {

    const sensitivity =
        Number(document.getElementById("sensValue").value);

    const currentDPI =
        Number(document.getElementById("sensDPI").value);

    const newDPI =
        Number(document.getElementById("newDPI").value);

    if (
        sensitivity <= 0 ||
        currentDPI <= 0 ||
        newDPI <= 0
    ) {
        showNotification(
            "Enter valid sensitivity values.",
            "⚠️"
        );

        return;
    }

    const newSensitivity =
        sensitivity * (currentDPI / newDPI);

    document.getElementById("sensResult").textContent =
        `New sensitivity: ${newSensitivity.toFixed(3)}`;
}


/* =========================================================
   SESSION TIMER
========================================================= */

let sessionInterval = null;
let sessionSeconds = 0;

function startSession() {

    if (sessionInterval) return;

    sessionInterval = setInterval(() => {

        sessionSeconds++;

        updateSessionTimer();

    }, 1000);

    showNotification(
        "Gaming session started.",
        "🎮"
    );
}


function stopSession() {

    clearInterval(sessionInterval);

    sessionInterval = null;

    showNotification(
        "Gaming session stopped.",
        "⏸️"
    );
}


function resetSession() {

    clearInterval(sessionInterval);

    sessionInterval = null;
    sessionSeconds = 0;

    updateSessionTimer();

    showNotification(
        "Session reset.",
        "↻"
    );
}


function updateSessionTimer() {

    const hours =
        Math.floor(sessionSeconds / 3600);

    const minutes =
        Math.floor((sessionSeconds % 3600) / 60);

    const seconds =
        sessionSeconds % 60;

    document.getElementById("sessionTimer").textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}


/* =========================================================
   RANDOM MODE
========================================================= */

const challenges = [

    "Win a game using only one weapon.",
    "Play without using your usual character.",
    "Try to win without sprinting.",
    "Use a random loadout.",
    "Play one match with no music.",
    "Choose a completely random game.",
    "Try a game you have never played.",
    "Play for one match without changing settings.",
    "Use the worst weapon you can find.",
    "Play with a friend and swap roles."

];


function randomMode() {

    const challenge =
        challenges[
            Math.floor(Math.random() * challenges.length)
        ];

    document.getElementById("modeResult").textContent =
        challenge;

    showNotification(
        "Challenge selected!",
        "🎲"
    );
}


/* =========================================================
   STATS TRACKER
========================================================= */

function calculateStats() {

    const wins =
        Number(document.getElementById("trackerWins").value);

    const losses =
        Number(document.getElementById("trackerLosses").value);

    if (wins < 0 || losses < 0) {
        showNotification(
            "Enter valid stats.",
            "⚠️"
        );

        return;
    }

    const total = wins + losses;

    const winRate =
        total === 0
            ? 0
            : (wins / total) * 100;

    document.getElementById("trackerResult").textContent =
        `Matches: ${total} | Win Rate: ${winRate.toFixed(1)}%`;
}


/* =========================================================
   FAVORITES
========================================================= */

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "gameToolsFavorites"
            )
        ) || [];

    } catch {

        return [];

    }
}


function saveFavorites(favorites) {

    localStorage.setItem(
        "gameToolsFavorites",
        JSON.stringify(favorites)
    );
}


function addFavorite(gameName) {

    const favorites = getFavorites();

    if (!favorites.includes(gameName)) {

        favorites.push(gameName);

        saveFavorites(favorites);

        showNotification(
            gameName + " added to favorites!",
            "⭐"
        );

        displayFavorites();

    } else {

        showNotification(
            gameName + " is already a favorite.",
            "⭐"
        );
    }
}


function favoriteGameOfDay() {

    const name =
        document.getElementById(
            "gameOfDayName"
        ).textContent;

    addFavorite(name);
}


function displayFavorites() {

    const list =
        document.getElementById(
            "favoritesList"
        );

    if (!list) return;

    const favorites =
        getFavorites();

    if (!favorites.length) {

        list.innerHTML = `
            <div class="empty-favorites">
                ⭐
                <span>No favorites yet.</span>
            </div>
        `;

        return;
    }

    list.innerHTML =
        favorites.map(game => `

            <div class="favorite-item">

                <span>
                    ⭐ ${game}
                </span>

                <button
                    onclick="removeFavorite('${game.replace(/'/g, "\\'")}')"
                >
                    ✕
                </button>

            </div>

        `).join("");
}


function removeFavorite(gameName) {

    const favorites =
        getFavorites().filter(
            game => game !== gameName
        );

    saveFavorites(favorites);

    displayFavorites();

    showNotification(
        gameName + " removed.",
        "🗑️"
    );
}


function clearFavorites() {

    localStorage.removeItem(
        "gameToolsFavorites"
    );

    displayFavorites();

    showNotification(
        "Favorites cleared.",
        "🗑️"
    );
}


/* =========================================================
   TOOL SEARCH
========================================================= */

function searchTools() {

    const input =
        document.getElementById("toolSearch");

    const search =
        input.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".tool-card");

    let found = 0;

    cards.forEach(card => {

        const text =
            (
                card.textContent +
                " " +
                (card.dataset.tool || "")
            ).toLowerCase();

        if (text.includes(search)) {

            card.style.display = "";
            found++;

        } else {

            card.style.display = "none";

        }
    });

    document.getElementById("noResults").style.display =
        found === 0 ? "block" : "none";
}


/* =========================================================
   GAME OF THE DAY
========================================================= */

const gameOfDayList = [

    {
        name: "Minecraft",
        info: "Build, explore and survive in an endless world.",
        genre: "⛏️ Sandbox",
        platforms: "🎮 PC · Console · Mobile"
    },

    {
        name: "Fortnite",
        info: "Battle, build and fight to become the last player standing.",
        genre: "🔫 Shooter",
        platforms: "🎮 PC · Console · Mobile"
    },

    {
        name: "Rocket League",
        info: "Drive, score goals and compete in high-speed matches.",
        genre: "⚽ Sports",
        platforms: "🎮 PC · Console"
    },

    {
        name: "Terraria",
        info: "Dig, build, fight and explore a huge 2D world.",
        genre: "⛏️ Sandbox",
        platforms: "🎮 PC · Console · Mobile"
    }

];


function updateGameOfDay() {

    const today = new Date();

    const index =
        (
            today.getFullYear() +
            today.getMonth() +
            today.getDate()
        ) % gameOfDayList.length;

    const game =
        gameOfDayList[index];

    document.getElementById("gameOfDayName").textContent =
        game.name;

    document.getElementById("gameOfDayInfo").textContent =
        game.info;

    document.getElementById("gameOfDayGenre").textContent =
        game.genre;

    document.getElementById("gameOfDayPlatforms").textContent =
        game.platforms;
}


/* =========================================================
   PLAY GAMES - DROPDOWN
========================================================= */

function toggleGamesMenu() {

    const menu =
        document.getElementById(
            "gamesDropdownMenu"
        );

    if (!menu) return;

    menu.classList.toggle("show");
}


/* Close dropdown when clicking elsewhere */

document.addEventListener("click", function(event) {

    const dropdown =
        document.querySelector(
            ".games-dropdown"
        );

    const menu =
        document.getElementById(
            "gamesDropdownMenu"
        );

    if (
        dropdown &&
        menu &&
        !dropdown.contains(event.target)
    ) {

        menu.classList.remove("show");

    }

});


/* =========================================================
   OPEN GAME
========================================================= */

function openGame(gameName) {

    const fullscreen =
        document.getElementById(
            "gameFullscreen"
        );

    if (!fullscreen) return;

    document
        .querySelectorAll(".play-game-box")
        .forEach(game => {

            game.style.display = "none";

        });


    let title = "🎮 Game";


    if (gameName === "clicker") {

        document.getElementById(
            "game-clicker"
        ).style.display = "block";

        resetClicker();

        title = "👆 Clicker";

    }


    else if (gameName === "reaction") {

        document.getElementById(
            "game-reaction"
        ).style.display = "block";

        resetReaction();

        title = "⚡ Reaction Test";

    }


    else if (gameName === "guess") {

        document.getElementById(
            "game-guess"
        ).style.display = "block";

        resetGuess();

        title = "🔢 Number Guess";

    }


    else if (gameName === "memory") {

        document.getElementById(
            "game-memory"
        ).style.display = "block";

        startMemory();

        title = "🧠 Memory";

    }


    else if (gameName === "snake") {

        document.getElementById(
            "game-snake"
        ).style.display = "block";

        resetSnakeCanvas();

        title = "🐍 Snake";

    }


    else {

        document.getElementById(
            "game-comingsoon"
        ).style.display = "block";

        title = "🚀 Coming Soon";

    }


    document.getElementById(
        "fullscreenGameTitle"
    ).textContent = title;


    const menu =
        document.getElementById(
            "gamesDropdownMenu"
        );

    if (menu) {
        menu.classList.remove("show");
    }


    fullscreen.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE GAME
========================================================= */

function closeGame() {

    const fullscreen =
        document.getElementById(
            "gameFullscreen"
        );

    if (!fullscreen) return;

    fullscreen.classList.remove("active");

    document.body.style.overflow = "";

    stopSnake();

    clearTimeout(reactionTimeout);

    reactionWaiting = false;
    reactionCanClick = false;
}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const fullscreen =
            document.getElementById(
                "gameFullscreen"
            );

        if (
            event.key === "Escape" &&
            fullscreen &&
            fullscreen.classList.contains("active")
        ) {

            closeGame();

        }

    }
);


/* =========================================================
   CLICKER GAME
========================================================= */

let clickerScore = 0;


function clickGame() {

    clickerScore++;

    document.getElementById(
        "clickerScore"
    ).textContent = clickerScore;
}


function resetClicker() {

    clickerScore = 0;

    const score =
        document.getElementById(
            "clickerScore"
        );

    if (score) {
        score.textContent = "0";
    }
}


/* =========================================================
   REACTION GAME
========================================================= */

let reactionStartTime = 0;
let reactionTimeout = null;
let reactionWaiting = false;
let reactionCanClick = false;


function startReaction() {

    const box =
        document.getElementById(
            "reactionBox"
        );

    if (!box) return;

    clearTimeout(reactionTimeout);

    reactionWaiting = true;
    reactionCanClick = false;

    box.className =
        "reaction-box ready";

    box.textContent =
        "WAIT...";

    document.getElementById(
        "reactionResult"
    ).textContent =
        "Wait for green!";


    const delay =
        Math.floor(
            Math.random() * 3000
        ) + 1500;


    reactionTimeout =
        setTimeout(() => {

            reactionWaiting = false;
            reactionCanClick = true;

            reactionStartTime =
                performance.now();

            box.className =
                "reaction-box go";

            box.textContent =
                "CLICK NOW!";

        }, delay);
}


function reactionClick() {

    const box =
        document.getElementById(
            "reactionBox"
        );

    if (!box) return;


    if (reactionCanClick) {

        const time =
            Math.round(
                performance.now() -
                reactionStartTime
            );

        document.getElementById(
            "reactionResult"
        ).textContent =
            "Your reaction time: " +
            time +
            " ms";

        box.className =
            "reaction-box";

        box.textContent =
            "Click START to try again.";

        reactionCanClick = false;

    }

    else if (reactionWaiting) {

        clearTimeout(reactionTimeout);

        reactionWaiting = false;

        box.className =
            "reaction-box";

        box.textContent =
            "Too early!";

        document.getElementById(
            "reactionResult"
        ).textContent =
            "You clicked too early. Try again.";
    }
}


function resetReaction() {

    clearTimeout(reactionTimeout);

    reactionWaiting = false;
    reactionCanClick = false;
    reactionStartTime = 0;

    const box =
        document.getElementById(
            "reactionBox"
        );

    const result =
        document.getElementById(
            "reactionResult"
        );

    if (box) {

        box.className =
            "reaction-box";

        box.textContent =
            "Click START";

    }

    if (result) {

        result.textContent =
            "Your time will appear here.";

    }
}


/* =========================================================
   NUMBER GUESS
========================================================= */

let secretNumber = 0;
let guessAttempts = 0;


function resetGuess() {

    secretNumber =
        Math.floor(
            Math.random() * 100
        ) + 1;

    guessAttempts = 0;

    const result =
        document.getElementById(
            "guessResult"
        );

    const attempts =
        document.getElementById(
            "guessAttempts"
        );

    const input =
        document.getElementById(
            "guessInput"
        );

    if (result) {
        result.textContent =
            "I'm thinking of a number...";
    }

    if (attempts) {
        attempts.textContent =
            "Attempts: 0";
    }

    if (input) {
        input.value = "";
    }
}


function makeGuess() {

    const input =
        document.getElementById(
            "guessInput"
        );

    const result =
        document.getElementById(
            "guessResult"
        );

    const attempts =
        document.getElementById(
            "guessAttempts"
        );

    if (!input || !result) return;

    const guess =
        Number(input.value);

    if (
        !guess ||
        guess < 1 ||
        guess > 100
    ) {

        result.textContent =
            "Enter a number from 1 to 100.";

        return;
    }

    guessAttempts++;

    if (attempts) {

        attempts.textContent =
            "Attempts: " +
            guessAttempts;

    }


    if (guess === secretNumber) {

        result.textContent =
            "🎉 Correct! You got it!";

    }

    else if (guess < secretNumber) {

        result.textContent =
            "⬆️ Too low!";

    }

    else {

        result.textContent =
            "⬇️ Too high!";

    }
}


/* =========================================================
   MEMORY GAME
========================================================= */

let memoryFirst = null;
let memorySecond = null;
let memoryLock = false;
let memoryMatches = 0;


const memorySymbols = [
    "🎮", "🎮",
    "⚽", "⚽",
    "🚀", "🚀",
    "🔥", "🔥",
    "⭐", "⭐",
    "👾", "👾",
    "🐍", "🐍",
    "🎯", "🎯"
];


function startMemory() {

    const grid =
        document.getElementById(
            "memoryGrid"
        );

    if (!grid) return;

    grid.innerHTML = "";

    memoryFirst = null;
    memorySecond = null;
    memoryLock = false;
    memoryMatches = 0;

    document.getElementById(
        "memoryResult"
    ).textContent =
        "Matches: 0";


    const shuffled =
        [...memorySymbols]
        .sort(() => Math.random() - 0.5);


    shuffled.forEach(symbol => {

        const card =
            document.createElement(
                "button"
            );

        card.className =
            "memory-card";

        card.textContent =
            "?";

        card.dataset.symbol =
            symbol;

        card.onclick =
            () => flipMemoryCard(card);

        grid.appendChild(card);

    });
}


function flipMemoryCard(card) {

    if (
        memoryLock ||
        card === memoryFirst ||
        card.classList.contains("flipped")
    ) {
        return;
    }

    card.classList.add("flipped");

    card.textContent =
        card.dataset.symbol;


    if (!memoryFirst) {

        memoryFirst = card;

        return;
    }


    memorySecond = card;

    memoryLock = true;


    if (
        memoryFirst.dataset.symbol ===
        memorySecond.dataset.symbol
    ) {

        memoryMatches++;

        memoryFirst.disabled = true;
        memorySecond.disabled = true;

        memoryFirst = null;
        memorySecond = null;
        memoryLock = false;

        document.getElementById(
            "memoryResult"
        ).textContent =
            "Matches: " +
            memoryMatches;


        if (memoryMatches === 8) {

            document.getElementById(
                "memoryResult"
            ).textContent =
                "🏆 You matched everything!";

            showNotification(
                "Memory complete!",
                "🏆"
            );
        }

    }

    else {

        setTimeout(() => {

            if (memoryFirst) {

                memoryFirst.classList.remove(
                    "flipped"
                );

                memoryFirst.textContent =
                    "?";
            }

            if (memorySecond) {

                memorySecond.classList.remove(
                    "flipped"
                );

                memorySecond.textContent =
                    "?";
            }

            memoryFirst = null;
            memorySecond = null;
            memoryLock = false;

        }, 700);
    }
}


/* =========================================================
   SNAKE GAME
========================================================= */

const snakeCanvas =
    document.getElementById(
        "snakeCanvas"
    );

let snakeCtx =
    snakeCanvas
        ? snakeCanvas.getContext("2d")
        : null;

const snakeSize = 20;

let snake = [];
let snakeFood = {};
let snakeDirection = "right";
let snakeRunning = false;
let snakeInterval = null;
let snakePoints = 0;


function startSnake() {

    if (!snakeCanvas || !snakeCtx) return;

    clearInterval(snakeInterval);

    snake = [
        { x: 200, y: 200 },
        { x: 180, y: 200 },
        { x: 160, y: 200 }
    ];

    snakeDirection = "right";
    snakePoints = 0;
    snakeRunning = true;

    createSnakeFood();

    updateSnakeScore();

    drawSnake();

    snakeInterval =
        setInterval(
            moveSnake,
            120
        );
}


function stopSnake() {

    clearInterval(snakeInterval);

    snakeInterval = null;
    snakeRunning = false;
}


function resetSnakeCanvas() {

    if (!snakeCanvas || !snakeCtx) return;

    snakeCtx.clearRect(
        0,
        0,
        snakeCanvas.width,
        snakeCanvas.height
    );

    snakeCtx.fillStyle =
        "#777";

    snakeCtx.font =
        "18px Arial";

    snakeCtx.textAlign =
        "center";

    snakeCtx.fillText(
        "Press START / RESTART",
        snakeCanvas.width / 2,
        snakeCanvas.height / 2
    );
}


function createSnakeFood() {

    snakeFood = {

        x:
            Math.floor(
                Math.random() *
                (snakeCanvas.width / snakeSize)
            ) * snakeSize,

        y:
            Math.floor(
                Math.random() *
                (snakeCanvas.height / snakeSize)
            ) * snakeSize
    };
}


function moveSnake() {

    if (!snakeRunning) return;

    const head =
        { ...snake[0] };


    if (snakeDirection === "up") {
        head.y -= snakeSize;
    }

    if (snakeDirection === "down") {
        head.y += snakeSize;
    }

    if (snakeDirection === "left") {
        head.x -= snakeSize;
    }

    if (snakeDirection === "right") {
        head.x += snakeSize;
    }


    const hitWall =
        head.x < 0 ||
        head.x >= snakeCanvas.width ||
        head.y < 0 ||
        head.y >= snakeCanvas.height;


    const hitSelf =
        snake.some(segment =>
            segment.x === head.x &&
            segment.y === head.y
        );


    if (hitWall || hitSelf) {

        snakeGameOver();

        return;
    }


    snake.unshift(head);


    if (
        head.x === snakeFood.x &&
        head.y === snakeFood.y
    ) {

        snakePoints++;

        createSnakeFood();

        updateSnakeScore();

    }

    else {

        snake.pop();

    }


    drawSnake();
}


function drawSnake() {

    if (!snakeCtx) return;

    snakeCtx.clearRect(
        0,
        0,
        snakeCanvas.width,
        snakeCanvas.height
    );


    snakeCtx.fillStyle =
        "#ef4444";

    snakeCtx.fillRect(
        snakeFood.x,
        snakeFood.y,
        snakeSize,
        snakeSize
    );


    snakeCtx.fillStyle =
        "#22c55e";


    snake.forEach(segment => {

        snakeCtx.fillRect(
            segment.x,
            segment.y,
            snakeSize - 2,
            snakeSize - 2
        );

    });
}


function snakeGameOver() {

    stopSnake();

    snakeCtx.fillStyle =
        "white";

    snakeCtx.font =
        "28px Arial";

    snakeCtx.textAlign =
        "center";

    snakeCtx.fillText(
        "GAME OVER",
        snakeCanvas.width / 2,
        snakeCanvas.height / 2
    );

    showNotification(
        "Snake game over! Score: " + snakePoints,
        "🐍"
    );
}


function updateSnakeScore() {

    const score =
        document.getElementById(
            "snakeScore"
        );

    if (score) {

        score.textContent =
            "Score: " +
            snakePoints;

    }
}


/* =========================================================
   SNAKE CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            !document
                .getElementById("game-snake")
                ?.style.display ||
            document.getElementById("game-snake")
                .style.display === "none"
        ) {
            return;
        }


        if (
            event.key === "ArrowUp" &&
            snakeDirection !== "down"
        ) {

            snakeDirection = "up";
            event.preventDefault();

        }


        if (
            event.key === "ArrowDown" &&
            snakeDirection !== "up"
        ) {

            snakeDirection = "down";
            event.preventDefault();

        }


        if (
            event.key === "ArrowLeft" &&
            snakeDirection !== "right"
        ) {

            snakeDirection = "left";
            event.preventDefault();

        }


        if (
            event.key === "ArrowRight" &&
            snakeDirection !== "left"
        ) {

            snakeDirection = "right";
            event.preventDefault();

        }

    }
);


/* =========================================================
   INITIALISE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayFavorites();

        updateGameOfDay();

        changeCalculator();

        resetSnakeCanvas();

    }
);
```
