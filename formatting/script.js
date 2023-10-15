const showlapper = () => {
    document.getElementById("ex1").classList.add("buttonborder");
    document.getElementById("ex2").classList.remove("buttonborder");
    document.getElementById("ex1").classList.remove("buttonnoborder");
    document.getElementById("ex2").classList.add("buttonnoborder");
    document.getElementById("project").classList.add("hide");
    document.getElementById("assignmentdiv").classList.remove("hide");
}

const showproject = () => {
    document.getElementById("ex1").classList.add("buttonnoborder");
    document.getElementById("ex2").classList.remove("buttonnoborder");
    document.getElementById("ex1").classList.remove("buttonborder");
    document.getElementById("ex2").classList.add("buttonborder");
    document.getElementById("assignmentdiv").classList.add("hide");
    document.getElementById("project").classList.remove("hide");
}

window.onload = () => {
    const butt1 = document.getElementById("ex1"); 
    const butt2 = document.getElementById("ex2");
    butt1.onclick = showlapper;
    butt2.onclick = showproject;
}