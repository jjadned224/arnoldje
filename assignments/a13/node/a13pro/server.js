const express = require("express");
const app = express();
app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/games", (req, res) => {
    const games = [];
    games[0] = {
        name: "Hollow Knight",
        dev: "Team Cherry",
        release: "Feb 24th, 2017",
        playtime: "54 hours",
        achiv: "63 Achievements",
        under10: ["Focus"," Happy Couple"," Soul & Shade"," Banishment"," Neglect"," Keen Hunter"," True Hunter"," Passing of the Age",
        " Pure Completion"," Speedrun 1"," Speedrun 2"," Speed Completion"," Embrace the Void"," Steel Soul"," Steel Heart"],
        img: "./game-img/HK.png"
    }
    games[1] = {
        name: "ARMORED CORE VI FIRES OF RUBICON",
        dev: "FromSoftware Inc.",
        release: "Aug 24th, 2023",
        playtime: "56.7 hours",
        achiv: "30 Achievements",
        under10: ["The Perfect Mercenary"," Armored Core"],
        img: "./game-img/ac6.avif"
    }
    games[2] = {
        name: "ELDEN RING",
        dev: "FromSoftware Inc.",
        release: "Feb 24th, 2022",
        playtime: "237.9 hours",
        achiv: "42 Achievements",
        under10: ["Elden Ring"],
        img: "./game-img/er.jpg"
    }
    games[3] = {
        name: "Cuphead",
        dev: "Studio MDHR Entertainment Inc.",
        release: "Sep 29th, 2017",
        playtime: "16.8 hours",
        achiv: "42 Achievements",
        under10: ["Butter-and-Egg Man"," Alive and Kicking"," Sheriff"," The Lastest Sensation"," Put On a Show"," High Roller"," King"," Rolling Sixes"
        ," A Vacation in the Wilds"," Checkmate"," Compliments to the Chef"," Boss"," A Horrible Night To Have A Curse"," The Golden Touch"
        ," Mayor"," Pacifist"," Decadent"," Bravo Zulu P-26"," Beat The Devil At His Own Game"," Hearty"," Paladin"," A King's Admiration"," The High Hat"," Ranger"," Cooked to Perfection"],
        img: "./game-img/cuphead.png"
    }
    games[4] = {
        name: "ARK: Survival Evolved",
        dev: "Studio Wildcard",
        release: "Aug 27th, 2017",
        playtime: "987.7 hours",
        achiv: "32 Achievements",
        under10: ["Survivor Evolved"," Highest Peak"," Experience Explorer"," Alpha Ascension"," Cure-All"," Adventurous Explorer"," Gamma Ascension"," Studious Explorer"," Artifact Archaeologist"," Vetern Explorer"," Veteran Paleontologist"," Adept Explorer"," Professional Explorer"," Master Explorer"," Survivor of The Center"," Perfect Explorer"," Beta Ascension"," Master Zoologist"],
        img: "./game-img/ark.webp"
    }
    games[5] = {
        name: "The Stanley Parable",
        dev: "Galactic Cafe",
        release: "Oct 17th, 2013",
        playtime: "30.2 hours",
        achiv: "10 Achievements",
        under10: ["Speed run"," Unachievable"," Commitment"],
        img: "./game-img/Stanley_parable_cover.jpg"
    }
    res.json(games);
});

app.listen(3000, () => {
    console.log("Working");
});