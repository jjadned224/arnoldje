let count = 0;
let songDiv;
let section;
let sect2;

const showSongs = async () => {
    // I know that this prevents me from printing a "new JSON", but it was the only way to prevent duplicates since .remove() was
    // not working, however, I was not able to push any array to the Json. So this "solution" is what I went with instead
    // of trying to find something else.
    if (count == 1) {
        return;
    } else {
songDiv = document.getElementById("song-list");


let songJSON = await getSong();
console.log(songJSON);
songJSON.forEach(song => {

    section = document.createElement("section");
    songDiv.append(section);

    

    let h3 = document.createElement("h3");
    section.append(h3);
    h3.innerHTML = song.name;

    

    sect2 = document.createElement("section");
    sect2.classList.add("rower");

    const a = document.createElement("a");
    a.href = "#rower";
    a.style.height = '300px';

    let img = document.createElement("img");
    img.src = song.img;
    a.appendChild(img);
    sect2.append(a);
    let embeded = document.createElement("iframe");
    let shower = 0;
    


    let ul = document.createElement("ul");

    sect2.append(ul);
    ul.append(getLi(`Artist: ${song.Artist}`));
    ul.append(getLi(`Released: ${song.release}`));
    ul.append(getLi(`Runtime: ${song.runtime}`));
    ul.append(getLi(`Genres: ${song.genres}`));
    ul.append(getLi(`Recommended By: ${song.recby}`));

    embeded.style = song.spotifylink[0];
    embeded.src = song.spotifylink[1];
    embeded.width = song.spotifylink[2];
    embeded.height = song.spotifylink[3];
    embeded.frameBorder = song.spotifylink[4];
    embeded.allowFullscreen = song.spotifylink[5];
    embeded.allow = song.spotifylink[6];
    embeded.loading = song.spotifylink[7];
    embeded.style.display = "none";
    embeded.style.marginRight = "5%";
    embeded.style.marginLeft = "5%";
    embeded.style.position = "relative";

    // I had this onclick much fancier with all the embeded garbage above inside of it, but for whatever reason it randomly broke
    // and I couldn't fix it
    a.onclick = () => {
        if (shower == 0) {
            ul.style.display = "none";
            embeded.style.display = "inline";
            shower = 1;
        } else {
            ul.style.display = "inline";
            embeded.style.display = "none";
            shower = 0;
        }
    }
    sect2.append(embeded)
        
    section.append(sect2);
    values++;

    
});
count = 1;
    }
};

const getSong = async () => {
    try {
        return (await fetch("./api/songs")).json();
    } catch(error) {
        console.log(error);
    }
}

const getLi = (data) => {
const li = document.createElement("li");
li.textContent = data;
return li;
};

let values = 0;

window.onload = () => {
showSongs();

const butt1 = document.getElementById("form"); 
const butt2 = document.getElementById("list");
butt1.onclick = showform;
butt2.onclick = showlist;
const butt3 = document.getElementById("submit");
butt3.onclick = addForm;

};

const resetForm = () => {
    const form = document.getElementById("inputform");
    form.reset();
    form._id = "-1";
}

const addForm = async (e) => {
    e.preventDefault();
    const form = document.getElementById("inputform");
    const formData = new FormData(form);
    console.log(...formData);
    try {
        let response;

        if (form._id == '-1') {
            formData.delete("_id");
            formData.delete("img");
            console.log("form data:" +formData);
            // THIS IS BROKEN IDK WHY
            response = await fetch("http://localhost:3000/api/songs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: formData,
            });
        }
        if (response && response.status !== 200) {
            console.log("Error:", response.statusText);
        } else {
            console.log("Song added successfully");
            resetForm();
            showSongs();
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
};
const showform = () => {
    let list = document.getElementById("song-list");
    list.classList.add("hide");
    let formDiv = document.getElementById("formdiv");
    formDiv.classList.remove("hide");
    document.getElementById("form").classList.add("hide");
    document.getElementById("list").classList.remove("hide");
}

const showlist = () => {
    let list = document.getElementById("song-list");
    list.classList.remove("hide");
    let formDiv = document.getElementById("formdiv");
    formDiv.classList.add("hide");
    document.getElementById("form").classList.remove("hide");
    document.getElementById("list").classList.add("hide");
}
/*
const getDatas = () => {
    const inputs = document.querySelectorAll("#datz input");
    let Dataz = [];

    inputs.forEach((input) => {
        Dataz.push(input.value);
    });

    return Dataz;
}
*/