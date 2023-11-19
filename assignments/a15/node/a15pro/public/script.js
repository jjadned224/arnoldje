let count = 0;
let songDiv;
let section;
let sect2;
let form2;

document.addEventListener("DOMContentLoaded", () => {
    form2 = document.getElementById("addeditform");
});



const showSongs = async () => {
songDiv = document.getElementById("song-list");
songDiv.innerHTML = "";

let songJSON = await getSong();
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
    let shower2 = 0;
    let shower3 = 0;
    
    let ul = document.createElement("ul");
    
    

    sect2.append(ul);
    ul.append(getLi(`Artist: ${song.Artist}`));
    ul.append(getLi(`Released: ${song.release}`));
    ul.append(getLi(`Runtime: ${song.runtime}`));
    ul.append(getLi(`Genres: ${song.genres}`));
    ul.append(getLi(`Recommended By: ${song.recby}`));

    let ul2 = document.createElement("ul");

    const b = document.createElement("a");
    const c = document.createElement("a");
    b.href = "#rower";
    c.href = "#rower";
    const d = document.createElement("a");
    d.href = "#rower";

    let confirm = document.createElement("p");
    confirm.innerHTML = "Confirm?\n";
    d.append(confirm);
    confirm.style.display = "none";

    let edit = document.createElement("p");
    edit.innerHTML = "Edit";
    b.append(edit);
    let del = document.createElement("p");
    del.innerHTML = "Delete";
    c.append(del);
    let rbeak = document.createElement("br");
    let rbeak2 = document.createElement("br");

    ul2.style.marginRight = "5%";
    edit.style.display = "none";
    del.style.display = "none";
    embeded.style.borderRadius = '20px';
    embeded.src = song.spotifylink;
    embeded.style.width = '100%';
    embeded.style.height =  '152px';
    embeded.allowFullscreen = 'fullscreen;';
    embeded.loading = 'lazy';
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
            confirm.style.display = "none";
            edit.style.display = "inline";
            del.style.display = "inline";
            form2.style.display = "none";
            delDiv.style.display = "none";
            shower = 1;
        } else {
            ul.style.display = "inline";
            embeded.style.display = "none";
            confirm.style.display = "none";
            edit.style.display = "none";
            del.style.display = "none";
            form2.style.display = "none";
            delDiv.style.display = "none";
            shower = 0;
        }
    }

    b.onclick = () => {
        if (shower2 == 0) {
            ul.style.display = "none";
            embeded.style.display = "none";
            confirm.style.display = "inline";
            edit.style.display = "inline";
            del.style.display = "inline";
            form2.style.display = "inline";
            form2.style.columnCount = "2";
            form2.style.marginLeft = "5%";
            delDiv.style.display = "none";
            shower2 = 1;
        } else {
            ul.style.display = "none";
            embeded.style.display = "inline";
            confirm.style.display = "none";
            edit.style.display = "inline";
            del.style.display = "inline";
            form2.style.display = "none";
            delDiv.style.display = "none";
            shower2 = 0;
        }
    }
    d.onclick = () => {
            ul.style.display = "inline";
            embeded.style.display = "none";
            confirm.style.display = "none";
            edit.style.display = "none";
            del.style.display = "none";
            form2.style.display = "none";
            delDiv.style.display = "none";
            shower = 0;
            addForm;

    }

    const delDiv =document.createElement("div");
    delDiv.classList.add = "flexer2";
    let questionmark = document.createElement("p");
    let yes = document.createElement("p");
    let no = document.createElement("p");
    questionmark.innerHTML = "Are you sure you want to delete?";
    yes.innerHTML = "Yes";
    no.innerHTML = "No";
    const e = document.createElement("a");
    const f = document.createElement("a");
    delDiv.append(questionmark);
    e.appendChild(yes);
    f.appendChild(no);
    delDiv.append(e);
    delDiv.append(f);
    ul2.append(delDiv);
    delDiv.style.display = "none";
    e.href = "#rower";
    f.href = "#rower";
    c.onclick = () => {
        if (shower3 == 0) {
            ul.style.display = "none";
            embeded.style.display = "none";
            confirm.style.display = "none";
            edit.style.display = "inline";
            del.style.display = "inline";
            form2.style.display = "none";
            delDiv.style.display = "inline";
            shower3 = 1;
        } else {
            ul.style.display = "none";
            embeded.style.display = "inline";
            confirm.style.display = "none";
            edit.style.display = "inline";
            del.style.display = "inline";
            form2.style.display = "none";
            delDiv.style.display = "none";
            shower3 = 0;
        }
    }

    e.onclick = () => {
        deleteSong(song);
    }
    f.onclick = () => {
            ul.style.display = "none";
            embeded.style.display = "inline";
            edit.style.display = "inline";
            del.style.display = "inline";
            form2.style.display = "none";
            delDiv.style.display = "none";
            shower3 = 0;
    }
    populateEditForm(song);
    form2.style.display = "none";
    console.log(form2);
    sect2.append(form2);
    sect2.append(embeded);
    ul2.append(d);
    ul2.append(rbeak);
    ul2.append(b);
    ul2.append(rbeak2);
    ul2.append(c);
    sect2.append(ul2);
    section.append(sect2);
    values++;
});
count = 1;

};

const getSong = async () => {
    try {

        const response2 = (await fetch("/api/songs")).json();
        return response2;
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

const butt1 = document.getElementById("form32"); 
const butt2 = document.getElementById("list");
butt1.onclick = showform;
butt2.onclick = showlist;
const butt3 = document.getElementById("submit");
butt3.onclick = addForm;

form2 = document.getElementById("addeditform");
}

const resetForm = () => {
    const form = document.getElementById("inputform");
    form.reset();
    form._id = "-1";
}


const deleteSong = async(song) => {
    let response = await fetch(`/api/songs/${song._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

    if (response.status != 200) {
        console.log("error deleting");
        return;
    }

    let result = await response.json();
    showSongs();
    resetForm();
}


const populateEditForm = (song) => {
    form2._id2.value = song._id;
    form2.name2.value = song.name;
    form2.Artist2.value = song.Artist;
    form2.release2.value = song.release;
    form2.runtime2.value = song.runtime;
    form2.genres2.value = song.genres;
    form2.recby2.value = song.recby;
    form2.spotifylink2.value = song.spotifylink;
};

const addForm = async (e) => {
    e.preventDefault();
    const form = document.getElementById("inputform");
    form2 = document.getElementById("addeditform");
    const formData = new FormData(form);
    const formData2 = new FormData(form2);
    try {
        let response;

        if (form._id.value == -1) {
            formData.delete("_id");
            response = await fetch("/api/songs", {
                method: "POST",
                body: formData,
            });
        } else {

            console.log(...formData2);
    
            response = await fetch(`/api/songs/${form2._id.value}`, {
                method: "PUT",
                body: formData2
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
    document.getElementById("form32").classList.add("hide");
    document.getElementById("list").classList.remove("hide");
}

const showlist = () => {
    let list = document.getElementById("song-list");
    list.classList.remove("hide");
    let formDiv = document.getElementById("formdiv");
    formDiv.classList.add("hide");
    document.getElementById("form32").classList.remove("hide");
    document.getElementById("list").classList.add("hide");
}