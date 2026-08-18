// =====================================================
// GAME TOOLS - COMPLETE JAVASCRIPT
// 150+ GAMES + ALL BUTTON FUNCTIONS
// =====================================================


// =====================================================
// GAME DATABASE
// =====================================================

const games = [

    // ACTION
    { name: "Grand Theft Auto V", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🚘" },
    { name: "Red Dead Redemption 2", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🤠" },
    { name: "God of War Ragnarök", genre: "action", platforms: ["pc","playstation"], icon: "⚔️" },
    { name: "Spider-Man 2", genre: "action", platforms: ["pc","playstation"], icon: "🕷️" },
    { name: "Ghost of Tsushima", genre: "action", platforms: ["pc","playstation"], icon: "🌸" },
    { name: "Hades", genre: "action", platforms: ["pc","playstation","xbox","switch"], icon: "🔥" },
    { name: "Dead Cells", genre: "action", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "⚔️" },
    { name: "Cuphead", genre: "action", platforms: ["pc","playstation","xbox","switch"], icon: "☕" },
    { name: "Mortal Kombat 1", genre: "action", platforms: ["pc","playstation","xbox","switch"], icon: "🥊" },
    { name: "Street Fighter 6", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🥊" },
    { name: "Tekken 8", genre: "action", platforms: ["pc","playstation","xbox"], icon: "👊" },
    { name: "Batman Arkham Knight", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🦇" },
    { name: "Assassin's Creed Odyssey", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🏛️" },
    { name: "Assassin's Creed Valhalla", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🪓" },
    { name: "Sekiro Shadows Die Twice", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🥷" },
    { name: "Devil May Cry 5", genre: "action", platforms: ["pc","playstation","xbox"], icon: "😈" },
    { name: "Nier Automata", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🤖" },
    { name: "Control", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🔻" },
    { name: "Star Wars Jedi Survivor", genre: "action", platforms: ["pc","playstation","xbox"], icon: "⚔️" },
    { name: "Resident Evil 4", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🧟" },
    { name: "Resident Evil Village", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🏚️" },
    { name: "Dying Light 2", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🧟" },
    { name: "Dead Island 2", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🧟" },
    { name: "Dying Light", genre: "action", platforms: ["pc","playstation","xbox"], icon: "🧟" },
    { name: "Days Gone", genre: "action", platforms: ["pc","playstation"], icon: "🏍️" },
    { name: "Sonic Superstars", genre: "action", platforms: ["pc","playstation","xbox","switch"], icon: "💨" },
    { name: "Super Smash Bros Ultimate", genre: "action", platforms: ["switch"], icon: "🥊" },
    { name: "Metroid Dread", genre: "action", platforms: ["switch"], icon: "👾" },

    // SHOOTERS
    { name: "Fortnite", genre: "shooter", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🔫" },
    { name: "Call of Duty Warzone", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🎯" },
    { name: "Call of Duty Black Ops 6", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🔫" },
    { name: "Call of Duty Modern Warfare III", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🎯" },
    { name: "Valorant", genre: "shooter", platforms: ["pc"], icon: "🎯" },
    { name: "Counter Strike 2", genre: "shooter", platforms: ["pc"], icon: "💥" },
    { name: "Overwatch 2", genre: "shooter", platforms: ["pc","playstation","xbox","switch"], icon: "🦸" },
    { name: "Apex Legends", genre: "shooter", platforms: ["pc","playstation","xbox","switch"], icon: "🏹" },
    { name: "Halo Infinite", genre: "shooter", platforms: ["pc","xbox"], icon: "🪖" },
    { name: "Destiny 2", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🌌" },
    { name: "Doom Eternal", genre: "shooter", platforms: ["pc","playstation","xbox","switch"], icon: "👹" },
    { name: "Doom", genre: "shooter", platforms: ["pc","playstation","xbox","switch"], icon: "👹" },
    { name: "Borderlands 3", genre: "shooter", platforms: ["pc","playstation","xbox","switch"], icon: "🔫" },
    { name: "Far Cry 6", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🔥" },
    { name: "Rainbow Six Siege", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🛡️" },
    { name: "Battlefield 2042", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "💣" },
    { name: "Battlefield V", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🪖" },
    { name: "The Finals", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🏆" },
    { name: "Helldivers 2", genre: "shooter", platforms: ["pc","playstation"], icon: "🚀" },
    { name: "PUBG Battlegrounds", genre: "shooter", platforms: ["pc","playstation","xbox","mobile"], icon: "🪖" },
    { name: "Escape from Tarkov", genre: "shooter", platforms: ["pc"], icon: "🎒" },
    { name: "Titanfall 2", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🤖" },
    { name: "Deathloop", genre: "shooter", platforms: ["pc","playstation","xbox"], icon: "🔫" },
    { name: "Quake", genre: "shooter", platforms: ["pc","playstation","xbox","switch"], icon: "💥" },
    { name: "Left 4 Dead 2", genre: "shooter", platforms: ["pc"], icon: "🧟" },
    { name: "Splatoon 3", genre: "shooter", platforms: ["switch"], icon: "🦑" },

    // RPG
    { name: "Elden Ring", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "👑" },
    { name: "Baldur's Gate 3", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🐉" },
    { name: "Cyberpunk 2077", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🌃" },
    { name: "The Witcher 3", genre: "rpg", platforms: ["pc","playstation","xbox","switch"], icon: "🐺" },
    { name: "Skyrim", genre: "rpg", platforms: ["pc","playstation","xbox","switch"], icon: "🐉" },
    { name: "Fallout 4", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "☢️" },
    { name: "Monster Hunter Wilds", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🐲" },
    { name: "Final Fantasy VII Rebirth", genre: "rpg", platforms: ["pc","playstation"], icon: "🗡️" },
    { name: "Dragon Quest XI", genre: "rpg", platforms: ["pc","playstation","switch"], icon: "🐉" },
    { name: "Persona 5 Royal", genre: "rpg", platforms: ["pc","playstation","xbox","switch"], icon: "🎭" },
    { name: "Persona 3 Reload", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🔵" },
    { name: "Starfield", genre: "rpg", platforms: ["pc","xbox"], icon: "🚀" },
    { name: "Mass Effect Legendary Edition", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🌌" },
    { name: "Dragon Age The Veilguard", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🐉" },
    { name: "Kingdom Hearts III", genre: "rpg", platforms: ["pc","playstation","xbox","switch"], icon: "🔑" },
    { name: "Sea of Stars", genre: "rpg", platforms: ["pc","playstation","xbox","switch"], icon: "⭐" },
    { name: "Octopath Traveler II", genre: "rpg", platforms: ["pc","playstation","switch"], icon: "🗺️" },
    { name: "Dark Souls III", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🔥" },
    { name: "Dark Souls Remastered", genre: "rpg", platforms: ["pc","playstation","xbox","switch"], icon: "🔥" },
    { name: "Bloodborne", genre: "rpg", platforms: ["playstation"], icon: "🩸" },
    { name: "Lies of P", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "🤖" },
    { name: "Pokemon Scarlet", genre: "rpg", platforms: ["switch"], icon: "⚡" },
    { name: "Pokemon Violet", genre: "rpg", platforms: ["switch"], icon: "⚡" },
    { name: "Final Fantasy XVI", genre: "rpg", platforms: ["pc","playstation"], icon: "🔥" },
    { name: "Final Fantasy XIV", genre: "rpg", platforms: ["pc","playstation","xbox"], icon: "⚔️" },

    // RACING
    { name: "Forza Horizon 5", genre: "racing", platforms: ["pc","xbox"], icon: "🏎️" },
    { name: "Forza Motorsport", genre: "racing", platforms: ["pc","xbox"], icon: "🏁" },
    { name: "Gran Turismo 7", genre: "racing", platforms: ["playstation"], icon: "🏁" },
    { name: "F1 25", genre: "racing", platforms: ["pc","playstation","xbox"], icon: "🏎️" },
    { name: "Need for Speed Heat", genre: "racing", platforms: ["pc","playstation","xbox"], icon: "🚓" },
    { name: "Need for Speed Unbound", genre: "racing", platforms: ["pc","playstation","xbox"], icon: "🚘" },
    { name: "Trackmania", genre: "racing", platforms: ["pc"], icon: "🏁" },
    { name: "Mario Kart 8 Deluxe", genre: "racing", platforms: ["switch"], icon: "🍄" },
    { name: "Crash Team Racing Nitro Fueled", genre: "racing", platforms: ["playstation","xbox","switch"], icon: "🏎️" },
    { name: "Wreckfest", genre: "racing", platforms: ["pc","playstation","xbox","switch"], icon: "💥" },
    { name: "Dirt Rally 2.0", genre: "racing", platforms: ["pc","playstation","xbox"], icon: "🏔️" },
    { name: "The Crew Motorfest", genre: "racing", platforms: ["pc","playstation","xbox"], icon: "🚘" },
    { name: "Hot Wheels Unleashed 2", genre: "racing", platforms: ["pc","playstation","xbox","switch"], icon: "🔥" },
    { name: "Need for Speed Rivals", genre: "racing", platforms: ["pc","playstation","xbox"], icon: "🚓" },
    { name: "Burnout Paradise", genre: "racing", platforms: ["pc","playstation","xbox","switch"], icon: "💥" },

    // SPORTS
    { name: "EA Sports FC 26", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "⚽" },
    { name: "NBA 2K26", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "🏀" },
    { name: "Madden NFL 26", genre: "sports", platforms: ["pc","playstation","xbox"], icon: "🏈" },
    { name: "MLB The Show 26", genre: "sports", platforms: ["playstation","xbox","switch"], icon: "⚾" },
    { name: "WWE 2K26", genre: "sports", platforms: ["pc","playstation","xbox"], icon: "🤼" },
    { name: "Rocket League", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "🚗" },
    { name: "Tony Hawk's Pro Skater 1 + 2", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "🛹" },
    { name: "Golf With Your Friends", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "⛳" },
    { name: "EA Sports UFC 5", genre: "sports", platforms: ["playstation","xbox"], icon: "🥊" },
    { name: "FIFA 23", genre: "sports", platforms: ["pc","playstation","xbox","switch"], icon: "⚽" },
    { name: "NHL 26", genre: "sports", platforms: ["playstation","xbox"], icon: "🏒" },

    // SANDBOX
    { name: "Minecraft", genre: "sandbox", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "⛏️" },
    { name: "Roblox", genre: "sandbox", platforms: ["pc","playstation","xbox","mobile"], icon: "🧱" },
    { name: "Terraria", genre: "sandbox", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🌳" },
    { name: "Garry's Mod", genre: "sandbox", platforms: ["pc"], icon: "🔧" },
    { name: "Teardown", genre: "sandbox", platforms: ["pc","playstation","xbox"], icon: "💥" },
    { name: "Besiege", genre: "sandbox", platforms: ["pc","playstation","xbox","switch"], icon: "🏰" },
    { name: "Cities Skylines", genre: "sandbox", platforms: ["pc","playstation","xbox","switch"], icon: "🏙️" },
    { name: "Planet Coaster", genre: "sandbox", platforms: ["pc","playstation","xbox"], icon: "🎢" },
    { name: "The Sims 4", genre: "sandbox", platforms: ["pc","playstation","xbox"], icon: "🏠" },
    { name: "Animal Crossing New Horizons", genre: "sandbox", platforms: ["switch"], icon: "🏝️" },
    { name: "Starbound", genre: "sandbox", platforms: ["pc"], icon: "🌌" },
    { name: "Noita", genre: "sandbox", platforms: ["pc"], icon: "✨" },
    { name: "Kerbal Space Program", genre: "sandbox", platforms: ["pc","playstation","xbox"], icon: "🚀" },

    // ADVENTURE
    { name: "The Legend of Zelda Breath of the Wild", genre: "adventure", platforms: ["switch"], icon: "🗡️" },
    { name: "The Legend of Zelda Tears of the Kingdom", genre: "adventure", platforms: ["switch"], icon: "🛡️" },
    { name: "Super Mario Odyssey", genre: "adventure", platforms: ["switch"], icon: "🍄" },
    { name: "Sea of Thieves", genre: "adventure", platforms: ["pc","playstation","xbox"], icon: "🏴‍☠️" },
    { name: "Subnautica", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "🌊" },
    { name: "No Man's Sky", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "🚀" },
    { name: "ARK Survival Evolved", genre: "adventure", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🦖" },
    { name: "Palworld", genre: "adventure", platforms: ["pc","xbox","playstation"], icon: "🌎" },
    { name: "It Takes Two", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "❤️" },
    { name: "The Last of Us Part I", genre: "adventure", platforms: ["pc","playstation"], icon: "🌿" },
    { name: "Uncharted 4", genre: "adventure", platforms: ["pc","playstation"], icon: "🗺️" },
    { name: "Hogwarts Legacy", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "🪄" },
    { name: "Stray", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "🐈" },
    { name: "Journey", genre: "adventure", platforms: ["pc","playstation"], icon: "🏜️" },
    { name: "Death Stranding", genre: "adventure", platforms: ["pc","playstation","xbox"], icon: "🚚" },
    { name: "Death Stranding 2", genre: "adventure", platforms: ["pc","playstation"], icon: "🚚" },
    { name: "Red Dead Redemption", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "🤠" },
    { name: "Horizon Zero Dawn", genre: "adventure", platforms: ["pc","playstation"], icon: "🏹" },
    { name: "Horizon Forbidden West", genre: "adventure", platforms: ["pc","playstation"], icon: "🏹" },
    { name: "Sonic Frontiers", genre: "adventure", platforms: ["pc","playstation","xbox","switch"], icon: "💨" },
    { name: "Super Mario Bros Wonder", genre: "adventure", platforms: ["switch"], icon: "🍄" },
    { name: "Luigi's Mansion 3", genre: "adventure", platforms: ["switch"], icon: "👻" },
    { name: "Kirby and the Forgotten Land", genre: "adventure", platforms: ["switch"], icon: "⭐" },

    // INDIE
    { name: "Stardew Valley", genre: "indie", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🌾" },
    { name: "Among Us", genre: "indie", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🚀" },
    { name: "Fall Guys", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "👑" },
    { name: "Hollow Knight", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "🪲" },
    { name: "Celeste", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "🏔️" },
    { name: "Phasmophobia", genre: "indie", platforms: ["pc","playstation","xbox"], icon: "👻" },
    { name: "Lethal Company", genre: "indie", platforms: ["pc"], icon: "👽" },
    { name: "Content Warning", genre: "indie", platforms: ["pc"], icon: "📹" },
    { name: "Slay the Spire", genre: "indie", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🃏" },
    { name: "Don't Starve Together", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "🔥" },
    { name: "Undertale", genre: "indie", platforms: ["pc","playstation","switch"], icon: "❤️" },
    { name: "The Binding of Isaac Rebirth", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "👶" },
    { name: "Inside", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "🌑" },
    { name: "Dead by Daylight", genre: "indie", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🔪" },
    { name: "Little Nightmares", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "👁️" },
    { name: "Little Nightmares II", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "👁️" },
    { name: "Dave the Diver", genre: "indie", platforms: ["pc","switch","playstation"], icon: "🐟" },
    { name: "Balatro", genre: "indie", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🃏" },
    { name: "Vampire Survivors", genre: "indie", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🧛" },
    { name: "Limbo", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "🌑" },
    { name: "Cuphead", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "☕" },
    { name: "Inside", genre: "indie", platforms: ["pc","playstation","xbox","switch"], icon: "🌑" },

    // STRATEGY
    { name: "Civilization VI", genre: "strategy", platforms: ["pc","playstation","xbox","switch","mobile"], icon: "🌎" },
    { name: "Age of Empires IV", genre: "strategy", platforms: ["pc"], icon: "🏰" },
    { name: "Total War Warhammer III", genre: "strategy", platforms: ["pc"], icon: "⚔️" },
    { name: "StarCraft II", genre: "strategy", platforms: ["pc"], icon: "🚀" },
    { name: "XCOM 2", genre: "strategy", platforms: ["pc","playstation","xbox","switch"], icon: "👽" },
    { name: "Stellaris", genre: "strategy", platforms: ["pc","playstation","xbox"], icon: "🌌" },
    { name: "Crusader Kings III", genre: "strategy", platforms: ["pc","playstation","xbox"], icon: "👑" },
    { name: "RimWorld", genre: "strategy", platforms: ["pc"], icon: "🚀" },
    { name: "Europa Universalis IV", genre: "strategy", platforms: ["pc"], icon: "🌍" },
    { name: "Cities Skylines II", genre: "strategy", platforms: ["pc","playstation","xbox"], icon: "🏙️" },
    { name: "Into the Breach", genre: "strategy", platforms: ["pc","switch"], icon: "🤖" },
    { name: "Frostpunk", genre: "strategy", platforms: ["pc","playstation","xbox"], icon: "❄️" },
    { name: "Frostpunk 2", genre: "strategy", platforms: ["pc","playstation","xbox"], icon: "❄️" }

];


// =====================================================
// GAME OF THE DAY
// =====================================================

function loadGameOfDay() {

    if (!games.length) return;

    const today = new Date();

    const index =
        (today.getFullYear() +
        today.getMonth() +
        today.getDate()) % games.length;

    const game = games[index];

    const name = document.getElementById("gameOfDayName");
    const info = document.getElementById("gameOfDayInfo");
    const genre = document.getElementById("gameOfDayGenre");
    const platforms = document.getElementById("gameOfDayPlatforms");

    if (name) {
        name.textContent = `${game.icon} ${game.name}`;
    }

    if (info) {
        info.textContent =
            `Today's featured ${game.genre} game. Give it a try!`;
    }

    if (genre) {
        genre.textContent =
            `🎯 ${game.genre.charAt(0).toUpperCase() + game.genre.slice(1)}`;
    }

    if (platforms) {
        platforms.textContent =
            `🎮 ${game.platforms
                .map(p => p.charAt(0).toUpperCase() + p.slice(1))
                .join(" · ")}`;
    }
}


// =====================================================
// FAVORITES
// =====================================================

let favorites = JSON.parse(
    localStorage.getItem("gameToolsFavorites") || "[]"
);

function saveFavorites() {

    localStorage.setItem(
        "gameToolsFavorites",
        JSON.stringify(favorites)
    );
}


function favoriteGameOfDay() {

    const name =
        document.getElementById("gameOfDayName")?.textContent;

    if (!name) return;

    const cleanName =
        name.replace(/^.*?\s(?=[A-Za-z0-9])/, "");

    if (!favorites.includes(cleanName)) {

        favorites.push(cleanName);

        saveFavorites();
        renderFavorites();

        showNotification("⭐ Added to Favorites!");

    } else {

        showNotification("⭐ Already in Favorites!");

    }
}


function clearFavorites() {

    favorites = [];

    saveFavorites();

    renderFavorites();

    showNotification("🗑️ Favorites cleared!");
}


function renderFavorites() {

    const list =
        document.getElementById("favoritesList");

    if (!list) return;

    if (favorites.length === 0) {

        list.innerHTML = `
            <div class="empty-favorites">
                ⭐
                <span>No favorites yet.</span>
            </div>
        `;

        return;
    }

    list.innerHTML = favorites.map(name => `
        <div class="favorite-item">
            ⭐ ${name}
        </div>
    `).join("");
}


// =====================================================
// RANDOM GAME
// =====================================================

function randomGame() {

    const platform =
        document.getElementById("platformFilter")?.value || "all";

    const genre =
        document.getElementById("genreFilter")?.value || "all";

    const result =
        document.getElementById("randomResult");

    if (!result) return;

    let availableGames = games.filter(game => {

        const platformMatch =
            platform === "all" ||
            game.platforms.includes(platform);

        const genreMatch =
            genre === "all" ||
            game.genre === genre;

        return platformMatch && genreMatch;
    });

    if (availableGames.length === 0) {

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
        availableGames[
            Math.floor(Math.random() * availableGames.length)
        ];

    result.innerHTML = `
        <div class="random-game-result">
            <span>${game.icon}</span>

            <strong>
                ${game.name}
            </strong>

            <small>
                ${game.genre.toUpperCase()}
            </small>

            <small>
                🎮 ${game.platforms
                    .map(p =>
                        p.charAt(0).toUpperCase() + p.slice(1)
                    )
                    .join(" • ")}
            </small>
        </div>
    `;
}


// =====================================================
// COUNTDOWN
// =====================================================

let countdownInterval = null;
let countdownSeconds = 0;


function startCountdown() {

    clearInterval(countdownInterval);

    const eventInput =
        document.getElementById("eventInput");

    const minutesInput =
        document.getElementById("minutesInput");

    const secondsInput =
        document.getElementById("secondsInput");

    const eventName =
        document.getElementById("eventName");

    const minutes =
        Number(minutesInput?.value || 0);

    const seconds =
        Number(secondsInput?.value || 0);

    countdownSeconds =
        (minutes * 60) + seconds;

    if (countdownSeconds <= 0) {

        showNotification("⏰ Enter a time first!");

        return;
    }

    if (eventName) {

        eventName.textContent =
            eventInput?.value || "Gaming Event";
    }

    updateCountdown();

    countdownInterval =
        setInterval(() => {

            countdownSeconds--;

            updateCountdown();

            if (countdownSeconds <= 0) {

                clearInterval(countdownInterval);

                showNotification("⏰ Countdown finished!");

            }

        }, 1000);
}


function updateCountdown() {

    const timer =
        document.getElementById("timer");

    if (!timer) return;

    const minutes =
        Math.floor(countdownSeconds / 60);

    const seconds =
        countdownSeconds % 60;

    timer.textContent =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}


function resetCountdown() {

    clearInterval(countdownInterval);

    countdownSeconds = 0;

    const timer =
        document.getElementById("timer");

    const eventName =
        document.getElementById("eventName");

    if (timer) {
        timer.textContent = "00:00";
    }

    if (eventName) {
        eventName.textContent = "";
    }
}


// =====================================================
// CALCULATOR SWITCHER
// =====================================================

function changeCalculator() {

    const type =
        document.getElementById("calculatorType")?.value;

    const boxes = [
        "xpCalculator",
        "kdCalculator",
        "winrateCalculator",
        "matchesCalculator"
    ];

    boxes.forEach(id => {

        const box =
            document.getElementById(id);

        if (box) {
            box.style.display = "none";
        }
    });

    const selected =
        document.getElementById(
            type === "xp"
                ? "xpCalculator"
                : type === "kd"
                ? "kdCalculator"
                : type === "winrate"
                ? "winrateCalculator"
                : "matchesCalculator"
        );

    if (selected) {
        selected.style.display = "block";
    }
}


// =====================================================
// XP CALCULATOR
// =====================================================

function calculateXP() {

    const needed =
        Number(document.getElementById("xpNeeded")?.value);

    const perMatch =
        Number(document.getElementById("xpPerMatch")?.value);

    const result =
        document.getElementById("xpResult");

    if (!result) return;

    if (needed <= 0 || perMatch <= 0) {

        result.textContent =
            "Please enter valid XP values.";

        return;
    }

    const matches =
        Math.ceil(needed / perMatch);

    result.innerHTML =
        `🎮 Matches Needed: <strong>${matches}</strong>`;

}


// =====================================================
// K/D CALCULATOR
// =====================================================

function calculateKD() {

    const kills =
        Number(document.getElementById("kills")?.value);

    const deaths =
        Number(document.getElementById("deaths")?.value);

    const result =
        document.getElementById("xpResult");

    if (!result) return;

    if (kills < 0 || deaths <= 0) {

        result.textContent =
            "Please enter valid kills and deaths.";

        return;
    }

    const kd =
        kills / deaths;

    result.innerHTML =
        `🎯 K/D Ratio: <strong>${kd.toFixed(2)}</strong>`;
}


// =====================================================
// WIN RATE
// =====================================================

function calculateWinRate() {

    const wins =
        Number(document.getElementById("wins")?.value);

    const played =
        Number(document.getElementById("gamesPlayed")?.value);

    const result =
        document.getElementById("xpResult");

    if (!result) return;

    if (
        wins < 0 ||
        played <= 0 ||
        wins > played
    ) {

        result.textContent =
            "Please enter valid values.";

        return;
    }

    const rate =
        (wins / played) * 100;

    result.innerHTML =
        `🏆 Win Rate: <strong>${rate.toFixed(1)}%</strong>`;
}


// =====================================================
// MATCHES NEEDED
// =====================================================

function calculateMatches() {

    const current =
        Number(document.getElementById("currentXP")?.value);

    const target =
        Number(document.getElementById("targetXP")?.value);

    const xpMatch =
        Number(document.getElementById("xpMatch")?.value);

    const result =
        document.getElementById("xpResult");

    if (!result) return;

    if (
        current < 0 ||
        target <= current ||
        xpMatch <= 0
    ) {

        result.textContent =
            "Please enter valid XP values.";

        return;
    }

    const remaining =
        target - current;

    const matches =
        Math.ceil(remaining / xpMatch);

    result.innerHTML = `
        📈 XP Remaining:
        <strong>${remaining.toLocaleString()}</strong>
        <br>
        🎮 Matches Needed:
        <strong>${matches}</strong>
    `;
}


// =====================================================
// SENSITIVITY CALCULATOR
// =====================================================

function calculateSensitivity() {

    const sensitivity =
        Number(document.getElementById("sensValue")?.value);

    const oldDPI =
        Number(document.getElementById("sensDPI")?.value);

    const newDPI =
        Number(document.getElementById("newDPI")?.value);

    const result =
        document.getElementById("sensResult");

    if (!result) return;

    if (
        sensitivity <= 0 ||
        oldDPI <= 0 ||
        newDPI <= 0
    ) {

        result.textContent =
            "Please enter valid sensitivity and DPI.";

        return;
    }

    const newSensitivity =
        sensitivity * oldDPI / newDPI;

    result.innerHTML =
        `🎯 New Sensitivity:
        <strong>${newSensitivity.toFixed(3)}</strong>`;
}


// =====================================================
// SESSION TIMER
// =====================================================

let sessionInterval = null;
let sessionSeconds = 0;


function startSession() {

    if (sessionInterval) return;

    sessionInterval =
        setInterval(() => {

            sessionSeconds++;

            updateSessionTimer();

        }, 1000);

    showNotification("🎮 Session started!");
}


function stopSession() {

    clearInterval(sessionInterval);

    sessionInterval = null;

    showNotification("⏹️ Session stopped!");
}


function resetSession() {

    clearInterval(sessionInterval);

    sessionInterval = null;

    sessionSeconds = 0;

    updateSessionTimer();

    showNotification("🔄 Session reset!");
}


function updateSessionTimer() {

    const timer =
        document.getElementById("sessionTimer");

    if (!timer) return;

    const hours =
        Math.floor(sessionSeconds / 3600);

    const minutes =
        Math.floor(
            (sessionSeconds % 3600) / 60
        );

    const seconds =
        sessionSeconds % 60;

    timer.textContent =
        `${String(hours).padStart(2,"0")}:` +
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}`;
}


// =====================================================
// RANDOM MODE
// =====================================================

const challenges = [

    "🎯 Get your highest score.",
    "🔥 Win 3 games in a row.",
    "😎 Try a game you've never played.",
    "⚔️ Use a character you never normally use.",
    "🎲 Let someone else choose your game.",
    "🏆 Try to beat your personal record.",
    "🕹️ Play for 30 minutes without changing games.",
    "💀 Play on the hardest difficulty.",
    "🎮 Play using a controller.",
    "🚀 Try something completely new.",
    "😂 Play a game with a ridiculous challenge.",
    "🥇 Try to finish first.",
    "🎯 Don't miss a shot.",
    "🔥 Play until you win.",
    "👑 Become the MVP.",
    "⚡ Play as fast as possible.",
    "🧠 Try a strategy you've never used.",
    "🎮 Play a random game from your library.",
    "💪 Beat your previous score.",
    "🌟 Try something outside your usual genre."

];


function randomMode() {

    const result =
        document.getElementById("modeResult");

    if (!result) return;

    const challenge =
        challenges[
            Math.floor(
                Math.random() * challenges.length
            )
        ];

    result.innerHTML =
        `<strong>${challenge}</strong>`;

    showNotification("🎲 Challenge generated!");
}


// =====================================================
// STATS TRACKER
// =====================================================

function calculateStats() {

    const wins =
        Number(
            document.getElementById("trackerWins")?.value
        );

    const losses =
        Number(
            document.getElementById("trackerLosses")?.value
        );

    const result =
        document.getElementById("trackerResult");

    if (!result) return;

    if (wins < 0 || losses < 0) {

        result.textContent =
            "Please enter valid numbers.";

        return;
    }

    const total =
        wins + losses;

    const winRate =
        total === 0
            ? 0
            : (wins / total) * 100;

    result.innerHTML = `
        🎮 Matches:
        <strong>${total}</strong>
        <br>
        🏆 Win Rate:
        <strong>${winRate.toFixed(1)}%</strong>
    `;
}


// =====================================================
// TOOL SEARCH
// =====================================================

function searchTools() {

    const input =
        document.getElementById("toolSearch");

    if (!input) return;

    const search =
        input.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".tool-card");

    let visible = 0;

    cards.forEach(card => {

        const text =
            (
                card.dataset.tool ||
                card.textContent
            ).toLowerCase();

        if (text.includes(search)) {

            card.style.display = "";
            visible++;

        } else {

            card.style.display = "none";

        }
    });

    const noResults =
        document.getElementById("noResults");

    if (noResults) {

        noResults.style.display =
            visible === 0
                ? "block"
                : "none";
    }
}


// =====================================================
// NOTIFICATIONS
// =====================================================

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    const text =
        document.getElementById("notificationText");

    if (!notification || !text) return;

    text.textContent = message;

    notification.classList.add("show");

    setTimeout(() => {

        notification.classList.remove("show");

    }, 2500);
}


// =====================================================
// STARTUP
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    loadGameOfDay();

    renderFavorites();

    changeCalculator();

    updateSessionTimer();

});