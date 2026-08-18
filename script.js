// =====================================================
// GAME TOOLS - COMPLETE JAVASCRIPT
// EXISTING TOOLS + 5 PLAYABLE GAMES
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

    if (name) name.textContent = `${game.icon} ${game.name}`;

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

let favorites =
    JSON.parse(localStorage.getItem("gameToolsFavorites") || "[]");

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

    list.innerHTML =
        favorites.map(name => `
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

    const availableGames =
        games.filter(game => {

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
            <strong>${game.name}</strong>
            <small>${game.genre.toUpperCase()}</small>
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

                showNotification(
                    "⏰ Countdown finished!"
                );
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

    if (timer) timer.textContent = "00:00";

    if (eventName) eventName.textContent = "";
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

        if (box) box.style.display = "none";
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

    if (selected) selected.style.display = "block";
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

    const kd = kills / deaths;

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
// =====================================================
// PLAY GAMES
// =====================================================
// =====================================================


// =====================================================
// GAME 1 - REACTION TEST
// =====================================================

let reactionTimeout = null;
let reactionStartTime = 0;
let reactionReady = false;

function startReactionGame() {

    const box =
        document.getElementById("reactionGame");

    const message =
        document.getElementById("reactionMessage");

    const score =
        document.getElementById("reactionScore");

    if (!box || !message) return;

    clearTimeout(reactionTimeout);

    reactionReady = false;

    box.classList.remove("reaction-ready");

    message.textContent =
        "Wait for green...";

    if (score) {
        score.textContent = "Last: -- ms";
    }

    const delay =
        1500 + Math.random() * 3500;

    reactionTimeout =
        setTimeout(() => {

            reactionReady = true;

            reactionStartTime =
                performance.now();

            box.classList.add("reaction-ready");

            message.textContent =
                "CLICK NOW!";

        }, delay);
}

function reactionClick() {

    const box =
        document.getElementById("reactionGame");

    const message =
        document.getElementById("reactionMessage");

    const score =
        document.getElementById("reactionScore");

    if (!box || !message) return;

    if (!reactionReady) {

        if (reactionTimeout) {

            clearTimeout(reactionTimeout);
            reactionTimeout = null;
        }

        message.textContent =
            "❌ Too early! Try again.";

        box.classList.remove("reaction-ready");

        reactionReady = false;

        return;
    }

    const reactionTime =
        Math.round(
            performance.now() - reactionStartTime
        );

    reactionReady = false;

    box.classList.remove("reaction-ready");

    message.textContent =
        "✅ Great reaction!";

    if (score) {
        score.textContent =
            `Last: ${reactionTime} ms`;
    }
}


// =====================================================
// GAME 2 - SNAKE
// =====================================================

let snakeCanvas = null;
let snakeContext = null;
let snake = [];
let snakeFood = {};
let snakeDirection = { x: 1, y: 0 };
let snakeNextDirection = { x: 1, y: 0 };
let snakeScore = 0;
let snakeInterval = null;
let snakeRunning = false;

const SNAKE_SIZE = 20;
const SNAKE_WIDTH = 20;
const SNAKE_HEIGHT = 20;

function startSnake() {

    snakeCanvas =
        document.getElementById("snakeCanvas");

    if (!snakeCanvas) return;

    snakeContext =
        snakeCanvas.getContext("2d");

    clearInterval(snakeInterval);

    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];

    snakeDirection = { x: 1, y: 0 };
    snakeNextDirection = { x: 1, y: 0 };

    snakeScore = 0;
    snakeRunning = true;

    placeSnakeFood();
    updateSnakeScore();
    drawSnake();

    snakeInterval =
        setInterval(updateSnake, 120);
}

function updateSnake() {

    if (!snakeRunning) return;

    snakeDirection =
        snakeNextDirection;

    const head = {
        x: snake[0].x + snakeDirection.x,
        y: snake[0].y + snakeDirection.y
    };

    if (
        head.x < 0 ||
        head.x >= SNAKE_WIDTH ||
        head.y < 0 ||
        head.y >= SNAKE_HEIGHT
    ) {

        endSnake();

        return;
    }

    for (let i = 0; i < snake.length; i++) {

        if (
            snake[i].x === head.x &&
            snake[i].y === head.y
        ) {

            endSnake();

            return;
        }
    }

    snake.unshift(head);

    if (
        head.x === snakeFood.x &&
        head.y === snakeFood.y
    ) {

        snakeScore++;

        updateSnakeScore();

        placeSnakeFood();

    } else {

        snake.pop();
    }

    drawSnake();
}

function drawSnake() {

    if (!snakeContext || !snakeCanvas) return;

    snakeContext.clearRect(
        0,
        0,
        snakeCanvas.width,
        snakeCanvas.height
    );

    snakeContext.fillStyle = "#111";

    snakeContext.fillRect(
        0,
        0,
        snakeCanvas.width,
        snakeCanvas.height
    );

    snakeContext.fillStyle = "#00ff88";

    snake.forEach(segment => {

        snakeContext.fillRect(
            segment.x * SNAKE_SIZE + 1,
            segment.y * SNAKE_SIZE + 1,
            SNAKE_SIZE - 2,
            SNAKE_SIZE - 2
        );
    });

    snakeContext.fillStyle = "#ff3b3b";

    snakeContext.fillRect(
        snakeFood.x * SNAKE_SIZE + 2,
        snakeFood.y * SNAKE_SIZE + 2,
        SNAKE_SIZE - 4,
        SNAKE_SIZE - 4
    );
}

function placeSnakeFood() {

    do {

        snakeFood = {
            x: Math.floor(Math.random() * SNAKE_WIDTH),
            y: Math.floor(Math.random() * SNAKE_HEIGHT)
        };

    } while (
        snake.some(
            segment =>
                segment.x === snakeFood.x &&
                segment.y === snakeFood.y
        )
    );
}

function changeSnakeDirection(x, y) {

    if (
        snakeDirection.x === -x &&
        snakeDirection.y === -y
    ) {
        return;
    }

    snakeNextDirection = { x, y };
}

function endSnake() {

    clearInterval(snakeInterval);

    snakeInterval = null;
    snakeRunning = false;

    drawSnake();

    showNotification(
        `🐍 Game Over! Score: ${snakeScore}`
    );
}

function updateSnakeScore() {

    const score =
        document.getElementById("snakeScore");

    if (score) {
        score.textContent =
            `Score: ${snakeScore}`;
    }
}


// =====================================================
// SNAKE KEYBOARD CONTROLS
// =====================================================

document.addEventListener("keydown", event => {

    const key = event.key.toLowerCase();

    if (
        key === "arrowup" ||
        key === "w"
    ) {
        changeSnakeDirection(0, -1);
    }

    if (
        key === "arrowdown" ||
        key === "s"
    ) {
        changeSnakeDirection(0, 1);
    }

    if (
        key === "arrowleft" ||
        key === "a"
    ) {
        changeSnakeDirection(-1, 0);
    }

    if (
        key === "arrowright" ||
        key === "d"
    ) {
        changeSnakeDirection(1, 0);
    }
});


// =====================================================
// GAME 3 - MEMORY MATCH
// =====================================================

const memorySymbols = [
    "🎮",
    "🔥",
    "⚽",
    "🚀",
    "👾",
    "🏆"
];

let memoryCards = [];
let memoryFirst = null;
let memorySecond = null;
let memoryLocked = false;
let memoryMatches = 0;

function startMemoryGame() {

    const board =
        document.getElementById("memoryBoard");

    if (!board) return;

    const cards =
        [...memorySymbols, ...memorySymbols]
            .sort(() => Math.random() - 0.5);

    memoryCards = cards;
    memoryFirst = null;
    memorySecond = null;
    memoryLocked = false;
    memoryMatches = 0;

    updateMemoryScore();

    board.innerHTML = "";

    cards.forEach((symbol, index) => {

        const card =
            document.createElement("button");

        card.className =
            "memory-card";

        card.dataset.index =
            index;

        card.dataset.symbol =
            symbol;

        card.textContent =
            "?";

        card.onclick =
            () => flipMemoryCard(card);

        board.appendChild(card);
    });
}

function flipMemoryCard(card) {

    if (
        memoryLocked ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
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

    memoryLocked = true;

    if (
        memoryFirst.dataset.symbol ===
        memorySecond.dataset.symbol
    ) {

        memoryFirst.classList.add("matched");
        memorySecond.classList.add("matched");

        memoryMatches++;

        memoryFirst = null;
        memorySecond = null;

        memoryLocked = false;

        updateMemoryScore();

        if (memoryMatches === memorySymbols.length) {

            showNotification(
                "🧠 You matched them all!"
            );
        }

    } else {

        setTimeout(() => {

            memoryFirst.classList.remove("flipped");
            memorySecond.classList.remove("flipped");

            memoryFirst.textContent = "?";
            memorySecond.textContent = "?";

            memoryFirst = null;
            memorySecond = null;

            memoryLocked = false;

        }, 800);
    }
}

function updateMemoryScore() {

    const score =
        document.getElementById("memoryScore");

    if (score) {

        score.textContent =
            `Matches: ${memoryMatches}/${memorySymbols.length}`;
    }
}


// =====================================================
// GAME 4 - TIC TAC TOE
// =====================================================

let ticBoard = ["","","","","","","","",""];
let ticPlayer = "X";
let ticGameOver = false;

const ticWinningLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function startTicTacToe() {

    ticBoard =
        ["","","","","","","","",""];

    ticPlayer = "X";
    ticGameOver = false;

    const status =
        document.getElementById("ticStatus");

    if (status) {
        status.textContent =
            "Player X's turn";
    }

    renderTicTacToe();
}

function renderTicTacToe() {

    const board =
        document.getElementById("ticBoard");

    if (!board) return;

    board.innerHTML = "";

    ticBoard.forEach((value, index) => {

        const button =
            document.createElement("button");

        button.className =
            "tic-cell";

        button.textContent =
            value;

        button.onclick =
            () => playTicTacToe(index);

        board.appendChild(button);
    });
}

function playTicTacToe(index) {

    if (
        ticGameOver ||
        ticBoard[index] !== ""
    ) {
        return;
    }

    ticBoard[index] =
        ticPlayer;

    renderTicTacToe();

    const winner =
        getTicWinner();

    if (winner) {

        endTicTacToe(
            `🏆 Player ${winner} wins!`
        );

        return;
    }

    if (!ticBoard.includes("")) {

        endTicTacToe(
            "🤝 It's a draw!"
        );

        return;
    }

    ticPlayer =
        ticPlayer === "X"
            ? "O"
            : "X";

    const status =
        document.getElementById("ticStatus");

    if (status) {

        status.textContent =
            `Player ${ticPlayer}'s turn`;
    }
}

function getTicWinner() {

    for (const line of ticWinningLines) {

        const [a,b,c] = line;

        if (
            ticBoard[a] &&
            ticBoard[a] === ticBoard[b] &&
            ticBoard[a] === ticBoard[c]
        ) {

            return ticBoard[a];
        }
    }

    return null;
}

function endTicTacToe(message) {

    ticGameOver = true;

    const status =
        document.getElementById("ticStatus");

    if (status) {
        status.textContent = message;
    }

    showNotification(message);
}


// =====================================================
// GAME 5 - DODGE THE BLOCKS
// =====================================================

let dodgeCanvas = null;
let dodgeContext = null;
let dodgePlayer = {};
let dodgeBlocks = [];
let dodgeScore = 0;
let dodgeRunning = false;
let dodgeAnimation = null;
let dodgeLastTime = 0;
let dodgeSpawnTimer = 0;

function startDodgeGame() {

    dodgeCanvas =
        document.getElementById("dodgeCanvas");

    if (!dodgeCanvas) return;

    dodgeContext =
        dodgeCanvas.getContext("2d");

    dodgePlayer = {
        x: dodgeCanvas.width / 2 - 20,
        y: dodgeCanvas.height - 60,
        width: 40,
        height: 40,
        speed: 7
    };

    dodgeBlocks = [];
    dodgeScore = 0;
    dodgeRunning = true;
    dodgeLastTime = performance.now();
    dodgeSpawnTimer = 0;

    updateDodgeScore();

    cancelAnimationFrame(dodgeAnimation);

    dodgeAnimation =
        requestAnimationFrame(updateDodgeGame);
}

function updateDodgeGame(timestamp) {

    if (!dodgeRunning) return;

    const delta =
        timestamp - dodgeLastTime;

    dodgeLastTime = timestamp;

    dodgeSpawnTimer += delta;

    if (dodgeSpawnTimer > 700) {

        spawnDodgeBlock();

        dodgeSpawnTimer = 0;
    }

    dodgeBlocks.forEach(block => {

        block.y += block.speed;
    });

    dodgeBlocks =
        dodgeBlocks.filter(
            block =>
                block.y <
                dodgeCanvas.height + block.height
        );

    checkDodgeCollision();

    dodgeScore += delta / 1000;

    updateDodgeScore();

    drawDodgeGame();

    dodgeAnimation =
        requestAnimationFrame(updateDodgeGame);
}

function spawnDodgeBlock() {

    const size =
        25 + Math.random() * 35;

    dodgeBlocks.push({

        x:
            Math.random() *
            (dodgeCanvas.width - size),

        y:
            -size,

        width:
            size,

        height:
            size,

        speed:
            3 + Math.random() * 4
    });
}

function drawDodgeGame() {

    if (!dodgeContext) return;

    dodgeContext.clearRect(
        0,
        0,
        dodgeCanvas.width,
        dodgeCanvas.height
    );

    dodgeContext.fillStyle =
        "#111";

    dodgeContext.fillRect(
        0,
        0,
        dodgeCanvas.width,
        dodgeCanvas.height
    );

    dodgeContext.fillStyle =
        "#00ff88";

    dodgeContext.fillRect(
        dodgePlayer.x,
        dodgePlayer.y,
        dodgePlayer.width,
        dodgePlayer.height
    );

    dodgeContext.fillStyle =
        "#ff3b3b";

    dodgeBlocks.forEach(block => {

        dodgeContext.fillRect(
            block.x,
            block.y,
            block.width,
            block.height
        );
    });
}

function checkDodgeCollision() {

    for (const block of dodgeBlocks) {

        if (
            dodgePlayer.x <
                block.x + block.width &&
            dodgePlayer.x +
                dodgePlayer.width >
                block.x &&
            dodgePlayer.y <
                block.y + block.height &&
            dodgePlayer.y +
                dodgePlayer.height >
                block.y
        ) {

            endDodgeGame();

            return;
        }
    }
}

function endDodgeGame() {

    dodgeRunning = false;

    cancelAnimationFrame(dodgeAnimation);

    const finalScore =
        Math.floor(dodgeScore);

    showNotification(
        `🚀 Game Over! Score: ${finalScore}`
    );
}

function updateDodgeScore() {

    const score =
        document.getElementById("dodgeScore");

    if (score) {

        score.textContent =
            `Score: ${Math.floor(dodgeScore)}`;
    }
}

function moveDodgePlayer(direction) {

    if (!dodgeRunning || !dodgeCanvas) return;

    dodgePlayer.x +=
        direction * dodgePlayer.speed;

    if (dodgePlayer.x < 0) {

        dodgePlayer.x = 0;
    }

    if (
        dodgePlayer.x +
        dodgePlayer.width >
        dodgeCanvas.width
    ) {

        dodgePlayer.x =
            dodgeCanvas.width -
            dodgePlayer.width;
    }
}


// =====================================================
// DODGE KEYBOARD CONTROLS
// =====================================================

document.addEventListener("keydown", event => {

    const key =
        event.key.toLowerCase();

    if (
        key === "arrowleft" ||
        key === "a"
    ) {

        moveDodgePlayer(-1);
    }

    if (
        key === "arrowright" ||
        key === "d"
    ) {

        moveDodgePlayer(1);
    }
});


// =====================================================
// PLAY GAME SECTION GENERATOR
// =====================================================

function createPlayGamesSection() {

    if (
        document.getElementById("playGames")
    ) {
        return;
    }

    const toolsSection =
        document.getElementById("tools");

    if (!toolsSection) return;

    const section =
        document.createElement("section");

    section.className =
        "play-games";

    section.id =
        "playGames";

    section.innerHTML = `

        <div class="section-heading">

            <p class="section-label">
                🎮 PLAY
            </p>

            <h2>
                Play Games
            </h2>

            <p>
                Take a break and play some
                quick games right here.
            </p>

        </div>


        <!-- REACTION TEST -->

        <div class="play-game-card">

            <div class="tool-icon">
                ⚡
            </div>

            <h3>
                Reaction Test
            </h3>

            <p>
                Wait for green and click
                as quickly as possible.
            </p>

            <div
                id="reactionGame"
                class="reaction-game"
                onclick="reactionClick()"
            >

                <strong id="reactionMessage">
                    Press Start
                </strong>

            </div>

            <p id="reactionScore">
                Last: -- ms
            </p>

            <button onclick="startReactionGame()">
                Start Reaction Test
            </button>

        </div>


        <!-- SNAKE -->

        <div class="play-game-card">

            <div class="tool-icon">
                🐍
            </div>

            <h3>
                Snake
            </h3>

            <p>
                Eat the food and don't
                hit the walls or yourself.
            </p>

            <canvas
                id="snakeCanvas"
                width="400"
                height="400"
            ></canvas>

            <p id="snakeScore">
                Score: 0
            </p>

            <button onclick="startSnake()">
                Start Snake
            </button>

            <div class="game-controls">

                <button onclick="changeSnakeDirection(0,-1)">
                    ⬆️
                </button>

                <div>
                    <button onclick="changeSnakeDirection(-1,0)">
                        ⬅️
                    </button>

                    <button onclick="changeSnakeDirection(0,1)">
                        ⬇️
                    </button>

                    <button onclick="changeSnakeDirection(1,0)">
                        ➡️
                    </button>
                </div>

            </div>

        </div>


        <!-- MEMORY -->

        <div class="play-game-card">

            <div class="tool-icon">
                🧠
            </div>

            <h3>
                Memory Match
            </h3>

            <p>
                Find all matching pairs.
            </p>

            <div id="memoryBoard">
            </div>

            <p id="memoryScore">
                Matches: 0/6
            </p>

            <button onclick="startMemoryGame()">
                New Memory Game
            </button>

        </div>


        <!-- TIC TAC TOE -->

        <div class="play-game-card">

            <div class="tool-icon">
                ❌
            </div>

            <h3>
                Tic-Tac-Toe
            </h3>

            <p>
                Classic two-player game.
            </p>

            <div id="ticBoard">
            </div>

            <p id="ticStatus">
                Player X's turn
            </p>

            <button onclick="startTicTacToe()">
                New Game
            </button>

        </div>


        <!-- DODGE -->

        <div class="play-game-card">

            <div class="tool-icon">
                🚀
            </div>

            <h3>
                Dodge The Blocks
            </h3>

            <p>
                Move left and right and
                survive for as long as possible.
            </p>

            <canvas
                id="dodgeCanvas"
                width="400"
                height="400"
            ></canvas>

            <p id="dodgeScore">
                Score: 0
            </p>

            <button onclick="startDodgeGame()">
                Start Dodge
            </button>

            <div class="game-controls">

                <button onclick="moveDodgePlayer(-1)">
                    ⬅️ Left
                </button>

                <button onclick="moveDodgePlayer(1)">
                    Right ➡️
                </button>

            </div>

        </div>

    `;

    toolsSection.after(section);

    startMemoryGame();
    startTicTacToe();
}


// =====================================================
// STARTUP
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    loadGameOfDay();

    renderFavorites();

    changeCalculator();

    updateSessionTimer();

    createPlayGamesSection();

});
