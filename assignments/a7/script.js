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
    const buttage = document.getElementById("agebut");
    butt1.onclick = showex1;
    butt2.onclick = showex2;
    funbut.onclick = barfill;
    buttage.onclick = compare;
}

const compare = () => {
    const old1 = document.getElementById("age1").value;
    const old2 = document.getElementById("age2").value;
    const old3 = document.getElementById("age3").value;
    const output = document.createElement("div");
    if (isNaN(old1)) {
        const error = document.createTextNode("* Not a valid Number");
        output.appendChild(error);
    document.getElementById("error").appendChild(output);
    } else if (isNaN(old2)) {
        const error = document.createTextNode("* Not a valid Number");
        output.appendChild(error);
    document.getElementById("error").appendChild(output);
    } else if (isNaN(old3)) {
        const error = document.createTextNode("* Not a valid Number");
        output.appendChild(error);
    document.getElementById("error").appendChild(output);
    } else {
    outoldest = 0;
    outmid = 0;
    outyoungest = 0;
    if (+old1 > +old2) {
        if (+old1 > +old3) {
            outoldest = old1;
            if (+old2 > +old3) {
                outmid = old2;
                outyoungest = old3;
            } else {
                outmid = old3;
                outyoungest = old2;
            }
        } else {
            outoldest = old3;
            outmid = old1;
            outyoungest = old2;
        }
    } else if (+old2 > +old3) {
        outoldest = old2;
        if (+old1 > +old3) {
            outmid = old1;
            outyoungest = old3;
        } else {
            outmid = old3;
            outyoungest = old1;
        }
    } else {
        outoldest = old3;
        outmid = old2;
        outyoungest = old1;
    }

    const oldest =  document.createTextNode(outoldest);
    const middle = document.createTextNode(outmid);
    const youngest = document.createTextNode(outyoungest);
    const text = document.createTextNode("Oldest to Youngest: ");
    const space = document.createTextNode(", ");
    const space2 = document.createTextNode(", ");

    oldname = "";
    midname = "";
    youngname = "";

    if (outoldest == old1) {
        oldname = document.createTextNode(document.getElementById("name1").value);
        if (outmid == old2) {
            midname = document.createTextNode(document.getElementById("name2").value);
            youngname = document.createTextNode(document.getElementById("name3").value);
        } else {
            midname = document.createTextNode(document.getElementById("name3").value);
            youngname = document.createTextNode(document.getElementById("name2").value);
        }
    } else if (outoldest == old2) {
        oldname = document.createTextNode(document.getElementById("name2").value);
        if (outmid == old1) {
            midname = document.createTextNode(document.getElementById("name1").value);
            youngname = document.createTextNode(document.getElementById("name3").value);
        } else {
            midname = document.createTextNode(document.getElementById("name3").value);
            youngname = document.createTextNode(document.getElementById("name1").value);
        }
    } else {
        oldname = document.createTextNode(document.getElementById("name3").value);
        if (outmid == old2) {
            midname = document.createTextNode(document.getElementById("name2").value);
            youngname = document.createTextNode(document.getElementById("name1").value);
        } else {
            midname = document.createTextNode(document.getElementById("name1").value);
            youngname = document.createTextNode(document.getElementById("name2").value);
        }
    }

    output.appendChild(text);
    output.appendChild(oldname);
    output.appendChild(space);
    output.appendChild(midname);
    output.appendChild(space2);
    output.appendChild(youngname);
    document.getElementById("cout").appendChild(output);
}
}
