const quotes = ["Call me sentimental, but I wish we'd met under different circumstances. - Berlioz",
"You've chosen your answer. Now see it through. - Kasumi Sumika" ,
"Lets see how far they can fly.... on borrowed wings. - Unknown" ,
"Words are meaningless now, show me what you can do. - Unknown" ,
"In the grand scheme of things, you and I are insignificant... - Genobee"];

window.onload = () => {
    document.getElementById("currentQ").innerHTML = quotes[0];
    rotator(true);
    setInterval(() => {
        rotator(false);
}, 2000);

    const rainbow = document.getElementById("button");
    rainbow.onclick = drawing;
}

rotator = (test = Boolean) => {
    if (test == true) {
        i = 0;
} else {
    if(i > 4){
        i = 0;
    }
}
    const out = document.querySelector("h3");
    out.innerHTML = quotes[i];    
    i++
}

const colors = ["#FF0000", 
    "#FFA500", 
    "#FCFD00", 
    "#007D04", 
    "#0000FF", 
    "#4B0082"]

drawing = () => {
    k = 0;
    setInterval(() => {
        if (k <= 5) {
    const outout  = document.createElement("section");
    outout.classList.add("colorbar");
    outout.style.backgroundColor = colors[k];
    document.getElementById("bars").appendChild(outout);
    console.log("test");
    k++;
} else {

    document.getElementById("pot").classList.remove("show");
}
}, 2000);
    
}