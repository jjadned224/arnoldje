window.onload = () => {
    const starter = document.getElementById("start"); 
    const funder = document.getElementById("input");
    starter.onclick = walkerman;
    funder.onclick = bigbar;
}

// Ms. Portia, for your sanity, I would just ignore this class...
bigbar = () => {
    document.getElementById("redbox").classList.remove("hide");
    money = document.getElementById("Funds").value;
    if (money > 100000) {
        money = 100000;
    } else if (money < -100000) {
        money = -100000;
    }
    money -= 100000;
    money *= -1;
    scale = money/200;
    if (scale > 500) {
        scale = 500;
    }
    console.log(money, scale);
    document.getElementById("box").style.height = scale+'px';
    document.getElementById("redbox").style.height = 500+'px';
}

walkerman = () => {
    man1 = false;
    margin = 90;
    document.getElementById("man1").classList.add("hide");
    document.getElementById("man2").classList.remove("hide");
    document.getElementById('pusher').style.marginRight = margin+'%';
    walkerstyl = document.getElementById('pusher').style.marginRight;
    setInterval(() => {    
        if (margin >= -90) {
            dothing();
        }
}, 50);
}

dothing = () => { 
        newmarg = margin -1;
        console.log(newmarg);
        document.getElementById('pusher').style.marginRight = margin+'%';
        margin = newmarg;
        if (man1 == false) {
            document.getElementById("man1").classList.remove("hide");
            document.getElementById("man2").classList.add("hide");
            man1 = true;
        } else {
            document.getElementById("man1").classList.add("hide");
            document.getElementById("man2").classList.remove("hide");
            man1 = false;
        }
}

