const showGames = async () => {

    let response;
    let gameJSON;
    try {
        response = await fetch("./api/games");
        gameJSON = await response.json();
    } catch(error) {
        console.log("error getting Json");
    }
let gameDiv = document.getElementById("game-list");

gameJSON.forEach(game => {
    let section = document.createElement("section");
    gameDiv.append(section);

    let h3 = document.createElement("h3");
    section.append(h3);
    h3.innerHTML = game.name;

    let sect2 = document.createElement("section");
    sect2.classList.add("rower");

    let img = document.createElement("img");
    img.src = game.img;
    sect2.append(img);

    let ul = document.createElement("ul");

    sect2.append(ul);
    ul.append(getLi(`Developer: ${game.dev}`));
    ul.append(getLi(`Released: ${game.release}`));
    ul.append(getLi(`My Personal Playtime: ${game.playtime}`));
    ul.append(getLi(`Number of Achievements: ${game.achiv}`));
    ul.append(getLi(`Achievements Under 10% Completion: ${game.under10}`));
    section.appendChild(sect2);
    values++;
});
};

const getLi = (data) => {
const li = document.createElement("li");
li.textContent = data;
return li;
};

let values = 0;

window.onload = () => {
showGames();
};