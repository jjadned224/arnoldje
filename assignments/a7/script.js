const showex1 = () => {
    document.getElementById("ex1").classList.add("buttonborder");
    document.getElementById("ex2").classList.remove("buttonborder");
    document.getElementById("ex1").classList.remove("buttonnoborder");
    document.getElementById("ex2").classList.add("buttonnoborder");
    document.getElementById("prob1").classList.add("old");
    document.getElementById("prob1").classList.remove("oldhide");
    document.getElementById("prob2").classList.add("goalhide");
    document.getElementById("prob2").classList.remove("goal");
}

const showex2 = () => {
    document.getElementById("ex1").classList.add("buttonnoborder");
    document.getElementById("ex2").classList.remove("buttonnoborder");
    document.getElementById("ex1").classList.remove("buttonborder");
    document.getElementById("ex2").classList.add("buttonborder");
    document.getElementById("prob1").classList.add("oldhide");
    document.getElementById("prob1").classList.remove("old");
    document.getElementById("prob2").classList.remove("goalhide");
    document.getElementById("prob2").classList.add("goal");
}

const barfill = () => {
    if (document.getElementById("Funds").value >= 25 && document.getElementById("Funds").value < 50) {
        document.getElementById("box").removeAttribute('class');
        document.getElementById("box").classList.add("twentyfive");
    } else if (document.getElementById("Funds").value >=50 && document.getElementById("Funds").value < 75) {
        document.getElementById("box").removeAttribute('class');
        document.getElementById("box").classList.add("fifty");
    } else if (document.getElementById("Funds").value >=75 && document.getElementById("Funds").value < 100) {
        document.getElementById("box").removeAttribute('class');
        document.getElementById("box").classList.add("seventyfive");
    } else if (document.getElementById("Funds").value >= 100) { 
        document.getElementById("box").removeAttribute('class');
        document.getElementById("box").classList.add("onehundred");
    } else {
        document.getElementById("box").removeAttribute('class');
        document.getElementById("box").classList.add("box");
    }


}

window.onload = () => {
    const butt1 = document.getElementById("ex1"); 
    const butt2 = document.getElementById("ex2");
    const funbut = document.getElementById("input");
    butt1.onclick = showex1;
    butt2.onclick = showex2;
    funbut.onclick = barfill;
}