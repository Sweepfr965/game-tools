```javascript
/* =========================================================
   GAME TOOLS - COMPLETE SCRIPT
   ========================================================= */


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function showNotification(message, icon = "✓") {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notificationText");
    const notificationIcon = document.getElementById("notificationIcon");

    if (!notification) return;

    notificationText.textContent = message;
    notificationIcon.textContent = icon;

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

    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

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
   RANDOM GAMES
   ========================================================= */

const games = [

    {
        name: "Minecraft",
        genre: "sandbox",
        platforms: ["pc", "playstation", "xbox", "switch", "mobile"],
        icon: "⛏️"
    },

    {
        name: "Fortnite",
        genre: "shooter",
        platforms: ["pc", "playstation", "xbox", "switch", "mobile"],
        icon: "🔫"
    },

    {
        name: "Rocket League",
        genre: "sports",
        platforms: ["pc", "playstation", "xbox", "switch"],
        icon: "🚗"
    },

    {
        name: "Grand Theft Auto V",
        genre: "action",
        platforms: ["pc", "playstation", "xbox"],
        icon: "🚘"
    },

    {
        name: "The Legend of Zelda",
        genre: "adventure",
        platforms: ["switch"],
        icon: "🗡️"
    },

    {
        name: "Terraria",
        genre: "sandbox",
        platforms: ["pc", "playstation", "xbox", "switch", "mobile"],
        icon: "🌳"
    },

    {
        name: "Among Us",
        genre: "indie",
        platforms: ["pc", "mobile", "switch"],
        icon: "🚀"
    },

    {
        name: "Apex Legends",
        genre: "shooter",
        platforms: ["pc", "playstation", "xbox"],
        icon: "🎯"
    },

    {
        name: "Forza Horizon 5",
        genre: "racing",
        platforms: ["pc", "xbox"],
        icon: "🏎️"
    },

    {
        name: "EA Sports FC",
        genre: "sports",
        platforms: ["pc", "playstation", "xbox", "switch"],
        icon: "⚽"
    },

    {
        name: "Elden Ring",
        genre: "rpg",
        platforms: ["pc", "playstation", "xbox"],
        icon: "⚔️"
    },

    {
        name: "Fall Guys",
        genre: "indie",
        platforms: ["pc", "playstation", "xbox", "switch"],
        icon: "👑"
    },

    {
        name: "Roblox",
        genre: "adventure",
        platforms: ["pc", "xbox", "mobile"],
        icon: "🧱"
    },

    {
        name: "Call of Duty",
        genre: "shooter",
        platforms: ["pc", "playstation", "xbox", "mobile"],
        icon: "💥"
    },

    {
        name: "Need for Speed",
        genre: "racing",
        platforms: ["pc", "playstation", "xbox"],
        icon: "🏁"
    },

    {
        name: "Stardew Valley",
        genre: "indie",
        platforms: ["pc", "playstation", "xbox", "switch", "mobile"],
        icon: "🌾"
    },

    {
        name: "Pokémon",
        genre: "rpg",
        platforms: ["switch", "mobile"],
        icon: "⚡"
    },

    {
        name: "Overwatch 2",
        genre: "shooter",
        platforms: ["pc", "playstation", "xbox", "switch"],
        icon: "🛡️"
    },

    {
        name: "Hogwarts Legacy",
        genre: "adventure",
        platforms: ["pc", "playstation", "xbox", "switch"],
        icon: "🪄"
    },

    {
        name: "Cuphead",
        genre: "action",
        platforms: ["pc", "playstation", "xbox", "switch"],
        icon: "☕"
    }
];


function randomGame() {

    const platform =
        document.getElementById("platformFilter").value;

    const genre =
        document.getElementById("genreFilter").value;

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

    if (filteredGames.length === 0) {

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

            <button onclick="addFavorite('${game.name}')">
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

    const kd = kills / deaths;

    document.getElementById("xpResult").textContent =
        `Your K/D is ${kd.toFixed(2)}.`;
}


function calculateWinRate() {

    const wins =
        Number(document.getElementById("wins").value);

    const gamesPlayed =
        Number(document.getElementById("gamesPlayed").value);

    if (gamesPlayed <= 0 || wins < 0) {
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

    const remainingXP =
        targetXP - currentXP;

    const matches =
        Math.ceil(remainingXP / xpMatch);

    document.getElementById("xpResult").textContent =
        `You need approximately ${matches} matches.`;
}


/* =========================================================
   SENSITIVITY CALCULATOR
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
        showNotification("Enter valid sensitivity values.", "⚠️");
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

    showNotification("Gaming session started.", "🎮");
}


function stopSession() {

    clearInterval(sessionInterval);

    sessionInterval = null;

    showNotification("Gaming session stopped.", "⏸️");
}


function resetSession() {

    clearInterval(sessionInterval);

    sessionInterval = null;
    sessionSeconds = 0;

    updateSessionTimer();

    showNotification("Session reset.", "↻");
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

    showNotification("Challenge selected!", "🎲");
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
        showNotification("Enter valid stats.", "⚠️");
        return;
    }

    const total =
        wins + losses;

    const winRate =
        total === 0 ? 0 : (wins / total) * 100;

    document.getElementById("trackerResult").textContent =
        `Matches: ${total} | Win Rate: ${winRate.toFixed(1)}%`;
}


/* =========================================================
   FAVORITES
   ========================================================= */

function getFavorites() {

    try {
        return JSON.parse(
            localStorage.getItem("gameToolsFavorites")
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
        document.getElementById("gameOfDayName").textContent;

    addFavorite(name);
}


function displayFavorites() {

    const list =
        document.getElementById("favoritesList");

    const favorites =
        getFavorites();

    if (favorites.length === 0) {

        list.innerHTML = `
            <div class="empty-favorites">
                ⭐
                <span>No favorites yet.</span>
            </div>
        `;

        return;
    }


    list.innerHTML = favorites.map(game => `
        <div class="favorite-item">
            <span>⭐ ${game}</span>

            <button onclick="removeFavorite('${game}')">
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

    const today =
        new Date();

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
   PLAY GAMES SYSTEM
   =========================================================
   
   This creates the Games dropdown and 4-column game menu
   automatically if the HTML section is not already present.
   
   ========================================================= */

const playableGames = [

    {
        name: "Snake",
        icon: "🐍",
        description: "Eat the food and grow as long as possible.",
        game: "snake"
    },

    {
        name: "Clicker",
        icon: "🖱️",
        description: "Click as fast as you can and build your score.",
        game: "clicker"
    },

    {
        name: "Guess Number",
        icon: "🔢",
        description: "Try to guess the secret number.",
        game: "guess"
    },

    {
        name: "Reaction",
        icon: "⚡",
        description: "Test how quickly you can react.",
        game: "reaction"
    },

    {
        name: "Memory",
        icon: "🧠",
        description: "Remember the matching cards.",
        game: "memory"
    }
];


function createGamesSection() {

    if (document.getElementById("playGamesSection")) {
        return;
    }

    const section =
        document.createElement("section");

    section.id =
        "playGamesSection";

    section.className =
        "play-games-section";

    section.innerHTML = `

        <div class="section-heading">

            <p class="section-label">
                🎮 PLAY
            </p>

            <h2>
                Play Games
            </h2>

            <p>
                Take a break and play some games.
            </p>

        </div>


        <button
            class="games-dropdown-button"
            onclick="toggleGamesDropdown()"
        >
            🎮 Games
            <span id="gamesArrow">▼</span>
        </button>


        <div
            id="gamesDropdown"
            class="games-dropdown"
        >

            <div class="games-grid">

                ${playableGames.map(game => `

                    <button
                        class="play-game-card"
                        onclick="openPlayableGame('${game.game}')"
                    >

                        <span class="play-game-icon">
                            ${game.icon}
                        </span>

                        <strong>
                            ${game.name}
                        </strong>

                        <small>
                            ${game.description}
                        </small>

                    </button>

                `).join("")}

            </div>

        </div>

    `;

    const tools =
        document.getElementById("tools");

    if (tools) {
        tools.parentNode.insertBefore(
            section,
            tools
        );
    }
}


function toggleGamesDropdown() {

    const dropdown =
        document.getElementById("gamesDropdown");

    const arrow =
        document.getElementById("gamesArrow");

    if (!dropdown) return;

    dropdown.classList.toggle("open");

    if (dropdown.classList.contains("open")) {
        arrow.textContent = "▲";
    } else {
        arrow.textContent = "▼";
    }
}


/* =========================================================
   GAME FULLSCREEN
   ========================================================= */

function openPlayableGame(gameType) {

    let overlay =
        document.getElementById("gameFullscreen");

    if (!overlay) {

        overlay =
            document.createElement("div");

        overlay.id =
            "gameFullscreen";

        overlay.className =
            "game-fullscreen";

        document.body.appendChild(overlay);
    }

    overlay.innerHTML = `

        <button
            class="exit-game-button"
            onclick="closePlayableGame()"
        >
            ✕ Exit Game
        </button>

        <div
            id="playGameContent"
            class="play-game-content"
        ></div>

    `;

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

    if (gameType === "snake") {
        createSnakeGame();
    }

    if (gameType === "clicker") {
        createClickerGame();
    }

    if (gameType === "guess") {
        createGuessGame();
    }

    if (gameType === "reaction") {
        createReactionGame();
    }

    if (gameType === "memory") {
        createMemoryGame();
    }
}


function closePlayableGame() {

    const overlay =
        document.getElementById("gameFullscreen");

    if (!overlay) return;

    overlay.classList.remove("active");

    document.body.style.overflow = "";

    if (window.currentGameInterval) {

        clearInterval(
            window.currentGameInterval
        );

        window.currentGameInterval = null;
    }
}


/* =========================================================
   SNAKE GAME
   ========================================================= */

function createSnakeGame() {

    const container =
        document.getElementById("playGameContent");

    container.innerHTML = `

        <h2>🐍 Snake</h2>

        <p>
            Use the arrow keys to move.
        </p>

        <canvas
            id="snakeCanvas"
            width="400"
            height="400"
        ></canvas>

        <h3>
            Score: <span id="snakeScore">0</span>
        </h3>

    `;

    const canvas =
        document.getElementById("snakeCanvas");

    const ctx =
        canvas.getContext("2d");

    const grid = 20;

    let snake = [
        { x: 200, y: 200 }
    ];

    let food = {
        x: 100,
        y: 100
    };

    let direction = {
        x: grid,
        y: 0
    };

    let score = 0;


    document.onkeydown = function(event) {

        if (
            event.key === "ArrowUp" &&
            direction.y === 0
        ) {
            direction = {
                x: 0,
                y: -grid
            };
        }

        if (
            event.key === "ArrowDown" &&
            direction.y === 0
        ) {
            direction = {
                x: 0,
                y: grid
            };
        }

        if (
            event.key === "ArrowLeft" &&
            direction.x === 0
        ) {
            direction = {
                x: -grid,
                y: 0
            };
        }

        if (
            event.key === "ArrowRight" &&
            direction.x === 0
        ) {
            direction = {
                x: grid,
                y: 0
            };
        }
    };


    function gameLoop() {

        const head = {
            x: snake[0].x + direction.x,
            y: snake[0].y + direction.y
        };


        if (
            head.x < 0 ||
            head.x >= canvas.width ||
            head.y < 0 ||
            head.y >= canvas.height
        ) {

            alert("Game Over! Score: " + score);

            closePlayableGame();

            return;
        }


        for (let part of snake) {

            if (
                head.x === part.x &&
                head.y === part.y
            ) {

                alert("Game Over! Score: " + score);

                closePlayableGame();

                return;
            }
        }


        snake.unshift(head);


        if (
            head.x === food.x &&
            head.y === food.y
        ) {

            score++;

            document.getElementById(
                "snakeScore"
            ).textContent = score;

            food = {
                x: Math.floor(
                    Math.random() *
                    (canvas.width / grid)
                ) * grid,

                y: Math.floor(
                    Math.random() *
                    (canvas.height / grid)
                ) * grid
            };

        } else {

            snake.pop();
        }


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.fillStyle = "lime";

        snake.forEach(part => {

            ctx.fillRect(
                part.x,
                part.y,
                grid - 2,
                grid - 2
            );

        });


        ctx.fillStyle = "red";

        ctx.fillRect(
            food.x,
            food.y,
            grid - 2,
            grid - 2
        );
    }


    window.currentGameInterval =
        setInterval(gameLoop, 100);
}


/* =========================================================
   CLICKER GAME
   ========================================================= */

function createClickerGame() {

    const container =
        document.getElementById("playGameContent");

    let score = 0;
    let time = 10;

    container.innerHTML = `

        <h2>🖱️ Clicker</h2>

        <h3>
            Time:
            <span id="clickTime">10</span>
        </h3>

        <h3>
            Score:
            <span id="clickScore">0</span>
        </h3>

        <button
            id="bigClickButton"
            class="big-game-button"
        >
            CLICK!
        </button>

    `;


    document.getElementById(
        "bigClickButton"
    ).onclick = function() {

        if (time > 0) {

            score++;

            document.getElementById(
                "clickScore"
            ).textContent = score;
        }
    };


    window.currentGameInterval =
        setInterval(() => {

            time--;

            document.getElementById(
                "clickTime"
            ).textContent = time;

            if (time <= 0) {

                clearInterval(
                    window.currentGameInterval
                );

                alert(
                    "Time's up! Score: " +
                    score
                );
            }

        }, 1000);
}


/* =========================================================
   GUESS THE NUMBER
   ========================================================= */

function createGuessGame() {

    const number =
        Math.floor(
            Math.random() * 100
        ) + 1;

    const container =
        document.getElementById("playGameContent");

    container.innerHTML = `

        <h2>🔢 Guess The Number</h2>

        <p>
            Guess a number between 1 and 100.
        </p>

        <input
            id="guessInput"
            type="number"
            min="1"
            max="100"
            placeholder="Your guess"
        >

        <button
            onclick="makeGuess(${number})"
        >
            Guess
        </button>

        <p id="guessResult">
            Good luck!
        </p>

    `;
}


function makeGuess(number) {

    const input =
        Number(
            document.getElementById(
                "guessInput"
            ).value
        );

    const result =
        document.getElementById(
            "guessResult"
        );


    if (!input) {

        result.textContent =
            "Enter a number first.";

        return;
    }


    if (input === number) {

        result.textContent =
            "🎉 Correct! You won!";

    } else if (input < number) {

        result.textContent =
            "⬆️ Too low!";

    } else {

        result.textContent =
            "⬇️ Too high!";
    }
}


/* =========================================================
   REACTION GAME
   ========================================================= */

function createReactionGame() {

    const container =
        document.getElementById("playGameContent");

    container.innerHTML = `

        <h2>⚡ Reaction Test</h2>

        <p>
            Click the button when it turns green.
        </p>

        <button
            id="reactionButton"
            class="reaction-button"
        >
            Wait...
        </button>

        <p id="reactionResult">
            Get ready.
        </p>

    `;


    const button =
        document.getElementById(
            "reactionButton"
        );

    const result =
        document.getElementById(
            "reactionResult"
        );


    let startTime = 0;

    const delay =
        Math.floor(
            Math.random() * 3000
        ) + 2000;


    window.currentGameInterval =
        setTimeout(() => {

            button.textContent =
                "CLICK NOW!";

            button.classList.add(
                "reaction-ready"
            );

            startTime =
                performance.now();

        }, delay);


    button.onclick = function() {

        if (startTime === 0) {

            result.textContent =
                "Too early! Try again.";

            return;
        }

        const reaction =
            performance.now() -
            startTime;

        result.textContent =
            `⚡ Reaction time: ${Math.round(reaction)} ms`;

        button.textContent =
            "Play Again";
    };
}


/* =========================================================
   MEMORY GAME
   ========================================================= */

function createMemoryGame() {

    const container =
        document.getElementById(
            "playGameContent"
        );

    const symbols = [
        "🎮",
        "👾",
        "🚀",
        "⚡",
        "🔥",
        "⭐",
        "🎯",
        "🕹️"
    ];

    const cards =
        [...symbols, ...symbols]
        .sort(() => Math.random() - 0.5);


    container.innerHTML = `

        <h2>🧠 Memory</h2>

        <p>
            Find all matching pairs.
        </p>

        <div
            id="memoryGrid"
            class="memory-grid"
        ></div>

    `;


    const grid =
        document.getElementById(
            "memoryGrid"
        );

    let firstCard = null;
    let secondCard = null;
    let locked = false;
    let matches = 0;


    cards.forEach(symbol => {

        const card =
            document.createElement("button");

        card.className =
            "memory-card";

        card.textContent =
            "?";

        card.dataset.symbol =
            symbol;


        card.onclick = function() {

            if (
                locked ||
                card.classList.contains("matched") ||
                card === firstCard
            ) {
                return;
            }


            card.textContent =
                symbol;


            if (!firstCard) {

                firstCard = card;

                return;
            }


            secondCard = card;

            locked = true;


            if (
                firstCard.dataset.symbol ===
                secondCard.dataset.symbol
            ) {

                firstCard.classList.add(
                    "matched"
                );

                secondCard.classList.add(
                    "matched"
                );

                matches++;

                firstCard = null;
                secondCard = null;

                locked = false;


                if (matches === symbols.length) {

                    setTimeout(() => {

                        alert(
                            "🎉 You matched them all!"
                        );

                    }, 300);
                }

            } else {

                setTimeout(() => {

                    firstCard.textContent =
                        "?";

                    secondCard.textContent =
                        "?";

                    firstCard = null;
                    secondCard = null;

                    locked = false;

                }, 700);
            }
        };


        grid.appendChild(card);
    });
}


/* =========================================================
   INITIALISE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayFavorites();

        updateGameOfDay();

        createGamesSection();

    }
);
```
