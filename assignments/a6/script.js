const showImg = () => {
    if (count == 0) {
        count = 1;
        document.getElementById("toggled").classList.remove("toggle");
    } else {
    count = 0;
    document.getElementById("toggled").classList.add("toggle");
    }
}


const dance = () => {
    if (dancing == 0) {
        dancing = 1;
        document.getElementById("dance").classList.remove("dancing");
        document.getElementById("nodance").classList.add("dancing");
    } else {
        dancing = 0;
        document.getElementById("nodance").classList.remove("dancing");
        document.getElementById("dance").classList.add("dancing");
    }
}

const complaint = () => {
    const outout = document.createElement("div"); 
    const proout = document.createTextNode(document.getElementById("name").value);
    const comout = document.createTextNode(document.getElementById("comment").value);
    const ratout = document.createTextNode(document.getElementById("rating").value);
    const useout = document.createTextNode(document.getElementById("username").value);
    outout.classList.add("output");
    outout.appendChild(proout);
    outout.appendChild(document.createElement("br"));
    outout.appendChild(ratout);
    const divide = document.createTextNode("/5 Stars. ");
    outout.appendChild(divide);
    outout.appendChild(comout);
    outout.appendChild(document.createElement("br"));
    const by = document.createTextNode("By: ");
    outout.appendChild(by);
    outout.appendChild(useout);
    document.getElementById("cout").appendChild(outout);
    }

window.onload = () => {
    count = 0;
    dancing = 0;
    const toggleB = document.getElementById("vis"); 
    const boogieB = document.getElementById("boogie");
    const subcomp = document.getElementById("input");
    toggleB.onclick = showImg;
    boogieB.onclick = dance;
    subcomp.onclick = complaint;
}